# Study2ool Quiz Backend Service

Production-ready modular Express backend for curriculum-aligned quiz generation and practice questions targeting Nepal NEB Grade 11 & 12 (CDC specification grid).

## Architecture & Folder Structure

```
backend/
├── src/
│   ├── config/              # Environment config and subject constants
│   │   ├── env.config.ts    # Centralized process.env loader
│   │   └── constants.ts     # Stream & subject curriculum mapping
│   ├── types/               # TypeScript interfaces & DTOs
│   │   ├── api.types.ts     # Request/response interfaces
│   │   └── quiz.types.ts    # Syllabus & question data structures
│   ├── repository/          # File-system & data access layer
│   │   ├── question.repository.ts  # Question bank access & indexing
│   │   └── syllabus.repository.ts  # Syllabus tree parser
│   ├── services/            # Core business logic
│   │   ├── llm.service.ts   # Multi-token & multi-model fallback pool
│   │   └── quiz.service.ts  # Generation, deduplication, CDC alignment
│   ├── controllers/         # HTTP request handlers & validation
│   │   ├── health.controller.ts
│   │   └── quiz.controller.ts
│   ├── routes/              # Express route declarations
│   │   ├── health.routes.ts
│   │   ├── quiz.routes.ts
│   │   └── index.ts         # Mounts router on /api/v1
│   ├── middlewares/         # Global error and 404 handlers
│   ├── utils/               # Text normalization, response & logger utilities
│   ├── app.ts               # Express application initialization
│   └── server.ts            # HTTP server bootstrap & graceful shutdown
├── questions/               # JSON question banks by subject
├── syllabus/                # NEB curriculum JSON files (Science & Commerce)
├── package.json
└── tsconfig.json
```

---

## API Endpoints (`/api/v1`)

### 1. Health Check
- **`GET /api/v1/health`**
  - Returns service status, uptime, environment, version, and LLM token pool metrics.

### 2. Generate Quiz Questions
- **`POST /api/v1/quiz/generate`**
  - Body:
    ```json
    {
      "subject": "Physics",
      "classLevel": 11,
      "count": 5,
      "chapterId": "PHY11-CH01",
      "difficulty": "Medium",
      "persist": false
    }
    ```
  - Fields:
    - `subject` (string, required): e.g. "Physics", "Chemistry", "Biology", "Mathematics", "Computer Science", "English", "Nepali", "Accounting", "Business Studies", "Economics", etc.
    - `classLevel` (number, required): `11` or `12`.
    - `count` (number, optional, default: 5, max: 30): Questions to generate in this batch.
    - `chapterId` or `topic` (string, optional): Specific chapter ID (e.g. `PHY11-CH01`) or chapter name. If omitted, randomly selects a valid syllabus chapter.
    - `difficulty` (string, optional): `"Easy"`, `"Medium"`, or `"Hard"`.
    - `persist` (boolean, optional, default: false): When true, appends the generated questions to the subject question bank and master collection.

### 3. List Available Subjects
- **`GET /api/v1/quiz/subjects`**
  - Lists all 13 supported science and commerce subjects with chapter counts and current question bank totals.

### 4. Fetch Syllabus Tree
- **`GET /api/v1/quiz/syllabus/:subject`**
  - Returns the official NEB syllabus tree (branches, chapters, subtopics) for the given subject.

### 5. Query Question Bank
- **`GET /api/v1/quiz/questions`**
  - Query parameters:
    - `subject`: Filter by subject name (e.g. `Physics`)
    - `classLevel`: Filter by `11` or `12`
    - `topic`: Filter by chapter title or ID
    - `difficulty`: Filter by `Easy`, `Medium`, or `Hard`
    - `limit`: Number of items (default: 20, max: 100)
    - `offset`: Pagination offset (default: 0)

---

## Getting Started

### Development
```bash
cd backend
npm run dev
```

### Production Build & Run
```bash
cd backend
npm run build
npm start
```

