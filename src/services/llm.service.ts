import OpenAI from "openai";
import { config } from "../config/env.config.js";
import { DEFAULT_MODELS } from "../config/constants.js";
import { logger } from "../utils/logger.util.js";

export interface TokenState {
  key: string;
  masked: string;
  exhausted: boolean;
  cooldownUntil: number;
  calls: number;
  errors: number;
}

export class LLMService {
  private tokens: TokenState[];
  private models: string[];
  private currentTokenIndex: number = 0;
  private currentModelIndex: number = 0;
  private clients: Map<string, OpenAI> = new Map();

  constructor() {
    // 1. Gather all tokens
    const rawTokens: string[] = [];
    if (config.openRouterApiKeys) {
      rawTokens.push(...config.openRouterApiKeys.split(/[,\n]/));
    }
    for (const [k, v] of Object.entries(process.env)) {
      if (k.startsWith("OPENROUTER_API_KEY") && v) {
        rawTokens.push(...v.split(/[,\n]/));
      }
    }

    const uniqueTokens = Array.from(
      new Set(rawTokens.map((t) => t.trim()).filter((t) => t.length > 5)),
    );

    this.tokens = uniqueTokens.map((key) => ({
      key,
      masked:
        key.length > 12 ? `${key.slice(0, 8)}...${key.slice(-4)}` : "sk-or-***",
      exhausted: false,
      cooldownUntil: 0,
      calls: 0,
      errors: 0,
    }));

    // 2. Gather all models
    const rawModels: string[] = [];
    if (config.openRouterModels) {
      rawModels.push(...config.openRouterModels.split(/[,\n]/));
    }

    const modelSet = new Set(
      rawModels.map((m) => m.trim()).filter((m) => m.length > 0),
    );
    for (const fb of DEFAULT_MODELS) {
      modelSet.add(fb);
    }
    this.models = Array.from(modelSet);

    logger.info(
      `Initialized Multi-Token Pool with ${this.tokens.length} token(s), and Cascade with ${this.models.length} model(s).`,
    );
  }

  public getStatus() {
    return {
      tokenPoolSize: this.tokens.length,
      activeTokens: this.tokens.filter((t) => !t.exhausted).length,
      modelsConfigured: this.models.length,
      models: this.models,
    };
  }

  private getClient(apiKey: string): OpenAI {
    if (!this.clients.has(apiKey)) {
      this.clients.set(
        apiKey,
        new OpenAI({
          apiKey,
          baseURL: "https://openrouter.ai/api/v1",
          defaultHeaders: {
            "HTTP-Referer": "https://study2ool.com",
            "X-Title": "Study2ool Quiz API",
          },
        }),
      );
    }
    return this.clients.get(apiKey)!;
  }

  public async createChatCompletion(
    messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[],
    options: {
      temperature?: number;
      max_tokens?: number;
      response_format?: { type: "json_object" };
    } = {},
  ): Promise<string> {
    if (this.tokens.length === 0) {
      throw new Error(
        "No OpenRouter API tokens configured. Set OPENROUTER_API_KEYS in .env",
      );
    }

    const maxAttempts = Math.max(
      15,
      this.tokens.length * this.models.length * 2,
    );
    let attempts = 0;
    let requestedMaxTokens = options.max_tokens || 2000;

    while (attempts < maxAttempts) {
      attempts++;
      const token = this.getNextAvailableToken();
      if (!token) {
        logger.warn(
          `All tokens are currently exhausted or on cooldown. Waiting 6s before retry...`,
        );
        await new Promise((res) => setTimeout(res, 6000));
        this.tokens.forEach((t) => {
          if (!t.exhausted) t.cooldownUntil = 0;
        });
        continue;
      }

      const model = this.models[this.currentModelIndex] || "openai/gpt-4o-mini";
      const client = this.getClient(token.key);

      try {
        const createParams: OpenAI.Chat.Completions.ChatCompletionCreateParamsNonStreaming =
          {
            model,
            messages,
            temperature: options.temperature ?? 0.7,
            max_tokens: requestedMaxTokens,
          };
        if (options.response_format) {
          createParams.response_format = options.response_format;
        }

        const response = await client.chat.completions.create(createParams);
        const content = response.choices[0]?.message?.content;

        if (!content || content.trim().length === 0) {
          throw new Error("Empty completion content received from LLM");
        }

        token.calls++;
        return content;
      } catch (err: any) {
        token.errors++;
        const errMsg = String(err?.message || err);
        const status = err?.status || err?.code || 0;

        // 402: Insufficient credits or token allocation limit
        if (
          status === 402 ||
          errMsg.includes("402") ||
          errMsg.includes("credits")
        ) {
          const match = errMsg.match(/can only afford (\d+)/i);
          if (match && match[1]) {
            const affordable = parseInt(match[1], 10);
            if (affordable > 400 && requestedMaxTokens > affordable) {
              logger.info(
                `Adjusting max_tokens to ${affordable - 50} for token ${token.masked}`,
              );
              requestedMaxTokens = affordable - 50;
              continue;
            }
          }
          logger.warn(`Token ${token.masked} reported 402 credits exhausted.`);
          token.exhausted = true;
          this.advanceToken();
          continue;
        }

        // 401: Invalid or unauthorized key
        if (
          status === 401 ||
          errMsg.includes("401") ||
          errMsg.includes("Unauthorized")
        ) {
          logger.warn(`Token ${token.masked} is unauthorized/invalid.`);
          token.exhausted = true;
          this.advanceToken();
          continue;
        }

        // 429: Rate limit
        if (
          status === 429 ||
          errMsg.includes("429") ||
          errMsg.includes("rate limit")
        ) {
          logger.warn(`Token ${token.masked} rate limited. Cooling down 20s.`);
          token.cooldownUntil = Date.now() + 20000;
          this.advanceToken();
          this.advanceModel();
          await new Promise((res) => setTimeout(res, 1200));
          continue;
        }

        // Provider/Model errors (404, 500, 502, 503)
        if (status === 404 || status >= 500 || errMsg.includes("provider")) {
          logger.warn(
            `Model ${model} unavailable (${errMsg.slice(0, 50)}...). Advancing model.`,
          );
          this.advanceModel();
          await new Promise((res) => setTimeout(res, 1000));
          continue;
        }

        logger.warn(
          `LLM error (${model} / ${token.masked}): ${errMsg.slice(0, 60)}. Retrying...`,
        );
        this.advanceToken();
        this.advanceModel();
        await new Promise((res) => setTimeout(res, 1500));
      }
    }

    throw new Error(
      `Failed to generate completion after ${maxAttempts} attempts across configured tokens and models.`,
    );
  }

  private getNextAvailableToken(): TokenState | null {
    if (this.tokens.length === 0) return null;
    const now = Date.now();

    for (let i = 0; i < this.tokens.length; i++) {
      const idx = (this.currentTokenIndex + i) % this.tokens.length;
      const t = this.tokens[idx];
      if (t && !t.exhausted && t.cooldownUntil <= now) {
        this.currentTokenIndex = idx;
        return t;
      }
    }

    const available = this.tokens.filter((t) => !t.exhausted);
    if (available.length > 0) {
      available.sort((a, b) => a.cooldownUntil - b.cooldownUntil);
      return available[0] ?? null;
    }

    // Reset exhausted states if all are exhausted for retry
    logger.warn(`Resetting token pool states for fallback retry cycle.`);
    this.tokens.forEach((t) => {
      t.exhausted = false;
      t.cooldownUntil = 0;
    });
    return this.tokens[0] ?? null;
  }

  private advanceToken(): void {
    if (this.tokens.length > 1) {
      this.currentTokenIndex =
        (this.currentTokenIndex + 1) % this.tokens.length;
    }
  }

  private advanceModel(): void {
    if (this.models.length > 1) {
      this.currentModelIndex =
        (this.currentModelIndex + 1) % this.models.length;
    }
  }
}

export const llmService = new LLMService();
