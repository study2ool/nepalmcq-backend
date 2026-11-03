import type { SyllabusFile } from "../../../types/quiz.types.js";

export const science_biologySyllabus: SyllabusFile = {
  metadata: {
    country: "Nepal",
    curriculum: "NEB",
    subject: "Biology",
    grades: [11, 12],
    language: "English",
    formatVersion: "1.0",
    description: "Chapter-wise Biology topic map with individual topic arrays",
    note: "Expanded study and question-bank outline. Verify chapter titles and prescribed topics against the latest official NEB curriculum.",
    subjectCode: "BIO",
  },
  grades: {
    "11": {
      id: "BIO11",
      grade: 11,
      subject: "Biology",
      branches: [
        {
          id: "BIO11-B01",
          branchNumber: 1,
          branchName: "Introduction and Biological Diversity",
          chapters: [
            {
              id: "BIO11-CH01",
              chapterNumber: 1,
              chapterName: "Introduction to Biology",
              topics: [
                {
                  id: "BIO11-CH01-T01",
                  topicNumber: 1,
                  topic: "Definition and scope of biology",
                  brief:
                    "Biology is the scientific study of life and living organisms. Its scope includes the study of their structure, functions, growth, reproduction, evolution, classification, and interactions with the environment. It ranges from microscopic cells to entire ecosystems.",
                },
                {
                  id: "BIO11-CH01-T02",
                  topicNumber: 2,
                  topic: "Characteristics of living organisms",
                  brief:
                    "Living organisms exhibit features such as cellular organization, metabolism, growth, reproduction, response to stimuli, homeostasis, adaptation, and evolution. These characteristics help distinguish living things from non-living objects, although no single feature alone defines life in every case.",
                },
                {
                  id: "BIO11-CH01-T03",
                  topicNumber: 3,
                  topic: "Branches of biology",
                  brief:
                    "Biology is divided into specialized branches according to the organisms studied or the biological processes investigated. Major branches include botany (plants), zoology (animals), microbiology (microorganisms), anatomy (structure), physiology (functions), genetics (heredity), ecology (organism-environment relationships), and taxonomy (classification).",
                },
                {
                  id: "BIO11-CH01-T04",
                  topicNumber: 4,
                  topic: "Importance of biology",
                  brief:
                    "Biology helps us understand living organisms and their relationship with the environment. It contributes to medicine, agriculture, food production, disease prevention, biotechnology, biodiversity conservation, and environmental protection. Biological knowledge also supports decisions about health and sustainable resource use.",
                },
                {
                  id: "BIO11-CH01-T05",
                  topicNumber: 5,
                  topic: "Biology and other sciences",
                  brief:
                    "Biology is closely related to other scientific disciplines. Biochemistry combines biology and chemistry to study chemical processes in organisms; biophysics applies physics to biological systems; biostatistics uses mathematics and statistics to analyze biological data; and bioinformatics uses computing to study biological information.",
                },
                {
                  id: "BIO11-CH01-T06",
                  topicNumber: 6,
                  topic: "Scientific method",
                  brief:
                    "The scientific method is a systematic approach to investigating questions about the natural world. It commonly involves identifying a problem, making observations, proposing a hypothesis, testing it through investigation or experimentation, analyzing evidence, and drawing a conclusion. Scientific explanations may be revised when new evidence becomes available.",
                },
                {
                  id: "BIO11-CH01-T07",
                  topicNumber: 7,
                  topic: "Observation and hypothesis",
                  brief:
                    "Observation involves collecting information using the senses or scientific instruments. A hypothesis is a tentative, testable explanation for an observation or a proposed answer to a scientific question. A useful hypothesis can be examined using evidence and may be supported or rejected after investigation.",
                },
                {
                  id: "BIO11-CH01-T08",
                  topicNumber: 8,
                  topic: "Scientific experimentation",
                  brief:
                    "Scientific experimentation is a planned procedure used to test a hypothesis under defined conditions. An experiment involves selecting suitable materials, following a method, recording observations, and analyzing results. Repeating experiments helps assess the reliability of findings.",
                },
                {
                  id: "BIO11-CH01-T09",
                  topicNumber: 9,
                  topic: "Variables and controls",
                  brief:
                    "Variables are factors that may change during an investigation. The independent variable is the factor deliberately changed, the dependent variable is the outcome measured, and controlled variables are factors kept constant. A control group or control condition provides a basis for comparison when appropriate.",
                },
                {
                  id: "BIO11-CH01-T10",
                  topicNumber: 10,
                  topic: "Collection and interpretation of biological data",
                  brief:
                    "Biological data are collected through observation, measurement, experiments, surveys, and field studies. Data may be qualitative, describing characteristics, or quantitative, expressed numerically. Tables, graphs, averages, and comparisons help identify patterns and draw evidence-based conclusions.",
                },
                {
                  id: "BIO11-CH01-T11",
                  topicNumber: 11,
                  topic: "Biological drawing and labelling",
                  brief:
                    "Biological drawing is a clear, accurate representation of a biological specimen or structure observed directly or through a microscope. A good scientific drawing uses clean outlines, correct proportions, and clearly identified labels. It should represent observable features rather than artistic decoration.",
                },
                {
                  id: "BIO11-CH01-T12",
                  topicNumber: 12,
                  topic: "Laboratory safety",
                  brief:
                    "Laboratory safety involves following procedures that prevent injuries, contamination, and damage to equipment. Important practices include wearing appropriate protective equipment, handling chemicals and biological specimens carefully, using instruments correctly, keeping the workspace clean, and following instructions for waste disposal and emergencies.",
                },
                {
                  id: "BIO11-CH01-T13",
                  topicNumber: 13,
                  topic:
                    "Applications of biology in agriculture, medicine and industry",
                  brief:
                    "Biology has practical applications in many fields. In agriculture, it supports crop improvement, pest management, and soil health; in medicine, it contributes to understanding diseases, diagnosis, vaccines, and treatments; and in industry, it supports fermentation, food processing, biotechnology, and the production of useful biological materials.",
                },
              ],
            },
            {
              id: "BIO11-CH02",
              chapterNumber: 2,
              chapterName: "Classification of Living Organisms",
              topics: [
                {
                  id: "BIO11-CH02-T01",
                  topicNumber: 1,
                  topic: "Need for biological classification",
                  brief:
                    "Biological classification is the systematic arrangement of living organisms into groups based on their similarities and differences. It helps identify organisms, organize biological knowledge, understand relationships among organisms, and study biodiversity more efficiently. Classification is particularly important because of the enormous diversity of living organisms.",
                },
                {
                  id: "BIO11-CH02-T02",
                  topicNumber: 2,
                  topic: "Taxonomy and systematics",
                  brief:
                    "Taxonomy is the branch of biology concerned with the identification, naming, and classification of organisms. Systematics is the broader study of organismal diversity and evolutionary relationships. Taxonomy provides a standardized way to organize organisms, while systematics helps explain how different groups are related through evolution.",
                },
                {
                  id: "BIO11-CH02-T03",
                  topicNumber: 3,
                  topic: "Taxonomic hierarchy",
                  brief:
                    "Taxonomic hierarchy is the arrangement of organisms into successive classification categories, from broader groups to more specific ones. The main categories are domain, kingdom, phylum (division in plants), class, order, family, genus, and species. Each lower category generally contains organisms with more characteristics in common.",
                },
                {
                  id: "BIO11-CH02-T04",
                  topicNumber: 4,
                  topic: "Species and binomial nomenclature",
                  brief:
                    "A species is commonly described as a group of similar organisms capable of interbreeding naturally and producing fertile offspring, although this definition does not apply equally to all organisms. Binomial nomenclature is the scientific naming system introduced by Carolus Linnaeus in which each species has a two-part name: the genus name followed by the specific epithet, such as Homo sapiens.",
                },
                {
                  id: "BIO11-CH02-T05",
                  topicNumber: 5,
                  topic: "Rules of scientific naming",
                  brief:
                    "Scientific names follow internationally accepted conventions to ensure consistency across languages and regions. In binomial nomenclature, the genus name begins with a capital letter, while the specific epithet begins with a lowercase letter. Both words are italicized when printed or underlined separately when handwritten. Scientific names are generally Latin or Latinized.",
                },
                {
                  id: "BIO11-CH02-T06",
                  topicNumber: 6,
                  topic: "Artificial and natural classification",
                  brief:
                    "Artificial classification groups organisms using a limited number of easily observed characteristics, such as habitat, colour, or overall appearance. Natural classification uses a broader range of characteristics, including structural, reproductive, and other biological features, to group organisms more comprehensively. Natural classification generally reflects similarities among organisms more accurately than classification based on a single feature.",
                },
                {
                  id: "BIO11-CH02-T07",
                  topicNumber: 7,
                  topic: "Phylogenetic classification",
                  brief:
                    "Phylogenetic classification groups organisms according to their evolutionary history and common ancestry. It uses evidence from fossils, anatomy, embryology, and molecular biology, including DNA comparisons. Organisms that share a more recent common ancestor are generally placed in more closely related groups.",
                },
                {
                  id: "BIO11-CH02-T08",
                  topicNumber: 8,
                  topic: "Three-domain system",
                  brief:
                    "The three-domain system classifies cellular life into Bacteria, Archaea, and Eukarya. Bacteria and Archaea consist of prokaryotic cells, which lack a membrane-bound nucleus, but they differ in important genetic and biochemical features. Eukarya includes organisms with eukaryotic cells, such as protists, fungi, plants, and animals.",
                },
                {
                  id: "BIO11-CH02-T09",
                  topicNumber: 9,
                  topic: "Five-kingdom classification",
                  brief:
                    "The five-kingdom classification system proposed by R. H. Whittaker divides organisms into Monera, Protista, Fungi, Plantae, and Animalia. It considers features such as cell type, body organization, mode of nutrition, and evolutionary relationships. Monera includes prokaryotes, Protista includes diverse eukaryotes, Fungi are absorptive heterotrophs, Plantae are mainly photosynthetic, and Animalia are multicellular ingestive heterotrophs. This is a traditional system; modern classification recognizes that Monera contains distinct evolutionary lineages.",
                },
                {
                  id: "BIO11-CH02-T10",
                  topicNumber: 10,
                  topic: "Characteristics of Monera",
                  brief:
                    "In the traditional five-kingdom system, Monera includes prokaryotic organisms such as bacteria and cyanobacteria. Their cells lack a membrane-bound nucleus and other membrane-bound organelles. Most are unicellular, reproduce mainly by binary fission, and show varied modes of nutrition, including autotrophic and heterotrophic nutrition. In modern classification, these organisms are distributed mainly between Bacteria and Archaea.",
                },
                {
                  id: "BIO11-CH02-T11",
                  topicNumber: 11,
                  topic: "Characteristics of Protista",
                  brief:
                    "Protista is a traditional kingdom containing diverse eukaryotic organisms, most of which are unicellular, although some are colonial or multicellular. They possess a true nucleus and membrane-bound organelles. Their nutrition may be autotrophic, heterotrophic, or both. Examples include Amoeba, Paramecium, Euglena, and many algae. The traditional kingdom is not considered a single natural evolutionary group in modern classification.",
                },
                {
                  id: "BIO11-CH02-T12",
                  topicNumber: 12,
                  topic: "Characteristics of Fungi",
                  brief:
                    "Fungi are eukaryotic organisms that obtain nutrients by absorption rather than ingestion or photosynthesis. Their cell walls generally contain chitin, and their bodies commonly consist of thread-like structures called hyphae that form a mycelium. Many reproduce through spores. Fungi may be saprophytic, parasitic, or symbiotic, and they play important roles in decomposition, food production, and disease.",
                },
                {
                  id: "BIO11-CH02-T13",
                  topicNumber: 13,
                  topic: "Characteristics of Plantae",
                  brief:
                    "Plants are multicellular eukaryotic organisms whose cells generally contain cellulose cell walls and chloroplasts with chlorophyll. Most plants make food through photosynthesis and store carbohydrates mainly as starch. They show varied body structures and reproductive methods. Plants provide food, oxygen, habitats, medicines, and raw materials for humans and other organisms.",
                },
                {
                  id: "BIO11-CH02-T14",
                  topicNumber: 14,
                  topic: "Characteristics of Animalia",
                  brief:
                    "Animals are multicellular eukaryotic organisms that lack cell walls and obtain nutrients by ingesting food. Most can move during at least one stage of their life cycle and respond to stimuli through specialized cells or tissues. Animals show diverse body forms, levels of organization, and reproductive strategies. They play important roles in food chains, pollination, decomposition, and ecosystem balance.",
                },
                {
                  id: "BIO11-CH02-T15",
                  topicNumber: 15,
                  topic: "Viruses and their characteristics",
                  brief:
                    "Viruses are acellular infectious agents consisting of genetic material, either DNA or RNA, enclosed in a protein coat; some also possess a lipid envelope. They lack cellular structures and independent metabolic machinery and can reproduce only inside suitable host cells. Their placement outside the traditional kingdoms of cellular organisms reflects their distinctive organization. Viruses can infect animals, plants, fungi, and bacteria.",
                },
                {
                  id: "BIO11-CH02-T16",
                  topicNumber: 16,
                  topic: "Importance of classification",
                  brief:
                    "Classification provides a universal framework for identifying and naming organisms. It simplifies the study of biodiversity, helps reveal similarities and differences, supports communication among scientists, and contributes to conservation, agriculture, medicine, and evolutionary research. Classification systems may change when new evidence about organismal relationships becomes available.",
                },
                {
                  id: "BIO11-CH02-T17",
                  topicNumber: 17,
                  topic: "Dichotomous keys",
                  brief:
                    "A dichotomous key is an identification tool that guides the user through a sequence of paired, contrasting statements about observable characteristics. At each step, the user selects the statement that best matches the specimen and follows the indicated path until an identification is reached. Accurate observations and clearly distinguishable characteristics are essential for correct identification.",
                },
                {
                  id: "BIO11-CH02-T18",
                  topicNumber: 18,
                  topic: "Taxonomic identification",
                  brief:
                    "Taxonomic identification is the process of determining the identity of an organism and assigning it to an appropriate taxonomic group. It involves observing characteristics, comparing specimens with descriptions or reference materials, and using identification keys where available. Features such as morphology, anatomy, reproductive structures, and molecular evidence may help establish an organism's identity.",
                },
              ],
            },
            {
              id: "BIO11-CH03",
              chapterNumber: 3,
              chapterName: "Biodiversity and Conservation",
              topics: [
                {
                  id: "BIO11-CH03-T01",
                  topicNumber: 1,
                  topic: "Concept of biodiversity",
                  brief:
                    "Biodiversity refers to the variety and variability of living organisms and the ecological systems in which they live. It includes genetic diversity, species diversity, and ecosystem diversity. Biodiversity occurs at local, regional, and global levels and helps maintain the stability and functioning of natural ecosystems.",
                },
                {
                  id: "BIO11-CH03-T02",
                  topicNumber: 2,
                  topic: "Genetic diversity",
                  brief:
                    "Genetic diversity is the variation in genes and inherited characteristics among individuals of the same species or population. It produces differences in traits such as size, colour, disease resistance, and adaptability. High genetic diversity improves a population's ability to survive environmental changes and resist diseases.",
                },
                {
                  id: "BIO11-CH03-T03",
                  topicNumber: 3,
                  topic: "Species diversity",
                  brief:
                    "Species diversity refers to the variety of species in a particular habitat or region and their relative abundance. It includes species richness, which is the number of species present, and species evenness, which describes how evenly individuals are distributed among those species. Greater species diversity can contribute to ecosystem stability and resilience.",
                },
                {
                  id: "BIO11-CH03-T04",
                  topicNumber: 4,
                  topic: "Ecosystem diversity",
                  brief:
                    "Ecosystem diversity is the variety of habitats, biological communities, and ecological processes found in a region. Examples include forests, grasslands, wetlands, rivers, lakes, and alpine ecosystems. Different ecosystems provide different resources and support different organisms, contributing to overall biodiversity.",
                },
                {
                  id: "BIO11-CH03-T05",
                  topicNumber: 5,
                  topic: "Importance of biodiversity",
                  brief:
                    "Biodiversity supports ecosystem processes such as pollination, nutrient cycling, soil formation, decomposition, and water purification. It provides food, medicines, fuel, timber, and other useful resources. Biodiversity also has economic, cultural, scientific, recreational, and aesthetic value, making its conservation important for present and future generations.",
                },
                {
                  id: "BIO11-CH03-T06",
                  topicNumber: 6,
                  topic: "Biodiversity of Nepal",
                  brief:
                    "Nepal has rich biodiversity because of its wide variation in altitude, climate, landforms, and habitats, extending from the Terai plains to the Himalayan mountains. Its ecosystems include tropical and subtropical forests, temperate forests, alpine meadows, wetlands, and high-altitude environments. Nepal supports diverse plants, animals, and microorganisms, including species of conservation importance such as the Bengal tiger, greater one-horned rhinoceros, red panda, and snow leopard.",
                },
                {
                  id: "BIO11-CH03-T07",
                  topicNumber: 7,
                  topic: "Endemic species",
                  brief:
                    "Endemic species are organisms naturally restricted to a particular geographical area and not found naturally elsewhere. Their restricted distribution makes them especially vulnerable to habitat loss, environmental changes, and other threats. Identifying and protecting their habitats is important for conserving unique regional biodiversity.",
                },
                {
                  id: "BIO11-CH03-T08",
                  topicNumber: 8,
                  topic: "Threatened and endangered species",
                  brief:
                    "Threatened species are species at risk of becoming extinct, while endangered species face a very high risk of extinction in the wild. Conservation assessments consider factors such as population size, population decline, geographical range, and threats. The IUCN Red List uses categories including Vulnerable, Endangered, and Critically Endangered to describe different levels of extinction risk.",
                },
                {
                  id: "BIO11-CH03-T09",
                  topicNumber: 9,
                  topic: "Causes of biodiversity loss",
                  brief:
                    "Biodiversity loss occurs when the variety of genes, species, or ecosystems decreases. Major causes include habitat destruction, pollution, overexploitation, invasive species, climate change, and unsustainable land use. These pressures may reduce populations, disrupt food webs, damage ecosystems, and eventually lead to extinction.",
                },
                {
                  id: "BIO11-CH03-T10",
                  topicNumber: 10,
                  topic: "Habitat destruction and fragmentation",
                  brief:
                    "Habitat destruction occurs when a natural environment is damaged or converted for activities such as agriculture, urban development, mining, or road construction. Habitat fragmentation divides a large, continuous habitat into smaller, isolated patches. Both processes can reduce available resources, restrict movement and breeding, isolate populations, and increase the risk of local extinction.",
                },
                {
                  id: "BIO11-CH03-T11",
                  topicNumber: 11,
                  topic: "Invasive species",
                  brief:
                    "Invasive species are organisms introduced outside their natural range that establish and spread, causing or potentially causing harm to native biodiversity, ecosystems, the economy, or human well-being. They may compete with native species, prey on them, spread diseases, or alter habitats. Preventing accidental introductions and controlling established invasive populations are important conservation measures.",
                },
                {
                  id: "BIO11-CH03-T12",
                  topicNumber: 12,
                  topic: "Overexploitation of biological resources",
                  brief:
                    "Overexploitation occurs when organisms or biological resources are harvested faster than they can naturally recover. Examples include excessive hunting, overfishing, illegal wildlife trade, and unsustainable collection of medicinal plants and timber. It can cause population declines, disrupt food chains, and threaten species with extinction. Sustainable harvesting and effective regulation help reduce these impacts.",
                },
                {
                  id: "BIO11-CH03-T13",
                  topicNumber: 13,
                  topic: "Climate change and biodiversity",
                  brief:
                    "Climate change affects biodiversity through changes in temperature, rainfall, seasonal patterns, extreme weather, and the distribution of suitable habitats. Species may need to shift their geographical ranges or adapt to changing conditions. Those unable to adapt or move may decline, while warming can also alter mountain ecosystems, wetlands, forests, and species interactions.",
                },
                {
                  id: "BIO11-CH03-T14",
                  topicNumber: 14,
                  topic: "In-situ conservation",
                  brief:
                    "In-situ conservation means protecting species within their natural habitats so that they can survive, reproduce, and continue interacting with other organisms in their ecosystems. Methods include establishing national parks, wildlife reserves, conservation areas, and community-managed forests. This approach protects not only individual species but also their habitats and natural ecological processes.",
                },
                {
                  id: "BIO11-CH03-T15",
                  topicNumber: 15,
                  topic: "Ex-situ conservation",
                  brief:
                    "Ex-situ conservation involves protecting organisms outside their natural habitats. Examples include zoos, botanical gardens, seed banks, gene banks, tissue culture laboratories, and captive-breeding programmes. It is especially useful when species face serious threats in the wild, although conserving and restoring their natural habitats remains important for long-term survival.",
                },
                {
                  id: "BIO11-CH03-T16",
                  topicNumber: 16,
                  topic: "National parks and protected areas",
                  brief:
                    "National parks and other protected areas are geographically defined places managed to conserve biodiversity, natural habitats, and ecological or cultural values. Depending on their designation, they may restrict hunting, resource extraction, settlement, or other activities. In Nepal, protected areas include national parks, wildlife reserves, conservation areas, and other recognized conservation sites.",
                },
                {
                  id: "BIO11-CH03-T17",
                  topicNumber: 17,
                  topic: "Wildlife conservation",
                  brief:
                    "Wildlife conservation involves protecting wild animals, plants, and their habitats to maintain healthy populations and prevent extinction. Measures include habitat restoration, anti-poaching activities, wildlife research, protection of migration routes, enforcement of conservation laws, and management of human-wildlife conflict. Effective conservation considers the needs of both wildlife and nearby communities.",
                },
                {
                  id: "BIO11-CH03-T18",
                  topicNumber: 18,
                  topic: "Community-based conservation",
                  brief:
                    "Community-based conservation involves local people in the planning, management, and protection of biodiversity and natural resources. Communities may participate through community forestry, local conservation groups, sustainable harvesting, habitat restoration, and wildlife monitoring. Their knowledge and participation can improve conservation outcomes, particularly when local communities receive fair benefits and have meaningful decision-making roles.",
                },
                {
                  id: "BIO11-CH03-T19",
                  topicNumber: 19,
                  topic: "Sustainable use of biological resources",
                  brief:
                    "Sustainable use means using biological resources at a rate and in a manner that allows their populations and ecosystems to remain viable over time. It includes responsible harvesting of forest products, sustainable fishing, biodiversity-friendly agriculture, and regulated use of medicinal plants. Sustainable practices balance present needs with the conservation of resources for future generations.",
                },
              ],
            },
          ],
        },
        {
          id: "BIO11-B02",
          branchNumber: 2,
          branchName: "Cell Biology and Biomolecules",
          chapters: [
            {
              id: "BIO11-CH04",
              chapterNumber: 4,
              chapterName: "Cell Structure and Function",
              topics: [
                {
                  id: "BIO11-CH04-T01",
                  topicNumber: 1,
                  topic: "Cell theory",
                  brief:
                    "Cell theory is a fundamental principle of biology stating that all living organisms are made of one or more cells, the cell is the basic structural and functional unit of life, and new cells arise from pre-existing cells. It explains the importance of cells in the structure, growth, and reproduction of living organisms.",
                },
                {
                  id: "BIO11-CH04-T02",
                  topicNumber: 2,
                  topic: "Discovery of the cell",
                  brief:
                    "The discovery of the cell became possible through the development of microscopes. In 1665, Robert Hooke observed small compartments in cork and named them cells. Antonie van Leeuwenhoek later observed living microorganisms. Matthias Schleiden and Theodor Schwann contributed to cell theory, and Rudolf Virchow emphasized that cells arise from existing cells.",
                },
                {
                  id: "BIO11-CH04-T03",
                  topicNumber: 3,
                  topic: "Prokaryotic and eukaryotic cells",
                  brief:
                    "Cells are broadly classified into prokaryotic and eukaryotic types. Prokaryotic cells, found in bacteria and archaea, lack a membrane-bound nucleus and membrane-bound organelles. Eukaryotic cells, found in plants, animals, fungi, and protists, possess a true nucleus and membrane-bound organelles. Both types contain genetic material, cytoplasm, ribosomes, and a plasma membrane.",
                },
                {
                  id: "BIO11-CH04-T04",
                  topicNumber: 4,
                  topic: "Plant and animal cells",
                  brief:
                    "Plant and animal cells are eukaryotic cells with a nucleus, plasma membrane, cytoplasm, mitochondria, endoplasmic reticulum, Golgi apparatus, and ribosomes. Plant cells typically have a cellulose cell wall, plastids such as chloroplasts, and a large central vacuole. Animal cells lack a cell wall and chloroplasts and commonly have smaller vacuoles and a prominent centrosome with centrioles.",
                },
                {
                  id: "BIO11-CH04-T05",
                  topicNumber: 5,
                  topic: "Cell size and shape",
                  brief:
                    "Cells vary greatly in size and shape according to their functions. Some cells are microscopic, while others, such as certain egg cells, are comparatively large. Cell shape may be spherical, elongated, flat, branched, or irregular. For example, red blood cells are adapted for oxygen transport, nerve cells for transmitting impulses, and muscle cells for contraction.",
                },
                {
                  id: "BIO11-CH04-T06",
                  topicNumber: 6,
                  topic: "Plasma membrane",
                  brief:
                    "The plasma membrane is a thin, selectively permeable boundary surrounding the cell. It consists mainly of a phospholipid bilayer with embedded proteins, along with other components such as cholesterol in many eukaryotic membranes. It regulates the movement of substances into and out of the cell and participates in cell signalling, recognition, and maintaining internal conditions.",
                },
                {
                  id: "BIO11-CH04-T07",
                  topicNumber: 7,
                  topic: "Cell wall",
                  brief:
                    "The cell wall is a relatively rigid outer layer outside the plasma membrane in plants, fungi, bacteria, and some other organisms. In plants, it is mainly composed of cellulose. It provides support, maintains cell shape, protects the cell, and helps prevent excessive expansion when water enters. Animal cells do not have a cell wall.",
                },
                {
                  id: "BIO11-CH04-T08",
                  topicNumber: 8,
                  topic: "Cytoplasm",
                  brief:
                    "Cytoplasm is the material between the plasma membrane and the nucleus in a typical eukaryotic cell. It includes the cytosol, organelles, and other suspended components. Many metabolic reactions occur in the cytoplasm, and it supports organelles while allowing substances to move within the cell.",
                },
                {
                  id: "BIO11-CH04-T09",
                  topicNumber: 9,
                  topic: "Nucleus and nucleolus",
                  brief:
                    "The nucleus is a membrane-bound organelle that contains most of a eukaryotic cell's genetic material in the form of DNA. It regulates gene expression and helps control cell activities. The nucleolus is a region inside the nucleus where ribosomal RNA is produced and ribosomal subunits are assembled.",
                },
                {
                  id: "BIO11-CH04-T10",
                  topicNumber: 10,
                  topic: "Mitochondria",
                  brief:
                    "Mitochondria are double-membraned organelles that carry out most aerobic cellular respiration in eukaryotic cells. The inner membrane forms folds called cristae, while the matrix contains enzymes and other components needed for respiration. Mitochondria produce much of the cell's ATP, the molecule used to transfer energy for cellular activities, and contain their own DNA and ribosomes.",
                },
                {
                  id: "BIO11-CH04-T11",
                  topicNumber: 11,
                  topic: "Plastids and chloroplasts",
                  brief:
                    "Plastids are organelles found in plants and many algae. Major types include chloroplasts, chromoplasts, and leucoplasts. Chloroplasts contain chlorophyll and are the main sites of photosynthesis. Chromoplasts contain pigments that contribute to colour, while leucoplasts commonly store substances such as starch, oils, or proteins.",
                },
                {
                  id: "BIO11-CH04-T12",
                  topicNumber: 12,
                  topic: "Endoplasmic reticulum",
                  brief:
                    "The endoplasmic reticulum (ER) is a network of membranes involved in the production, processing, and transport of substances. Rough ER has ribosomes attached and is mainly involved in synthesizing and processing proteins for secretion, membranes, or certain organelles. Smooth ER lacks attached ribosomes and participates in lipid synthesis, detoxification, and calcium storage in particular cells.",
                },
                {
                  id: "BIO11-CH04-T13",
                  topicNumber: 13,
                  topic: "Golgi apparatus",
                  brief:
                    "The Golgi apparatus is a system of flattened membrane-bound sacs that modifies, sorts, and packages proteins and lipids received from the endoplasmic reticulum. It directs these materials to their destinations in the cell or outside it. In plant cells, the Golgi apparatus also contributes to the production of certain cell-wall materials.",
                },
                {
                  id: "BIO11-CH04-T14",
                  topicNumber: 14,
                  topic: "Ribosomes",
                  brief:
                    "Ribosomes are small structures made of ribosomal RNA and proteins that synthesize proteins by translating information carried by messenger RNA. They may occur freely in the cytoplasm or attach to the rough endoplasmic reticulum in eukaryotic cells. Ribosomes are present in both prokaryotic and eukaryotic cells.",
                },
                {
                  id: "BIO11-CH04-T15",
                  topicNumber: 15,
                  topic: "Lysosomes",
                  brief:
                    "Lysosomes are membrane-bound organelles containing digestive enzymes that break down worn-out cell components, large molecules, and material taken into the cell. Their enzymes work best in an acidic environment. Lysosomes help recycle useful substances and contribute to cellular waste removal and defence. They are especially prominent in many animal cells.",
                },
                {
                  id: "BIO11-CH04-T16",
                  topicNumber: 16,
                  topic: "Peroxisomes",
                  brief:
                    "Peroxisomes are small, membrane-bound organelles that contain enzymes involved in oxidation reactions. They help break down certain fatty acids and detoxify harmful substances. They also convert hydrogen peroxide, which can damage cells, into less harmful substances using enzymes such as catalase. Their functions vary among different cell types.",
                },
                {
                  id: "BIO11-CH04-T17",
                  topicNumber: 17,
                  topic: "Vacuoles",
                  brief:
                    "Vacuoles are membrane-bound compartments used for storage and other cellular functions. In mature plant cells, a large central vacuole stores water, ions, pigments, nutrients, and waste products while maintaining turgor pressure. Animal cells may contain smaller temporary vacuoles or vesicles involved in storage and transport.",
                },
                {
                  id: "BIO11-CH04-T18",
                  topicNumber: 18,
                  topic: "Cytoskeleton",
                  brief:
                    "The cytoskeleton is a network of protein filaments that supports cell shape, organizes organelles, and enables movement and internal transport. Its major components are microfilaments, intermediate filaments, and microtubules. These structures also contribute to cell division, movement of cilia and flagella, and changes in cell shape.",
                },
                {
                  id: "BIO11-CH04-T19",
                  topicNumber: 19,
                  topic: "Centrosome and centrioles",
                  brief:
                    "The centrosome is a major microtubule-organizing centre in many animal cells and helps organize the spindle during cell division. It commonly contains a pair of centrioles arranged approximately at right angles. Centrioles also contribute to the formation of basal bodies, which help organize cilia and flagella. Most higher plant cells do not possess typical centrioles.",
                },
                {
                  id: "BIO11-CH04-T20",
                  topicNumber: 20,
                  topic: "Cilia and flagella",
                  brief:
                    "Cilia and flagella are hair-like or whip-like cell structures that produce movement or move substances across a cell surface. Cilia are generally shorter and more numerous, while flagella are generally longer and fewer. In many eukaryotic cells, they contain microtubules arranged in a characteristic pattern and are anchored by basal bodies. Examples include cilia moving mucus in the respiratory tract and flagella helping sperm cells move.",
                },
                {
                  id: "BIO11-CH04-T21",
                  topicNumber: 21,
                  topic: "Structure-function relationships in cells",
                  brief:
                    "Structure-function relationships explain how the shape, composition, and organization of a cell or organelle enable it to perform a particular job. For example, the folded inner membrane of mitochondria provides a large surface area for reactions involved in ATP production, while the thin plasma membrane regulates exchange with the surroundings. Specialized cell structures help organisms carry out essential life processes efficiently.",
                },
                {
                  id: "BIO11-CH04-T22",
                  topicNumber: 22,
                  topic: "Differences between plant and animal cells",
                  brief:
                    "Plant and animal cells share many eukaryotic structures but differ in several important features. Plant cells generally have a cellulose cell wall, chloroplasts in photosynthetic tissues, and a large central vacuole, giving many cells a more regular shape. Animal cells lack cell walls and chloroplasts, usually have smaller vacuoles, and commonly possess centrosomes containing centrioles. These differences reflect their distinct ways of obtaining resources and supporting cell structure.",
                },
              ],
            },
            {
              id: "BIO11-CH05",
              chapterNumber: 5,
              chapterName: "Biomolecules",
              topics: [
                {
                  id: "BIO11-CH05-T01",
                  topicNumber: 1,
                  topic: "Chemical composition of living organisms",
                  brief:
                    "Living organisms are composed of inorganic and organic substances. Inorganic substances include water and mineral salts, while organic substances include carbohydrates, lipids, proteins, and nucleic acids. These biomolecules form cellular structures, provide energy, regulate metabolic activities, and store genetic information. Elements such as carbon, hydrogen, oxygen, nitrogen, phosphorus, and sulfur are important components of biological molecules.",
                },
                {
                  id: "BIO11-CH05-T02",
                  topicNumber: 2,
                  topic: "Water and its biological importance",
                  brief:
                    "Water is an essential inorganic component of living organisms. Its polarity allows it to dissolve many substances, making it an effective medium for biochemical reactions and transport. Water also helps regulate temperature, participates in reactions such as hydrolysis and photosynthesis, lubricates body surfaces, and maintains cell shape and volume. Its high specific heat capacity helps organisms resist sudden temperature changes.",
                },
                {
                  id: "BIO11-CH05-T03",
                  topicNumber: 3,
                  topic: "Mineral elements",
                  brief:
                    "Mineral elements are inorganic nutrients required by organisms for growth, development, and normal physiological functions. Major elements, such as calcium, phosphorus, potassium, sodium, and magnesium, are needed in relatively large amounts, while trace elements, such as iron, zinc, copper, and iodine, are required in smaller quantities. They contribute to bones, enzymes, hormones, nerve function, and other biological processes.",
                },
                {
                  id: "BIO11-CH05-T04",
                  topicNumber: 4,
                  topic: "Carbohydrates",
                  brief:
                    "Carbohydrates are organic compounds mainly composed of carbon, hydrogen, and oxygen. They are important sources of energy and also perform structural and storage functions. Carbohydrates are classified according to the number of sugar units into monosaccharides, disaccharides, and polysaccharides. Examples include glucose, sucrose, starch, glycogen, and cellulose.",
                },
                {
                  id: "BIO11-CH05-T05",
                  topicNumber: 5,
                  topic: "Monosaccharides",
                  brief:
                    "Monosaccharides are the simplest carbohydrates and cannot be hydrolysed into smaller carbohydrate units. They commonly serve as immediate energy sources and as building blocks for larger carbohydrates. Examples include glucose, fructose, and galactose. Ribose and deoxyribose are pentose sugars that form part of RNA and DNA, respectively.",
                },
                {
                  id: "BIO11-CH05-T06",
                  topicNumber: 6,
                  topic: "Disaccharides",
                  brief:
                    "Disaccharides are carbohydrates formed when two monosaccharide molecules join through a glycosidic bond, usually with the removal of a water molecule. They can be broken down into their component sugars by hydrolysis. Common examples include sucrose, formed from glucose and fructose; maltose, formed from two glucose units; and lactose, formed from glucose and galactose.",
                },
                {
                  id: "BIO11-CH05-T07",
                  topicNumber: 7,
                  topic: "Polysaccharides",
                  brief:
                    "Polysaccharides are complex carbohydrates made of many monosaccharide units joined by glycosidic bonds. They perform energy-storage and structural functions. Starch stores energy in plants, glycogen stores energy in animals and fungi, and cellulose forms a major structural component of plant cell walls. Their properties depend on the types of sugar units and how those units are linked.",
                },
                {
                  id: "BIO11-CH05-T08",
                  topicNumber: 8,
                  topic: "Lipids",
                  brief:
                    "Lipids are a diverse group of organic compounds that are generally insoluble in water but soluble in certain organic solvents. They include fats, oils, phospholipids, waxes, and steroids. Lipids store energy, provide insulation and protection, form important parts of cell membranes, and participate in hormone production and cell signalling.",
                },
                {
                  id: "BIO11-CH05-T09",
                  topicNumber: 9,
                  topic: "Fats and oils",
                  brief:
                    "Fats and oils are mainly triglycerides formed from one glycerol molecule and three fatty acid molecules joined by ester bonds. They are energy-rich molecules that provide long-term energy storage, insulation, and protection for organs. Fats are generally solid at room temperature, whereas oils are generally liquid. This difference is largely related to the degree of saturation and the structure of their fatty acids.",
                },
                {
                  id: "BIO11-CH05-T10",
                  topicNumber: 10,
                  topic: "Phospholipids",
                  brief:
                    "Phospholipids are lipids containing a phosphate-containing, water-attracting head and water-repelling fatty acid tails. Because they have both hydrophilic and hydrophobic regions, they naturally form bilayers in watery environments. Phospholipid bilayers are the basic structural framework of cell membranes and help regulate the movement of substances across the membrane.",
                },
                {
                  id: "BIO11-CH05-T11",
                  topicNumber: 11,
                  topic: "Proteins",
                  brief:
                    "Proteins are large biological molecules made of amino acids joined by peptide bonds. They perform many functions, including structural support, transport, defence, movement, regulation, and catalysis. Examples include collagen for structural support, haemoglobin for oxygen transport, antibodies for immune defence, and enzymes for speeding up biochemical reactions. A protein's function depends on its amino acid sequence and three-dimensional shape.",
                },
                {
                  id: "BIO11-CH05-T12",
                  topicNumber: 12,
                  topic: "Amino acids",
                  brief:
                    "Amino acids are the basic building blocks of proteins. A typical amino acid contains an amino group, a carboxyl group, a hydrogen atom, and a variable side chain attached to a central carbon atom. The side chain gives each amino acid its distinctive properties. Amino acids join together to form polypeptide chains, and some must be obtained through the diet because the body cannot synthesize enough of them.",
                },
                {
                  id: "BIO11-CH05-T13",
                  topicNumber: 13,
                  topic: "Peptide bonds",
                  brief:
                    "A peptide bond is a covalent bond formed between the carboxyl group of one amino acid and the amino group of another. Its formation generally releases a molecule of water, making it a condensation reaction. Repeated peptide-bond formation produces polypeptide chains, which fold into functional proteins. Peptide bonds connect amino acids in a specific sequence.",
                },
                {
                  id: "BIO11-CH05-T14",
                  topicNumber: 14,
                  topic: "Levels of protein structure",
                  brief:
                    "Protein structure is commonly described at four levels. Primary structure is the amino acid sequence; secondary structure includes local folding patterns such as alpha helices and beta sheets; tertiary structure is the overall three-dimensional shape of a single polypeptide; and quaternary structure is the arrangement of two or more polypeptide subunits. These structural levels determine how a protein interacts with other molecules and performs its function.",
                },
                {
                  id: "BIO11-CH05-T15",
                  topicNumber: 15,
                  topic: "Enzymes",
                  brief:
                    "Enzymes are biological catalysts that increase the rate of chemical reactions by lowering activation energy without being permanently consumed in the process. Most enzymes are proteins, although some RNA molecules can also act as catalysts. Enzymes are important in digestion, respiration, photosynthesis, DNA replication, and many other metabolic processes. Each enzyme acts on particular substrate or substrates under suitable conditions.",
                },
                {
                  id: "BIO11-CH05-T16",
                  topicNumber: 16,
                  topic: "Properties of enzymes",
                  brief:
                    "Enzymes are highly effective biological catalysts and usually show specificity for particular substrates or reactions. They function under suitable temperature and pH conditions, and many require cofactors or coenzymes. Enzymes are not used up in the reactions they catalyse, although their activity can be affected by inhibitors, environmental conditions, and changes in their structure. Enzyme activity also depends on substrate concentration and enzyme availability.",
                },
                {
                  id: "BIO11-CH05-T17",
                  topicNumber: 17,
                  topic: "Mechanism of enzyme action",
                  brief:
                    "Enzyme action begins when a substrate binds to a specific region of the enzyme called the active site. This forms an enzyme-substrate complex, allowing the reaction to proceed through a pathway with lower activation energy. The substrate is converted into product or products, which are released, leaving the enzyme available for another reaction. The mechanism is often explained using the lock-and-key and induced-fit models.",
                },
                {
                  id: "BIO11-CH05-T18",
                  topicNumber: 18,
                  topic: "Factors affecting enzyme activity",
                  brief:
                    "Enzyme activity is influenced by temperature, pH, substrate concentration, enzyme concentration, and the presence of inhibitors, activators, or required cofactors. Increasing temperature generally raises reaction rate up to an optimum, but excessive heat may denature the enzyme. Each enzyme has a suitable pH range, and extreme pH can alter its structure. Increasing substrate concentration raises the rate until the enzyme becomes saturated.",
                },
                {
                  id: "BIO11-CH05-T19",
                  topicNumber: 19,
                  topic: "Nucleic acids",
                  brief:
                    "Nucleic acids are biological macromolecules that store, transmit, and help express genetic information. The two major types are deoxyribonucleic acid (DNA) and ribonucleic acid (RNA). They are made of nucleotide units, each containing a pentose sugar, a phosphate group, and a nitrogenous base. DNA stores hereditary information, while RNA participates in protein synthesis and other cellular processes.",
                },
                {
                  id: "BIO11-CH05-T20",
                  topicNumber: 20,
                  topic: "DNA structure",
                  brief:
                    "DNA is usually composed of two polynucleotide strands twisted into a double helix. Each nucleotide contains deoxyribose sugar, a phosphate group, and one nitrogenous base: adenine, thymine, guanine, or cytosine. The two strands are complementary, with adenine pairing with thymine and guanine pairing with cytosine. The sequence of bases stores genetic information, and complementary pairing helps DNA replicate accurately.",
                },
                {
                  id: "BIO11-CH05-T21",
                  topicNumber: 21,
                  topic: "RNA structure and types",
                  brief:
                    "RNA is a nucleic acid usually consisting of a single polynucleotide strand. It contains ribose sugar and the bases adenine, uracil, guanine, and cytosine; uracil replaces thymine found in DNA. The three major types involved in protein synthesis are messenger RNA (mRNA), which carries genetic instructions; transfer RNA (tRNA), which delivers amino acids; and ribosomal RNA (rRNA), which forms part of ribosomes and helps catalyse protein synthesis.",
                },
                {
                  id: "BIO11-CH05-T22",
                  topicNumber: 22,
                  topic: "ATP and biological energy",
                  brief:
                    "Adenosine triphosphate (ATP) is a molecule that transfers usable energy within cells. It consists of adenine, ribose sugar, and three phosphate groups. Energy released during cellular respiration can be used to form ATP, and ATP hydrolysis can supply energy for processes such as active transport, muscle contraction, and biosynthesis. ATP is continually produced and used rather than serving as a long-term energy-storage molecule.",
                },
                {
                  id: "BIO11-CH05-T23",
                  topicNumber: 23,
                  topic: "Vitamins and their functions",
                  brief:
                    "Vitamins are organic nutrients required in small amounts for normal growth, metabolism, and health. They are commonly classified as fat-soluble vitamins (A, D, E, and K) and water-soluble vitamins (B-group vitamins and C). Their functions include supporting vision, bone health, blood clotting, antioxidant protection, collagen formation, and enzyme activity. Deficiency of particular vitamins can cause specific health problems.",
                },
                {
                  id: "BIO11-CH05-T24",
                  topicNumber: 24,
                  topic: "Primary and secondary metabolites",
                  brief:
                    "Primary metabolites are substances directly involved in essential growth, development, and reproduction, such as carbohydrates, amino acids, nucleotides, and organic acids. Secondary metabolites are compounds that are not directly required for basic growth in the same way but often provide ecological advantages, such as defence against herbivores and pathogens, attraction of pollinators, or competition with other organisms. Examples include alkaloids, pigments, essential oils, and many plant defensive compounds.",
                },
              ],
            },
            {
              id: "BIO11-CH06",
              chapterNumber: 6,
              chapterName: "Cell Division",
              topics: [
                {
                  id: "BIO11-CH06-T01",
                  topicNumber: 1,
                  topic: "Cell cycle",
                  brief:
                    "The cell cycle is the sequence of events through which a cell grows, duplicates its genetic material, and divides to form daughter cells. It consists of interphase and the division phase. During interphase, the cell grows and replicates its DNA; during the division phase, the nucleus and cytoplasm divide. The cell cycle is essential for growth, tissue repair, and reproduction.",
                },
                {
                  id: "BIO11-CH06-T02",
                  topicNumber: 2,
                  topic: "Interphase",
                  brief:
                    "Interphase is the period between successive cell divisions when a cell grows, performs its normal functions, and prepares for division. It includes three main stages: G1 phase, when the cell grows; S phase, when DNA is replicated; and G2 phase, when the cell continues growing and prepares for division. Although chromosomes are not usually visible as distinct structures during interphase, the cell remains metabolically active.",
                },
                {
                  id: "BIO11-CH06-T03",
                  topicNumber: 3,
                  topic: "Mitosis",
                  brief:
                    "Mitosis is a type of nuclear division in which duplicated chromosomes are distributed equally to two daughter nuclei. In a typical mitotic division followed by cytokinesis, one parent cell produces two genetically similar daughter cells with the same chromosome number as the parent cell. Mitosis is important for growth, replacement of damaged cells, tissue repair, and asexual reproduction in many organisms.",
                },
                {
                  id: "BIO11-CH06-T04",
                  topicNumber: 4,
                  topic: "Stages of mitosis",
                  brief:
                    "Mitosis is commonly described in four main stages: prophase, metaphase, anaphase, and telophase. During prophase, chromosomes condense and the spindle forms; during metaphase, chromosomes align at the cell's equator; during anaphase, sister chromatids separate and move towards opposite poles; and during telophase, new nuclear envelopes form around the chromosome sets. Cytokinesis usually follows or overlaps with the final stages to divide the cytoplasm.",
                },
                {
                  id: "BIO11-CH06-T05",
                  topicNumber: 5,
                  topic: "Significance of mitosis",
                  brief:
                    "Mitosis maintains chromosome number and distributes genetic material to daughter nuclei. It enables organisms to grow, replace worn-out cells, repair damaged tissues, and regenerate certain body parts. In unicellular eukaryotes and some multicellular organisms, mitotic division also supports asexual reproduction. The genetic similarity of daughter cells helps maintain consistency in body tissues.",
                },
                {
                  id: "BIO11-CH06-T06",
                  topicNumber: 6,
                  topic: "Meiosis",
                  brief:
                    "Meiosis is a specialized type of cell division that reduces the chromosome number by half and generally produces four haploid cells from one diploid cell after two successive nuclear divisions. It involves one round of DNA replication followed by meiosis I and meiosis II. Meiosis is essential for sexual reproduction because it helps produce haploid reproductive cells and contributes to genetic variation.",
                },
                {
                  id: "BIO11-CH06-T07",
                  topicNumber: 7,
                  topic: "Stages of meiosis",
                  brief:
                    "Meiosis consists of meiosis I and meiosis II, each with prophase, metaphase, anaphase, and telophase. In meiosis I, homologous chromosomes pair and then separate, reducing the chromosome number. In meiosis II, sister chromatids separate, producing haploid nuclei. DNA replication occurs before meiosis I but not between the two meiotic divisions. In animals, meiosis generally produces haploid cells that develop into gametes; in plants, it produces spores.",
                },
                {
                  id: "BIO11-CH06-T08",
                  topicNumber: 8,
                  topic: "Crossing over",
                  brief:
                    "Crossing over is the exchange of corresponding DNA segments between non-sister chromatids of homologous chromosomes during prophase I of meiosis. It usually occurs after homologous chromosomes pair and contributes to new combinations of alleles. These recombinant chromosomes increase genetic variation among the resulting cells and, ultimately, offspring.",
                },
                {
                  id: "BIO11-CH06-T09",
                  topicNumber: 9,
                  topic: "Synapsis and chiasma formation",
                  brief:
                    "Synapsis is the close pairing of homologous chromosomes during prophase I of meiosis. The paired homologues form a structure called a bivalent, containing four chromatids in total. During crossing over, exchanges occur between non-sister chromatids; the visible points where homologous chromatids remain associated are called chiasmata. Chiasmata help maintain the association of homologous chromosomes until they separate during meiosis I.",
                },
                {
                  id: "BIO11-CH06-T10",
                  topicNumber: 10,
                  topic: "Comparison of mitosis and meiosis",
                  brief:
                    "Mitosis involves one nuclear division and usually produces two genetically similar daughter cells with the same chromosome number as the parent cell. Meiosis involves two successive nuclear divisions and generally produces four haploid cells from a diploid parent cell. Homologous chromosome pairing and crossing over occur in meiosis but not in ordinary mitosis. Mitosis supports growth and repair, whereas meiosis supports sexual reproduction and genetic variation.",
                },
                {
                  id: "BIO11-CH06-T11",
                  topicNumber: 11,
                  topic: "Chromosome number maintenance",
                  brief:
                    "Chromosome number maintenance refers to the processes that preserve the characteristic chromosome number of a species across generations. Meiosis reduces the chromosome number from diploid to haploid, while fertilization combines two haploid nuclei to restore the diploid number. Mitosis maintains the chromosome number in daughter cells by distributing duplicated chromosomes equally. Together, these processes support continuity of genetic information.",
                },
                {
                  id: "BIO11-CH06-T12",
                  topicNumber: 12,
                  topic: "Genetic variation through meiosis",
                  brief:
                    "Meiosis creates genetic variation mainly through crossing over and independent assortment of homologous chromosome pairs. Crossing over exchanges DNA between non-sister chromatids, while independent assortment distributes maternal and paternal homologues into different combinations. Random fertilization adds further variation in sexually reproducing organisms. Genetic variation provides the raw material for natural selection and evolution.",
                },
                {
                  id: "BIO11-CH06-T13",
                  topicNumber: 13,
                  topic: "Cytokinesis",
                  brief:
                    "Cytokinesis is the division of the cytoplasm to form separate daughter cells, usually following nuclear division. In animal cells, a contractile ring creates a cleavage furrow that divides the cell. In plant cells, a cell plate develops between the daughter nuclei and forms the basis of the new separating wall. Cytokinesis completes cell division, although its timing can vary between cell types.",
                },
                {
                  id: "BIO11-CH06-T14",
                  topicNumber: 14,
                  topic: "Uncontrolled cell division",
                  brief:
                    "Uncontrolled cell division occurs when cells divide without normal regulation of the cell cycle. It can result from changes in genes that control cell growth, DNA repair, and programmed cell death. Persistent uncontrolled division may produce a tumour; malignant tumours can invade surrounding tissues and spread to other parts of the body, a process called metastasis. Cancer research examines how these control mechanisms fail and how abnormal cells can be prevented or treated.",
                },
                {
                  id: "BIO11-CH06-T15",
                  topicNumber: 15,
                  topic: "Biological significance of cell division",
                  brief:
                    "Cell division is essential for the continuity and functioning of life. It allows unicellular organisms to reproduce, multicellular organisms to grow, and tissues to replace damaged or worn-out cells. Mitosis maintains chromosome number in body cells, while meiosis produces haploid cells for sexual reproduction and introduces genetic variation. Accurate cell division is important for normal development and the maintenance of healthy tissues.",
                },
              ],
            },
          ],
        },
        {
          id: "BIO11-B03",
          branchNumber: 3,
          branchName: "Plant Biology and Botany",
          chapters: [
            {
              id: "BIO11-CH07",
              chapterNumber: 7,
              chapterName: "Plant Diversity",
              topics: [
                {
                  id: "BIO11-CH07-T01",
                  topicNumber: 1,
                  topic: "General characteristics of plants",
                  brief:
                    "Plants are generally multicellular, eukaryotic organisms whose cells possess cellulose cell walls. Most plants contain chlorophyll and produce organic food through photosynthesis, storing carbohydrates mainly as starch. Plants show growth, respond to environmental stimuli, and have specialized structures for support, transport, and reproduction. Their life cycles commonly involve alternation between haploid and diploid stages.",
                },
                {
                  id: "BIO11-CH07-T02",
                  topicNumber: 2,
                  topic: "Classification of the plant kingdom",
                  brief:
                    "The plant kingdom is classified into major groups based on features such as body organization, vascular tissues, seed formation, and reproductive structures. Commonly studied groups include algae, bryophytes, pteridophytes, gymnosperms, and angiosperms. Bryophytes lack true vascular tissues, pteridophytes possess vascular tissues but do not produce seeds, gymnosperms produce naked seeds, and angiosperms produce flowers and seeds enclosed within fruits. The placement of algae varies among modern classification systems.",
                },
                {
                  id: "BIO11-CH07-T03",
                  topicNumber: 3,
                  topic: "Algae",
                  brief:
                    "Algae are mainly aquatic, photosynthetic organisms that range from microscopic single cells to large multicellular forms. They occur in freshwater, marine environments, and moist habitats. Traditionally, algae are introduced as simple plant-like organisms that generally lack the true roots, stems, and leaves of higher plants. They play important roles as primary producers and oxygen producers in aquatic ecosystems.",
                },
                {
                  id: "BIO11-CH07-T04",
                  topicNumber: 4,
                  topic: "Characteristics of algae",
                  brief:
                    "Algae are generally photosynthetic and contain chlorophyll or other pigments that capture light energy. Their bodies are commonly organized as simple thalli rather than true roots, stems, and leaves. They may be unicellular, colonial, filamentous, or multicellular. Reproduction can be vegetative, asexual, or sexual, and different groups vary in their pigments, stored food, cell-wall composition, and reproductive methods.",
                },
                {
                  id: "BIO11-CH07-T05",
                  topicNumber: 5,
                  topic: "Economic importance of algae",
                  brief:
                    "Algae are useful in food, agriculture, industry, and environmental management. Some are consumed directly or used as nutritional supplements, while seaweeds provide substances such as agar, alginates, and carrageenan for food processing, laboratories, and manufacturing. Certain algae and cyanobacteria contribute to soil fertility through nitrogen fixation, while microalgae are studied for wastewater treatment, biofuels, and other biotechnology applications. Algae also support fisheries by forming the base of many aquatic food chains.",
                },
                {
                  id: "BIO11-CH07-T06",
                  topicNumber: 6,
                  topic: "Bryophytes",
                  brief:
                    "Bryophytes are small, non-vascular land plants that include mosses, liverworts, and hornworts in broad introductory classifications. They lack the well-developed vascular tissues found in ferns and seed plants and usually grow in moist, shaded places. Their gametophyte is the dominant stage of the life cycle, while the sporophyte remains attached to and depends partly or largely on it. Water is generally required for sperm to reach the egg during fertilization.",
                },
                {
                  id: "BIO11-CH07-T07",
                  topicNumber: 7,
                  topic: "Characteristics of bryophytes",
                  brief:
                    "Bryophytes do not possess true roots, stems, and leaves with the vascular organization found in higher plants. Many have rhizoids that help anchor them to the substrate. They reproduce by spores rather than seeds and show alternation of generations between a dominant gametophyte and a smaller sporophyte. Their dependence on moist conditions for fertilization helps explain why they are commonly found in damp habitats.",
                },
                {
                  id: "BIO11-CH07-T08",
                  topicNumber: 8,
                  topic: "Liverworts and mosses",
                  brief:
                    "Liverworts and mosses are two major groups of bryophytes. Liverworts may have flattened, lobed thalli or small leafy structures, and they commonly reproduce through spores; some also produce gemmae for vegetative reproduction. Mosses usually have small leafy shoots and rhizoids, with a sporophyte consisting of a foot, seta, and capsule in many species. Both groups lack true vascular tissues and commonly occur in moist environments.",
                },
                {
                  id: "BIO11-CH07-T09",
                  topicNumber: 9,
                  topic: "Pteridophytes",
                  brief:
                    "Pteridophytes are seedless vascular plants, including ferns and their relatives. They possess vascular tissues for transporting water, minerals, and food, as well as true roots, stems, and leaves. They reproduce by spores rather than seeds and generally require water for fertilization because their motile sperm must reach the egg. The sporophyte is the dominant and independent generation.",
                },
                {
                  id: "BIO11-CH07-T10",
                  topicNumber: 10,
                  topic: "Characteristics of pteridophytes",
                  brief:
                    "Pteridophytes have well-developed vascular tissues, true roots, stems, and leaves, but they do not produce flowers or seeds. Their sporangia produce spores, which germinate into small gametophytes. The gametophyte forms male and female reproductive structures, and fertilization usually depends on water. Ferns commonly have young leaves called fiddleheads, which are often coiled before they expand.",
                },
                {
                  id: "BIO11-CH07-T11",
                  topicNumber: 11,
                  topic: "Life cycle of pteridophytes",
                  brief:
                    "The life cycle of pteridophytes shows alternation of generations between a dominant diploid sporophyte and a small haploid gametophyte. The sporophyte produces haploid spores by meiosis inside sporangia. Each suitable spore can grow into a gametophyte, which produces gametes. Fertilization forms a diploid zygote that develops into a new sporophyte. Water is generally needed for sperm to reach the egg.",
                },
                {
                  id: "BIO11-CH07-T12",
                  topicNumber: 12,
                  topic: "Gymnosperms",
                  brief:
                    "Gymnosperms are vascular seed-producing plants whose seeds are not enclosed within an ovary or fruit. Many are woody, long-lived trees or shrubs, such as pines, cedars, firs, and cycads. They generally produce seeds in cones or similar reproductive structures and do not form true flowers or fruits like angiosperms. Their adaptations, including pollen and seeds, allow reproduction with less dependence on external water than in seedless plants.",
                },
                {
                  id: "BIO11-CH07-T13",
                  topicNumber: 13,
                  topic: "Characteristics of gymnosperms",
                  brief:
                    "Gymnosperms possess vascular tissues, true roots, stems, and leaves, and reproduce through seeds that are typically exposed on cone scales or other structures. Many species have needle-like or scale-like leaves and are adapted to cold or dry conditions. Their dominant plant body is the sporophyte, and their gametophytes are highly reduced. Pollination commonly occurs through wind, although reproductive features differ among groups.",
                },
                {
                  id: "BIO11-CH07-T14",
                  topicNumber: 14,
                  topic: "Reproductive structures of gymnosperms",
                  brief:
                    "Many gymnosperms reproduce using male and female cones, also called strobili. Male cones produce pollen grains containing the male gametophyte, while ovules are found on the scales of female cones in conifers. After pollination, a pollen grain delivers the male reproductive cell toward the egg, and fertilization produces an embryo. The ovule develops into a seed that is not enclosed in a fruit.",
                },
                {
                  id: "BIO11-CH07-T15",
                  topicNumber: 15,
                  topic: "Angiosperms",
                  brief:
                    "Angiosperms are flowering plants and form the largest and most diverse group of living plants. They possess vascular tissues and produce flowers, with ovules enclosed within an ovary. After fertilization, the ovules develop into seeds and the ovary commonly develops into a fruit. Double fertilization, which produces an embryo and endosperm, is a characteristic feature of angiosperms.",
                },
                {
                  id: "BIO11-CH07-T16",
                  topicNumber: 16,
                  topic: "Monocotyledons and dicotyledons",
                  brief:
                    "Monocotyledons and dicotyledons are traditional groups used to compare flowering plants. Monocots generally have one cotyledon, parallel leaf venation, scattered vascular bundles in stems, and flower parts in threes. Traditional dicots generally have two cotyledons, net-like leaf venation, vascular bundles arranged in a ring, and flower parts in fours or fives. Modern classification recognizes that traditional dicots are not one complete evolutionary group and commonly uses the term eudicots for a major related group.",
                },
                {
                  id: "BIO11-CH07-T17",
                  topicNumber: 17,
                  topic: "Alternation of generations",
                  brief:
                    "Alternation of generations is a life-cycle pattern in which a plant alternates between a haploid gametophyte generation and a diploid sporophyte generation. The gametophyte produces gametes by mitosis, and fertilization forms a diploid zygote that develops into the sporophyte. The sporophyte produces haploid spores by meiosis, and these spores grow into new gametophytes. The relative size and independence of these generations differ among plant groups.",
                },
                {
                  id: "BIO11-CH07-T18",
                  topicNumber: 18,
                  topic: "Evolution of plants",
                  brief:
                    "Plant evolution describes the development and diversification of plant lineages over geological time. Early plant ancestors were related to green algae, and the evolution of land plants involved adaptations such as protection of embryos, resistant spores, and structures that reduce water loss. Later developments included vascular tissues, roots and leaves, pollen, seeds, flowers, and fruits. These innovations helped plants occupy a wide range of terrestrial habitats.",
                },
                {
                  id: "BIO11-CH07-T19",
                  topicNumber: 19,
                  topic:
                    "Ecological and economic importance of major plant groups",
                  brief:
                    "Major plant groups support ecosystems and human societies in different ways. Algae produce organic matter and oxygen in aquatic habitats; bryophytes contribute to soil formation, moisture retention, and some peatland ecosystems; pteridophytes provide ground cover and habitat; gymnosperms supply timber, paper materials, resins, and ornamental plants; and angiosperms provide food, fibres, medicines, timber, and many other products. Plants also absorb carbon dioxide, support food webs, protect soil, and help maintain ecosystem balance.",
                },
              ],
            },
            {
              id: "BIO11-CH08",
              chapterNumber: 8,
              chapterName: "Morphology of Angiosperms",
              topics: [
                {
                  id: "BIO11-CH08-T01",
                  topicNumber: 1,
                  topic: "External structure of flowering plants",
                  brief:
                    "Morphology is the study of the external form and structure of plants. A typical flowering plant has a root system and a shoot system. The root system usually anchors the plant and absorbs water and minerals, while the shoot system includes the stem, leaves, flowers, fruits, and seeds. These organs are adapted to perform functions such as support, photosynthesis, reproduction, and dispersal.",
                },
                {
                  id: "BIO11-CH08-T02",
                  topicNumber: 2,
                  topic: "Root systems",
                  brief:
                    "A root system consists of all the roots of a plant and generally anchors the plant, absorbs water and minerals, and may store food. The two commonly described root systems are taproot and fibrous root systems. A taproot develops from the primary root and usually has one prominent main root with lateral branches, while a fibrous root system consists of many similarly sized roots arising near the base of the stem.",
                },
                {
                  id: "BIO11-CH08-T03",
                  topicNumber: 3,
                  topic: "Types of roots",
                  brief:
                    "Roots are commonly classified into taproots, fibrous roots, and adventitious roots according to their origin and structure. Taproots develop from the primary root, as in mustard; fibrous roots form clusters of slender roots, as in grasses; and adventitious roots arise from plant parts other than the primary root, such as stems or leaves. Root types differ according to the plant species and its growing conditions.",
                },
                {
                  id: "BIO11-CH08-T04",
                  topicNumber: 4,
                  topic: "Modifications of roots",
                  brief:
                    "Roots may become modified to perform functions beyond absorption and anchorage. Storage roots, such as those of carrot and sweet potato, store food. Supporting roots, such as prop roots in banyan, provide additional mechanical support. Pneumatophores in some mangroves help with gas exchange in waterlogged soil, while parasitic roots in certain plants obtain nutrients from host plants. These modifications help plants survive in different environments.",
                },
                {
                  id: "BIO11-CH08-T05",
                  topicNumber: 5,
                  topic: "Stem structure",
                  brief:
                    "The stem is the main axis of the shoot system and supports leaves, buds, flowers, and fruits. It contains nodes, where leaves or branches arise, and internodes, the regions between successive nodes. A stem transports water, minerals, and organic food through vascular tissues and may also store food or carry out photosynthesis. Terminal and axillary buds contribute to shoot growth and branching.",
                },
                {
                  id: "BIO11-CH08-T06",
                  topicNumber: 6,
                  topic: "Types of stems",
                  brief:
                    "Stems may be classified as aerial, subaerial, or underground according to their position and growth habit. Aerial stems grow above the soil, subaerial stems partly spread along or just below the surface, and underground stems grow below the soil. Examples include ordinary upright stems, runners such as those of strawberry, and underground structures such as rhizomes of ginger. These types support different functions, including climbing, spreading, storage, and vegetative reproduction.",
                },
                {
                  id: "BIO11-CH08-T07",
                  topicNumber: 7,
                  topic: "Modifications of stems",
                  brief:
                    "Stems may be modified for storage, protection, support, photosynthesis, or vegetative reproduction. Underground stem modifications include rhizomes, tubers, bulbs, and corms. A potato tuber stores food and has buds called eyes, while ginger has a rhizome. Aerial stem modifications include tendrils for climbing, thorns for protection, and flattened green stems such as those of some cacti for photosynthesis.",
                },
                {
                  id: "BIO11-CH08-T08",
                  topicNumber: 8,
                  topic: "Leaf structure",
                  brief:
                    "A typical leaf consists of a leaf base, petiole, and lamina or leaf blade, although some leaves lack a petiole. The lamina is broad and usually contains a midrib and veins that transport substances and provide support. Leaves are the main organs of photosynthesis and also participate in gas exchange and transpiration through stomata. Their shape and internal structure are adapted to the plant's environment.",
                },
                {
                  id: "BIO11-CH08-T09",
                  topicNumber: 9,
                  topic: "Leaf venation",
                  brief:
                    "Leaf venation is the arrangement of veins and veinlets in the leaf blade. Reticulate venation forms a network of veins and is common in many dicot plants, such as mango. Parallel venation has veins that run alongside one another and is common in many monocots, such as grasses. Venation supports the leaf and helps transport water, minerals, and manufactured food.",
                },
                {
                  id: "BIO11-CH08-T10",
                  topicNumber: 10,
                  topic: "Phyllotaxy",
                  brief:
                    "Phyllotaxy is the arrangement of leaves on a stem or branch. In alternate phyllotaxy, one leaf arises at each node, as in mustard; in opposite phyllotaxy, two leaves arise opposite each other at a node, as in guava; and in whorled phyllotaxy, three or more leaves arise at a node, as in Alstonia. Leaf arrangement can help identify plant species and may reduce overlap to improve light exposure.",
                },
                {
                  id: "BIO11-CH08-T11",
                  topicNumber: 11,
                  topic: "Leaf modifications",
                  brief:
                    "Leaves may be modified to perform specialized functions. Leaf tendrils help plants climb, as in pea; spines provide protection and reduce water loss, as in cactus; and fleshy leaves store water or food, as in Aloe and onion. In insectivorous plants such as pitcher plants, leaves are modified to trap insects and obtain additional nutrients. These adaptations help plants survive under particular environmental conditions.",
                },
                {
                  id: "BIO11-CH08-T12",
                  topicNumber: 12,
                  topic: "Inflorescence",
                  brief:
                    "Inflorescence refers to the arrangement of flowers on a floral axis. In a racemose inflorescence, the main axis continues growing and flowers generally develop in an acropetal order, with older flowers towards the base and younger ones towards the apex. In a cymose inflorescence, the main axis ends in a flower and growth is limited, with older flowers generally towards the apex or centre. Common forms include racemes, spikes, umbels, capitula, cymes, and panicles.",
                },
                {
                  id: "BIO11-CH08-T13",
                  topicNumber: 13,
                  topic: "Structure of a flower",
                  brief:
                    "A flower is the reproductive structure of an angiosperm. A typical complete flower has four floral whorls arranged on the receptacle: calyx, corolla, androecium, and gynoecium. The calyx consists of sepals, the corolla of petals, the androecium of stamens, and the gynoecium of carpels. Flowers may be complete or incomplete, bisexual or unisexual, and regular or irregular depending on their structures and symmetry.",
                },
                {
                  id: "BIO11-CH08-T14",
                  topicNumber: 14,
                  topic: "Calyx and corolla",
                  brief:
                    "The calyx is the outermost floral whorl, usually made of sepals that protect the developing flower bud. The corolla is the whorl of petals, which may be brightly coloured, scented, or shaped to attract pollinators. Sepals and petals may be separate or fused. In some flowers, sepals and petals are not clearly differentiated and are collectively called tepals.",
                },
                {
                  id: "BIO11-CH08-T15",
                  topicNumber: 15,
                  topic: "Androecium",
                  brief:
                    "The androecium is the male reproductive whorl of a flower and consists of stamens. A typical stamen has a filament that supports an anther. The anther contains pollen sacs where pollen grains develop; pollen carries the male gametophyte. Stamens may be free or fused, and their number and arrangement are useful features in plant identification.",
                },
                {
                  id: "BIO11-CH08-T16",
                  topicNumber: 16,
                  topic: "Gynoecium",
                  brief:
                    "The gynoecium is the female reproductive part of a flower and consists of one or more carpels. A typical carpel has a stigma, style, and ovary. The stigma receives pollen, the style provides a pathway for pollen-tube growth, and the ovary contains ovules. After fertilization, ovules generally develop into seeds and the ovary commonly develops into a fruit.",
                },
                {
                  id: "BIO11-CH08-T17",
                  topicNumber: 17,
                  topic: "Placentation",
                  brief:
                    "Placentation is the arrangement of ovules inside the ovary. Common types include marginal, axile, parietal, free-central, basal, and superficial placentation. In marginal placentation, ovules are attached along the margin of a single carpel; in axile placentation, they are attached to a central axis in a multilocular ovary; and in parietal placentation, they are attached to the inner ovary wall. Placentation is an important feature for describing and identifying flowering plants.",
                },
                {
                  id: "BIO11-CH08-T18",
                  topicNumber: 18,
                  topic: "Types of fruits",
                  brief:
                    "A fruit usually develops from the ovary of a flower after fertilization and contains or protects the seeds. Fruits are commonly classified as simple, aggregate, or multiple according to how they develop. Simple fruits develop from a single ovary, aggregate fruits from several free carpels of one flower, and multiple fruits from the ovaries of an inflorescence. Fruits may also be described as fleshy or dry, and dry fruits may be dehiscent or indehiscent depending on whether they open at maturity.",
                },
                {
                  id: "BIO11-CH08-T19",
                  topicNumber: 19,
                  topic: "Seed structure",
                  brief:
                    "A seed develops from a fertilized ovule and generally contains an embryo, a protective seed coat, and stored food or tissue that supplies nutrients during germination. The embryo includes an embryonic root called the radicle and an embryonic shoot called the plumule, along with one or more cotyledons. Depending on the species, food may be stored in the endosperm or cotyledons. Under suitable conditions of water, oxygen, and temperature, a viable seed can germinate and develop into a seedling.",
                },
                {
                  id: "BIO11-CH08-T20",
                  topicNumber: 20,
                  topic: "Monocot and dicot seed differences",
                  brief:
                    "Monocot seeds contain one cotyledon, whereas traditional dicot seeds contain two. In maize, a monocot, the single cotyledon is called the scutellum and food is commonly stored in the endosperm. In bean, a dicot, two large cotyledons usually store much of the food, and the mature seed commonly has little remaining endosperm. These are typical patterns, but food-storage arrangements vary among plant species.",
                },
                {
                  id: "BIO11-CH08-T21",
                  topicNumber: 21,
                  topic: "Floral formula",
                  brief:
                    "A floral formula is a compact system of symbols and numbers used to describe the structure of a flower. It can indicate floral symmetry, whether the flower is bisexual or unisexual, the number and fusion of sepals and petals, the number of stamens and carpels, and the position of the ovary. Standard symbols and conventions allow floral structures to be summarized and compared between plant families.",
                },
                {
                  id: "BIO11-CH08-T22",
                  topicNumber: 22,
                  topic: "Floral diagram",
                  brief:
                    "A floral diagram is a schematic drawing showing the number, arrangement, and relative positions of floral parts as viewed from above. It represents structures such as bracts, sepals, petals, stamens, and carpels, including their fusion or arrangement when relevant. Floral diagrams help students understand flower organization and compare the characteristic floral structures of different plant families.",
                },
                {
                  id: "BIO11-CH08-T23",
                  topicNumber: 23,
                  topic: "Economic importance of plant morphology",
                  brief:
                    "Knowledge of plant morphology helps identify useful and harmful plants and understand how plant structures support their functions. Root and stem modifications provide food and storage products, leaves supply vegetables, spices, and medicinal materials, and flowers, fruits, and seeds provide food and commercial products. Morphological features are also useful in agriculture, horticulture, plant breeding, taxonomy, and the selection of crops suited to particular purposes.",
                },
              ],
            },
            {
              id: "BIO11-CH09",
              chapterNumber: 9,
              chapterName: "Plant Anatomy",
              topics: [
                {
                  id: "BIO11-CH09-T01",
                  topicNumber: 1,
                  topic: "Plant tissues",
                  brief:
                    "Plant tissues are groups of cells that work together to perform specific functions in a plant. They are broadly classified into meristematic tissues, which actively divide to produce new cells, and permanent tissues, whose cells have generally differentiated to perform specialized functions. Plant tissues provide growth, support, protection, storage, photosynthesis, and transport of water, minerals, and food.",
                },
                {
                  id: "BIO11-CH09-T02",
                  topicNumber: 2,
                  topic: "Meristematic tissues",
                  brief:
                    "Meristematic tissues consist of actively dividing, relatively undifferentiated cells responsible for plant growth. Their cells generally have thin walls, dense cytoplasm, prominent nuclei, and little or no large central vacuole. Apical meristems occur at root and shoot tips and increase plant length; intercalary meristems occur near nodes or leaf bases in certain plants; and lateral meristems increase the thickness or girth of stems and roots.",
                },
                {
                  id: "BIO11-CH09-T03",
                  topicNumber: 3,
                  topic: "Permanent tissues",
                  brief:
                    "Permanent tissues develop when meristematic cells differentiate and become specialized for particular functions. Their cells may be living or dead at maturity and generally have limited or no ability to divide. Permanent tissues include simple tissues, made mainly of one type of cell, and complex tissues, made of different cell types working together. They perform functions such as protection, photosynthesis, storage, mechanical support, and transport.",
                },
                {
                  id: "BIO11-CH09-T04",
                  topicNumber: 4,
                  topic: "Simple permanent tissues",
                  brief:
                    "Simple permanent tissues consist mainly of one type of cell. The three principal types are parenchyma, collenchyma, and sclerenchyma. Parenchyma consists of living, usually thin-walled cells involved in storage, photosynthesis, and repair. Collenchyma consists of living cells with unevenly thickened walls that provide flexible support to growing plant parts. Sclerenchyma generally consists of cells with thick, lignified walls that provide strength and rigidity; its fibres and sclereids are often dead at maturity.",
                },
                {
                  id: "BIO11-CH09-T05",
                  topicNumber: 5,
                  topic: "Complex permanent tissues",
                  brief:
                    "Complex permanent tissues contain different kinds of cells that work together to perform a common function, mainly transport. Xylem conducts water and dissolved minerals, while phloem transports sugars and other organic substances. These tissues contain conducting elements as well as supporting and associated cells. Together, they form the vascular tissues of roots, stems, and leaves.",
                },
                {
                  id: "BIO11-CH09-T06",
                  topicNumber: 6,
                  topic: "Xylem",
                  brief:
                    "Xylem is a vascular tissue that transports water and dissolved minerals, mainly from roots to stems and leaves, and also provides mechanical support. Its main elements are tracheids, vessels, xylem fibres, and xylem parenchyma. Tracheids and vessels are the principal conducting elements and are generally dead at maturity, while xylem parenchyma is living and may store substances. Vessels are especially well developed in most angiosperms, although their distribution varies among plant groups.",
                },
                {
                  id: "BIO11-CH09-T07",
                  topicNumber: 7,
                  topic: "Phloem",
                  brief:
                    "Phloem is a vascular tissue that transports sugars and other organic nutrients from sources, such as mature leaves, to sinks, such as growing roots, fruits, and storage organs. In angiosperms, its main components are sieve-tube elements, companion cells, phloem parenchyma, and phloem fibres. Sieve-tube elements conduct food, while companion cells help maintain and regulate their activities. Unlike the usual upward movement of water in xylem, phloem transport can occur in different directions in different sieve tubes according to the plant's needs.",
                },
                {
                  id: "BIO11-CH09-T08",
                  topicNumber: 8,
                  topic: "Epidermal tissue system",
                  brief:
                    "The epidermal tissue system forms the outer protective covering of young plant organs. It commonly includes the epidermis, stomata, and epidermal outgrowths such as root hairs and trichomes. The cuticle on many aerial surfaces reduces water loss, while stomata regulate gas exchange and transpiration. Root hairs increase the surface area available for absorbing water and minerals from the soil.",
                },
                {
                  id: "BIO11-CH09-T09",
                  topicNumber: 9,
                  topic: "Ground tissue system",
                  brief:
                    "The ground tissue system includes plant tissues other than the epidermal and vascular systems. It is commonly made up of parenchyma, collenchyma, and sclerenchyma and may form the cortex, pith, mesophyll, and other regions of plant organs. Its functions include photosynthesis, food and water storage, and mechanical support. The exact arrangement of ground tissues differs among roots, stems, and leaves.",
                },
                {
                  id: "BIO11-CH09-T10",
                  topicNumber: 10,
                  topic: "Vascular tissue system",
                  brief:
                    "The vascular tissue system consists mainly of xylem and phloem, which transport water, minerals, and organic nutrients throughout the plant. These tissues occur in vascular bundles in stems and leaves and in characteristic arrangements within roots. In a collateral vascular bundle, xylem and phloem lie on the same radius, usually with phloem towards the outside. Vascular bundles may be open when cambium is present between xylem and phloem, or closed when that cambium is absent.",
                },
                {
                  id: "BIO11-CH09-T11",
                  topicNumber: 11,
                  topic: "Anatomy of roots",
                  brief:
                    "Root anatomy describes the internal arrangement of tissues from the outer surface towards the centre. A typical young root has an epidermis or epiblema, cortex, endodermis, pericycle, and central vascular tissues. The endodermis helps regulate the movement of water and dissolved substances into the vascular cylinder, while the pericycle can give rise to lateral roots. Root xylem and phloem are commonly arranged in alternating patches, and the number and arrangement of xylem groups vary between plant types.",
                },
                {
                  id: "BIO11-CH09-T12",
                  topicNumber: 12,
                  topic: "Anatomy of stems",
                  brief:
                    "Stem anatomy involves the arrangement of epidermal, ground, and vascular tissues. A typical young stem has an outer epidermis, ground tissues that may be differentiated into cortex and pith, and vascular bundles containing xylem and phloem. In many dicot stems, vascular bundles form a ring and have cambium between xylem and phloem. In many monocot stems, vascular bundles are scattered through the ground tissue and are usually closed, so typical secondary growth is generally absent.",
                },
                {
                  id: "BIO11-CH09-T13",
                  topicNumber: 13,
                  topic: "Anatomy of leaves",
                  brief:
                    "Leaf anatomy is adapted mainly for photosynthesis, gas exchange, and transpiration. A typical leaf has an upper and lower epidermis, mesophyll tissue, and vascular bundles within the veins. In many dicot leaves, the mesophyll is differentiated into palisade mesophyll, which contains many chloroplasts, and spongy mesophyll, which has air spaces that facilitate gas exchange. Many monocot leaves have a less distinctly differentiated mesophyll and parallel veins. Stomatal distribution varies among species and leaf environments.",
                },
                {
                  id: "BIO11-CH09-T14",
                  topicNumber: 14,
                  topic: "Dicot and monocot root differences",
                  brief:
                    "Typical dicot and monocot roots differ in their vascular arrangement and central tissues. In a typical dicot root, xylem often forms a star-shaped pattern with phloem between its arms, and the pith is small or inconspicuous. In a typical monocot root, there are usually many xylem groups arranged around a relatively large central pith. Secondary growth is common in many dicot roots but generally absent in typical monocot roots. These are common patterns, and anatomical details vary among species.",
                },
                {
                  id: "BIO11-CH09-T15",
                  topicNumber: 15,
                  topic: "Dicot and monocot stem differences",
                  brief:
                    "Typical dicot and monocot stems differ in the distribution and structure of their vascular bundles. In many dicot stems, bundles are arranged in a ring, the ground tissue is often differentiated into cortex and pith, and bundles are open because cambium is present. In many monocot stems, bundles are scattered in the ground tissue and are usually closed because cambium is absent. Consequently, ordinary secondary growth is common in many dicots but uncommon in typical monocots.",
                },
                {
                  id: "BIO11-CH09-T16",
                  topicNumber: 16,
                  topic: "Secondary growth",
                  brief:
                    "Secondary growth is the increase in thickness or girth of stems and roots, mainly due to the activity of lateral meristems. In many woody dicots and gymnosperms, the vascular cambium produces secondary xylem towards the inside and secondary phloem towards the outside. The cork cambium produces protective tissues that replace the original epidermis as the organ expands. Secondary growth contributes to the formation of wood and bark and helps perennial plants become stronger and thicker.",
                },
                {
                  id: "BIO11-CH09-T17",
                  topicNumber: 17,
                  topic: "Vascular cambium",
                  brief:
                    "Vascular cambium is a lateral meristem responsible for producing secondary vascular tissues. Its cell divisions generate secondary xylem towards the inside and secondary phloem towards the outside. In many dicot stems, the cambium within vascular bundles joins with interfascicular cambium to form a continuous cambial ring. Continued cambial activity increases stem or root girth and contributes to the production of wood and inner bark tissues.",
                },
                {
                  id: "BIO11-CH09-T18",
                  topicNumber: 18,
                  topic: "Cork cambium",
                  brief:
                    "Cork cambium, also called phellogen, is a lateral meristem that forms part of the protective periderm during secondary growth. It commonly produces cork cells, or phellem, towards the outside and phelloderm towards the inside. Cork cells usually become impregnated with suberin, making them relatively waterproof and protective. The periderm helps reduce water loss and protects older stems and roots from physical injury and pathogens.",
                },
                {
                  id: "BIO11-CH09-T19",
                  topicNumber: 19,
                  topic: "Annual rings",
                  brief:
                    "Annual rings are visible layers of secondary xylem formed during successive periods of growth in many trees growing in seasonal climates. Differences in the size and wall thickness of cells produced during favourable and less favourable growing periods can create contrasting bands called earlywood and latewood. A ring often represents approximately one year's growth, so ring counts may help estimate a tree's age. However, unusual climates and growth conditions can produce incomplete or irregular rings, so interpretation requires care.",
                },
                {
                  id: "BIO11-CH09-T20",
                  topicNumber: 20,
                  topic: "Wood and bark",
                  brief:
                    "Wood is mainly secondary xylem produced by the vascular cambium and provides support while conducting water and minerals. In many woody plants, older inner wood becomes heartwood, which is generally non-conducting, while the younger outer sapwood continues to conduct water. Bark is commonly used for tissues outside the vascular cambium, including secondary phloem and protective periderm. Bark protects the plant, and its structure and thickness vary with species and age.",
                },
                {
                  id: "BIO11-CH09-T21",
                  topicNumber: 21,
                  topic: "Importance of plant anatomy",
                  brief:
                    "Plant anatomy helps explain how the internal structures of plants support growth, transport, photosynthesis, protection, and reproduction. It is useful for distinguishing plant groups, identifying species, understanding adaptations to different environments, and recognizing healthy or diseased tissues. Anatomical knowledge also contributes to agriculture, forestry, horticulture, pharmacognosy, and the study of wood and other plant products. Comparing root, stem, and leaf tissues helps students connect plant structure with function.",
                },
              ],
            },
            {
              id: "BIO11-CH10",
              chapterNumber: 10,
              chapterName: "Plant Physiology",
              topics: [
                {
                  id: "BIO11-CH10-T01",
                  topicNumber: 1,
                  topic: "Water relations in plants",
                  brief:
                    "Water relations describe how plants absorb, transport, use, and lose water. Water is essential for photosynthesis, mineral transport, cell expansion, temperature regulation, and maintaining turgidity. Plant water relations depend on processes such as diffusion, osmosis, transpiration, and water movement through vascular tissues. Maintaining an appropriate water balance is necessary for normal growth and survival.",
                },
                {
                  id: "BIO11-CH10-T02",
                  topicNumber: 2,
                  topic: "Diffusion",
                  brief:
                    "Diffusion is the net movement of molecules or ions from a region of higher concentration to a region of lower concentration due to their random motion. It continues until the substances become more evenly distributed, provided no other forces maintain a concentration difference. In plants, diffusion helps gases such as carbon dioxide and oxygen move through stomata and internal air spaces. The rate of diffusion is influenced by factors such as the concentration gradient, temperature, and distance travelled.",
                },
                {
                  id: "BIO11-CH10-T03",
                  topicNumber: 3,
                  topic: "Osmosis",
                  brief:
                    "Osmosis is the net movement of water across a selectively permeable membrane from a region of higher water potential to a region of lower water potential. Water enters plant cells when the surrounding solution has a higher water potential than the cell contents, causing the cells to become turgid. Water may leave cells when they are placed in a solution with lower water potential. Osmosis is important in water absorption by roots, maintenance of cell turgidity, and movement of water between plant cells.",
                },
                {
                  id: "BIO11-CH10-T04",
                  topicNumber: 4,
                  topic: "Plasmolysis",
                  brief:
                    "Plasmolysis occurs when a plant cell loses water by osmosis after being placed in a sufficiently concentrated solution. The protoplast shrinks and pulls away from the cell wall as the plasma membrane follows the contracting cell contents. The cell wall usually retains its shape, although the living contents shrink. Plasmolysis demonstrates the role of osmosis and can be reversed through deplasmolysis if the cell is placed in a suitable dilute solution and remains viable.",
                },
                {
                  id: "BIO11-CH10-T05",
                  topicNumber: 5,
                  topic: "Water potential",
                  brief:
                    "Water potential is a measure of the potential energy of water relative to pure water under specified conditions. It helps predict the direction in which water will move: water generally moves from higher water potential to lower water potential. Solute potential lowers water potential, while pressure potential can increase it. In plant physiology, water potential is useful for explaining osmosis, water uptake by roots, and movement of water through plant tissues.",
                },
                {
                  id: "BIO11-CH10-T06",
                  topicNumber: 6,
                  topic: "Absorption of water by roots",
                  brief:
                    "Plants absorb most of their water from the soil through root hairs, which increase the surface area in contact with soil water. Water enters root-hair cells mainly by osmosis when the water potential gradient favours inward movement. It then passes through the cortex and reaches the xylem, which transports it to the shoot. Water absorption depends on soil moisture, oxygen availability, temperature, root health, and the concentration of dissolved substances in the soil and root cells.",
                },
                {
                  id: "BIO11-CH10-T07",
                  topicNumber: 7,
                  topic: "Pathways of water movement",
                  brief:
                    "Water moves across roots through three commonly described pathways: the apoplast, symplast, and transmembrane pathways. In the apoplast pathway, water travels through cell walls and intercellular spaces without crossing plasma membranes at each step. In the symplast pathway, water moves through the cytoplasm of connected cells via plasmodesmata. In the transmembrane pathway, water repeatedly crosses cell membranes as it passes from cell to cell. The Casparian strip in the root endodermis restricts apoplastic movement and helps regulate entry into the vascular tissues.",
                },
                {
                  id: "BIO11-CH10-T08",
                  topicNumber: 8,
                  topic: "Ascent of sap",
                  brief:
                    "Ascent of sap is the upward movement of water and dissolved minerals from roots to aerial parts through the xylem. The main explanation for this movement in most tall plants is the cohesion-tension mechanism. Transpiration from leaf surfaces creates tension in the xylem, while cohesion between water molecules and adhesion to xylem walls help maintain a continuous water column. Root pressure and capillary effects may contribute under some conditions, but they do not adequately explain water transport in tall trees on their own.",
                },
                {
                  id: "BIO11-CH10-T09",
                  topicNumber: 9,
                  topic: "Transpiration",
                  brief:
                    "Transpiration is the loss of water vapour from the aerial parts of plants, mainly through stomata. Smaller amounts may be lost through the cuticle and lenticels. Transpiration helps generate the pull that moves water through the xylem, assists mineral transport, and contributes to cooling the plant. However, excessive transpiration can cause water stress and wilting when water loss exceeds absorption.",
                },
                {
                  id: "BIO11-CH10-T10",
                  topicNumber: 10,
                  topic: "Factors affecting transpiration",
                  brief:
                    "Transpiration is influenced by environmental conditions and plant characteristics. Higher temperature generally increases evaporation, while greater humidity reduces the water-vapour gradient between the leaf and surrounding air. Wind can increase transpiration by removing moist air near the leaf, although very strong conditions may cause stomatal closure. Light commonly promotes stomatal opening, while soil-water shortage often reduces transpiration through stomatal closure. Leaf area, cuticle thickness, stomatal number, and stomatal distribution also affect water loss.",
                },
                {
                  id: "BIO11-CH10-T11",
                  topicNumber: 11,
                  topic: "Stomatal regulation",
                  brief:
                    "Stomata are small pores in the epidermis, usually surrounded by two guard cells that regulate their opening and closing. When guard cells accumulate solutes and take up water, they become turgid and the pore generally opens. When they lose water and become less turgid, the pore closes. Light, carbon dioxide concentration, humidity, water availability, and plant hormones such as abscisic acid influence stomatal behaviour. Stomatal regulation balances carbon dioxide uptake for photosynthesis against water loss through transpiration.",
                },
                {
                  id: "BIO11-CH10-T12",
                  topicNumber: 12,
                  topic: "Translocation of food",
                  brief:
                    "Translocation of food is the movement of organic substances produced or stored in one part of a plant to other parts where they are needed or stored. Sugars made in photosynthetic leaves may move to growing shoots, roots, fruits, seeds, and storage organs. These substances are transported mainly through the phloem. Translocation supports growth, respiration, reproduction, storage, and the development of plant organs.",
                },
                {
                  id: "BIO11-CH10-T13",
                  topicNumber: 13,
                  topic: "Phloem transport",
                  brief:
                    "Phloem transport distributes sugars, especially sucrose, and other organic substances between sources and sinks. A source releases sugars, such as a mature photosynthesizing leaf, while a sink uses or stores them, such as a growing root or developing fruit. In the pressure-flow model, sugar loading into sieve tubes lowers water potential, causing water to enter from the xylem and increase pressure. This pressure drives phloem sap towards sinks, where sugars are unloaded and used or stored. Different sieve tubes can transport materials in different directions at the same time.",
                },
                {
                  id: "BIO11-CH10-T14",
                  topicNumber: 14,
                  topic: "Mineral nutrition",
                  brief:
                    "Mineral nutrition is the process by which plants obtain and use inorganic elements required for growth and metabolism. Most mineral nutrients are absorbed by roots from the soil as dissolved ions. They are needed for processes such as chlorophyll formation, enzyme activity, protein synthesis, membrane function, and energy transfer. Plants require some elements in relatively large amounts and others in very small amounts, but both groups are essential for normal development.",
                },
                {
                  id: "BIO11-CH10-T15",
                  topicNumber: 15,
                  topic: "Essential mineral elements",
                  brief:
                    "Essential mineral elements are nutrients that plants need to complete their life cycle and that cannot be replaced by another element in their specific functions. Macronutrients are required in relatively large amounts and include nitrogen, phosphorus, potassium, calcium, magnesium, and sulfur. Micronutrients are required in smaller amounts and include iron, manganese, zinc, copper, boron, molybdenum, chlorine, and nickel. Carbon, hydrogen, and oxygen are also essential elements, obtained mainly from carbon dioxide and water rather than classified as mineral nutrients absorbed from soil.",
                },
                {
                  id: "BIO11-CH10-T16",
                  topicNumber: 16,
                  topic: "Deficiency symptoms in plants",
                  brief:
                    "Mineral deficiency symptoms occur when plants receive insufficient amounts of essential nutrients. Nitrogen deficiency commonly causes yellowing of older leaves and reduced growth, while phosphorus deficiency may cause poor growth and dark green or purplish coloration. Potassium deficiency can cause yellowing or browning along leaf margins, and magnesium deficiency often produces interveinal chlorosis in older leaves. Iron deficiency commonly causes interveinal chlorosis in younger leaves. Symptoms can overlap, so soil testing and careful diagnosis may be needed to identify the actual cause.",
                },
                {
                  id: "BIO11-CH10-T17",
                  topicNumber: 17,
                  topic: "Photosynthesis",
                  brief:
                    "Photosynthesis is the process by which green plants use light energy to synthesize organic compounds from carbon dioxide and water, releasing oxygen in oxygenic photosynthesis. It occurs mainly in chloroplasts, where chlorophyll and other pigments capture light energy. The light-dependent reactions convert light energy into chemical energy in the form of ATP and NADPH, while carbon fixation uses this energy to produce carbohydrates. Photosynthesis provides food for plants and supports most food chains by converting light energy into chemical energy.",
                },
                {
                  id: "BIO11-CH10-T18",
                  topicNumber: 18,
                  topic: "Chloroplast structure",
                  brief:
                    "Chloroplasts are organelles in plant cells where photosynthesis takes place. Each chloroplast has an outer and inner envelope membrane surrounding a fluid-filled stroma. Inside are flattened membrane sacs called thylakoids, which are often stacked into structures called grana and connected by lamellae. Chlorophyll and the electron-transport components of the light-dependent reactions are located in the thylakoid membranes, while many enzymes involved in carbon fixation occur in the stroma. Chloroplasts also contain their own DNA and ribosomes.",
                },
                {
                  id: "BIO11-CH10-T19",
                  topicNumber: 19,
                  topic: "Light-dependent reactions",
                  brief:
                    "Light-dependent reactions take place in the thylakoid membranes of chloroplasts. Photosystems absorb light energy, exciting electrons that pass through electron carriers. In photosystem II, water is split to replace lost electrons, releasing oxygen and contributing protons. Electron transport helps establish a proton gradient that drives ATP synthesis, while photosystem I supports the production of NADPH. ATP and NADPH provide energy and reducing power for carbon fixation in the Calvin cycle.",
                },
                {
                  id: "BIO11-CH10-T20",
                  topicNumber: 20,
                  topic: "Carbon fixation",
                  brief:
                    "Carbon fixation is the incorporation of inorganic carbon dioxide into organic molecules during photosynthesis. In the Calvin cycle, the enzyme RuBisCO helps attach carbon dioxide to ribulose-1,5-bisphosphate, producing compounds that are converted into 3-phosphoglycerate. Using ATP and NADPH from the light-dependent reactions, the cycle produces glyceraldehyde-3-phosphate, some of which can be used to form carbohydrates. The remaining intermediates regenerate the carbon dioxide acceptor so the cycle can continue.",
                },
                {
                  id: "BIO11-CH10-T21",
                  topicNumber: 21,
                  topic: "C3 pathway",
                  brief:
                    "The C3 pathway, also called the Calvin cycle, is a carbon-fixation pathway in which the first stable product is the three-carbon compound 3-phosphoglycerate. It occurs in the chloroplast stroma and uses ATP and NADPH generated by the light-dependent reactions. Many plants, including rice, wheat, and beans, use the C3 pathway. Under hot, dry conditions, stomatal closure can increase photorespiration in C3 plants because RuBisCO may react with oxygen instead of carbon dioxide, reducing photosynthetic efficiency.",
                },
                {
                  id: "BIO11-CH10-T22",
                  topicNumber: 22,
                  topic: "C4 pathway",
                  brief:
                    "The C4 pathway is a photosynthetic adaptation that initially fixes carbon dioxide into a four-carbon compound, commonly oxaloacetate, in mesophyll cells. Carbon is then transported to bundle-sheath cells, where carbon dioxide is released and used in the Calvin cycle. This separation helps concentrate carbon dioxide around RuBisCO and reduces photorespiration. C4 plants such as maize and sugarcane often perform well in high light and warm conditions, although the pathway requires additional energy compared with the C3 pathway.",
                },
                {
                  id: "BIO11-CH10-T23",
                  topicNumber: 23,
                  topic: "Factors affecting photosynthesis",
                  brief:
                    "Photosynthesis is affected by light intensity and quality, carbon dioxide concentration, temperature, water availability, and the condition of the photosynthetic tissues. Increasing light intensity or carbon dioxide concentration can raise the rate until another factor becomes limiting. Enzyme activity makes photosynthesis sensitive to temperature, while water shortage can cause stomatal closure and reduce carbon dioxide entry. According to the law of limiting factors, the rate is constrained by the factor that is least available relative to the plant's requirements.",
                },
                {
                  id: "BIO11-CH10-T24",
                  topicNumber: 24,
                  topic: "Respiration in plants",
                  brief:
                    "Plant respiration is the process by which cells break down organic molecules, such as glucose, to release energy and make ATP for cellular activities. It occurs in living plant cells, including roots, stems, leaves, flowers, and seeds. In aerobic respiration, glucose is broken down using oxygen, producing carbon dioxide, water, and ATP. Respiration supplies energy for active transport, growth, biosynthesis, cell division, and maintenance; it occurs during both day and night.",
                },
                {
                  id: "BIO11-CH10-T25",
                  topicNumber: 25,
                  topic: "Glycolysis",
                  brief:
                    "Glycolysis is the first major stage of glucose breakdown in cellular respiration and occurs in the cytoplasm. One six-carbon glucose molecule is converted into two three-carbon pyruvate molecules through a series of enzyme-controlled reactions. The pathway produces a net gain of two ATP molecules per glucose and reduces two NAD+ molecules to NADH. Glycolysis does not directly require oxygen, so it can occur under both aerobic and anaerobic conditions.",
                },
                {
                  id: "BIO11-CH10-T26",
                  topicNumber: 26,
                  topic: "Krebs cycle",
                  brief:
                    "The Krebs cycle, also called the citric acid cycle, is a series of reactions that oxidizes acetyl-CoA and occurs in the mitochondrial matrix in eukaryotic plant cells. Acetyl-CoA combines with oxaloacetate to form citrate, which is gradually processed to regenerate oxaloacetate. Each turn releases carbon dioxide and produces reduced coenzymes, mainly NADH and FADH2, along with a small amount of ATP or an equivalent energy-rich molecule. These reduced coenzymes carry high-energy electrons to the electron transport chain.",
                },
                {
                  id: "BIO11-CH10-T27",
                  topicNumber: 27,
                  topic: "Electron transport chain",
                  brief:
                    "The electron transport chain of aerobic respiration is located in the inner mitochondrial membrane. Electrons carried by NADH and FADH2 pass through a series of protein complexes and other carriers. The released energy is used to pump protons across the membrane, creating an electrochemical gradient. As protons flow back through ATP synthase, ATP is produced. Oxygen acts as the final electron acceptor and combines with electrons and protons to form water.",
                },
                {
                  id: "BIO11-CH10-T28",
                  topicNumber: 28,
                  topic: "Aerobic and anaerobic respiration",
                  brief:
                    "Aerobic respiration uses oxygen to support the complete oxidation of glucose to carbon dioxide and water and generally yields much more ATP than fermentation. Anaerobic pathways operate without oxygen; in plant tissues and yeast, alcoholic fermentation converts pyruvate into ethanol and carbon dioxide while regenerating NAD+ so glycolysis can continue. Fermentation yields only the net two ATP produced by glycolysis per glucose. In waterlogged soils, roots may experience oxygen shortage, which can reduce energy production and impair growth.",
                },
                {
                  id: "BIO11-CH10-T29",
                  topicNumber: 29,
                  topic: "Plant growth and development",
                  brief:
                    "Plant growth is a largely irreversible increase in size or dry mass, resulting from cell division, cell expansion, and differentiation. Development includes growth together with changes in form and function throughout the plant life cycle. Plants show primary growth, which increases length through apical meristems, and in many species secondary growth, which increases thickness through lateral meristems. Growth depends on genetic factors and environmental conditions such as light, water, temperature, oxygen, and mineral availability.",
                },
                {
                  id: "BIO11-CH10-T30",
                  topicNumber: 30,
                  topic: "Plant growth regulators",
                  brief:
                    "Plant growth regulators are chemical substances that influence plant growth, development, and responses to the environment. Major naturally occurring groups include auxins, gibberellins, cytokinins, abscisic acid, and ethylene. Auxins promote cell elongation and are involved in apical dominance and root formation; gibberellins promote stem elongation and can stimulate seed germination; cytokinins promote cell division and delay leaf ageing. Abscisic acid helps regulate responses to water stress and promotes seed dormancy in many species, while ethylene influences fruit ripening, leaf abscission, and other developmental responses. Their effects depend on concentration, tissue type, and interactions with other regulators.",
                },
              ],
            },
            {
              id: "BIO11-CH11",
              chapterNumber: 11,
              chapterName: "Plant Reproduction",
              topics: [
                {
                  id: "BIO11-CH11-T01",
                  topicNumber: 1,
                  topic: "Asexual reproduction in plants",
                  brief:
                    "Asexual reproduction is the formation of new plants from a single parent without the fusion of male and female gametes. It usually involves mitotic cell division and produces offspring that are genetically very similar to the parent, except when mutations occur. Common methods include vegetative propagation, fragmentation, and spore formation in suitable plant groups. Asexual reproduction allows rapid multiplication and can preserve desirable characteristics, although it generally produces less genetic variation than sexual reproduction.",
                },
                {
                  id: "BIO11-CH11-T02",
                  topicNumber: 2,
                  topic: "Vegetative propagation",
                  brief:
                    "Vegetative propagation is a type of asexual reproduction in which new plants develop from vegetative parts such as roots, stems, or leaves rather than from seeds. It occurs naturally in many plants and can also be carried out artificially by gardeners and farmers. Examples include potato plants growing from tubers, ginger from rhizomes, and Bryophyllum from buds along leaf margins. Vegetative propagation is useful for multiplying plants quickly and maintaining desirable traits.",
                },
                {
                  id: "BIO11-CH11-T03",
                  topicNumber: 3,
                  topic: "Natural vegetative propagation",
                  brief:
                    "Natural vegetative propagation occurs without deliberate human intervention when specialized or ordinary plant parts produce new individuals. Underground stems such as rhizomes, tubers, bulbs, and corms can produce shoots and roots; examples include ginger, potato, onion, and colocasia. Runners and stolons spread horizontally and form new plants at nodes, as in strawberry. Some plants, such as Bryophyllum, produce buds on their leaves, while certain plants can also propagate through roots or suckers.",
                },
                {
                  id: "BIO11-CH11-T04",
                  topicNumber: 4,
                  topic: "Artificial vegetative propagation",
                  brief:
                    "Artificial vegetative propagation uses human techniques to produce new plants from roots, stems, leaves, or other vegetative tissues. Common methods include cutting, layering, grafting, and budding. In cutting, a plant part develops roots and shoots; in layering, a stem forms roots while attached to the parent; and in grafting, a shoot or scion is joined to a rooted plant or rootstock. Tissue culture, or micropropagation, can produce many plants from small pieces of tissue under sterile conditions. These methods are widely used in horticulture and agriculture.",
                },
                {
                  id: "BIO11-CH11-T05",
                  topicNumber: 5,
                  topic: "Sexual reproduction in flowering plants",
                  brief:
                    "Sexual reproduction in flowering plants involves the formation of male and female gametes, pollination, fertilisation, and the development of seeds. The anther produces pollen grains containing the male gametophyte, while the ovule contains the female gametophyte or embryo sac. After pollen reaches a receptive stigma, a pollen tube commonly grows towards an ovule and delivers the male gametes. Fertilisation produces the zygote and initiates embryo development, while the ovule generally becomes a seed and the ovary develops into a fruit.",
                },
                {
                  id: "BIO11-CH11-T06",
                  topicNumber: 6,
                  topic: "Structure of the flower",
                  brief:
                    "A flower is the reproductive structure of an angiosperm. A typical flower consists of four whorls: calyx, made of sepals; corolla, made of petals; androecium, made of stamens; and gynoecium, made of carpels. Sepals commonly protect the flower bud, petals may attract pollinators, stamens produce pollen, and carpels contain the ovules. Flowers may be bisexual or unisexual and may be complete or incomplete depending on the presence of the floral whorls.",
                },
                {
                  id: "BIO11-CH11-T07",
                  topicNumber: 7,
                  topic: "Microsporogenesis",
                  brief:
                    "Microsporogenesis is the formation of haploid microspores from diploid microspore mother cells, also called pollen mother cells, by meiosis. It occurs inside the pollen sacs of the anther. Each microspore mother cell commonly produces a tetrad of four haploid microspores. The microspores separate and develop into pollen grains, which contain or give rise to the male gametophyte.",
                },
                {
                  id: "BIO11-CH11-T08",
                  topicNumber: 8,
                  topic: "Megasporogenesis",
                  brief:
                    "Megasporogenesis is the formation of haploid megaspores from a diploid megaspore mother cell through meiosis. It takes place inside the ovule, usually within the nucellus. Meiosis generally produces four haploid megaspores, but in many flowering plants only one remains functional while the others degenerate. The functional megaspore usually develops into the embryo sac through successive mitotic divisions.",
                },
                {
                  id: "BIO11-CH11-T09",
                  topicNumber: 9,
                  topic: "Pollen grain development",
                  brief:
                    "Pollen grain development begins when haploid microspores mature inside the anther. Each microspore develops a protective wall, commonly with an outer exine and an inner intine, and usually forms a vegetative cell and a generative cell. The generative cell divides to produce two male gametes, either before pollen release or later during pollen-tube growth, depending on the species. Pollen grains carry the male gametophyte to the stigma during pollination.",
                },
                {
                  id: "BIO11-CH11-T10",
                  topicNumber: 10,
                  topic: "Embryo sac development",
                  brief:
                    "The embryo sac is the female gametophyte of a flowering plant and develops inside the ovule from a functional haploid megaspore. In the common Polygonum-type pattern, the functional megaspore undergoes three mitotic divisions to produce eight nuclei. These are organized into seven cells: one egg cell, two synergids, three antipodal cells, and one central cell containing two polar nuclei. The egg participates in fertilisation, synergids help guide the pollen tube, and the central cell participates in endosperm formation.",
                },
                {
                  id: "BIO11-CH11-T11",
                  topicNumber: 11,
                  topic: "Pollination",
                  brief:
                    "Pollination is the transfer of pollen grains from an anther to a receptive stigma of a flower. It is an essential step in the sexual reproduction of flowering plants because it allows pollen to germinate and deliver male gametes towards the ovule. Pollination may occur within the same flower, between flowers on the same plant, or between flowers on different plants of the same species. Its success depends on pollen viability, stigma receptivity, and suitable environmental or biological conditions.",
                },
                {
                  id: "BIO11-CH11-T12",
                  topicNumber: 12,
                  topic: "Self-pollination",
                  brief:
                    "Self-pollination occurs when pollen reaches the stigma of the same flower or another flower on the same plant. Autogamy refers to transfer within the same flower, while geitonogamy refers to transfer between different flowers on the same plant. Self-pollination can ensure seed production when pollinators or mates are scarce and often maintains parental characteristics. However, it generally produces less genetic variation than cross-pollination and may increase the expression of harmful recessive alleles.",
                },
                {
                  id: "BIO11-CH11-T13",
                  topicNumber: 13,
                  topic: "Cross-pollination",
                  brief:
                    "Cross-pollination occurs when pollen is transferred from a flower on one plant to a flower on another plant of the same species. It usually requires an agent such as wind, water, or an animal. Cross-pollination can increase genetic variation among offspring and may improve adaptability to changing environmental conditions. Plants may promote cross-pollination through differences in the timing of anther and stigma maturity, spatial separation of reproductive parts, or genetic self-incompatibility.",
                },
                {
                  id: "BIO11-CH11-T14",
                  topicNumber: 14,
                  topic: "Pollinating agents",
                  brief:
                    "Pollinating agents carry pollen from anthers to stigmas. Abiotic agents include wind and water, while biotic agents include insects, birds, bats, and other animals. Wind-pollinated flowers often produce abundant, lightweight pollen and may have exposed anthers and feathery stigmas. Animal-pollinated flowers commonly have features such as colour, scent, nectar, or shapes that attract particular visitors. These adaptations improve the chances that pollen will reach a compatible stigma.",
                },
                {
                  id: "BIO11-CH11-T15",
                  topicNumber: 15,
                  topic: "Pollen-pistil interaction",
                  brief:
                    "Pollen-pistil interaction refers to the biological events that occur when pollen lands on the stigma and encounters the tissues of the pistil. The stigma and style help determine whether pollen is compatible and suitable for fertilisation. Compatible pollen can hydrate and germinate, forming a pollen tube that grows through the style towards the ovary and then an ovule. The pollen tube transports the two male gametes to the embryo sac; incompatible pollen may fail to germinate or its tube growth may be blocked.",
                },
                {
                  id: "BIO11-CH11-T16",
                  topicNumber: 16,
                  topic: "Fertilisation",
                  brief:
                    "Fertilisation is the fusion of male and female gametes to form a zygote. In flowering plants, after the pollen tube enters the ovule and reaches the embryo sac, it releases two male gametes. One male gamete fuses with the egg cell to form a diploid zygote, which develops into the embryo. The second male gamete usually participates in fusion with the central cell, leading to endosperm formation; this second event is part of double fertilisation.",
                },
                {
                  id: "BIO11-CH11-T17",
                  topicNumber: 17,
                  topic: "Double fertilisation",
                  brief:
                    "Double fertilisation is a characteristic feature of flowering plants in which two fusion events occur within the same embryo sac. One male gamete fuses with the egg cell to form a diploid zygote, a process called syngamy. The other male gamete fuses with the two polar nuclei, or their associated central-cell nucleus, to form the primary endosperm nucleus, usually triploid in the common case; this is called triple fusion. Together, syngamy and triple fusion constitute double fertilisation.",
                },
                {
                  id: "BIO11-CH11-T18",
                  topicNumber: 18,
                  topic: "Endosperm formation",
                  brief:
                    "Endosperm is a nutritive tissue that develops after the second fusion event of double fertilisation in flowering plants. It supplies nutrients to the developing embryo and, in many species, to the germinating seedling. In the common case, fusion of one haploid male gamete with two haploid polar nuclei forms a triploid primary endosperm nucleus. Endosperm development may occur before or alongside embryo development, and the mature seed may retain endosperm or transfer much of its stored food to the cotyledons.",
                },
                {
                  id: "BIO11-CH11-T19",
                  topicNumber: 19,
                  topic: "Embryo development",
                  brief:
                    "Embryo development begins when the zygote divides and differentiates into the embryonic plant. Early divisions produce an embryo proper and supporting structures, including a suspensor in many species. As development continues, the embryo forms structures such as the radicle, plumule, and cotyledons. In dicot embryos, two cotyledons typically develop, while monocot embryos have one cotyledon. The mature embryo remains inside the seed and resumes growth during germination under suitable conditions.",
                },
                {
                  id: "BIO11-CH11-T20",
                  topicNumber: 20,
                  topic: "Seed formation",
                  brief:
                    "Seed formation follows fertilisation and development of the ovule. The fertilised ovule develops into a seed containing an embryo, a protective seed coat, and stored food or nutritive tissue where present. The integuments of the ovule usually form the seed coat, while the zygote develops into the embryo and the primary endosperm nucleus gives rise to endosperm. Mature seeds may enter a period of dormancy before germination, allowing the plant to survive unfavourable conditions and disperse offspring.",
                },
                {
                  id: "BIO11-CH11-T21",
                  topicNumber: 21,
                  topic: "Fruit formation",
                  brief:
                    "Fruit formation usually begins when the ovary develops after fertilisation. The ovary wall commonly becomes the pericarp, which may be differentiated into exocarp, mesocarp, and endocarp. Fruits protect seeds and help with their dispersal by wind, water, animals, or mechanical release. Some plants can develop fruits without fertilisation; these are called parthenocarpic fruits and are often seedless. In some species, tissues beyond the ovary also contribute substantially to the mature fruit.",
                },
                {
                  id: "BIO11-CH11-T22",
                  topicNumber: 22,
                  topic: "Seed dormancy",
                  brief:
                    "Seed dormancy is a condition in which a viable seed does not germinate even when some external conditions appear favourable. Dormancy can be caused by a hard or impermeable seed coat, an immature embryo, chemical inhibitors, or physiological mechanisms inside the seed. Depending on the species, dormancy may be broken by water absorption, temperature changes, light, abrasion of the seed coat, or other environmental signals. Dormancy helps seeds survive unfavourable periods and ensures that germination occurs at a more suitable time.",
                },
                {
                  id: "BIO11-CH11-T23",
                  topicNumber: 23,
                  topic: "Seed germination",
                  brief:
                    "Seed germination is the process by which a viable seed resumes growth and develops into a seedling under suitable conditions. Water uptake, called imbibition, reactivates metabolism; oxygen supports respiration, and a suitable temperature enables enzyme activity and growth. The radicle usually emerges first and develops into the primary root, followed by growth of the shoot. Germination may be epigeal, where the cotyledons rise above the soil, or hypogeal, where they remain below the soil surface.",
                },
                {
                  id: "BIO11-CH11-T24",
                  topicNumber: 24,
                  topic: "Apomixis and parthenocarpy",
                  brief:
                    "Apomixis is seed formation without the usual process of meiosis and fertilisation, allowing some plants to produce offspring that closely resemble the parent genetically. It can help preserve desirable genetic combinations in certain crops. Parthenocarpy is fruit development without fertilisation and often results in seedless fruits, as in some varieties of banana and citrus. Apomixis concerns the formation of seeds without normal fertilisation, whereas parthenocarpy concerns fruit development without fertilisation.",
                },
              ],
            },
          ],
        },
        {
          id: "BIO11-B04",
          branchNumber: 4,
          branchName: "Zoology and Animal Biology",
          chapters: [
            {
              id: "BIO11-CH12",
              chapterNumber: 12,
              chapterName: "Animal Diversity",
              topics: [
                {
                  id: "BIO11-CH12-T01",
                  topicNumber: 1,
                  topic: "Basis of animal classification",
                  brief:
                    "Animal classification is the systematic grouping of animals according to their similarities, differences, evolutionary relationships, and structural features. Important criteria include level of organisation, body symmetry, number of germ layers, body cavity, segmentation, presence or absence of a notochord, and characteristics of organ systems. These features help scientists identify animals and arrange them into groups such as phyla and classes. Modern classification also uses molecular and genetic evidence to understand evolutionary relationships.",
                },
                {
                  id: "BIO11-CH12-T02",
                  topicNumber: 2,
                  topic: "Levels of organisation",
                  brief:
                    "Levels of organisation describe how cells are arranged and how different body structures perform functions in animals. In cellular-level organisation, cells perform functions with limited tissue formation, as in sponges. Tissue-level organisation occurs when similar cells form tissues, as in cnidarians. Organ-level organisation involves tissues forming organs, as in flatworms, while organ-system-level organisation involves organs working together in systems, as seen in annelids, arthropods, and vertebrates. These levels reflect increasing structural and functional specialisation.",
                },
                {
                  id: "BIO11-CH12-T03",
                  topicNumber: 3,
                  topic: "Body symmetry",
                  brief:
                    "Body symmetry refers to the arrangement of body parts around an axis or plane. Asymmetrical animals cannot be divided into similar halves by a plane, as commonly seen in sponges. Radial symmetry allows body parts to be arranged around a central axis, as in many cnidarians and adult echinoderms. Bilateral symmetry allows only one main plane to divide the body into approximately equal right and left halves, as in earthworms, insects, and vertebrates. Bilateral symmetry is commonly associated with directional movement and cephalisation.",
                },
                {
                  id: "BIO11-CH12-T04",
                  topicNumber: 4,
                  topic: "Germ layers",
                  brief:
                    "Germ layers are primary layers of cells formed during embryonic development that give rise to different tissues and organs. Diploblastic animals, such as cnidarians, develop two main germ layers: ectoderm and endoderm, with mesoglea between them. Triploblastic animals develop three germ layers: ectoderm, mesoderm, and endoderm. The ectoderm contributes to the epidermis and nervous system, the mesoderm forms structures such as muscles and connective tissues, and the endoderm contributes to the lining of the digestive tract and associated organs.",
                },
                {
                  id: "BIO11-CH12-T05",
                  topicNumber: 5,
                  topic: "Body cavity and coelom",
                  brief:
                    "A body cavity is a space between the body wall and internal organs. Acoelomate animals, such as flatworms, lack a fluid-filled body cavity between the digestive tract and body wall. Pseudocoelomate animals, such as nematodes, have a body cavity that is not completely lined by mesoderm. Coelomate animals possess a true coelom completely lined by mesoderm, as in annelids and vertebrates. A coelom can provide space for organ development and movement and can help cushion internal organs.",
                },
                {
                  id: "BIO11-CH12-T06",
                  topicNumber: 6,
                  topic: "Segmentation",
                  brief:
                    "Segmentation is the division of an animal's body into repeated sections called segments. It is clearly seen in earthworms and arthropods, although the degree of segmentation and the grouping of segments vary among animals. Segmentation can allow different body regions to specialise in different functions and may improve flexibility and coordinated movement. In vertebrates, segmentation is evident in structures such as vertebrae and associated muscle blocks during development.",
                },
                {
                  id: "BIO11-CH12-T07",
                  topicNumber: 7,
                  topic: "Notochord",
                  brief:
                    "The notochord is a flexible, rod-like supporting structure that develops along the dorsal side of chordate embryos. It provides support and serves as an attachment site for muscles. In many vertebrates, the vertebral column develops around it and largely replaces its supporting role, although remnants may persist in structures such as the intervertebral discs. The notochord is one of the defining features of chordates, along with a dorsal hollow nerve cord, pharyngeal slits or pouches, and a post-anal tail at some stage of development.",
                },
                {
                  id: "BIO11-CH12-T08",
                  topicNumber: 8,
                  topic: "Porifera",
                  brief:
                    "Porifera, commonly called sponges, are mostly aquatic animals characterised by numerous pores and a canal system through which water flows. They generally have a cellular level of organisation and lack true tissues and organs. Specialised cells called choanocytes create water currents and help capture food particles, while other cells support digestion and body maintenance. Most sponges are sessile filter feeders and reproduce both sexually and asexually. Examples include Sycon, Spongilla, and Euspongia.",
                },
                {
                  id: "BIO11-CH12-T09",
                  topicNumber: 9,
                  topic: "Cnidaria",
                  brief:
                    "Cnidaria includes aquatic animals such as Hydra, jellyfish, sea anemones, and corals. They typically have radial symmetry, a diploblastic body, and a gastrovascular cavity with a single opening. Their distinctive feature is the presence of cnidocytes, specialised cells containing structures such as nematocysts used for prey capture and defence. Many have a polyp form, a medusa form, or both during their life cycle. Corals are ecologically important because reef-building species provide habitats for many marine organisms.",
                },
                {
                  id: "BIO11-CH12-T10",
                  topicNumber: 10,
                  topic: "Platyhelminthes",
                  brief:
                    "Platyhelminthes, or flatworms, are bilaterally symmetrical, triploblastic animals with flattened bodies and no true coelom. They generally have organ-level organisation and lack specialised circulatory and respiratory systems, with many exchanges occurring by diffusion. Some are free-living, such as Planaria, while others are parasites, such as tapeworms and liver flukes. Parasitic forms often possess adaptations for attachment, nutrient absorption, and producing large numbers of offspring.",
                },
                {
                  id: "BIO11-CH12-T11",
                  topicNumber: 11,
                  topic: "Nematoda",
                  brief:
                    "Nematoda, commonly called roundworms, are unsegmented, bilaterally symmetrical, triploblastic animals with a pseudocoelom. Their bodies are elongated and cylindrical, usually tapering at both ends, and are covered by a protective cuticle. They possess a complete digestive tract with separate mouth and anus openings. Many nematodes are free-living in soil or water, where they contribute to nutrient cycling, while others are parasites of plants and animals. Examples include Ascaris, Wuchereria, and root-knot nematodes.",
                },
                {
                  id: "BIO11-CH12-T12",
                  topicNumber: 12,
                  topic: "Annelida",
                  brief:
                    "Annelida includes segmented worms such as earthworms, leeches, and many marine worms. They are bilaterally symmetrical, triploblastic, and generally possess a true coelom and organ-system-level organisation. Their bodies are divided into repeated segments, and many have a closed circulatory system. Earthworms move using muscles and small bristles called setae, while leeches have adaptations for attachment and feeding. Earthworms improve soil structure and contribute to decomposition and nutrient recycling.",
                },
                {
                  id: "BIO11-CH12-T13",
                  topicNumber: 13,
                  topic: "Arthropoda",
                  brief:
                    "Arthropoda is the largest animal phylum and includes insects, spiders, scorpions, crabs, prawns, and centipedes. Arthropods have segmented bodies, jointed appendages, and a hard exoskeleton made mainly of chitin. Growth usually requires moulting, in which the old exoskeleton is shed and a larger one forms. They have an open circulatory system, and respiration occurs through structures such as tracheae, gills, or book lungs depending on the group. Arthropods are important as pollinators, decomposers, food sources, predators, and sometimes agricultural pests or disease vectors.",
                },
                {
                  id: "BIO11-CH12-T14",
                  topicNumber: 14,
                  topic: "Mollusca",
                  brief:
                    "Mollusca includes snails, slugs, clams, oysters, squids, and octopuses. A typical mollusc has a soft body consisting of a muscular foot, a visceral mass containing internal organs, and a mantle that may secrete a shell. Many species possess a radula for feeding, although it is absent in bivalves. Molluscs may have an open or closed circulatory system depending on the group; cephalopods such as octopuses have a closed system. Molluscs are important in aquatic food webs and as food for humans, while some species can act as crop pests or intermediate hosts for parasites.",
                },
                {
                  id: "BIO11-CH12-T15",
                  topicNumber: 15,
                  topic: "Echinodermata",
                  brief:
                    "Echinodermata consists of exclusively marine animals such as starfish, sea urchins, brittle stars, and sea cucumbers. Adults typically show pentaradial symmetry, while larvae are bilaterally symmetrical. They have an internal skeleton made of calcareous plates or ossicles and a water vascular system that operates tube feet used for movement, feeding, and gas exchange. Many echinoderms can regenerate lost body parts to varying degrees. They play important roles in marine ecosystems, although some species can strongly affect coral reefs or other marine communities.",
                },
                {
                  id: "BIO11-CH12-T16",
                  topicNumber: 16,
                  topic: "Hemichordata",
                  brief:
                    "Hemichordata includes marine animals such as acorn worms and pterobranchs. Many have a body divided into proboscis, collar, and trunk, and possess pharyngeal slits used in feeding or water exchange. They are bilaterally symmetrical, triploblastic, and coelomate. Hemichordates were historically grouped with chordates in some classifications because of similarities such as pharyngeal slits, but their stomochord is not considered a true notochord. They are evolutionarily important for understanding relationships among deuterostome animals.",
                },
                {
                  id: "BIO11-CH12-T17",
                  topicNumber: 17,
                  topic: "Chordata",
                  brief:
                    "Chordata includes animals that possess a notochord, a dorsal hollow nerve cord, pharyngeal slits or pouches, and a post-anal tail at least during some stage of development. These features may be reduced or modified in adults. The phylum includes tunicates, lancelets, and vertebrates. Chordates show diverse body structures and habitats, ranging from marine filter feeders to terrestrial mammals. Vertebrates are the best-known group and possess a vertebral column or its developmental equivalent.",
                },
                {
                  id: "BIO11-CH12-T18",
                  topicNumber: 18,
                  topic: "Vertebrate classification",
                  brief:
                    "Vertebrates are chordates characterised by a vertebral column or a corresponding vertebral developmental structure and a well-developed internal skeleton. They are commonly studied in major groups such as fishes, amphibians, reptiles, birds, and mammals. These groups differ in their methods of respiration, body temperature regulation, reproduction, skin covering, and adaptations to aquatic or terrestrial life. Modern evolutionary classification recognises that traditional groupings such as reptiles and fishes do not always represent complete evolutionary lineages in the same way as formal clades.",
                },
                {
                  id: "BIO11-CH12-T19",
                  topicNumber: 19,
                  topic: "Pisces",
                  brief:
                    "Fishes are aquatic vertebrates that generally breathe through gills and move with the help of fins. Their bodies are commonly streamlined, and many have scales and a lateral-line system that detects water movement. Traditional school-level classification often distinguishes cartilaginous fishes, such as sharks and rays, from bony fishes, such as rohu and tuna. Most fishes are ectothermic and reproduce by laying eggs, although reproductive methods vary among species. Fishes are important in aquatic food webs, fisheries, and human nutrition.",
                },
                {
                  id: "BIO11-CH12-T20",
                  topicNumber: 20,
                  topic: "Amphibia",
                  brief:
                    "Amphibians include frogs, toads, salamanders, and caecilians. Many amphibians have a life cycle involving aquatic eggs or larvae and a terrestrial or semi-aquatic adult stage, although life histories vary. They are ectothermic vertebrates with moist skin that can contribute to gas exchange, and many adults also use lungs for breathing. Frogs commonly undergo metamorphosis from tadpoles to adults. Amphibians help control insect populations and are useful indicators of environmental change because many are sensitive to pollution and habitat loss.",
                },
                {
                  id: "BIO11-CH12-T21",
                  topicNumber: 21,
                  topic: "Reptilia",
                  brief:
                    "Reptiles traditionally include lizards, snakes, turtles, crocodilians, and related groups. They generally have dry skin covered with keratinised scales or plates, breathe through lungs, and are ectothermic. Internal fertilisation and amniotic eggs with protective membranes allow many reptiles to reproduce away from water, although reproductive strategies vary. Their adaptations help reduce water loss and support life in a wide range of terrestrial and aquatic habitats. Reptiles play important ecological roles as predators, prey, and regulators of animal populations.",
                },
                {
                  id: "BIO11-CH12-T22",
                  topicNumber: 22,
                  topic: "Aves",
                  brief:
                    "Aves, or birds, are warm-blooded vertebrates characterised by feathers, a beak, and forelimbs modified into wings. Their skeletons and respiratory systems are adapted for efficient movement and, in many species, flight. Birds have lungs connected to air sacs that help maintain efficient airflow, a four-chambered heart, and a high metabolic rate. Most lay hard-shelled eggs and provide varying levels of parental care. Birds are ecologically important as pollinators, seed dispersers, predators, scavengers, and indicators of environmental health.",
                },
                {
                  id: "BIO11-CH12-T23",
                  topicNumber: 23,
                  topic: "Mammalia",
                  brief:
                    "Mammals are vertebrates characterised by hair or fur and mammary glands that produce milk to nourish their young. They are endothermic and generally possess a four-chambered heart, differentiated teeth, and three middle-ear bones. Most mammals give birth to live young, but monotremes such as the platypus lay eggs, and marsupials give birth to relatively underdeveloped young that usually continue development in a pouch. Mammals occupy terrestrial, aquatic, and aerial habitats and perform diverse ecological roles as herbivores, predators, omnivores, and seed dispersers.",
                },
                {
                  id: "BIO11-CH12-T24",
                  topicNumber: 24,
                  topic: "Adaptive features of major animal groups",
                  brief:
                    "Adaptations are structural, physiological, or behavioural characteristics that improve an animal's ability to survive and reproduce in its environment. Aquatic animals may have streamlined bodies, fins, or gills; terrestrial animals often possess limbs and structures that reduce water loss; and flying animals have features such as wings and lightweight body structures. Animals in cold environments may have insulation from fur or fat, while desert species may conserve water through specialised kidneys or behaviours. Comparing adaptations across animal groups helps explain how body structure and function relate to habitat and lifestyle.",
                },
                {
                  id: "BIO11-CH12-T25",
                  topicNumber: 25,
                  topic: "Economic and ecological importance of animals",
                  brief:
                    "Animals contribute to ecosystem functioning through pollination, seed dispersal, decomposition, nutrient cycling, and regulation of food-web populations. Many provide humans with food, fibres, medicines, transport, and livelihoods through agriculture, fisheries, and animal husbandry. Some species are important in scientific research and ecosystem monitoring. However, certain animals can damage crops, transmit diseases, or become invasive. Conservation and sustainable management help maintain biodiversity and the ecological services on which people depend.",
                },
              ],
            },
            {
              id: "BIO11-CH13",
              chapterNumber: 13,
              chapterName: "Biota and Their Environment",
              topics: [
                {
                  id: "BIO11-CH13-T01",
                  topicNumber: 1,
                  topic: "Organism and environment",
                  brief:
                    "An organism is a living individual, while its environment includes all the living and non-living conditions surrounding it. Organisms interact continuously with their environment to obtain food, water, shelter, and other resources. Environmental conditions influence their growth, reproduction, distribution, and survival. Ecology is the branch of biology that studies relationships between organisms and their environment.",
                },
                {
                  id: "BIO11-CH13-T02",
                  topicNumber: 2,
                  topic: "Habitat and ecological niche",
                  brief:
                    "A habitat is the natural place where an organism lives, such as a pond, forest, grassland, or desert. An ecological niche describes the role of an organism in its ecosystem, including how it obtains food, uses resources, tolerates environmental conditions, and interacts with other species. Two species may share a habitat but occupy different niches because they use different resources or behave differently. Understanding niches helps explain competition and the coexistence of species.",
                },
                {
                  id: "BIO11-CH13-T03",
                  topicNumber: 3,
                  topic: "Biotic factors",
                  brief:
                    "Biotic factors are the living components of an ecosystem and their effects on other organisms. They include plants, animals, fungi, bacteria, and other microorganisms. Important biotic interactions include competition, predation, parasitism, mutualism, and commensalism. For example, bees obtain nectar from flowers while helping with pollination, whereas a predator obtains food by capturing another organism. These interactions influence population sizes, community structure, and ecosystem stability.",
                },
                {
                  id: "BIO11-CH13-T04",
                  topicNumber: 4,
                  topic: "Abiotic factors",
                  brief:
                    "Abiotic factors are the non-living physical and chemical components of the environment. They include temperature, light, water, humidity, soil, pH, salinity, oxygen, and mineral availability. These factors influence where organisms can live, how quickly they grow, and how successfully they reproduce. For example, desert plants have adaptations for limited water availability, while aquatic organisms are affected by water temperature, dissolved oxygen, and salinity.",
                },
                {
                  id: "BIO11-CH13-T05",
                  topicNumber: 5,
                  topic: "Population",
                  brief:
                    "A population is a group of individuals of the same species living in a particular area at a given time and potentially interacting or reproducing with one another. Population characteristics include size, density, distribution, age structure, birth rate, death rate, immigration, and emigration. Population size changes as individuals are born, die, enter, or leave the area. Studying populations helps ecologists understand species survival, resource use, and responses to environmental change.",
                },
                {
                  id: "BIO11-CH13-T06",
                  topicNumber: 6,
                  topic: "Community",
                  brief:
                    "An ecological community consists of populations of different species living and interacting in the same area. It includes producers, consumers, decomposers, and other organisms connected through feeding relationships and other interactions. Competition, predation, parasitism, and mutualism influence community structure and species distribution. Communities may change over time because of seasonal variation, disturbances, environmental change, and ecological succession.",
                },
                {
                  id: "BIO11-CH13-T07",
                  topicNumber: 7,
                  topic: "Ecosystem",
                  brief:
                    "An ecosystem consists of a community of organisms interacting with one another and with the abiotic environment. Its biotic components include producers, consumers, and decomposers, while its abiotic components include water, air, soil, light, and nutrients. Energy enters most ecosystems through sunlight captured by photosynthetic organisms and moves through food chains and food webs. Nutrients are recycled through biological, geological, and chemical processes. Examples include forests, ponds, grasslands, and agricultural fields.",
                },
                {
                  id: "BIO11-CH13-T08",
                  topicNumber: 8,
                  topic: "Producers, consumers and decomposers",
                  brief:
                    "Producers, consumers, and decomposers perform different roles in ecosystems. Producers, such as green plants and algae, make organic food from inorganic substances using light or, in some ecosystems, chemical energy. Consumers obtain energy by eating plants or other organisms and include herbivores, carnivores, and omnivores. Decomposers, such as many fungi and bacteria, break down dead organisms and organic waste, releasing nutrients back into the environment. Together, these groups support energy transfer and nutrient cycling.",
                },
                {
                  id: "BIO11-CH13-T09",
                  topicNumber: 9,
                  topic: "Food chains",
                  brief:
                    "A food chain is a linear sequence showing how energy and nutrients pass from one organism to another through feeding. A simple example is grass → grasshopper → frog → snake. The arrows indicate the direction in which food energy is transferred, from the organism being eaten to the organism that eats it. Food chains often begin with producers and continue through consumers, although some ecosystems begin with dead organic matter consumed by detritivores. Energy becomes less available at each successive trophic level.",
                },
                {
                  id: "BIO11-CH13-T10",
                  topicNumber: 10,
                  topic: "Food webs",
                  brief:
                    "A food web is a network of interconnected food chains within an ecosystem. Most organisms eat more than one type of food and may be eaten by several different predators, creating multiple feeding relationships. Food webs provide a more realistic picture of energy transfer than a single food chain. They can also help explain how changes in one population, such as the loss of a predator or producer, may affect many other species in the ecosystem.",
                },
                {
                  id: "BIO11-CH13-T11",
                  topicNumber: 11,
                  topic: "Ecological pyramids",
                  brief:
                    "Ecological pyramids are diagrams used to represent trophic levels in an ecosystem. A pyramid of numbers shows the number of organisms at each level, a pyramid of biomass shows the total mass of living material, and a pyramid of energy shows the energy transferred through each level over time. Energy pyramids are always upright because usable energy decreases as it moves between trophic levels. Pyramids of numbers and biomass may be upright or inverted depending on the ecosystem and the organisms involved.",
                },
                {
                  id: "BIO11-CH13-T12",
                  topicNumber: 12,
                  topic: "Energy flow in ecosystems",
                  brief:
                    "Energy flow is the transfer of energy through producers, consumers, and decomposers in an ecosystem. Most ecosystems receive energy from sunlight, which producers convert into chemical energy through photosynthesis. Energy then passes through feeding relationships, but much is used in metabolism or released as heat at each trophic level. Therefore, energy flows in one direction rather than being recycled in the same way as nutrients. The amount of energy available to higher trophic levels is generally much smaller than that available to producers.",
                },
                {
                  id: "BIO11-CH13-T13",
                  topicNumber: 13,
                  topic: "Biogeochemical cycles",
                  brief:
                    "Biogeochemical cycles describe the movement and recycling of chemical elements and compounds between living organisms and the non-living environment. Important cycles include those of water, carbon, nitrogen, phosphorus, and other essential nutrients. Producers absorb substances from air, water, or soil, consumers obtain them through food, and decomposition returns nutrients to the environment. Natural processes and human activities can alter the speed and balance of these cycles, affecting ecosystem productivity and environmental quality.",
                },
                {
                  id: "BIO11-CH13-T14",
                  topicNumber: 14,
                  topic: "Carbon cycle",
                  brief:
                    "The carbon cycle describes the movement of carbon among the atmosphere, living organisms, oceans, soil, and rocks. Plants and algae absorb atmospheric or dissolved carbon dioxide during photosynthesis and convert it into organic compounds. Carbon passes through food webs and returns to the environment through respiration, decomposition, and combustion. Some carbon is stored for long periods in sediments, carbonate rocks, and fossil fuels. Burning fossil fuels and deforestation increase atmospheric carbon dioxide and contribute to global warming.",
                },
                {
                  id: "BIO11-CH13-T15",
                  topicNumber: 15,
                  topic: "Nitrogen cycle",
                  brief:
                    "The nitrogen cycle describes how nitrogen moves between the atmosphere, soil, water, and living organisms. Although atmospheric nitrogen gas is abundant, most plants cannot use it directly. Nitrogen fixation converts atmospheric nitrogen into biologically available compounds through certain microorganisms and industrial or natural processes. Nitrification converts ammonium into nitrite and then nitrate, while plants assimilate inorganic nitrogen to make proteins and nucleic acids. Decomposition releases ammonium through ammonification, and denitrification returns nitrogen gas to the atmosphere.",
                },
                {
                  id: "BIO11-CH13-T16",
                  topicNumber: 16,
                  topic: "Water cycle",
                  brief:
                    "The water cycle is the continuous movement of water between the atmosphere, Earth's surface, and underground reservoirs. Solar energy drives evaporation from water bodies and soil, while plants release water vapour through transpiration. Water vapour condenses to form clouds and returns to the surface as precipitation. Some water runs off into rivers and oceans, while some infiltrates the soil and replenishes groundwater. The water cycle supports life, influences climate, and transports water through terrestrial and aquatic ecosystems.",
                },
                {
                  id: "BIO11-CH13-T17",
                  topicNumber: 17,
                  topic: "Ecological succession",
                  brief:
                    "Ecological succession is the gradual change in the composition and structure of a biological community over time. Primary succession begins in places where a developed soil is absent, such as newly exposed rock, and pioneer organisms help create conditions for later communities. Secondary succession occurs after a disturbance in an area where soil remains, such as an abandoned field or a forest recovering from fire. Successive communities may include grasses, shrubs, and trees, although the outcome depends on climate, soil, disturbances, and species availability.",
                },
                {
                  id: "BIO11-CH13-T18",
                  topicNumber: 18,
                  topic: "Population growth",
                  brief:
                    "Population growth is the change in the number of individuals in a population over time. It depends on births, deaths, immigration, and emigration. Under favourable conditions with abundant resources, populations may show exponential growth, producing a J-shaped curve. When resources become limited, growth may slow and approach a logistic pattern, producing an S-shaped curve. Population growth is also affected by competition, predation, disease, climate, and other environmental conditions.",
                },
                {
                  id: "BIO11-CH13-T19",
                  topicNumber: 19,
                  topic: "Carrying capacity",
                  brief:
                    "Carrying capacity is the population size that an environment can support over time given available resources and environmental conditions. It depends on factors such as food, water, shelter, space, competition, disease, and climate. In a simple logistic growth model, population growth slows as population size approaches carrying capacity. Carrying capacity is not always fixed because environmental conditions and resource availability can change. If a population exceeds the resources available, increased mortality, reduced reproduction, or migration may follow.",
                },
                {
                  id: "BIO11-CH13-T20",
                  topicNumber: 20,
                  topic: "Adaptations to environmental conditions",
                  brief:
                    "Adaptations are inherited structural, physiological, or behavioural features that improve an organism's chances of survival and reproduction in a particular environment. Desert plants may have reduced leaves, thick cuticles, or water-storage tissues to reduce water loss. Aquatic organisms may have streamlined bodies or specialised respiratory structures, while animals in cold regions may have insulating fur or fat. Behavioural adaptations include migration, nocturnal activity, and seasonal dormancy. Adaptations develop over generations through evolutionary processes rather than because an individual deliberately changes its inherited characteristics.",
                },
                {
                  id: "BIO11-CH13-T21",
                  topicNumber: 21,
                  topic: "Human impacts on ecosystems",
                  brief:
                    "Human activities can alter ecosystems through deforestation, habitat destruction, pollution, overexploitation of natural resources, introduction of invasive species, and greenhouse-gas emissions. These activities can reduce biodiversity, disrupt food webs, change nutrient cycles, and damage ecosystem services such as clean water, fertile soil, and pollination. Agriculture, urbanisation, mining, and industrial development may create environmental pressures when not managed sustainably. Conservation planning and responsible resource use can reduce many of these impacts.",
                },
                {
                  id: "BIO11-CH13-T22",
                  topicNumber: 22,
                  topic: "Conservation of ecosystems",
                  brief:
                    "Ecosystem conservation involves protecting biodiversity, habitats, ecological processes, and the natural resources on which organisms depend. In-situ conservation protects species in their natural habitats through measures such as national parks, wildlife reserves, and community-managed forests. Ex-situ conservation protects organisms outside their natural habitats through seed banks, botanical gardens, zoos, and breeding programmes. Other important measures include habitat restoration, pollution control, sustainable harvesting, invasive-species management, environmental education, and community participation.",
                },
              ],
            },
            {
              id: "BIO11-CH14",
              chapterNumber: 14,
              chapterName: "Introduction to Human Biology",
              topics: [
                {
                  id: "BIO11-CH14-T01",
                  topicNumber: 1,
                  topic: "Levels of organisation in the human body",
                  brief:
                    "The human body is organised into several levels of increasing complexity: chemical, cellular, tissue, organ, organ system and organism. Each level is built from the components of the level below it, and all levels work together to maintain life.",
                },
                {
                  id: "BIO11-CH14-T02",
                  topicNumber: 2,
                  topic: "Cells, tissues, organs and organ systems",
                  brief:
                    "Cells are the basic structural and functional units of the human body. Similar cells form tissues, different tissues combine to form organs, and organs work together in organ systems to perform major functions. For example, the heart is an organ that forms part of the circulatory system.",
                },
                {
                  id: "BIO11-CH14-T03",
                  topicNumber: 3,
                  topic: "Epithelial tissue",
                  brief:
                    "Epithelial tissue covers body surfaces, lines internal organs and cavities, and forms glands. Its functions include protection, absorption, secretion and filtration. Examples include the epidermis of the skin, the lining of the intestine and the epithelium of respiratory passages.",
                },
                {
                  id: "BIO11-CH14-T04",
                  topicNumber: 4,
                  topic: "Connective tissue",
                  brief:
                    "Connective tissue supports, connects, protects and binds different body structures. Its cells are usually surrounded by an extracellular matrix containing fibres and ground substance. Examples include bone, cartilage, blood, adipose tissue, tendons and ligaments.",
                },
                {
                  id: "BIO11-CH14-T05",
                  topicNumber: 5,
                  topic: "Muscular tissue",
                  brief:
                    "Muscular tissue contains specialised cells that contract to produce movement. The three main types are skeletal, smooth and cardiac muscle. Skeletal muscle generally produces voluntary body movements, smooth muscle controls movements in internal organs, and cardiac muscle contracts rhythmically to pump blood.",
                },
                {
                  id: "BIO11-CH14-T06",
                  topicNumber: 6,
                  topic: "Nervous tissue",
                  brief:
                    "Nervous tissue receives stimuli, processes information and transmits electrical signals throughout the body. It consists mainly of neurons, which conduct nerve impulses, and glial cells, which support, protect and nourish neurons. Nervous tissue is found in the brain, spinal cord and peripheral nerves.",
                },
                {
                  id: "BIO11-CH14-T07",
                  topicNumber: 7,
                  topic: "Homeostasis",
                  brief:
                    "Homeostasis is the maintenance of a relatively stable internal environment despite changes inside or outside the body. It regulates conditions such as body temperature, blood glucose, water balance and blood pH. Negative feedback mechanisms help return these conditions toward their normal ranges; for example, sweating helps cool the body when its temperature rises.",
                },
                {
                  id: "BIO11-CH14-T08",
                  topicNumber: 8,
                  topic: "Body cavities",
                  brief:
                    "Body cavities are spaces within the body that contain and protect internal organs. The main cavities are the dorsal cavity, which includes the cranial and vertebral cavities, and the ventral cavity, which includes the thoracic and abdominopelvic cavities. The diaphragm separates the thoracic cavity from the abdominal cavity.",
                },
                {
                  id: "BIO11-CH14-T09",
                  topicNumber: 9,
                  topic: "Organisation of organ systems",
                  brief:
                    "An organ system consists of organs that work together to perform particular functions. Major human organ systems include the digestive, respiratory, circulatory, urinary, nervous, endocrine, skeletal, muscular, reproductive, lymphatic, integumentary and immune systems. These systems interact to support growth, movement, reproduction, protection and the maintenance of internal balance.",
                },
                {
                  id: "BIO11-CH14-T10",
                  topicNumber: 10,
                  topic: "Basic human anatomy",
                  brief:
                    "Human anatomy is the study of the structure of the human body and the relationships among its parts. It includes the study of organs, tissues, bones, muscles and body systems. Basic anatomical knowledge includes body regions, anatomical positions, directional terms and the locations of major organs.",
                },
                {
                  id: "BIO11-CH14-T11",
                  topicNumber: 11,
                  topic: "Basic human physiology",
                  brief:
                    "Human physiology is the study of how the body and its parts function. It explains processes such as digestion, respiration, blood circulation, excretion, movement and nerve transmission. These functions are coordinated across organ systems to maintain life and internal stability.",
                },
                {
                  id: "BIO11-CH14-T12",
                  topicNumber: 12,
                  topic: "Relationship between structure and function",
                  brief:
                    "The structure of a biological component is closely related to the function it performs. For example, red blood cells have a flexible, biconcave shape that supports gas transport, while intestinal epithelial cells may have microvilli that increase the surface area for absorption. Specialised structures allow cells, tissues and organs to perform their functions efficiently.",
                },
                {
                  id: "BIO11-CH14-T13",
                  topicNumber: 13,
                  topic: "Health and disease",
                  brief:
                    "Health involves physical, mental and social well-being, while disease is a condition that disrupts normal body structure or function. Diseases may be infectious, caused by pathogens, or non-communicable, associated with factors such as genetics, lifestyle and environmental conditions. Prevention includes vaccination, good hygiene, balanced nutrition, physical activity and appropriate medical care.",
                },
                {
                  id: "BIO11-CH14-T14",
                  topicNumber: 14,
                  topic: "Personal hygiene",
                  brief:
                    "Personal hygiene refers to practices that maintain cleanliness and help prevent disease. Important practices include regular bathing, handwashing with soap, oral care, wearing clean clothes, safe food handling and maintaining clean surroundings. Good hygiene reduces the spread of infectious agents and supports physical well-being.",
                },
                {
                  id: "BIO11-CH14-T15",
                  topicNumber: 15,
                  topic: "Nutrition and balanced diet",
                  brief:
                    "Nutrition is the process by which the body obtains and uses nutrients for energy, growth, tissue repair and normal functioning. A balanced diet provides appropriate amounts of carbohydrates, proteins, fats, vitamins, minerals, water and dietary fibre according to a person's needs. Inadequate or excessive nutrient intake can contribute to malnutrition and health problems.",
                },
              ],
            },
            {
              id: "BIO11-CH15",
              chapterNumber: 15,
              chapterName: "Evolutionary Biology",
              topics: [
                {
                  id: "BIO11-CH15-T01",
                  topicNumber: 1,
                  topic: "Concept of evolution",
                  brief:
                    "Evolution is the change in heritable characteristics of populations over successive generations. It explains how organisms adapt to changing environments, how new species arise, and how different organisms share common ancestors.",
                },
                {
                  id: "BIO11-CH15-T02",
                  topicNumber: 2,
                  topic: "Origin of life: major hypotheses",
                  brief:
                    "The origin of life refers to the processes through which the first living systems developed on Earth. Major scientific hypotheses include chemical evolution, which proposes that life arose from non-living chemical substances through gradual stages, and hypotheses involving the delivery of organic molecules from space. The exact pathway by which life originated remains under scientific investigation.",
                },
                {
                  id: "BIO11-CH15-T03",
                  topicNumber: 3,
                  topic: "Chemical evolution",
                  brief:
                    "Chemical evolution proposes that simple inorganic substances on early Earth formed increasingly complex organic molecules through natural chemical reactions. These molecules may have developed into larger compounds and primitive systems capable of maintaining themselves and eventually reproducing. The Miller–Urey experiment demonstrated that some organic molecules could form under simulated early-Earth conditions, although it did not create life.",
                },
                {
                  id: "BIO11-CH15-T04",
                  topicNumber: 4,
                  topic: "Early theories of evolution",
                  brief:
                    "Early theories attempted to explain how organisms originated and changed over time. Before modern evolutionary biology developed, some explanations relied on fixed species or the inheritance of acquired characteristics. Later scientific work, including Darwin's theory of natural selection and advances in genetics, established evolution as a central concept in biology.",
                },
                {
                  id: "BIO11-CH15-T05",
                  topicNumber: 5,
                  topic: "Lamarckism",
                  brief:
                    "Lamarckism is an evolutionary theory proposed by Jean-Baptiste Lamarck. It suggested that organs become stronger through use and weaker through disuse, and that acquired characteristics can be inherited by offspring. The classic example is the giraffe developing a longer neck through repeated stretching, although this proposed mechanism is not accepted as a general explanation of evolution.",
                },
                {
                  id: "BIO11-CH15-T06",
                  topicNumber: 6,
                  topic: "Darwinism",
                  brief:
                    "Darwinism refers to Charles Darwin's explanation of evolution through natural selection. Darwin proposed that organisms produce more offspring than can survive, individuals vary in their characteristics, and some variations improve survival and reproduction. Over many generations, favourable heritable variations can become more common in a population.",
                },
                {
                  id: "BIO11-CH15-T07",
                  topicNumber: 7,
                  topic: "Natural selection",
                  brief:
                    "Natural selection occurs when individuals with heritable characteristics that improve reproductive success leave more offspring than others. As a result, advantageous characteristics may increase in frequency over generations. For example, if a particular inherited trait helps insects survive a pesticide, resistant individuals may become more common in later generations.",
                },
                {
                  id: "BIO11-CH15-T08",
                  topicNumber: 8,
                  topic: "Modern synthetic theory",
                  brief:
                    "The modern synthetic theory, or modern synthesis, combines Darwin's natural selection with Mendelian genetics and population genetics. It explains evolution as changes in allele frequencies within populations over generations. Mutation, recombination, natural selection, genetic drift and gene flow contribute to these changes.",
                },
                {
                  id: "BIO11-CH15-T09",
                  topicNumber: 9,
                  topic: "Evidence from fossils",
                  brief:
                    "Fossils are preserved remains, impressions or traces of organisms that lived in the past. Their positions in rock layers and their geological ages provide evidence of the history of life, extinction and changes in organisms over time. Transitional fossils, such as Archaeopteryx, show combinations of characteristics associated with different major groups.",
                },
                {
                  id: "BIO11-CH15-T10",
                  topicNumber: 10,
                  topic: "Comparative anatomy",
                  brief:
                    "Comparative anatomy studies similarities and differences in the body structures of different organisms. Shared structural patterns may indicate common ancestry, while differences can reflect adaptations to different functions or environments. For example, the forelimbs of humans, whales, bats and cats share a basic skeletal arrangement despite performing different functions.",
                },
                {
                  id: "BIO11-CH15-T11",
                  topicNumber: 11,
                  topic: "Homologous and analogous organs",
                  brief:
                    "Homologous organs have a similar basic structure and evolutionary origin but may perform different functions; the forelimbs of humans and whales are examples. Analogous organs perform similar functions but have different evolutionary origins and structural arrangements, such as the wings of birds and insects. Homology often indicates common ancestry, while analogy commonly results from convergent evolution.",
                },
                {
                  id: "BIO11-CH15-T12",
                  topicNumber: 12,
                  topic: "Vestigial structures",
                  brief:
                    "Vestigial structures are inherited features that have become reduced or lost much of their original function during evolution. Examples in humans include the coccyx, which is associated with an ancestral tail, and the reduced muscles that move the external ears. Vestigial structures provide evidence of evolutionary history, although some may retain limited or modified functions.",
                },
                {
                  id: "BIO11-CH15-T13",
                  topicNumber: 13,
                  topic: "Embryological evidence",
                  brief:
                    "Comparative embryology examines similarities and differences in the development of embryos from different species. Similarities in early developmental structures can support the idea of common ancestry, particularly among related groups of vertebrates. However, embryos of different species do not pass through identical stages, and embryological evidence must be interpreted alongside other evidence.",
                },
                {
                  id: "BIO11-CH15-T14",
                  topicNumber: 14,
                  topic: "Molecular evidence",
                  brief:
                    "Molecular evidence for evolution comes from comparisons of DNA, RNA and protein sequences among organisms. Closely related species generally share more genetic similarities because they have a more recent common ancestor. Differences in molecular sequences can help scientists reconstruct evolutionary relationships and estimate when lineages diverged.",
                },
                {
                  id: "BIO11-CH15-T15",
                  topicNumber: 15,
                  topic: "Variation and adaptation",
                  brief:
                    "Variation refers to differences in characteristics among individuals of the same population. Genetic variation arises through processes such as mutation and recombination, while environmental factors can also influence observable characteristics. An adaptation is an inherited characteristic that improves survival or reproductive success in a particular environment, such as thick fur in animals living in cold regions.",
                },
                {
                  id: "BIO11-CH15-T16",
                  topicNumber: 16,
                  topic: "Mutation and evolution",
                  brief:
                    "A mutation is a change in the genetic material of an organism. Mutations can introduce new alleles into a population and may be harmful, beneficial or neutral, depending on the circumstances. Heritable mutations provide the raw genetic variation on which natural selection and other evolutionary processes can act.",
                },
                {
                  id: "BIO11-CH15-T17",
                  topicNumber: 17,
                  topic: "Genetic drift",
                  brief:
                    "Genetic drift is a random change in allele frequencies from one generation to the next, especially in small populations. It can cause alleles to become fixed or disappear regardless of whether they are beneficial. Important examples include the founder effect, when a new population begins with a small sample of a larger population, and the bottleneck effect, when population size is sharply reduced.",
                },
                {
                  id: "BIO11-CH15-T18",
                  topicNumber: 18,
                  topic: "Gene flow",
                  brief:
                    "Gene flow is the movement of alleles between populations through the migration and reproduction of individuals or through the movement of reproductive cells such as pollen. It can introduce new alleles into a population and reduce genetic differences between populations. Its effects depend on the amount and direction of migration and on the populations involved.",
                },
                {
                  id: "BIO11-CH15-T19",
                  topicNumber: 19,
                  topic: "Speciation",
                  brief:
                    "Speciation is the evolutionary process through which new species arise. It commonly occurs when populations become reproductively isolated and accumulate genetic differences over generations. Allopatric speciation occurs when populations are separated geographically, whereas sympatric speciation occurs without geographic separation, for example through mechanisms such as polyploidy in plants.",
                },
                {
                  id: "BIO11-CH15-T20",
                  topicNumber: 20,
                  topic: "Adaptive radiation",
                  brief:
                    "Adaptive radiation occurs when a common ancestral lineage diversifies into multiple species adapted to different ecological niches. It often happens when new habitats or resources become available and populations experience different selection pressures. Darwin's finches in the Galápagos Islands are a well-known example, with different species possessing beaks adapted to different food sources.",
                },
                {
                  id: "BIO11-CH15-T21",
                  topicNumber: 21,
                  topic: "Human evolution",
                  brief:
                    "Human evolution is the evolutionary history of humans and their ancestors. Fossil, anatomical and molecular evidence indicates that modern humans, Homo sapiens, share common ancestors with other primates and evolved within the African continent. Important developments in the human lineage include habitual bipedalism, changes in brain size, modifications of the skull and teeth, and increasingly complex tool use and culture.",
                },
              ],
            },
          ],
        },
      ],
    },
    "12": {
      id: "BIO12",
      grade: 12,
      subject: "Biology",
      branches: [
        {
          id: "BIO12-B01",
          branchNumber: 1,
          branchName: "Plant Biology and Botany",
          chapters: [
            {
              id: "BIO12-CH01",
              chapterNumber: 1,
              chapterName: "Plant Anatomy and Growth",
              topics: [
                {
                  id: "BIO12-CH01-T01",
                  topicNumber: 1,
                  topic: "Review of plant tissue systems",
                  brief:
                    "Plant tissues are groups of cells that perform specific functions. The three major tissue systems are the epidermal tissue system, ground tissue system and vascular tissue system. The epidermal system protects the plant, the ground tissue system performs functions such as photosynthesis and storage, and the vascular system transports water, minerals and organic nutrients through xylem and phloem.",
                },
                {
                  id: "BIO12-CH01-T02",
                  topicNumber: 2,
                  topic: "Primary growth",
                  brief:
                    "Primary growth is the increase in the length of roots and shoots due to the activity of apical meristems at their tips. It produces primary tissues, including the epidermis, cortex, primary xylem and primary phloem. Primary growth enables roots to explore the soil and shoots to extend toward light.",
                },
                {
                  id: "BIO12-CH01-T03",
                  topicNumber: 3,
                  topic: "Secondary growth",
                  brief:
                    "Secondary growth is the increase in the thickness or girth of stems and roots due mainly to the activity of lateral meristems. The two major lateral meristems involved are the vascular cambium and cork cambium. Secondary growth is especially prominent in woody dicotyledonous plants and gymnosperms.",
                },
                {
                  id: "BIO12-CH01-T04",
                  topicNumber: 4,
                  topic: "Vascular cambium activity",
                  brief:
                    "The vascular cambium is a lateral meristem that produces secondary vascular tissues. It generally forms secondary xylem toward the inside and secondary phloem toward the outside. The accumulation of secondary xylem contributes greatly to the increasing girth of woody stems and roots.",
                },
                {
                  id: "BIO12-CH01-T05",
                  topicNumber: 5,
                  topic: "Cork cambium activity",
                  brief:
                    "Cork cambium, also called phellogen, is a lateral meristem involved in forming the periderm, a protective tissue that replaces the epidermis during secondary growth. It usually produces cork cells, or phellem, toward the outside and phelloderm toward the inside. Cork cells commonly become impregnated with suberin, which reduces water loss and protects the plant against physical damage and pathogens.",
                },
                {
                  id: "BIO12-CH01-T06",
                  topicNumber: 6,
                  topic: "Annual rings",
                  brief:
                    "Annual rings are growth layers of secondary xylem formed in many woody plants as growth conditions change during the year. In seasonal climates, earlywood generally has larger cells and thinner walls, while latewood usually has smaller cells and thicker walls. Counting distinct annual rings can help estimate a tree's age, although ring formation varies with species and environmental conditions.",
                },
                {
                  id: "BIO12-CH01-T07",
                  topicNumber: 7,
                  topic: "Wood formation",
                  brief:
                    "Wood is formed mainly from secondary xylem produced by the vascular cambium. It contains different cell types, including vessels or tracheids for water transport and fibres for mechanical support. As secondary xylem accumulates over time, it contributes to stem strength and may form growth rings in trees.",
                },
                {
                  id: "BIO12-CH01-T08",
                  topicNumber: 8,
                  topic: "Heartwood and sapwood",
                  brief:
                    "Heartwood is the older, inner region of secondary xylem that generally no longer conducts water effectively. It often contains deposited substances such as tannins, resins and other compounds that may increase durability or resistance to decay. Sapwood is the younger, outer region of secondary xylem that remains involved in water and mineral transport.",
                },
                {
                  id: "BIO12-CH01-T09",
                  topicNumber: 9,
                  topic: "Secondary growth in dicot stems",
                  brief:
                    "In many dicot stems, vascular cambium forms a continuous cambial ring by joining existing vascular cambium with cambium that develops between vascular bundles. This ring produces secondary xylem inward and secondary phloem outward, increasing stem girth. Cork cambium also develops and produces protective periderm as the stem expands.",
                },
                {
                  id: "BIO12-CH01-T10",
                  topicNumber: 10,
                  topic: "Secondary growth in roots",
                  brief:
                    "Secondary growth in many dicot roots occurs through the activity of vascular cambium and cork cambium. The vascular cambium develops from tissues associated with the primary vascular system and produces secondary xylem inward and secondary phloem outward. Cork cambium contributes to the formation of protective periderm as the root increases in thickness.",
                },
                {
                  id: "BIO12-CH01-T11",
                  topicNumber: 11,
                  topic: "Factors affecting plant growth",
                  brief:
                    "Plant growth is influenced by internal factors and environmental conditions. Internal factors include genetic characteristics and plant hormones such as auxins, gibberellins, cytokinins, abscisic acid and ethylene. Environmental factors include light, temperature, water, mineral nutrients, oxygen and carbon dioxide; their effects depend on the plant species and its stage of development.",
                },
                {
                  id: "BIO12-CH01-T12",
                  topicNumber: 12,
                  topic: "Meristems and growth regions",
                  brief:
                    "Meristems are regions of actively dividing, relatively undifferentiated plant cells that produce new tissues. Apical meristems occur at root and shoot tips and contribute to primary growth, while lateral meristems such as vascular cambium and cork cambium contribute to secondary growth. Intercalary meristems, found in plants such as grasses, allow growth from regions near nodes or leaf bases.",
                },
                {
                  id: "BIO12-CH01-T13",
                  topicNumber: 13,
                  topic: "Plant growth measurements",
                  brief:
                    "Plant growth can be measured by recording changes in length, height, stem diameter, leaf area, fresh mass, dry mass or cell number over time. Absolute growth measures the total increase in a selected parameter during a period, while relative growth expresses growth in relation to the initial size or mass. Repeated measurements under controlled conditions help researchers compare growth rates and investigate the effects of environmental factors.",
                },
                {
                  id: "BIO12-CH01-T14",
                  topicNumber: 14,
                  topic: "Agricultural significance of plant anatomy",
                  brief:
                    "Plant anatomy helps explain how roots absorb water and minerals, how vascular tissues transport substances, and how stems provide mechanical support. Understanding tissue structure supports agricultural practices such as plant propagation, grafting, pruning, irrigation and the selection of crop varieties. Knowledge of vascular tissues and growth regions can also help identify plant diseases and improve crop management.",
                },
              ],
            },
            {
              id: "BIO12-CH02",
              chapterNumber: 2,
              chapterName: "Plant Physiology",
              topics: [
                {
                  id: "BIO12-CH02-T01",
                  topicNumber: 1,
                  topic: "Water absorption and transport",
                  brief:
                    "Plants absorb water mainly through root hairs by osmosis. Water moves across the root tissues into the xylem and is transported upward through the stem to leaves, primarily due to transpiration pull, with cohesion between water molecules and adhesion to xylem walls helping maintain the water column. Root pressure and capillary effects may also contribute under certain conditions.",
                },
                {
                  id: "BIO12-CH02-T02",
                  topicNumber: 2,
                  topic: "Water potential",
                  brief:
                    "Water potential is the potential energy of water relative to pure water under specified conditions and helps predict the direction of water movement. Water moves from a region of higher water potential to a region of lower water potential. Water potential is influenced mainly by solute potential and pressure potential, and it is commonly expressed in megapascals (MPa).",
                },
                {
                  id: "BIO12-CH02-T03",
                  topicNumber: 3,
                  topic: "Transpiration and its regulation",
                  brief:
                    "Transpiration is the loss of water vapour from the aerial parts of plants, mainly through stomata. It helps cool leaves and contributes to the upward transport of water and minerals. Transpiration is regulated largely by stomatal opening and closing and is affected by light, temperature, humidity, wind and soil water availability.",
                },
                {
                  id: "BIO12-CH02-T04",
                  topicNumber: 4,
                  topic: "Translocation of organic solutes",
                  brief:
                    "Translocation is the movement of organic substances, especially sucrose, through the phloem from sources to sinks. Sources, such as mature leaves, supply sugars, while sinks, such as roots, fruits and growing tissues, use or store them. The pressure-flow hypothesis explains that sugar loading draws water into the phloem, creating pressure that drives movement toward sink tissues.",
                },
                {
                  id: "BIO12-CH02-T05",
                  topicNumber: 5,
                  topic: "Mineral nutrition",
                  brief:
                    "Mineral nutrition is the process by which plants absorb and use inorganic nutrients required for growth, development and metabolism. Most mineral nutrients are absorbed from the soil through roots, mainly in ionic forms. They support processes such as chlorophyll formation, enzyme activity, protein synthesis, energy transfer and the development of roots, stems and leaves.",
                },
                {
                  id: "BIO12-CH02-T06",
                  topicNumber: 6,
                  topic: "Essential elements and their functions",
                  brief:
                    "Essential elements are chemical elements that plants require to complete their life cycle and perform normal physiological functions. Major macronutrients include nitrogen, phosphorus, potassium, calcium, magnesium and sulphur, while micronutrients include iron, manganese, zinc, copper, boron, molybdenum, chlorine and nickel. For example, nitrogen is needed for proteins and nucleic acids, magnesium is a component of chlorophyll, and phosphorus is important in ATP and nucleic acids.",
                },
                {
                  id: "BIO12-CH02-T07",
                  topicNumber: 7,
                  topic: "Deficiency symptoms",
                  brief:
                    "Mineral deficiency symptoms occur when plants receive insufficient amounts of essential nutrients. Symptoms may include chlorosis (yellowing of leaves), necrosis (death of tissue), stunted growth, poor root development and delayed flowering. The location of symptoms can provide clues: deficiencies of mobile elements such as nitrogen often appear first in older leaves, whereas deficiencies of relatively immobile elements such as calcium often affect younger tissues.",
                },
                {
                  id: "BIO12-CH02-T08",
                  topicNumber: 8,
                  topic: "Photosynthesis",
                  brief:
                    "Photosynthesis is the process by which green plants use light energy to convert carbon dioxide and water into carbohydrates, releasing oxygen during oxygenic photosynthesis. It occurs mainly in chloroplasts, where chlorophyll and other pigments absorb light. Photosynthesis stores energy in organic molecules and supports most food chains by producing biomass.",
                },
                {
                  id: "BIO12-CH02-T09",
                  topicNumber: 9,
                  topic: "Photosynthetic pigments",
                  brief:
                    "Photosynthetic pigments absorb light energy used in photosynthesis. Chlorophyll a is the primary pigment involved in converting light energy into chemical energy, while chlorophyll b and carotenoids act as accessory pigments that broaden light absorption. These pigments are located in the thylakoid membranes of chloroplasts, where they form part of photosystems.",
                },
                {
                  id: "BIO12-CH02-T10",
                  topicNumber: 10,
                  topic: "Light reaction",
                  brief:
                    "The light-dependent reactions take place in the thylakoid membranes of chloroplasts. Light excites electrons in photosystems II and I, leading to electron transport, the production of ATP and the formation of NADPH. Water is split during photolysis at photosystem II, releasing electrons, hydrogen ions and oxygen.",
                },
                {
                  id: "BIO12-CH02-T11",
                  topicNumber: 11,
                  topic: "Photophosphorylation",
                  brief:
                    "Photophosphorylation is the formation of ATP from ADP and inorganic phosphate using energy derived from light during photosynthesis. In non-cyclic photophosphorylation, electrons flow from water through photosystems II and I, producing ATP and NADPH while releasing oxygen. In cyclic photophosphorylation, electrons from photosystem I return through an electron transport pathway, generating ATP without producing NADPH or releasing oxygen.",
                },
                {
                  id: "BIO12-CH02-T12",
                  topicNumber: 12,
                  topic: "Calvin cycle",
                  brief:
                    "The Calvin cycle is a series of reactions that uses ATP and NADPH from the light-dependent reactions to incorporate carbon dioxide into organic molecules. It occurs in the stroma of chloroplasts and includes carbon fixation, reduction and regeneration of the carbon dioxide acceptor RuBP. The cycle produces glyceraldehyde-3-phosphate (G3P), which can be used to form carbohydrates and other organic compounds.",
                },
                {
                  id: "BIO12-CH02-T13",
                  topicNumber: 13,
                  topic: "C3 and C4 plants",
                  brief:
                    "C3 and C4 plants differ in their initial carbon fixation pathways. In C3 plants, carbon dioxide is fixed directly by RuBisCO in the Calvin cycle, producing a three-carbon compound; examples include rice and wheat. In C4 plants, carbon dioxide is first fixed into a four-carbon compound in mesophyll cells and then delivered to bundle-sheath cells, helping reduce photorespiration; examples include maize and sugarcane.",
                },
                {
                  id: "BIO12-CH02-T14",
                  topicNumber: 14,
                  topic: "Photorespiration",
                  brief:
                    "Photorespiration occurs when RuBisCO reacts with oxygen instead of carbon dioxide, leading to a pathway that consumes energy and releases previously fixed carbon dioxide without producing sugar. It is more common in C3 plants under hot, dry conditions when stomata close and the carbon dioxide concentration inside leaves decreases. C4 plants reduce photorespiration by concentrating carbon dioxide around RuBisCO.",
                },
                {
                  id: "BIO12-CH02-T15",
                  topicNumber: 15,
                  topic: "Factors affecting photosynthesis",
                  brief:
                    "The rate of photosynthesis is influenced by light intensity, carbon dioxide concentration, temperature, water availability and the condition of the photosynthetic machinery. At low light intensity or low carbon dioxide concentration, increasing the limiting factor can increase the rate until another factor becomes limiting. Very high temperatures or severe water shortages can reduce photosynthesis by damaging cellular processes or causing stomatal closure.",
                },
                {
                  id: "BIO12-CH02-T16",
                  topicNumber: 16,
                  topic: "Cellular respiration",
                  brief:
                    "Cellular respiration is the process by which cells break down organic molecules, such as glucose, to release energy and produce ATP. Aerobic respiration uses oxygen and generally produces carbon dioxide and water, whereas anaerobic pathways can operate without oxygen. In eukaryotic cells, glycolysis occurs in the cytoplasm, while the Krebs cycle and most aerobic ATP production occur in mitochondria.",
                },
                {
                  id: "BIO12-CH02-T17",
                  topicNumber: 17,
                  topic: "Glycolysis",
                  brief:
                    "Glycolysis is the first major stage of cellular respiration and takes place in the cytoplasm. One molecule of glucose is broken down into two molecules of pyruvate, producing a net gain of two ATP molecules and two NADH molecules per glucose. Glycolysis does not directly require oxygen and can occur in both aerobic and anaerobic conditions.",
                },
                {
                  id: "BIO12-CH02-T18",
                  topicNumber: 18,
                  topic: "Krebs cycle",
                  brief:
                    "The Krebs cycle, also called the citric acid cycle, occurs in the mitochondrial matrix in eukaryotic cells. Acetyl-CoA is oxidised through a series of reactions, releasing carbon dioxide and generating NADH, FADH2 and a small amount of ATP or GTP. NADH and FADH2 carry high-energy electrons to the electron transport chain.",
                },
                {
                  id: "BIO12-CH02-T19",
                  topicNumber: 19,
                  topic: "Electron transport and oxidative phosphorylation",
                  brief:
                    "In aerobic respiration, the electron transport chain is located in the inner mitochondrial membrane. Electrons from NADH and FADH2 pass through a series of carriers, releasing energy that pumps protons across the membrane. The resulting proton gradient drives ATP synthase to produce ATP through oxidative phosphorylation, while oxygen acts as the final electron acceptor and combines with electrons and protons to form water.",
                },
                {
                  id: "BIO12-CH02-T20",
                  topicNumber: 20,
                  topic: "Fermentation",
                  brief:
                    "Fermentation is an anaerobic process that allows glycolysis to continue by regenerating NAD+ from NADH. In lactic acid fermentation, pyruvate is converted into lactate, as occurs in certain bacteria and oxygen-limited animal muscle cells. In alcoholic fermentation, yeast converts pyruvate-derived compounds into ethanol and carbon dioxide. Fermentation does not produce additional ATP beyond the net two ATP obtained from glycolysis per glucose.",
                },
                {
                  id: "BIO12-CH02-T21",
                  topicNumber: 21,
                  topic: "Respiratory quotient",
                  brief:
                    "The respiratory quotient (RQ) is the ratio of carbon dioxide released to oxygen consumed during respiration over a given period. It helps indicate which respiratory substrate is being used. The RQ is approximately 1 for carbohydrates, around 0.7 for fats and often around 0.8 for proteins, although actual values depend on the conditions and metabolic pathways involved.",
                },
                {
                  id: "BIO12-CH02-T22",
                  topicNumber: 22,
                  topic: "Plant growth regulators",
                  brief:
                    "Plant growth regulators are chemical substances that control plant growth, development and responses to the environment. Major plant hormones include auxins, gibberellins, cytokinins, abscisic acid and ethylene. Auxins help regulate cell elongation and tropisms, gibberellins promote stem elongation and seed germination, cytokinins stimulate cell division, abscisic acid is involved in stress responses and dormancy, and ethylene promotes fruit ripening and other developmental responses.",
                },
                {
                  id: "BIO12-CH02-T23",
                  topicNumber: 23,
                  topic: "Photoperiodism",
                  brief:
                    "Photoperiodism is the response of plants to the relative lengths of day and night, especially in relation to flowering. Plants may be classified as short-day, long-day or day-neutral according to their flowering responses. In many species, the duration of uninterrupted darkness is especially important, and leaves detect photoperiodic signals that can influence flowering at the shoot tip.",
                },
                {
                  id: "BIO12-CH02-T24",
                  topicNumber: 24,
                  topic: "Vernalisation",
                  brief:
                    "Vernalisation is the promotion or acceleration of flowering by exposing a plant or its seeds to a period of low temperature. It occurs in certain winter annuals and biennial plants and helps ensure that flowering takes place after a cold season. Depending on the species, the temperature-sensitive tissue may be the embryo, shoot apex or another growing region.",
                },
                {
                  id: "BIO12-CH02-T25",
                  topicNumber: 25,
                  topic: "Seed dormancy and germination",
                  brief:
                    "Seed dormancy is a condition in which a viable seed does not germinate even when some favourable conditions are present. Dormancy may result from an impermeable seed coat, an immature embryo or physiological mechanisms, and it can be broken by suitable treatments or environmental changes. Germination begins when a viable seed receives the required conditions, commonly water, oxygen and a suitable temperature; the embryo resumes growth, and the radicle usually emerges first.",
                },
              ],
            },
            {
              id: "BIO12-CH03",
              chapterNumber: 3,
              chapterName: "Plant Reproduction and Development",
              topics: [
                {
                  id: "BIO12-CH03-T01",
                  topicNumber: 1,
                  topic: "Life cycle of flowering plants",
                  brief:
                    "Flowering plants exhibit alternation of generations between a dominant diploid sporophyte and highly reduced haploid gametophytes. The sporophyte produces haploid spores through meiosis, and these develop into male and female gametophytes. Fertilisation forms a diploid zygote, which develops into an embryo and eventually a new sporophyte.",
                },
                {
                  id: "BIO12-CH03-T02",
                  topicNumber: 2,
                  topic: "Structure of anther",
                  brief:
                    "The anther is the pollen-producing part of the stamen, the male reproductive organ of a flower. A typical angiosperm anther is bilobed and usually contains four microsporangia, where pollen grains develop. Each microsporangium contains sporogenous tissue surrounded by wall layers, including the epidermis, endothecium, middle layers and tapetum.",
                },
                {
                  id: "BIO12-CH03-T03",
                  topicNumber: 3,
                  topic: "Microsporogenesis",
                  brief:
                    "Microsporogenesis is the process of producing haploid microspores from diploid microspore mother cells through meiosis. It takes place inside the microsporangia of the anther. Each microspore mother cell typically undergoes meiosis to form a tetrad of four haploid microspores, which later develop into pollen grains.",
                },
                {
                  id: "BIO12-CH03-T04",
                  topicNumber: 4,
                  topic: "Pollen development",
                  brief:
                    "Pollen development begins when microspores grow and undergo mitotic division. In most flowering plants, the microspore forms a larger vegetative cell and a smaller generative cell; the generative cell usually divides to produce two male gametes. A pollen grain has a protective outer wall called the exine, commonly containing sporopollenin, and an inner wall called the intine.",
                },
                {
                  id: "BIO12-CH03-T05",
                  topicNumber: 5,
                  topic: "Structure of ovule",
                  brief:
                    "The ovule is the structure inside the ovary that contains the female gametophyte and develops into a seed after fertilisation. A typical ovule consists of a funicle, integuments, nucellus and embryo sac, with a small opening called the micropyle. The region opposite the micropyle is called the chalaza, and the funicle attaches the ovule to the placenta.",
                },
                {
                  id: "BIO12-CH03-T06",
                  topicNumber: 6,
                  topic: "Megasporogenesis",
                  brief:
                    "Megasporogenesis is the formation of haploid megaspores from a diploid megaspore mother cell through meiosis. It occurs within the nucellus of the ovule. In the common pattern found in many flowering plants, meiosis produces four haploid megaspores, of which usually only one remains functional.",
                },
                {
                  id: "BIO12-CH03-T07",
                  topicNumber: 7,
                  topic: "Embryo sac development",
                  brief:
                    "Embryo sac development is the formation of the female gametophyte inside the ovule. In the common Polygonum type, the functional megaspore undergoes three mitotic divisions to produce eight nuclei. The mature embryo sac typically has seven cells: an egg cell, two synergids, three antipodal cells and one central cell containing two polar nuclei.",
                },
                {
                  id: "BIO12-CH03-T08",
                  topicNumber: 8,
                  topic: "Pollination mechanisms",
                  brief:
                    "Pollination is the transfer of pollen grains from the anther to the stigma of a flower. Self-pollination occurs within the same flower or between flowers of the same plant, while cross-pollination involves flowers on different plants of the same species. Pollen may be transferred by wind, water, insects, birds or other animals, depending on the species.",
                },
                {
                  id: "BIO12-CH03-T09",
                  topicNumber: 9,
                  topic: "Self-incompatibility",
                  brief:
                    "Self-incompatibility is a genetically controlled mechanism that prevents or reduces fertilisation by pollen from the same plant or a genetically similar plant. The pollen may fail to germinate on the stigma or its pollen tube may be stopped during growth through the style. This mechanism promotes cross-pollination and helps maintain genetic variation in plant populations.",
                },
                {
                  id: "BIO12-CH03-T10",
                  topicNumber: 10,
                  topic: "Pollen germination",
                  brief:
                    "Pollen germination begins when a compatible pollen grain lands on a receptive stigma and absorbs water and nutrients. The intine grows out through a germ pore to form a pollen tube, which grows through the style toward the ovule. The pollen tube transports the two male gametes to the embryo sac for fertilisation.",
                },
                {
                  id: "BIO12-CH03-T11",
                  topicNumber: 11,
                  topic: "Fertilisation in angiosperms",
                  brief:
                    "Fertilisation in angiosperms occurs when male gametes delivered by the pollen tube reach the embryo sac. One male gamete fuses with the egg cell to form a diploid zygote, which develops into the embryo. The other male gamete fuses with the central cell's polar nuclei or their associated nucleus, initiating endosperm formation.",
                },
                {
                  id: "BIO12-CH03-T12",
                  topicNumber: 12,
                  topic: "Double fertilisation",
                  brief:
                    "Double fertilisation is a characteristic feature of flowering plants in which two fusion events occur within the embryo sac. One male gamete fuses with the egg to form a diploid zygote, a process called syngamy. The second male gamete fuses with the two polar nuclei, usually producing a triploid primary endosperm nucleus; this second event is called triple fusion.",
                },
                {
                  id: "BIO12-CH03-T13",
                  topicNumber: 13,
                  topic: "Endosperm development",
                  brief:
                    "Endosperm is a nutritive tissue that develops after the second fertilisation event in most flowering plants. It supplies nutrients to the developing embryo and may persist in the mature seed, as in maize, or be largely absorbed during embryo development, as in many beans. Endosperm development may follow nuclear, cellular or helobial patterns.",
                },
                {
                  id: "BIO12-CH03-T14",
                  topicNumber: 14,
                  topic: "Embryogenesis",
                  brief:
                    "Embryogenesis is the development of the zygote into a plant embryo. The zygote divides and differentiates to form structures such as the embryonic axis and cotyledons. In a typical dicot embryo, the main structures include the radicle, hypocotyl, epicotyl and two cotyledons, while a typical monocot embryo has one cotyledon.",
                },
                {
                  id: "BIO12-CH03-T15",
                  topicNumber: 15,
                  topic: "Seed and fruit development",
                  brief:
                    "After fertilisation, the ovule usually develops into a seed, while the ovary usually develops into a fruit. The zygote develops into the embryo, integuments form the seed coat, and endosperm may provide stored nutrients. The ovary wall generally develops into the pericarp, which may be fleshy or dry depending on the plant species.",
                },
                {
                  id: "BIO12-CH03-T16",
                  topicNumber: 16,
                  topic: "Apomixis",
                  brief:
                    "Apomixis is the formation of seeds without the usual process of meiosis and fertilisation. In many forms, embryos develop from unreduced egg cells or from somatic cells of the ovule. Apomixis can preserve the genetic characteristics of the parent plant across generations and has potential applications in crop improvement.",
                },
                {
                  id: "BIO12-CH03-T17",
                  topicNumber: 17,
                  topic: "Parthenocarpy",
                  brief:
                    "Parthenocarpy is the development of fruit without fertilisation, usually resulting in seedless fruits. It occurs naturally in some plants and can also be induced through plant growth regulators or breeding techniques. Examples of parthenocarpic fruits include certain varieties of banana and seedless cucumber.",
                },
                {
                  id: "BIO12-CH03-T18",
                  topicNumber: 18,
                  topic: "Seed dormancy",
                  brief:
                    "Seed dormancy is a condition in which a viable seed does not germinate even when some apparently favourable conditions are present. It may result from a hard or impermeable seed coat, an immature embryo or internal physiological mechanisms. Dormancy helps seeds survive unfavourable seasons and can be overcome by processes such as scarification, stratification or exposure to suitable environmental conditions, depending on the species.",
                },
                {
                  id: "BIO12-CH03-T19",
                  topicNumber: 19,
                  topic: "Seed germination",
                  brief:
                    "Seed germination is the resumption of embryo growth under suitable conditions. Water uptake activates metabolism, enzymes mobilise stored food, and the embryonic tissues begin growing; the radicle usually emerges first. Most seeds require adequate moisture, oxygen and a suitable temperature, while some species also require specific light conditions.",
                },
                {
                  id: "BIO12-CH03-T20",
                  topicNumber: 20,
                  topic: "Plant reproductive adaptations",
                  brief:
                    "Plant reproductive adaptations are features that improve the success of pollination, fertilisation, seed dispersal and offspring establishment. Bright petals, scent and nectar may attract animal pollinators, while lightweight pollen and exposed anthers can support wind pollination. Fruits, hooks, wings and fleshy tissues help seeds disperse by wind, animals or other agents, reducing competition with the parent plant.",
                },
              ],
            },
            {
              id: "BIO12-CH04",
              chapterNumber: 4,
              chapterName: "Genetics and Molecular Biology",
              topics: [
                {
                  id: "BIO12-CH04-T01",
                  topicNumber: 1,
                  topic: "Introduction to genetics",
                  brief:
                    "Genetics is the branch of biology that studies heredity and variation in organisms. Heredity is the transmission of characteristics from parents to offspring, while variation refers to differences among individuals. Genes are units of heredity made of DNA, and their expression contributes to an organism's characteristics.",
                },
                {
                  id: "BIO12-CH04-T02",
                  topicNumber: 2,
                  topic: "Mendel's experiments",
                  brief:
                    "Gregor Johann Mendel studied inheritance by conducting controlled crosses between pea plants with contrasting traits, such as tall and dwarf stems or round and wrinkled seeds. He observed the characteristics of offspring across generations and used numerical ratios to identify patterns of inheritance. His experiments established the foundations of classical genetics.",
                },
                {
                  id: "BIO12-CH04-T03",
                  topicNumber: 3,
                  topic: "Mendel's laws of inheritance",
                  brief:
                    "Mendel proposed principles explaining how hereditary factors are transmitted from parents to offspring. The law of dominance describes how one allele may mask another in a heterozygote, the law of segregation states that the two alleles of a gene separate during gamete formation, and the law of independent assortment states that alleles of different genes assort independently when the genes are unlinked or sufficiently far apart. These principles explain many basic inheritance patterns, although some traits follow more complex mechanisms.",
                },
                {
                  id: "BIO12-CH04-T04",
                  topicNumber: 4,
                  topic: "Monohybrid crosses",
                  brief:
                    "A monohybrid cross examines the inheritance of one character controlled by a single gene. In a typical cross between two heterozygous individuals, such as Tt × Tt, the expected genotype ratio is 1 TT : 2 Tt : 1 tt. With complete dominance, the expected phenotype ratio is 3 dominant : 1 recessive, assuming normal segregation and equal survival of the genotypes.",
                },
                {
                  id: "BIO12-CH04-T05",
                  topicNumber: 5,
                  topic: "Dihybrid crosses",
                  brief:
                    "A dihybrid cross studies the inheritance of two characters at the same time. When two individuals heterozygous for both genes are crossed, such as AaBb × AaBb, independent assortment and complete dominance typically produce a phenotypic ratio of 9:3:3:1. This ratio applies when the genes assort independently and other complications, such as gene interactions or differential survival, are absent.",
                },
                {
                  id: "BIO12-CH04-T06",
                  topicNumber: 6,
                  topic: "Test crosses",
                  brief:
                    "A test cross is used to determine the genotype of an individual showing a dominant phenotype. The individual is crossed with a homozygous recessive individual. If the unknown individual is homozygous dominant, all offspring are expected to show the dominant phenotype; if heterozygous, a 1:1 dominant-to-recessive phenotype ratio is expected for a simple single-gene cross.",
                },
                {
                  id: "BIO12-CH04-T07",
                  topicNumber: 7,
                  topic: "Incomplete dominance",
                  brief:
                    "Incomplete dominance occurs when neither allele completely masks the other, so a heterozygote shows an intermediate phenotype. For example, crossing a red-flowered plant with a white-flowered plant may produce pink-flowered offspring. When two heterozygotes are crossed, the usual phenotype ratio is 1 red : 2 pink : 1 white.",
                },
                {
                  id: "BIO12-CH04-T08",
                  topicNumber: 8,
                  topic: "Codominance",
                  brief:
                    "Codominance occurs when both alleles are fully expressed in a heterozygote. Rather than producing an intermediate phenotype, the heterozygote displays the effects of both alleles. The AB blood group in humans is a common example because both the A and B antigens are expressed on red blood cells.",
                },
                {
                  id: "BIO12-CH04-T09",
                  topicNumber: 9,
                  topic: "Multiple alleles",
                  brief:
                    "Multiple alleles occur when a gene has more than two alternative forms within a population, although a diploid individual can carry only two alleles of that gene at a time. The human ABO blood group system is controlled by three common alleles: IA, IB and i. IA and IB are codominant, while both are dominant over i.",
                },
                {
                  id: "BIO12-CH04-T10",
                  topicNumber: 10,
                  topic: "Blood group inheritance",
                  brief:
                    "Human ABO blood groups are determined by the IA, IB and i alleles. Genotypes IAIA or IAi produce group A, IBIB or IBi produce group B, IAIB produces group AB, and ii produces group O. The Rh blood group system is separate from the ABO system and is determined by additional genetic factors; blood group compatibility is important in transfusion and pregnancy.",
                },
                {
                  id: "BIO12-CH04-T11",
                  topicNumber: 11,
                  topic: "Sex determination",
                  brief:
                    "Sex determination is the biological process by which an individual's sex develops. In humans, sex chromosomes usually determine chromosomal sex: most females have XX chromosomes and most males have XY chromosomes. The egg typically contributes an X chromosome, while sperm contributes either X or Y; the SRY gene on the Y chromosome commonly initiates testis development. Variations in sex chromosomes and sexual development also occur.",
                },
                {
                  id: "BIO12-CH04-T12",
                  topicNumber: 12,
                  topic: "Sex-linked inheritance",
                  brief:
                    "Sex-linked inheritance involves genes located on sex chromosomes. X-linked recessive conditions, such as red-green colour vision deficiency and haemophilia A, are more commonly expressed in males because they usually have only one X chromosome. Y-linked traits are passed from father to son, although relatively few genes are located on the Y chromosome.",
                },
                {
                  id: "BIO12-CH04-T13",
                  topicNumber: 13,
                  topic: "Linkage and crossing over",
                  brief:
                    "Linkage occurs when genes located close together on the same chromosome tend to be inherited together. Crossing over is the exchange of corresponding DNA segments between non-sister chromatids of homologous chromosomes during prophase I of meiosis. It produces recombinant chromosomes and can separate linked alleles; recombination frequency can be used to estimate the relative distances between genes.",
                },
                {
                  id: "BIO12-CH04-T14",
                  topicNumber: 14,
                  topic: "Chromosomal theory of inheritance",
                  brief:
                    "The chromosomal theory of inheritance states that genes are located on chromosomes and that chromosome behaviour during meiosis explains many patterns of inheritance. The separation of homologous chromosomes helps explain Mendel's law of segregation, while the independent orientation of chromosome pairs helps explain independent assortment for genes on different chromosomes. The theory was developed through the work of scientists including Walter Sutton and Theodor Boveri.",
                },
                {
                  id: "BIO12-CH04-T15",
                  topicNumber: 15,
                  topic: "Chromosomal mutations",
                  brief:
                    "Chromosomal mutations are changes in chromosome structure or number. Structural changes include deletion, duplication, inversion and translocation, while numerical changes include aneuploidy, such as trisomy, and polyploidy, involving extra complete chromosome sets. These changes may affect development, fertility and health; for example, Down syndrome is most commonly associated with an extra copy of chromosome 21.",
                },
                {
                  id: "BIO12-CH04-T16",
                  topicNumber: 16,
                  topic: "Gene mutations",
                  brief:
                    "A gene mutation is a change in the DNA sequence of a gene. Mutations may involve the substitution, insertion or deletion of nucleotides and can alter a protein's sequence or affect gene regulation. Their effects may be harmful, beneficial or neutral, and mutations in reproductive cells can be inherited by offspring.",
                },
                {
                  id: "BIO12-CH04-T17",
                  topicNumber: 17,
                  topic: "DNA structure",
                  brief:
                    "DNA, or deoxyribonucleic acid, is the molecule that stores hereditary information in most organisms. It usually consists of two antiparallel nucleotide strands forming a double helix. Each nucleotide contains deoxyribose sugar, a phosphate group and a nitrogenous base; adenine pairs with thymine, while guanine pairs with cytosine through complementary base pairing.",
                },
                {
                  id: "BIO12-CH04-T18",
                  topicNumber: 18,
                  topic: "DNA replication",
                  brief:
                    "DNA replication is the process by which DNA is copied before cell division. It is semiconservative, meaning each new DNA molecule contains one original strand and one newly synthesised strand. Helicase separates the strands, primase provides RNA primers, DNA polymerase adds complementary nucleotides, and ligase joins DNA fragments on the lagging strand.",
                },
                {
                  id: "BIO12-CH04-T19",
                  topicNumber: 19,
                  topic: "RNA structure and types",
                  brief:
                    "RNA, or ribonucleic acid, is generally a single-stranded nucleic acid containing ribose sugar and the bases adenine, uracil, guanine and cytosine. Messenger RNA (mRNA) carries genetic instructions from DNA to ribosomes, transfer RNA (tRNA) delivers amino acids during protein synthesis, and ribosomal RNA (rRNA) forms part of ribosomes and contributes to peptide bond formation. Other RNA molecules also help regulate gene expression and process RNA.",
                },
                {
                  id: "BIO12-CH04-T20",
                  topicNumber: 20,
                  topic: "Transcription",
                  brief:
                    "Transcription is the process of synthesising RNA using a DNA template. RNA polymerase reads the template strand and builds an RNA molecule with complementary bases, using uracil instead of thymine. In eukaryotes, primary messenger RNA is usually processed by capping, splicing and polyadenylation before it is translated in the cytoplasm.",
                },
                {
                  id: "BIO12-CH04-T21",
                  topicNumber: 21,
                  topic: "Translation",
                  brief:
                    "Translation is the process by which ribosomes use the codon sequence of mRNA to assemble a polypeptide. The ribosome reads mRNA codons, while tRNA molecules deliver amino acids using complementary anticodons. Translation generally begins at a start codon, commonly AUG, and ends when a stop codon signals termination and release of the polypeptide.",
                },
                {
                  id: "BIO12-CH04-T22",
                  topicNumber: 22,
                  topic: "Genetic code",
                  brief:
                    "The genetic code is the set of rules by which three-nucleotide sequences called codons specify amino acids or translation signals. The code is degenerate because several codons can specify the same amino acid, but each codon normally has a specific meaning. AUG usually codes for methionine and serves as the start codon, while UAA, UAG and UGA are stop codons in the standard genetic code.",
                },
                {
                  id: "BIO12-CH04-T23",
                  topicNumber: 23,
                  topic: "Gene regulation",
                  brief:
                    "Gene regulation controls when, where and how much a gene is expressed. It allows cells with essentially the same DNA to develop different structures and perform specialised functions. Regulation can occur during transcription, RNA processing, translation and protein modification; in bacteria, the lac operon is a classic example of coordinated control of gene expression.",
                },
                {
                  id: "BIO12-CH04-T24",
                  topicNumber: 24,
                  topic: "Protein synthesis",
                  brief:
                    "Protein synthesis is the cellular process of producing proteins from genetic instructions. It involves transcription, which produces RNA from DNA, and translation, which uses mRNA codons to arrange amino acids into a polypeptide. The polypeptide then folds and may undergo additional modifications to become a functional protein.",
                },
                {
                  id: "BIO12-CH04-T25",
                  topicNumber: 25,
                  topic: "Applications of molecular genetics",
                  brief:
                    "Molecular genetics has applications in medicine, agriculture, biotechnology, forensics and evolutionary research. Techniques such as DNA sequencing, polymerase chain reaction (PCR), genetic testing and DNA profiling help identify genetic variants, diagnose certain conditions and investigate biological relationships. Genetic engineering and genome editing can also be used to develop improved crops, produce useful medicines and study gene function, although these technologies require careful assessment of safety and ethical concerns.",
                },
              ],
            },
            {
              id: "BIO12-CH05",
              chapterNumber: 5,
              chapterName: "Biotechnology",
              topics: [
                {
                  id: "BIO12-CH05-T01",
                  topicNumber: 1,
                  topic: "Definition and scope of biotechnology",
                  brief:
                    "Biotechnology is the application of living organisms, cells, enzymes or biological processes to develop useful products and technologies. Its scope includes agriculture, medicine, food production, environmental management and industrial manufacturing. Examples include producing insulin using genetically engineered microorganisms, developing improved crop varieties and using microbes in waste treatment.",
                },
                {
                  id: "BIO12-CH05-T02",
                  topicNumber: 2,
                  topic: "Traditional biotechnology",
                  brief:
                    "Traditional biotechnology uses organisms and natural biological processes to produce useful products without directly modifying DNA through modern molecular techniques. Common examples include fermentation in bread making, yoghurt production, cheese production and the preparation of fermented foods. These methods have been used for centuries to improve food preservation, flavour and production.",
                },
                {
                  id: "BIO12-CH05-T03",
                  topicNumber: 3,
                  topic: "Modern biotechnology",
                  brief:
                    "Modern biotechnology uses molecular biology, genetics, cell culture and advanced laboratory techniques to modify or study biological systems. It includes genetic engineering, recombinant DNA technology, DNA sequencing, polymerase chain reaction and genome editing. These technologies support the development of medicines, disease diagnosis, improved crops and specialised industrial products.",
                },
                {
                  id: "BIO12-CH05-T04",
                  topicNumber: 4,
                  topic: "Recombinant DNA technology",
                  brief:
                    "Recombinant DNA technology involves combining DNA segments from different sources to create a new DNA molecule. A desired gene is commonly isolated, joined to a suitable vector and introduced into a host cell, where it may be copied or expressed. This technology is used to produce substances such as human insulin and to study gene function.",
                },
                {
                  id: "BIO12-CH05-T05",
                  topicNumber: 5,
                  topic: "Restriction enzymes",
                  brief:
                    "Restriction enzymes are enzymes that recognise particular DNA sequences and cut DNA at or near those sites. They are naturally found in many bacteria, where they help defend against foreign DNA. In biotechnology, restriction enzymes are used to cut DNA fragments and vectors for recombinant DNA construction; some produce sticky ends, while others produce blunt ends.",
                },
                {
                  id: "BIO12-CH05-T06",
                  topicNumber: 6,
                  topic: "DNA ligase",
                  brief:
                    "DNA ligase is an enzyme that joins DNA fragments by forming phosphodiester bonds in the sugar-phosphate backbone. In recombinant DNA technology, it is used to join a desired DNA fragment to a cut vector. This creates a continuous DNA molecule that can be introduced into a host cell for further study or production.",
                },
                {
                  id: "BIO12-CH05-T07",
                  topicNumber: 7,
                  topic: "Vectors and plasmids",
                  brief:
                    "A vector is a DNA molecule used to carry foreign genetic material into a host cell. Plasmids are small, usually circular DNA molecules found in bacteria and are commonly used as vectors. A suitable plasmid vector generally contains an origin of replication, a selectable marker and a region where foreign DNA can be inserted.",
                },
                {
                  id: "BIO12-CH05-T08",
                  topicNumber: 8,
                  topic: "Gene cloning",
                  brief:
                    "Gene cloning is the process of producing many copies of a particular gene or DNA sequence. A target DNA fragment is often inserted into a vector, introduced into host cells and copied as the cells multiply. Gene cloning enables researchers to study genes, produce proteins and prepare DNA for applications such as genetic testing and biotechnology research.",
                },
                {
                  id: "BIO12-CH05-T09",
                  topicNumber: 9,
                  topic: "Polymerase chain reaction",
                  brief:
                    "Polymerase chain reaction (PCR) is a laboratory technique used to amplify a selected DNA sequence, producing millions of copies from a small starting sample. The main stages are denaturation, in which DNA strands separate; annealing, in which primers bind to complementary sequences; and extension, in which a heat-stable DNA polymerase synthesises new strands. PCR is widely used in disease diagnosis, forensic analysis, genetic research and DNA identification.",
                },
                {
                  id: "BIO12-CH05-T10",
                  topicNumber: 10,
                  topic: "Gel electrophoresis",
                  brief:
                    "Gel electrophoresis separates DNA fragments according to their movement through a gel under an electric field. Because DNA carries a negative charge, it generally moves toward the positive electrode. Smaller DNA fragments usually travel farther through the gel than larger fragments, allowing researchers to compare fragment sizes and analyse DNA samples.",
                },
                {
                  id: "BIO12-CH05-T11",
                  topicNumber: 11,
                  topic: "DNA sequencing",
                  brief:
                    "DNA sequencing determines the order of nucleotide bases in a DNA molecule. Methods such as Sanger sequencing and next-generation sequencing allow scientists to identify genes, detect genetic variations and compare genomes. DNA sequencing has applications in medical diagnosis, evolutionary studies, agriculture, pathogen identification and personalised medicine.",
                },
                {
                  id: "BIO12-CH05-T12",
                  topicNumber: 12,
                  topic: "Genetic engineering",
                  brief:
                    "Genetic engineering involves deliberately altering an organism's genetic material using biotechnology techniques. It may involve inserting a gene, removing or modifying DNA, or changing gene expression to produce a desired characteristic. Genetic engineering is used in research, medicine and agriculture, although its outcomes depend on the organism, the modification and how it is applied.",
                },
                {
                  id: "BIO12-CH05-T13",
                  topicNumber: 13,
                  topic: "Genetically modified organisms",
                  brief:
                    "Genetically modified organisms (GMOs) are organisms whose genetic material has been altered using genetic engineering techniques. Examples include crops modified for insect resistance or herbicide tolerance and microorganisms engineered to produce useful proteins. GMOs may offer agricultural or medical benefits, but their safety and environmental effects must be evaluated for each specific application.",
                },
                {
                  id: "BIO12-CH05-T14",
                  topicNumber: 14,
                  topic: "Plant tissue culture",
                  brief:
                    "Plant tissue culture is the growth of plant cells, tissues or organs on a sterile nutrient medium under controlled conditions. It relies on the developmental potential of plant cells, often described as totipotency, which allows a suitable cell to regenerate into a whole plant under appropriate conditions. Tissue culture is used for rapid propagation, disease-free plant production, germplasm conservation and plant research.",
                },
                {
                  id: "BIO12-CH05-T15",
                  topicNumber: 15,
                  topic: "Micropropagation",
                  brief:
                    "Micropropagation is the rapid production of many plants from small pieces of plant tissue under sterile laboratory conditions. The process commonly involves selecting an explant, establishing it on a nutrient medium, multiplying shoots, inducing roots and acclimatising the young plants to external conditions. It is widely used to produce large numbers of uniform plants, including bananas, orchids and other commercially valuable crops.",
                },
                {
                  id: "BIO12-CH05-T16",
                  topicNumber: 16,
                  topic: "Applications in agriculture",
                  brief:
                    "Biotechnology contributes to agriculture through crop improvement, disease diagnosis, tissue culture, marker-assisted selection and genetic engineering. It can help develop crops with improved nutritional quality, resistance to certain pests or diseases, and tolerance to specific environmental stresses. Biotechnology can also support livestock breeding, soil fertility management and the development of biological pest-control methods.",
                },
                {
                  id: "BIO12-CH05-T17",
                  topicNumber: 17,
                  topic: "Applications in medicine",
                  brief:
                    "Biotechnology is used in medicine to develop vaccines, diagnostic tests, therapeutic proteins and certain gene-based treatments. Genetically engineered microorganisms can produce human insulin and other medically useful proteins, while PCR and DNA sequencing help detect pathogens and identify genetic variants. Biotechnology also supports research into cancer, inherited disorders and personalised treatment.",
                },
                {
                  id: "BIO12-CH05-T18",
                  topicNumber: 18,
                  topic: "Biotechnology in industry",
                  brief:
                    "Industrial biotechnology uses microorganisms, enzymes and biological processes to manufacture useful products. Applications include food fermentation, enzyme production, biofuel generation, biodegradable materials and the manufacture of certain chemicals and pharmaceuticals. Biological processes can operate under relatively mild conditions and may reduce waste or energy use, although their overall environmental benefits depend on production methods and resources.",
                },
                {
                  id: "BIO12-CH05-T19",
                  topicNumber: 19,
                  topic: "Gene therapy",
                  brief:
                    "Gene therapy aims to treat or prevent disease by introducing, removing or modifying genetic material in a patient's cells. Some approaches deliver a functional copy of a gene, while others use gene-editing techniques to alter a disease-associated sequence. Gene therapy may offer treatment options for certain inherited disorders and other diseases, but its suitability, effectiveness and risks depend on the specific therapy and condition.",
                },
                {
                  id: "BIO12-CH05-T20",
                  topicNumber: 20,
                  topic: "Ethical and environmental concerns",
                  brief:
                    "Biotechnology raises ethical, social and environmental questions concerning safety, fairness, privacy and the responsible use of genetic information. Potential environmental concerns include gene flow to wild relatives, effects on non-target organisms and the evolution of resistant pests. Responsible biotechnology requires risk assessment, appropriate regulation, transparent communication, protection of personal genetic data and consideration of long-term ecological and social impacts.",
                },
              ],
            },
            {
              id: "BIO12-CH06",
              chapterNumber: 6,
              chapterName: "Ecology and Environment",
              topics: [
                {
                  id: "BIO12-CH06-T01",
                  topicNumber: 1,
                  topic: "Ecological organisation",
                  brief:
                    "Ecological organisation describes the hierarchical levels at which living organisms interact with one another and their surroundings. The main levels are organism, population, community, ecosystem, biome, and biosphere.",
                },
                {
                  id: "BIO12-CH06-T02",
                  topicNumber: 2,
                  topic: "Ecosystem structure",
                  brief:
                    "Ecosystem structure includes the biotic components, such as producers, consumers, and decomposers, and abiotic components, such as sunlight, water, soil, air, and temperature. These components interact to form a functional ecological system.",
                },
                {
                  id: "BIO12-CH06-T03",
                  topicNumber: 3,
                  topic: "Ecosystem functions",
                  brief:
                    "Ecosystem functions are the natural processes that maintain an ecosystem, including energy flow, nutrient cycling, primary production, decomposition, and interactions among organisms and their environment.",
                },
                {
                  id: "BIO12-CH06-T04",
                  topicNumber: 4,
                  topic: "Population ecology",
                  brief:
                    "Population ecology studies populations of the same species living in a particular area. It examines population size, density, distribution, age structure, birth rate, death rate, immigration, and emigration.",
                },
                {
                  id: "BIO12-CH06-T05",
                  topicNumber: 5,
                  topic: "Population growth curves",
                  brief:
                    "Population growth curves show how population size changes over time. Exponential growth produces a J-shaped curve under favourable conditions, while logistic growth produces an S-shaped curve as environmental resistance limits growth near the carrying capacity.",
                },
                {
                  id: "BIO12-CH06-T06",
                  topicNumber: 6,
                  topic: "Community interactions",
                  brief:
                    "Community interactions are relationships among organisms of different species living in the same community. These relationships may benefit, harm, or have no significant effect on the organisms involved.",
                },
                {
                  id: "BIO12-CH06-T07",
                  topicNumber: 7,
                  topic: "Competition",
                  brief:
                    "Competition occurs when organisms require the same limited resources, such as food, water, light, space, or nutrients. It may occur between individuals of the same species or between different species.",
                },
                {
                  id: "BIO12-CH06-T08",
                  topicNumber: 8,
                  topic: "Predation",
                  brief:
                    "Predation is an interaction in which one organism, called the predator, captures and feeds on another organism, called the prey. It helps regulate prey populations and can influence community structure.",
                },
                {
                  id: "BIO12-CH06-T09",
                  topicNumber: 9,
                  topic: "Parasitism",
                  brief:
                    "Parasitism is a relationship in which one organism, the parasite, benefits by living on or inside another organism, the host, which is harmed. Examples include tapeworms in humans and ticks on mammals.",
                },
                {
                  id: "BIO12-CH06-T10",
                  topicNumber: 10,
                  topic: "Mutualism",
                  brief:
                    "Mutualism is an ecological interaction in which both participating species benefit. Examples include pollinators obtaining nectar while transferring pollen between flowers, and certain fungi associating with plant roots.",
                },
                {
                  id: "BIO12-CH06-T11",
                  topicNumber: 11,
                  topic: "Commensalism",
                  brief:
                    "Commensalism is an interaction in which one species benefits while the other is neither significantly helped nor harmed. An example is an epiphytic orchid growing on a tree for support.",
                },
                {
                  id: "BIO12-CH06-T12",
                  topicNumber: 12,
                  topic: "Food chains and food webs",
                  brief:
                    "A food chain represents a sequence of organisms through which food, nutrients, and energy pass as one organism consumes another. A food web consists of interconnected food chains and represents the complex feeding relationships within an ecosystem.",
                },
                {
                  id: "BIO12-CH06-T13",
                  topicNumber: 13,
                  topic: "Energy flow",
                  brief:
                    "Energy flow is the transfer of energy through an ecosystem, beginning mainly with sunlight captured by producers and continuing through consumers and decomposers. Energy flows in one direction, and some is lost as heat at each trophic level.",
                },
                {
                  id: "BIO12-CH06-T14",
                  topicNumber: 14,
                  topic: "Ecological pyramids",
                  brief:
                    "Ecological pyramids are diagrams that represent trophic levels in an ecosystem. They may show the number of organisms, their biomass, or the amount of energy present at each level. The pyramid of energy is always upright.",
                },
                {
                  id: "BIO12-CH06-T15",
                  topicNumber: 15,
                  topic: "Carbon cycle",
                  brief:
                    "The carbon cycle describes the movement of carbon among the atmosphere, living organisms, soil, oceans, and rocks. Photosynthesis removes carbon dioxide from the atmosphere, while respiration, decomposition, and combustion release it.",
                },
                {
                  id: "BIO12-CH06-T16",
                  topicNumber: 16,
                  topic: "Nitrogen cycle",
                  brief:
                    "The nitrogen cycle describes how nitrogen moves between the atmosphere, soil, and living organisms. Important processes include nitrogen fixation, nitrification, assimilation, ammonification, and denitrification, which make nitrogen available and return it to the atmosphere.",
                },
                {
                  id: "BIO12-CH06-T17",
                  topicNumber: 17,
                  topic: "Water cycle",
                  brief:
                    "The water cycle is the continuous movement of water between Earth's surface and the atmosphere. Its major processes include evaporation, transpiration, condensation, precipitation, infiltration, and runoff.",
                },
                {
                  id: "BIO12-CH06-T18",
                  topicNumber: 18,
                  topic: "Ecological succession",
                  brief:
                    "Ecological succession is the gradual change in the composition and structure of a biological community over time. Primary succession begins in areas without developed soil, whereas secondary succession occurs in previously inhabited areas where soil remains.",
                },
                {
                  id: "BIO12-CH06-T19",
                  topicNumber: 19,
                  topic: "Biodiversity and ecosystem stability",
                  brief:
                    "Biodiversity refers to the variety of life at genetic, species, and ecosystem levels. Greater biodiversity can support ecosystem productivity, resilience, and recovery from disturbances, although stability also depends on environmental conditions and ecological relationships.",
                },
                {
                  id: "BIO12-CH06-T20",
                  topicNumber: 20,
                  topic: "Pollution and its effects",
                  brief:
                    "Pollution is the introduction of harmful substances or forms of energy into the environment. Air, water, and soil pollution can damage organisms, disrupt ecosystems, contribute to disease, and reduce environmental quality.",
                },
                {
                  id: "BIO12-CH06-T21",
                  topicNumber: 21,
                  topic: "Climate change",
                  brief:
                    "Climate change refers to long-term changes in temperature and weather patterns. Current global warming is driven mainly by human-produced greenhouse gases from activities such as fossil fuel combustion and deforestation, contributing to rising temperatures, changing rainfall, and sea-level rise.",
                },
                {
                  id: "BIO12-CH06-T22",
                  topicNumber: 22,
                  topic: "Conservation biology",
                  brief:
                    "Conservation biology is the scientific study and protection of biodiversity, species, habitats, and ecosystems. Conservation strategies include protected areas, habitat restoration, sustainable resource use, and the protection of threatened species.",
                },
                {
                  id: "BIO12-CH06-T23",
                  topicNumber: 23,
                  topic: "Sustainable development",
                  brief:
                    "Sustainable development meets present needs without compromising the ability of future generations to meet their own needs. It balances environmental protection, social well-being, and economic development through responsible resource use.",
                },
              ],
            },
          ],
        },
        {
          id: "BIO12-B02",
          branchNumber: 2,
          branchName: "Animal Biology and Zoology",
          chapters: [
            {
              id: "BIO12-CH07",
              chapterNumber: 7,
              chapterName: "Animal Tissues and Organ Systems",
              topics: [
                {
                  id: "BIO12-CH07-T01",
                  topicNumber: 1,
                  topic: "Animal tissue classification",
                  brief:
                    "Animal tissues are groups of similar cells and their surrounding materials that work together to perform specific functions. The four major types are epithelial, connective, muscular, and nervous tissues.",
                },
                {
                  id: "BIO12-CH07-T02",
                  topicNumber: 2,
                  topic: "Epithelial tissues",
                  brief:
                    "Epithelial tissues cover body surfaces, line internal organs and cavities, and form glands. Their main functions include protection, absorption, secretion, filtration, and exchange of substances.",
                },
                {
                  id: "BIO12-CH07-T03",
                  topicNumber: 3,
                  topic: "Connective tissues",
                  brief:
                    "Connective tissues support, bind, protect, and connect different body structures. They contain cells embedded in an extracellular matrix and include areolar tissue, adipose tissue, cartilage, bone, blood, and other specialised forms.",
                },
                {
                  id: "BIO12-CH07-T04",
                  topicNumber: 4,
                  topic: "Blood and lymph",
                  brief:
                    "Blood is a fluid connective tissue consisting of plasma, red blood cells, white blood cells, and platelets. It transports gases, nutrients, hormones, and wastes and helps defend the body. Lymph is a fluid within the lymphatic system that returns excess tissue fluid to the bloodstream and contributes to immune defence.",
                },
                {
                  id: "BIO12-CH07-T05",
                  topicNumber: 5,
                  topic: "Muscular tissues",
                  brief:
                    "Muscular tissues contain specialised cells that contract to produce movement. The three main types are skeletal muscle, which generally enables voluntary movement; smooth muscle, which controls involuntary movements in internal organs; and cardiac muscle, which forms the heart wall.",
                },
                {
                  id: "BIO12-CH07-T06",
                  topicNumber: 6,
                  topic: "Nervous tissues",
                  brief:
                    "Nervous tissue consists mainly of neurons and supporting glial cells. Neurons receive and transmit electrical signals, while glial cells support, protect, and maintain neuronal function. Nervous tissue enables communication and rapid coordination throughout the body.",
                },
                {
                  id: "BIO12-CH07-T07",
                  topicNumber: 7,
                  topic: "Organisation of organ systems",
                  brief:
                    "In animals, cells form tissues, tissues form organs, and organs work together in organ systems. Organ systems coordinate specialised functions such as digestion, respiration, circulation, excretion, and reproduction to maintain the life of the organism.",
                },
                {
                  id: "BIO12-CH07-T08",
                  topicNumber: 8,
                  topic: "Digestive system overview",
                  brief:
                    "The digestive system breaks down food mechanically and chemically into substances that can be absorbed and used by the body. It includes the alimentary canal and accessory organs, such as the liver and pancreas, which support digestion and nutrient absorption.",
                },
                {
                  id: "BIO12-CH07-T09",
                  topicNumber: 9,
                  topic: "Respiratory system overview",
                  brief:
                    "The respiratory system enables gas exchange between the body and the external environment. It obtains oxygen for cellular respiration and removes carbon dioxide produced by metabolism. Its structures vary among animals and may include lungs, gills, tracheae, or specialised body surfaces.",
                },
                {
                  id: "BIO12-CH07-T10",
                  topicNumber: 10,
                  topic: "Circulatory system overview",
                  brief:
                    "The circulatory system transports substances such as oxygen, nutrients, hormones, and metabolic wastes throughout the body. In many animals, it consists of a circulating fluid, vessels, and a pumping organ such as the heart.",
                },
                {
                  id: "BIO12-CH07-T11",
                  topicNumber: 11,
                  topic: "Excretory system overview",
                  brief:
                    "The excretory system removes metabolic wastes and helps regulate water balance, salt concentration, and internal chemical conditions. In humans, the urinary system includes the kidneys, ureters, urinary bladder, and urethra.",
                },
                {
                  id: "BIO12-CH07-T12",
                  topicNumber: 12,
                  topic: "Nervous system overview",
                  brief:
                    "The nervous system detects stimuli, processes information, and coordinates responses. In humans, it includes the central nervous system, consisting of the brain and spinal cord, and the peripheral nervous system, which connects the central system with the rest of the body.",
                },
                {
                  id: "BIO12-CH07-T13",
                  topicNumber: 13,
                  topic: "Endocrine system overview",
                  brief:
                    "The endocrine system consists of glands and specialised cells that release hormones into the bloodstream or surrounding fluids. Hormones regulate processes such as growth, metabolism, reproduction, stress responses, and maintenance of internal balance.",
                },
                {
                  id: "BIO12-CH07-T14",
                  topicNumber: 14,
                  topic: "Reproductive system overview",
                  brief:
                    "The reproductive system produces gametes and enables sexual reproduction. In humans, the male reproductive system produces and delivers sperm, while the female reproductive system produces ova and provides the conditions needed for fertilisation and, when pregnancy occurs, development of the embryo and fetus.",
                },
                {
                  id: "BIO12-CH07-T15",
                  topicNumber: 15,
                  topic: "Coordination between organ systems",
                  brief:
                    "Organ systems coordinate through nervous signals, hormones, circulation, and other physiological mechanisms. For example, during exercise, the nervous, respiratory, circulatory, and muscular systems work together to increase oxygen delivery and support greater energy demand.",
                },
                {
                  id: "BIO12-CH07-T16",
                  topicNumber: 16,
                  topic: "Homeostasis",
                  brief:
                    "Homeostasis is the maintenance of relatively stable internal conditions despite changes inside or outside the body. It regulates factors such as body temperature, blood glucose, water balance, and pH, often through negative feedback mechanisms involving the nervous and endocrine systems.",
                },
              ],
            },
            {
              id: "BIO12-CH08",
              chapterNumber: 8,
              chapterName: "Human Digestive System",
              topics: [
                {
                  id: "BIO12-CH08-T01",
                  topicNumber: 1,
                  topic: "Human alimentary canal",
                  brief:
                    "The human alimentary canal is a continuous muscular tube extending from the mouth to the anus. It includes the mouth, pharynx, oesophagus, stomach, small intestine, large intestine, rectum, and anus, and is responsible for digestion, absorption, and elimination of undigested food.",
                },
                {
                  id: "BIO12-CH08-T02",
                  topicNumber: 2,
                  topic: "Mouth and buccal cavity",
                  brief:
                    "The mouth and buccal cavity receive food and begin digestion through chewing and the action of saliva. The tongue mixes food with saliva, helps form a bolus, and pushes it toward the pharynx during swallowing.",
                },
                {
                  id: "BIO12-CH08-T03",
                  topicNumber: 3,
                  topic: "Teeth and dentition",
                  brief:
                    "Teeth are specialised structures that mechanically break food into smaller pieces. Human dentition includes incisors for cutting, canines for tearing, premolars for crushing, and molars for grinding. Adults normally have 32 permanent teeth, while children usually have 20 deciduous teeth.",
                },
                {
                  id: "BIO12-CH08-T04",
                  topicNumber: 4,
                  topic: "Salivary glands",
                  brief:
                    "The major salivary glands are the parotid, submandibular, and sublingual glands. They secrete saliva, which moistens food, facilitates swallowing, helps maintain oral hygiene, and contains salivary amylase that begins the digestion of starch.",
                },
                {
                  id: "BIO12-CH08-T05",
                  topicNumber: 5,
                  topic: "Oesophagus",
                  brief:
                    "The oesophagus is a muscular tube that transports swallowed food from the pharynx to the stomach through rhythmic muscular contractions called peristalsis. It mainly functions in food transport rather than digestion.",
                },
                {
                  id: "BIO12-CH08-T06",
                  topicNumber: 6,
                  topic: "Stomach",
                  brief:
                    "The stomach is a muscular, expandable organ that temporarily stores food and mixes it with gastric juice. Hydrochloric acid creates an acidic environment, while pepsin begins protein digestion. Mucus protects the stomach lining from acid and digestive enzymes.",
                },
                {
                  id: "BIO12-CH08-T07",
                  topicNumber: 7,
                  topic: "Small intestine",
                  brief:
                    "The small intestine consists of the duodenum, jejunum, and ileum. Most chemical digestion and nutrient absorption occur here. Its inner surface contains numerous villi and microvilli that increase the surface area available for absorption.",
                },
                {
                  id: "BIO12-CH08-T08",
                  topicNumber: 8,
                  topic: "Large intestine",
                  brief:
                    "The large intestine includes the caecum, colon, rectum, and anal canal. It absorbs remaining water and electrolytes, houses beneficial microorganisms, and helps form, store, and eliminate faeces.",
                },
                {
                  id: "BIO12-CH08-T09",
                  topicNumber: 9,
                  topic: "Liver",
                  brief:
                    "The liver is a large gland that produces bile and performs several metabolic functions. It processes absorbed nutrients, stores glycogen and certain vitamins, helps regulate blood glucose, and detoxifies or modifies various substances.",
                },
                {
                  id: "BIO12-CH08-T10",
                  topicNumber: 10,
                  topic: "Gallbladder",
                  brief:
                    "The gallbladder is a small sac located beneath the liver. It stores and concentrates bile produced by the liver and releases it into the duodenum, especially when fatty food enters the small intestine.",
                },
                {
                  id: "BIO12-CH08-T11",
                  topicNumber: 11,
                  topic: "Pancreas",
                  brief:
                    "The pancreas is both an exocrine and an endocrine gland. Its exocrine portion releases digestive enzymes and bicarbonate-rich fluid into the duodenum, while its endocrine portion secretes hormones such as insulin and glucagon that help regulate blood glucose.",
                },
                {
                  id: "BIO12-CH08-T12",
                  topicNumber: 12,
                  topic: "Digestive enzymes",
                  brief:
                    "Digestive enzymes are biological catalysts that break large food molecules into smaller absorbable substances. Examples include amylases for carbohydrates, proteases for proteins, and lipases for fats. Different enzymes act on specific substrates under suitable conditions.",
                },
                {
                  id: "BIO12-CH08-T13",
                  topicNumber: 13,
                  topic: "Digestion of carbohydrates",
                  brief:
                    "Carbohydrate digestion begins in the mouth when salivary amylase breaks down starch. Pancreatic amylase continues digestion in the small intestine, where brush-border enzymes convert disaccharides into monosaccharides such as glucose, which can be absorbed into the blood.",
                },
                {
                  id: "BIO12-CH08-T14",
                  topicNumber: 14,
                  topic: "Digestion of proteins",
                  brief:
                    "Protein digestion begins in the stomach, where hydrochloric acid helps denature proteins and pepsin breaks them into smaller peptides. In the small intestine, pancreatic and intestinal peptidases further break peptides into amino acids and small peptides that can be absorbed.",
                },
                {
                  id: "BIO12-CH08-T15",
                  topicNumber: 15,
                  topic: "Digestion of lipids",
                  brief:
                    "Lipid digestion occurs mainly in the small intestine. Bile salts emulsify large fat globules into smaller droplets, increasing the surface area for enzyme action, while pancreatic lipase breaks triglycerides into fatty acids and monoglycerides that can be absorbed.",
                },
                {
                  id: "BIO12-CH08-T16",
                  topicNumber: 16,
                  topic: "Absorption of nutrients",
                  brief:
                    "Absorption is the movement of digested nutrients from the intestinal lumen into the blood or lymph. Most absorption occurs through the villi and microvilli of the small intestine. Most sugars and amino acids enter blood capillaries, while many long-chain lipid products are transported initially through lymphatic vessels.",
                },
                {
                  id: "BIO12-CH08-T17",
                  topicNumber: 17,
                  topic: "Assimilation of nutrients",
                  brief:
                    "Assimilation is the use of absorbed nutrients by body cells for energy, growth, repair, and storage. For example, glucose may be used in cellular respiration, amino acids may be used to build proteins, and excess energy may be stored as glycogen or fat.",
                },
                {
                  id: "BIO12-CH08-T18",
                  topicNumber: 18,
                  topic: "Role of bile",
                  brief:
                    "Bile is produced by the liver and stored in the gallbladder. Bile salts emulsify fats into smaller droplets, helping lipase digest them more efficiently. Bile also helps neutralise acidic material entering the small intestine and supports the absorption of fats and fat-soluble vitamins.",
                },
                {
                  id: "BIO12-CH08-T19",
                  topicNumber: 19,
                  topic: "Balanced diet",
                  brief:
                    "A balanced diet provides adequate amounts of carbohydrates, proteins, fats, vitamins, minerals, water, and dietary fibre according to a person's age, activity, and physiological needs. It supports normal growth, energy production, tissue repair, and overall health.",
                },
                {
                  id: "BIO12-CH08-T20",
                  topicNumber: 20,
                  topic: "Malnutrition",
                  brief:
                    "Malnutrition occurs when nutrient intake or absorption is insufficient, excessive, or unbalanced. It includes undernutrition, micronutrient deficiencies, and overnutrition. Its effects may include impaired growth, reduced immunity, fatigue, and an increased risk of chronic diseases.",
                },
                {
                  id: "BIO12-CH08-T21",
                  topicNumber: 21,
                  topic: "Digestive disorders",
                  brief:
                    "Digestive disorders affect the organs or processes involved in digestion and absorption. Examples include gastro-oesophageal reflux disease, peptic ulcers, diarrhoea, constipation, coeliac disease, and lactose intolerance. Causes and symptoms vary, and treatment depends on the specific disorder.",
                },
              ],
            },
            {
              id: "BIO12-CH09",
              chapterNumber: 9,
              chapterName: "Human Respiratory System",
              topics: [
                {
                  id: "BIO12-CH09-T01",
                  topicNumber: 1,
                  topic: "Human respiratory organs",
                  brief:
                    "The human respiratory system consists of the nose, nasal cavity, pharynx, larynx, trachea, bronchi, bronchioles, and lungs. These organs conduct air, filter and condition inhaled air, and facilitate the exchange of oxygen and carbon dioxide.",
                },
                {
                  id: "BIO12-CH09-T02",
                  topicNumber: 2,
                  topic: "Structure of the respiratory tract",
                  brief:
                    "The respiratory tract is divided into the upper respiratory tract, which includes the nose and nasal cavity and commonly the pharynx, and the lower respiratory tract, which includes the larynx, trachea, bronchi, and smaller airways. Mucus and cilia trap and remove dust and microorganisms, while cartilage supports larger airways and helps keep them open.",
                },
                {
                  id: "BIO12-CH09-T03",
                  topicNumber: 3,
                  topic: "Structure of lungs",
                  brief:
                    "The lungs are paired, spongy organs in the thoracic cavity, protected by the rib cage and covered by a double-layered pleural membrane. The right lung usually has three lobes, while the left lung has two lobes to accommodate the heart. Bronchi branch into bronchioles that terminate in alveoli, where gas exchange occurs.",
                },
                {
                  id: "BIO12-CH09-T04",
                  topicNumber: 4,
                  topic: "Alveoli and gas exchange",
                  brief:
                    "Alveoli are tiny, thin-walled air sacs surrounded by networks of blood capillaries. Their large surface area, moist lining, and short diffusion distance enable oxygen to diffuse from alveolar air into the blood and carbon dioxide to diffuse from the blood into the alveoli.",
                },
                {
                  id: "BIO12-CH09-T05",
                  topicNumber: 5,
                  topic: "Mechanism of breathing",
                  brief:
                    "Breathing, or pulmonary ventilation, is the movement of air into and out of the lungs caused by changes in thoracic cavity volume and pressure. The diaphragm and intercostal muscles play major roles in these changes, allowing air to move down a pressure gradient.",
                },
                {
                  id: "BIO12-CH09-T06",
                  topicNumber: 6,
                  topic: "Inspiration and expiration",
                  brief:
                    "During inspiration, the diaphragm contracts and flattens, and the external intercostal muscles elevate the ribs, increasing thoracic volume and lowering pressure inside the lungs so air enters. During quiet expiration, these muscles relax, thoracic volume decreases, and air flows out as lung elastic recoil raises pressure.",
                },
                {
                  id: "BIO12-CH09-T07",
                  topicNumber: 7,
                  topic: "Lung volumes and capacities",
                  brief:
                    "Lung volumes describe measurable amounts of air involved in breathing, including tidal volume, inspiratory reserve volume, expiratory reserve volume, and residual volume. Lung capacities combine two or more volumes, such as vital capacity and total lung capacity. These measurements help assess respiratory function and vary with factors such as age, sex, body size, and health.",
                },
                {
                  id: "BIO12-CH09-T08",
                  topicNumber: 8,
                  topic: "Transport of oxygen",
                  brief:
                    "Oxygen is transported in the blood mainly bound reversibly to haemoglobin in red blood cells, with a small amount dissolved in plasma. In the lungs, oxygen binds to haemoglobin, while in tissues, it is released according to oxygen partial pressure and local conditions.",
                },
                {
                  id: "BIO12-CH09-T09",
                  topicNumber: 9,
                  topic: "Transport of carbon dioxide",
                  brief:
                    "Carbon dioxide produced by cellular metabolism is transported from tissues to the lungs in three main forms: mainly as bicarbonate ions in plasma, partly bound to haemoglobin and other proteins, and a small amount dissolved in plasma. In the lungs, carbon dioxide is released into the alveoli and expelled during expiration.",
                },
                {
                  id: "BIO12-CH09-T10",
                  topicNumber: 10,
                  topic: "Haemoglobin and oxygen transport",
                  brief:
                    "Haemoglobin is an iron-containing respiratory protein found in red blood cells. Each haemoglobin molecule can reversibly bind up to four oxygen molecules, forming oxyhaemoglobin. This enables efficient oxygen transport from the lungs to tissues, where oxygen is released for cellular respiration.",
                },
                {
                  id: "BIO12-CH09-T11",
                  topicNumber: 11,
                  topic: "Regulation of respiration",
                  brief:
                    "Respiration is regulated mainly by respiratory centres in the medulla oblongata and pons of the brainstem. Chemoreceptors monitor changes in carbon dioxide, pH, and oxygen levels and help adjust the rate and depth of breathing to meet the body's needs.",
                },
                {
                  id: "BIO12-CH09-T12",
                  topicNumber: 12,
                  topic: "Cellular respiration overview",
                  brief:
                    "Cellular respiration is the series of biochemical reactions through which cells release energy from organic molecules and transfer it into ATP, the cell's usable energy currency. It includes glycolysis and, under aerobic conditions, further processes such as the citric acid cycle and oxidative phosphorylation.",
                },
                {
                  id: "BIO12-CH09-T13",
                  topicNumber: 13,
                  topic: "Aerobic respiration",
                  brief:
                    "Aerobic respiration breaks down glucose using oxygen and produces carbon dioxide, water, and ATP. Glycolysis occurs in the cytoplasm, while the citric acid cycle and electron transport chain occur mainly in the mitochondria of eukaryotic cells. It generally yields much more ATP per glucose molecule than anaerobic pathways.",
                },
                {
                  id: "BIO12-CH09-T14",
                  topicNumber: 14,
                  topic: "Anaerobic respiration",
                  brief:
                    "Anaerobic energy production occurs without oxygen. In human muscle cells, anaerobic glycolysis converts glucose into lactate and produces a small amount of ATP. In certain microorganisms, anaerobic pathways may produce different end products, such as ethanol and carbon dioxide during alcoholic fermentation.",
                },
                {
                  id: "BIO12-CH09-T15",
                  topicNumber: 15,
                  topic: "Respiratory pigments",
                  brief:
                    "Respiratory pigments are substances that reversibly bind gases and help transport them in organisms. Haemoglobin is the principal oxygen-carrying pigment in human blood. Other animals may possess different pigments, such as haemocyanin, which contains copper and occurs in many molluscs and arthropods.",
                },
                {
                  id: "BIO12-CH09-T16",
                  topicNumber: 16,
                  topic: "Respiratory disorders",
                  brief:
                    "Respiratory disorders affect the airways, lungs, or gas-exchange processes. Examples include asthma, bronchitis, pneumonia, tuberculosis, emphysema, and lung cancer. Symptoms may include coughing, wheezing, chest discomfort, and shortness of breath, depending on the condition.",
                },
                {
                  id: "BIO12-CH09-T17",
                  topicNumber: 17,
                  topic: "Effects of smoking and air pollution",
                  brief:
                    "Smoking exposes the respiratory system to harmful chemicals that damage airway cilia, irritate lung tissues, reduce effective gas exchange, and increase the risk of chronic obstructive pulmonary disease and lung cancer. Air pollution, including particulate matter and harmful gases, can worsen asthma, damage the lungs, and increase the risk of cardiovascular and respiratory diseases.",
                },
              ],
            },
            {
              id: "BIO12-CH10",
              chapterNumber: 10,
              chapterName: "Human Circulatory System",
              topics: [
                {
                  id: "BIO12-CH10-T01",
                  topicNumber: 1,
                  topic: "Components of blood",
                  brief:
                    "Blood is a fluid connective tissue consisting of plasma and formed elements: red blood cells, white blood cells, and platelets. It transports substances, protects the body against infection, regulates internal conditions, and helps maintain homeostasis.",
                },
                {
                  id: "BIO12-CH10-T02",
                  topicNumber: 2,
                  topic: "Plasma",
                  brief:
                    "Plasma is the pale-yellow liquid component of blood, consisting mainly of water along with proteins, electrolytes, nutrients, hormones, gases, and waste products. It transports substances throughout the body and helps maintain blood volume, pH, and osmotic balance.",
                },
                {
                  id: "BIO12-CH10-T03",
                  topicNumber: 3,
                  topic: "Red blood cells",
                  brief:
                    "Red blood cells, or erythrocytes, are specialised blood cells that contain haemoglobin for transporting oxygen. Mature human red blood cells lack a nucleus and have a biconcave shape, which provides a large surface area for gas exchange.",
                },
                {
                  id: "BIO12-CH10-T04",
                  topicNumber: 4,
                  topic: "White blood cells",
                  brief:
                    "White blood cells, or leukocytes, defend the body against pathogens and other foreign substances. Major types include neutrophils, eosinophils, basophils, lymphocytes, and monocytes, which perform functions such as phagocytosis, antibody production, and immune regulation.",
                },
                {
                  id: "BIO12-CH10-T05",
                  topicNumber: 5,
                  topic: "Platelets",
                  brief:
                    "Platelets, or thrombocytes, are small cell fragments formed from megakaryocytes in the bone marrow. They help stop bleeding by adhering to damaged blood vessels, forming a platelet plug, and supporting the blood-clotting process.",
                },
                {
                  id: "BIO12-CH10-T06",
                  topicNumber: 6,
                  topic: "Blood clotting",
                  brief:
                    "Blood clotting, or coagulation, is a protective process that prevents excessive blood loss after a vessel is damaged. Platelets form an initial plug, and a series of clotting reactions produces thrombin, which converts soluble fibrinogen into insoluble fibrin strands that stabilise the clot.",
                },
                {
                  id: "BIO12-CH10-T07",
                  topicNumber: 7,
                  topic: "ABO blood groups",
                  brief:
                    "The ABO blood group system classifies blood according to the presence or absence of A and B antigens on red blood cells. The four main groups are A, B, AB, and O. Compatibility is important during blood transfusions because incompatible antigens and antibodies can cause dangerous reactions.",
                },
                {
                  id: "BIO12-CH10-T08",
                  topicNumber: 8,
                  topic: "Rh factor",
                  brief:
                    "The Rh factor is a blood group system that includes the D antigen on red blood cells. People who have the D antigen are generally classified as Rh-positive, while those without it are Rh-negative. Rh compatibility is important in transfusions and pregnancy because maternal antibodies against fetal red blood cells can cause haemolytic disease of the fetus and newborn.",
                },
                {
                  id: "BIO12-CH10-T09",
                  topicNumber: 9,
                  topic: "Structure of the human heart",
                  brief:
                    "The human heart is a muscular organ located in the thoracic cavity between the lungs. It has four chambers: the right and left atria and the right and left ventricles. Valves prevent backflow, while the septum separates the right and left sides and helps keep oxygen-poor and oxygen-rich blood apart.",
                },
                {
                  id: "BIO12-CH10-T10",
                  topicNumber: 10,
                  topic: "Cardiac cycle",
                  brief:
                    "The cardiac cycle is the sequence of events that occurs during one complete heartbeat. It includes atrial systole, ventricular systole, and diastole. Coordinated contractions and relaxations of the chambers, together with the opening and closing of valves, ensure efficient blood circulation.",
                },
                {
                  id: "BIO12-CH10-T11",
                  topicNumber: 11,
                  topic: "Heartbeat and pulse",
                  brief:
                    "A heartbeat is one complete cycle of contraction and relaxation of the heart. The pulse is the rhythmic expansion of arteries caused by blood being forced into them during ventricular contraction. Pulse rate usually corresponds to heart rate and changes with activity, age, and health.",
                },
                {
                  id: "BIO12-CH10-T12",
                  topicNumber: 12,
                  topic: "Cardiac output",
                  brief:
                    "Cardiac output is the volume of blood pumped by one ventricle per minute. It depends on heart rate and stroke volume, which is the volume of blood ejected by a ventricle during each beat. Cardiac output generally increases during exercise to supply working tissues with more oxygen.",
                },
                {
                  id: "BIO12-CH10-T13",
                  topicNumber: 13,
                  topic: "Blood vessels",
                  brief:
                    "Blood vessels are tubes that transport blood throughout the body. The three main types are arteries, veins, and capillaries. Their structural differences allow them to perform specialised roles in carrying blood away from the heart, returning it to the heart, and exchanging substances with tissues.",
                },
                {
                  id: "BIO12-CH10-T14",
                  topicNumber: 14,
                  topic: "Arteries and veins",
                  brief:
                    "Arteries carry blood away from the heart and generally have thick, elastic, muscular walls to withstand relatively high pressure. Veins return blood to the heart and usually have thinner walls, wider lumens, and valves that help prevent backflow. Arteries usually carry oxygen-rich blood and veins oxygen-poor blood, with exceptions such as the pulmonary vessels.",
                },
                {
                  id: "BIO12-CH10-T15",
                  topicNumber: 15,
                  topic: "Capillaries",
                  brief:
                    "Capillaries are microscopic blood vessels with walls that are generally one cell thick. Their thin walls and extensive networks allow oxygen, carbon dioxide, nutrients, hormones, and waste products to be exchanged between blood and surrounding tissues.",
                },
                {
                  id: "BIO12-CH10-T16",
                  topicNumber: 16,
                  topic: "Double circulation",
                  brief:
                    "Double circulation means that blood passes through the heart twice during one complete circuit of the body. Pulmonary circulation carries blood between the heart and lungs for gas exchange, while systemic circulation carries blood between the heart and the rest of the body. This arrangement supports efficient oxygen delivery and maintains appropriate pressure in each circuit.",
                },
                {
                  id: "BIO12-CH10-T17",
                  topicNumber: 17,
                  topic: "Blood pressure",
                  brief:
                    "Blood pressure is the force exerted by circulating blood against the walls of blood vessels, commonly measured in the arteries. Systolic pressure occurs during ventricular contraction, while diastolic pressure occurs during ventricular relaxation. Blood pressure is influenced by cardiac output, blood volume, and resistance in the blood vessels.",
                },
                {
                  id: "BIO12-CH10-T18",
                  topicNumber: 18,
                  topic: "Lymphatic system",
                  brief:
                    "The lymphatic system consists of lymph, lymphatic vessels, lymph nodes, and associated organs. It returns excess tissue fluid to the bloodstream, transports absorbed dietary fats from the intestine, and supports immune defence by filtering lymph and helping immune cells detect pathogens.",
                },
                {
                  id: "BIO12-CH10-T19",
                  topicNumber: 19,
                  topic: "Immunity overview",
                  brief:
                    "Immunity is the body's ability to resist infections and other harmful foreign substances. Innate immunity provides rapid, general protection through barriers and immune cells, while adaptive immunity involves specific responses by B and T lymphocytes. B cells can produce antibodies, and some immune cells form long-lasting memory.",
                },
                {
                  id: "BIO12-CH10-T20",
                  topicNumber: 20,
                  topic: "Cardiovascular disorders",
                  brief:
                    "Cardiovascular disorders affect the heart and blood vessels. Examples include hypertension, coronary artery disease, heart attack, stroke, and heart failure. Risk factors may include smoking, physical inactivity, an unhealthy diet, diabetes, high blood cholesterol, and certain inherited or age-related factors.",
                },
              ],
            },
            {
              id: "BIO12-CH11",
              chapterNumber: 11,
              chapterName: "Human Excretory System",
              topics: [
                {
                  id: "BIO12-CH11-T01",
                  topicNumber: 1,
                  topic: "Excretion and osmoregulation",
                  brief:
                    "Excretion is the process of removing metabolic waste products from the body, while osmoregulation maintains the balance of water and dissolved substances. Together, these processes help maintain a stable internal environment by regulating waste removal, fluid volume, and electrolyte concentrations.",
                },
                {
                  id: "BIO12-CH11-T02",
                  topicNumber: 2,
                  topic: "Human urinary system",
                  brief:
                    "The human urinary system consists of two kidneys, two ureters, a urinary bladder, and a urethra. The kidneys filter blood and produce urine, the ureters transport urine to the bladder, the bladder stores it temporarily, and the urethra carries it out of the body.",
                },
                {
                  id: "BIO12-CH11-T03",
                  topicNumber: 3,
                  topic: "Structure of kidneys",
                  brief:
                    "The kidneys are paired, bean-shaped organs located toward the back of the abdominal cavity. Each kidney has an outer renal cortex, an inner renal medulla, and a renal pelvis that collects urine. Numerous nephrons within the kidneys filter blood and regulate water, electrolytes, and waste products.",
                },
                {
                  id: "BIO12-CH11-T04",
                  topicNumber: 4,
                  topic: "Structure of nephron",
                  brief:
                    "The nephron is the structural and functional unit of the kidney. It consists of a renal corpuscle, containing the glomerulus and Bowman's capsule, and a renal tubule, which includes the proximal convoluted tubule, loop of Henle, and distal convoluted tubule. The tubule drains into a collecting duct that helps produce concentrated or dilute urine.",
                },
                {
                  id: "BIO12-CH11-T05",
                  topicNumber: 5,
                  topic: "Ultrafiltration",
                  brief:
                    "Ultrafiltration is the pressure-driven filtration of blood in the glomerulus into Bowman's capsule. Water and small dissolved substances, such as glucose, salts, and urea, enter the filtrate, while blood cells and most plasma proteins remain in the bloodstream.",
                },
                {
                  id: "BIO12-CH11-T06",
                  topicNumber: 6,
                  topic: "Selective reabsorption",
                  brief:
                    "Selective reabsorption is the process by which useful substances are transferred from the renal filtrate back into the blood. These substances include glucose, amino acids, required ions, and much of the filtered water. Reabsorption occurs through active transport, passive transport, and osmosis along different parts of the nephron.",
                },
                {
                  id: "BIO12-CH11-T07",
                  topicNumber: 7,
                  topic: "Tubular secretion",
                  brief:
                    "Tubular secretion is the transfer of certain substances from the blood in surrounding capillaries into the renal tubule. Substances such as hydrogen ions, potassium ions, and some drugs may be secreted. This process helps eliminate wastes and regulate blood pH and electrolyte balance.",
                },
                {
                  id: "BIO12-CH11-T08",
                  topicNumber: 8,
                  topic: "Formation of urine",
                  brief:
                    "Urine formation occurs through three major processes: glomerular filtration, selective tubular reabsorption, and tubular secretion. The filtrate is modified as it passes through the nephron and collecting ducts, producing urine containing water, urea, and excess ions and other wastes.",
                },
                {
                  id: "BIO12-CH11-T09",
                  topicNumber: 9,
                  topic: "Counter-current mechanism",
                  brief:
                    "The counter-current mechanism helps the kidneys produce concentrated urine. Opposite directions of fluid flow in the descending and ascending limbs of the loop of Henle establish an osmotic gradient in the renal medulla. The vasa recta helps maintain this gradient, while the collecting ducts use it to reabsorb water when conditions require water conservation.",
                },
                {
                  id: "BIO12-CH11-T10",
                  topicNumber: 10,
                  topic: "Regulation of water balance",
                  brief:
                    "Water balance is regulated by adjusting water intake and water loss through the kidneys and other routes. Osmoreceptors in the hypothalamus detect changes in blood osmolarity and influence thirst and antidiuretic hormone release. The kidneys then adjust water reabsorption to help maintain the body's fluid balance.",
                },
                {
                  id: "BIO12-CH11-T11",
                  topicNumber: 11,
                  topic: "Role of ADH",
                  brief:
                    "Antidiuretic hormone (ADH), also called vasopressin, is produced by neurons in the hypothalamus and released from the posterior pituitary gland. It increases water permeability in the late distal tubules and collecting ducts of the kidneys, allowing more water to be reabsorbed. Increased ADH generally produces a smaller volume of more concentrated urine.",
                },
                {
                  id: "BIO12-CH11-T12",
                  topicNumber: 12,
                  topic: "Role of aldosterone",
                  brief:
                    "Aldosterone is a steroid hormone produced by the adrenal cortex. It increases sodium reabsorption and promotes potassium secretion in parts of the distal nephron. Water may follow the reabsorbed sodium, helping regulate extracellular fluid volume and blood pressure.",
                },
                {
                  id: "BIO12-CH11-T13",
                  topicNumber: 13,
                  topic: "Kidney function and homeostasis",
                  brief:
                    "The kidneys maintain homeostasis by removing metabolic wastes, regulating water and electrolyte levels, and helping control blood pH and blood pressure. They also produce erythropoietin, which stimulates red blood cell production, and release renin, which participates in blood pressure regulation. The kidneys activate vitamin D, supporting calcium balance and bone health.",
                },
                {
                  id: "BIO12-CH11-T14",
                  topicNumber: 14,
                  topic: "Dialysis",
                  brief:
                    "Dialysis is a treatment that removes waste products and excess fluid from the blood when the kidneys cannot perform these functions adequately. In haemodialysis, blood passes through an external dialyser, while peritoneal dialysis uses the lining of the abdominal cavity as a membrane for exchange. Dialysis supports kidney function but does not fully replace all kidney functions.",
                },
                {
                  id: "BIO12-CH11-T15",
                  topicNumber: 15,
                  topic: "Kidney stones",
                  brief:
                    "Kidney stones are hard deposits of minerals and salts that form in the kidneys when substances in urine crystallise. They may cause severe pain, blood in the urine, nausea, or obstruction of urine flow. Risk factors include dehydration and certain metabolic or dietary conditions, and treatment depends on the stone's size, type, and location.",
                },
                {
                  id: "BIO12-CH11-T16",
                  topicNumber: 16,
                  topic: "Renal failure",
                  brief:
                    "Renal failure occurs when the kidneys lose much of their ability to filter blood and maintain fluid, electrolyte, and acid-base balance. It may develop suddenly as acute kidney injury or gradually as chronic kidney disease. Severe cases may require dialysis or kidney transplantation, depending on the cause and extent of damage.",
                },
                {
                  id: "BIO12-CH11-T17",
                  topicNumber: 17,
                  topic: "Excretion through skin and lungs",
                  brief:
                    "The skin helps eliminate small amounts of water, salts, and urea through sweat glands. The lungs excrete carbon dioxide produced during cellular respiration and remove water vapour during expiration. These organs contribute to waste removal, although the kidneys are the main organs responsible for eliminating nitrogenous wastes from human blood.",
                },
              ],
            },
            {
              id: "BIO12-CH12",
              chapterNumber: 12,
              chapterName: "Nervous System",
              topics: [
                {
                  id: "BIO12-CH12-T01",
                  topicNumber: 1,
                  topic: "Organisation of the nervous system",
                  brief:
                    "The nervous system receives sensory information, processes it, and coordinates responses throughout the body. It is organised into the central nervous system, consisting of the brain and spinal cord, and the peripheral nervous system, consisting of nerves and ganglia outside the central nervous system.",
                },
                {
                  id: "BIO12-CH12-T02",
                  topicNumber: 2,
                  topic: "Central nervous system",
                  brief:
                    "The central nervous system (CNS) consists of the brain and spinal cord. It receives and integrates information, controls voluntary and involuntary activities, coordinates movement, and supports functions such as memory, learning, and reasoning.",
                },
                {
                  id: "BIO12-CH12-T03",
                  topicNumber: 3,
                  topic: "Peripheral nervous system",
                  brief:
                    "The peripheral nervous system (PNS) includes cranial nerves, spinal nerves, and ganglia outside the brain and spinal cord. It carries sensory information toward the CNS and transmits motor commands from the CNS to muscles and glands.",
                },
                {
                  id: "BIO12-CH12-T04",
                  topicNumber: 4,
                  topic: "Autonomic nervous system",
                  brief:
                    "The autonomic nervous system regulates involuntary activities such as heart rate, digestion, pupil diameter, and glandular secretion. Its major divisions are the sympathetic and parasympathetic systems, which often produce complementary effects to maintain internal balance.",
                },
                {
                  id: "BIO12-CH12-T05",
                  topicNumber: 5,
                  topic: "Structure of a neuron",
                  brief:
                    "A neuron is a specialised cell that receives and transmits nerve signals. Its main parts are the cell body, which contains the nucleus; dendrites, which commonly receive signals; and the axon, which carries impulses away from the cell body. Many axons have a myelin sheath that speeds up signal conduction.",
                },
                {
                  id: "BIO12-CH12-T06",
                  topicNumber: 6,
                  topic: "Types of neurons",
                  brief:
                    "Neurons can be classified by function as sensory neurons, motor neurons, and interneurons. Sensory neurons carry information from receptors to the CNS, motor neurons transmit commands to effectors such as muscles and glands, and interneurons connect and process signals within the CNS.",
                },
                {
                  id: "BIO12-CH12-T07",
                  topicNumber: 7,
                  topic: "Resting membrane potential",
                  brief:
                    "Resting membrane potential is the electrical potential difference across a neuron's membrane when it is not generating an action potential. The inside of the neuron is usually negative relative to the outside because of unequal ion distributions, selective membrane permeability, and the activity of the sodium-potassium pump.",
                },
                {
                  id: "BIO12-CH12-T08",
                  topicNumber: 8,
                  topic: "Nerve impulse",
                  brief:
                    "A nerve impulse is a rapidly changing electrical signal that travels along a neuron's membrane. It is produced by changes in ion movement across the membrane and allows information to be transmitted from one region of the nervous system to another.",
                },
                {
                  id: "BIO12-CH12-T09",
                  topicNumber: 9,
                  topic: "Action potential",
                  brief:
                    "An action potential is a brief reversal of membrane potential that occurs when a neuron reaches threshold. Voltage-gated sodium channels open to cause depolarisation, followed by potassium-channel activity that repolarises the membrane. The action potential propagates along the axon without normally decreasing in size.",
                },
                {
                  id: "BIO12-CH12-T10",
                  topicNumber: 10,
                  topic: "Synapse",
                  brief:
                    "A synapse is a specialised junction through which one neuron communicates with another neuron or with an effector cell. Chemical synapses use neurotransmitters released into a small synaptic cleft, while electrical synapses transmit signals directly through specialised intercellular channels.",
                },
                {
                  id: "BIO12-CH12-T11",
                  topicNumber: 11,
                  topic: "Synaptic transmission",
                  brief:
                    "At a typical chemical synapse, an arriving action potential triggers calcium entry into the presynaptic terminal. This causes synaptic vesicles to release neurotransmitters, which cross the synaptic cleft and bind to receptors on the postsynaptic membrane, producing a response that may excite or inhibit the receiving cell.",
                },
                {
                  id: "BIO12-CH12-T12",
                  topicNumber: 12,
                  topic: "Reflex action",
                  brief:
                    "A reflex action is a rapid, automatic response to a stimulus that occurs without requiring conscious decision-making. Reflexes help protect the body and maintain posture; examples include withdrawing a hand from a hot object and the knee-jerk response.",
                },
                {
                  id: "BIO12-CH12-T13",
                  topicNumber: 13,
                  topic: "Reflex arc",
                  brief:
                    "A reflex arc is the neural pathway followed during a reflex action. A typical pathway includes a receptor, sensory neuron, integration centre in the CNS, motor neuron, and effector. Some reflexes involve interneurons, while simpler reflexes may connect sensory and motor neurons more directly.",
                },
                {
                  id: "BIO12-CH12-T14",
                  topicNumber: 14,
                  topic: "Brain structure and functions",
                  brief:
                    "The brain is the main control centre of the nervous system. The cerebrum supports conscious thought, memory, sensory interpretation, and voluntary movement; the cerebellum coordinates movement and balance; and the brainstem regulates essential functions such as breathing and heart rate. The hypothalamus helps regulate temperature, hunger, thirst, and endocrine activity.",
                },
                {
                  id: "BIO12-CH12-T15",
                  topicNumber: 15,
                  topic: "Spinal cord",
                  brief:
                    "The spinal cord is a long column of nervous tissue protected by the vertebral column. It carries sensory information to the brain and motor commands from the brain to the body. It also contains neural circuits that coordinate many reflex actions.",
                },
                {
                  id: "BIO12-CH12-T16",
                  topicNumber: 16,
                  topic: "Sensory receptors",
                  brief:
                    "Sensory receptors are specialised cells or nerve endings that detect stimuli such as light, sound, temperature, pressure, chemicals, and tissue damage. They convert these stimuli into electrical signals that can be processed by the nervous system.",
                },
                {
                  id: "BIO12-CH12-T17",
                  topicNumber: 17,
                  topic: "Eye and vision",
                  brief:
                    "The human eye detects light and converts it into nerve signals. The cornea and lens focus light onto the retina, where photoreceptor cells called rods and cones respond to it. Signals travel through the optic nerve to visual processing regions of the brain, where visual information is interpreted.",
                },
                {
                  id: "BIO12-CH12-T18",
                  topicNumber: 18,
                  topic: "Ear and hearing",
                  brief:
                    "The ear contains structures responsible for hearing and balance. The outer ear collects sound waves, the middle-ear ossicles transmit and amplify vibrations, and the cochlea in the inner ear converts vibrations into nerve signals through sensory hair cells. The vestibular apparatus detects head position and movement, contributing to balance.",
                },
                {
                  id: "BIO12-CH12-T19",
                  topicNumber: 19,
                  topic: "Coordination and integration",
                  brief:
                    "Coordination and integration involve combining information from different receptors and organ systems to produce suitable responses. The nervous system provides rapid electrical and chemical communication, while the endocrine system uses hormones for regulation that is often slower and longer-lasting. Both systems work together to maintain homeostasis.",
                },
                {
                  id: "BIO12-CH12-T20",
                  topicNumber: 20,
                  topic: "Common nervous system disorders",
                  brief:
                    "Nervous system disorders affect the brain, spinal cord, peripheral nerves, or their supporting structures. Examples include epilepsy, Parkinson's disease, Alzheimer's disease, stroke, meningitis, and peripheral neuropathy. Their causes and symptoms vary, and they may affect movement, sensation, memory, communication, or other neurological functions.",
                },
              ],
            },
            {
              id: "BIO12-CH13",
              chapterNumber: 13,
              chapterName: "Endocrine System",
              topics: [
                {
                  id: "BIO12-CH13-T01",
                  topicNumber: 1,
                  topic: "Hormones and endocrine glands",
                  brief:
                    "Hormones are chemical messengers produced by endocrine glands and released into the blood. They regulate growth, metabolism, reproduction, development, and other body functions. Endocrine glands are ductless glands, including the pituitary, thyroid, and adrenal glands.",
                },
                {
                  id: "BIO12-CH13-T02",
                  topicNumber: 2,
                  topic: "Mechanism of hormone action",
                  brief:
                    "Hormones act by binding to specific receptors on target cells. Water-soluble hormones usually bind to receptors on the cell membrane and activate intracellular signalling pathways, while lipid-soluble hormones can enter cells and influence gene expression. The response depends on the hormone and its target tissue.",
                },
                {
                  id: "BIO12-CH13-T03",
                  topicNumber: 3,
                  topic: "Hypothalamus",
                  brief:
                    "The hypothalamus is a region of the brain that connects the nervous and endocrine systems. It produces releasing and inhibiting hormones that regulate the anterior pituitary and synthesizes oxytocin and antidiuretic hormone (ADH), which are released through the posterior pituitary.",
                },
                {
                  id: "BIO12-CH13-T04",
                  topicNumber: 4,
                  topic: "Pituitary gland",
                  brief:
                    "The pituitary gland is located beneath the hypothalamus and is often called the master gland because many of its hormones regulate other endocrine glands. The anterior pituitary secretes hormones such as growth hormone, TSH, ACTH, FSH, LH, and prolactin. The posterior pituitary stores and releases ADH and oxytocin produced by the hypothalamus.",
                },
                {
                  id: "BIO12-CH13-T05",
                  topicNumber: 5,
                  topic: "Thyroid gland",
                  brief:
                    "The thyroid gland is located in the front of the neck. It secretes thyroxine (T4) and triiodothyronine (T3), which regulate metabolism, growth, and development. It also produces calcitonin, which can help lower blood calcium levels by influencing calcium deposition in bones.",
                },
                {
                  id: "BIO12-CH13-T06",
                  topicNumber: 6,
                  topic: "Parathyroid glands",
                  brief:
                    "The parathyroid glands are usually four small glands located behind the thyroid gland. They secrete parathyroid hormone (PTH), which increases blood calcium levels by acting on bones and kidneys and promoting the activation of vitamin D, thereby increasing calcium absorption from the intestine.",
                },
                {
                  id: "BIO12-CH13-T07",
                  topicNumber: 7,
                  topic: "Adrenal glands",
                  brief:
                    "The adrenal glands are located above the kidneys and consist of an outer cortex and an inner medulla. The cortex produces hormones such as cortisol, aldosterone, and adrenal androgens, while the medulla secretes adrenaline and noradrenaline. These hormones help regulate stress responses, metabolism, blood pressure, and salt-water balance.",
                },
                {
                  id: "BIO12-CH13-T08",
                  topicNumber: 8,
                  topic: "Pancreatic hormones",
                  brief:
                    "The endocrine portion of the pancreas consists of clusters of cells called the islets of Langerhans. These cells produce hormones that regulate blood glucose. Beta cells secrete insulin, alpha cells secrete glucagon, and delta cells secrete somatostatin.",
                },
                {
                  id: "BIO12-CH13-T09",
                  topicNumber: 9,
                  topic: "Insulin and glucagon",
                  brief:
                    "Insulin and glucagon are pancreatic hormones that work together to maintain blood glucose levels. Insulin lowers blood glucose by promoting glucose uptake and storage, including glycogen formation. Glucagon raises blood glucose mainly by stimulating glycogen breakdown and glucose production in the liver.",
                },
                {
                  id: "BIO12-CH13-T10",
                  topicNumber: 10,
                  topic: "Pineal gland",
                  brief:
                    "The pineal gland is a small endocrine gland in the brain that secretes melatonin. Melatonin helps regulate the sleep-wake cycle and circadian rhythms in response to changes in light and darkness.",
                },
                {
                  id: "BIO12-CH13-T11",
                  topicNumber: 11,
                  topic: "Thymus",
                  brief:
                    "The thymus is an organ located in the upper chest behind the sternum. It produces hormones and signalling substances, including thymosin, that support the development and maturation of T lymphocytes, which are important for immune defence. The thymus is more active during childhood and generally shrinks after puberty.",
                },
                {
                  id: "BIO12-CH13-T12",
                  topicNumber: 12,
                  topic: "Gonadal hormones",
                  brief:
                    "The gonads are the testes in males and ovaries in females. The testes mainly produce testosterone, which supports male reproductive development and sperm production. The ovaries produce oestrogens and progesterone, which regulate female reproductive development, the menstrual cycle, and pregnancy.",
                },
                {
                  id: "BIO12-CH13-T13",
                  topicNumber: 13,
                  topic: "Feedback regulation",
                  brief:
                    "Feedback regulation controls hormone secretion according to the body's needs. In negative feedback, a change or hormone response reduces the original stimulus, helping maintain stable internal conditions. Positive feedback amplifies a response, as occurs with oxytocin during childbirth.",
                },
                {
                  id: "BIO12-CH13-T14",
                  topicNumber: 14,
                  topic: "Blood glucose regulation",
                  brief:
                    "Blood glucose is regulated mainly by insulin and glucagon. After a meal, increased blood glucose stimulates insulin secretion, encouraging glucose uptake and storage. During fasting, low blood glucose promotes glucagon secretion, which stimulates the liver to release glucose and helps maintain a suitable blood glucose level.",
                },
                {
                  id: "BIO12-CH13-T15",
                  topicNumber: 15,
                  topic: "Calcium homeostasis",
                  brief:
                    "Calcium homeostasis maintains the concentration of calcium in the blood within a suitable range. Parathyroid hormone raises blood calcium by acting on bones and kidneys and by promoting active vitamin D formation. Active vitamin D increases calcium absorption from the intestine, while calcitonin can contribute to lowering blood calcium when it is elevated.",
                },
                {
                  id: "BIO12-CH13-T16",
                  topicNumber: 16,
                  topic: "Growth hormone",
                  brief:
                    "Growth hormone (GH), secreted by the anterior pituitary, supports body growth, protein synthesis, and the metabolism of carbohydrates and fats. It promotes growth partly by stimulating the production of insulin-like growth factor 1 (IGF-1), especially in the liver. Excess or deficiency during childhood can cause abnormal growth.",
                },
                {
                  id: "BIO12-CH13-T17",
                  topicNumber: 17,
                  topic: "Thyroid disorders",
                  brief:
                    "Thyroid disorders occur when thyroid hormone production or gland function is abnormal. Hypothyroidism involves insufficient thyroid hormone and may cause fatigue, weight gain, and reduced metabolism. Hyperthyroidism involves excessive thyroid hormone and may cause weight loss, rapid heartbeat, and increased metabolism. Goitre is enlargement of the thyroid gland and can have several causes, including iodine deficiency.",
                },
                {
                  id: "BIO12-CH13-T18",
                  topicNumber: 18,
                  topic: "Diabetes mellitus",
                  brief:
                    "Diabetes mellitus is a disorder characterized by persistently elevated blood glucose. Type 1 diabetes results from the loss of insulin-producing pancreatic beta cells, while type 2 diabetes involves insulin resistance and often reduced insulin production over time. Common features include excessive thirst, frequent urination, and increased hunger; diagnosis and management require appropriate medical care.",
                },
                {
                  id: "BIO12-CH13-T19",
                  topicNumber: 19,
                  topic: "Endocrine disorders",
                  brief:
                    "Endocrine disorders arise when hormone production, release, transport, or action is abnormal. They may result from hormone excess, hormone deficiency, or reduced responsiveness of target tissues. Examples include diabetes mellitus, thyroid disorders, abnormal growth due to growth hormone imbalance, and disorders of adrenal or reproductive hormones.",
                },
              ],
            },
            {
              id: "BIO12-CH14",
              chapterNumber: 14,
              chapterName: "Locomotion and Support",
              topics: [
                {
                  id: "BIO12-CH14-T01",
                  topicNumber: 1,
                  topic: "Functions of the skeleton",
                  brief:
                    "The skeleton provides support and shape to the body, protects internal organs, and helps in movement by providing attachment points for muscles. It also produces blood cells in bone marrow and stores minerals such as calcium and phosphorus.",
                },
                {
                  id: "BIO12-CH14-T02",
                  topicNumber: 2,
                  topic: "Axial skeleton",
                  brief:
                    "The axial skeleton forms the central axis of the human body. It consists of the skull, vertebral column, ribs, and sternum. Its main functions are supporting the head and trunk and protecting the brain, spinal cord, heart, and lungs.",
                },
                {
                  id: "BIO12-CH14-T03",
                  topicNumber: 3,
                  topic: "Appendicular skeleton",
                  brief:
                    "The appendicular skeleton consists of the bones of the upper and lower limbs and the girdles that attach them to the axial skeleton. The pectoral girdle supports the arms, while the pelvic girdle supports the legs and helps bear body weight.",
                },
                {
                  id: "BIO12-CH14-T04",
                  topicNumber: 4,
                  topic: "Types of bones",
                  brief:
                    "Bones are classified by shape into long, short, flat, irregular, and sesamoid bones. Long bones, such as the femur, help with movement; short bones, such as wrist bones, provide stability; flat bones, such as the sternum, protect organs; and irregular bones, such as vertebrae, have specialized shapes.",
                },
                {
                  id: "BIO12-CH14-T05",
                  topicNumber: 5,
                  topic: "Bone structure",
                  brief:
                    "Bone consists of living cells embedded in a hard extracellular matrix containing collagen and mineral salts, especially calcium phosphate. Compact bone forms a dense outer layer, while spongy bone contains a network of bony trabeculae. Many bones also contain bone marrow, which may produce blood cells or store fat.",
                },
                {
                  id: "BIO12-CH14-T06",
                  topicNumber: 6,
                  topic: "Bone formation and growth",
                  brief:
                    "Bone formation, called ossification, occurs through the activity of bone-forming cells known as osteoblasts. Bone develops by intramembranous ossification or endochondral ossification, in which a cartilage model is replaced by bone. In growing long bones, length increases at the epiphyseal growth plates, while thickness increases through growth at the bone surface.",
                },
                {
                  id: "BIO12-CH14-T07",
                  topicNumber: 7,
                  topic: "Types of joints",
                  brief:
                    "Joints are places where two or more bones meet. Structurally, they are classified as fibrous, cartilaginous, or synovial joints. Functionally, joints may be immovable, slightly movable, or freely movable, depending on their structure and range of movement.",
                },
                {
                  id: "BIO12-CH14-T08",
                  topicNumber: 8,
                  topic: "Synovial joints",
                  brief:
                    "Synovial joints are freely movable joints in which the articulating bone surfaces are separated by a fluid-filled joint cavity. They contain articular cartilage, a joint capsule, and synovial fluid, which reduces friction and helps nourish the cartilage. Examples include the knee, shoulder, hip, and elbow joints.",
                },
                {
                  id: "BIO12-CH14-T09",
                  topicNumber: 9,
                  topic: "Structure of skeletal muscle",
                  brief:
                    "Skeletal muscle is made of long, cylindrical, striated muscle fibres that usually contain multiple nuclei. Each fibre contains myofibrils composed of repeating units called sarcomeres. Sarcomeres contain the contractile proteins actin and myosin, which interact to produce muscle contraction.",
                },
                {
                  id: "BIO12-CH14-T10",
                  topicNumber: 10,
                  topic: "Muscle contraction",
                  brief:
                    "Muscle contraction occurs when stimulated muscle fibres develop tension and may shorten. A nerve signal triggers the release of calcium ions inside the muscle fibre. Calcium allows actin and myosin to interact, and ATP supplies the energy required for cross-bridge cycling and subsequent muscle relaxation.",
                },
                {
                  id: "BIO12-CH14-T11",
                  topicNumber: 11,
                  topic: "Sliding filament theory",
                  brief:
                    "The sliding filament theory explains muscle contraction as the sliding of thin actin filaments past thick myosin filaments. The filaments themselves do not significantly shorten; instead, the sarcomere becomes shorter as the Z-lines move closer together. During contraction, the I-band and H-zone become narrower, while the A-band remains approximately constant.",
                },
                {
                  id: "BIO12-CH14-T12",
                  topicNumber: 12,
                  topic: "Role of actin and myosin",
                  brief:
                    "Actin forms the thin filaments, while myosin forms the thick filaments of skeletal muscle. Myosin heads bind to exposed sites on actin and pull the thin filaments toward the centre of the sarcomere. Calcium binds to troponin, moving tropomyosin away from actin's binding sites and allowing cross-bridge formation.",
                },
                {
                  id: "BIO12-CH14-T13",
                  topicNumber: 13,
                  topic: "ATP in muscle contraction",
                  brief:
                    "ATP is essential for muscle contraction and relaxation. ATP binding allows myosin to detach from actin, and ATP hydrolysis energizes the myosin head for another cycle. ATP also powers calcium pumps that return calcium ions to the sarcoplasmic reticulum, enabling muscle relaxation.",
                },
                {
                  id: "BIO12-CH14-T14",
                  topicNumber: 14,
                  topic: "Antagonistic muscles",
                  brief:
                    "Antagonistic muscles work in opposing pairs to produce controlled movement around a joint. When one muscle contracts, the opposing muscle generally relaxes. For example, during elbow flexion, the biceps contracts while the triceps relaxes; during extension, the triceps contracts while the biceps relaxes.",
                },
                {
                  id: "BIO12-CH14-T15",
                  topicNumber: 15,
                  topic: "Posture and movement",
                  brief:
                    "Posture is the position in which the body is held while sitting, standing, or performing activities. Movement occurs through coordinated interactions among bones, joints, skeletal muscles, and the nervous system. Maintaining posture requires continuous adjustments in muscle activity, balance, and sensory feedback.",
                },
                {
                  id: "BIO12-CH14-T16",
                  topicNumber: 16,
                  topic: "Common skeletal disorders",
                  brief:
                    "Skeletal disorders affect bones, joints, or the supporting structures of the skeleton. Examples include osteoporosis, in which bone density decreases; arthritis, which involves joint inflammation or degeneration; rickets, associated with defective bone mineralization in children; and fractures, which are breaks in bones.",
                },
                {
                  id: "BIO12-CH14-T17",
                  topicNumber: 17,
                  topic: "Muscular disorders",
                  brief:
                    "Muscular disorders affect muscle structure or function and may cause weakness, pain, stiffness, or reduced movement. Examples include muscular dystrophy, a group of inherited conditions causing progressive muscle weakness; myasthenia gravis, an autoimmune disorder affecting communication between nerves and muscles; and muscle strains, which involve overstretching or tearing muscle fibres.",
                },
              ],
            },
            {
              id: "BIO12-CH15",
              chapterNumber: 15,
              chapterName: "Reproduction and Development",
              topics: [
                {
                  id: "BIO12-CH15-T01",
                  topicNumber: 1,
                  topic: "Human reproductive system",
                  brief:
                    "The human reproductive system consists of organs responsible for producing gametes, secreting sex hormones, and enabling reproduction. The male reproductive system produces and transports sperm, while the female reproductive system produces ova and supports fertilisation, pregnancy, and childbirth.",
                },
                {
                  id: "BIO12-CH15-T02",
                  topicNumber: 2,
                  topic: "Male reproductive organs",
                  brief:
                    "The male reproductive system includes the testes, epididymides, vas deferens, ejaculatory ducts, urethra, penis, and accessory glands. The testes produce sperm and testosterone, the epididymides support sperm maturation, and the seminal vesicles, prostate gland, and bulbourethral glands contribute fluids that form semen.",
                },
                {
                  id: "BIO12-CH15-T03",
                  topicNumber: 3,
                  topic: "Female reproductive organs",
                  brief:
                    "The female reproductive system consists of the ovaries, uterine tubes, uterus, cervix, vagina, and external genitalia. The ovaries produce ova and hormones, the uterine tubes are the usual site of fertilisation, and the uterus supports embryo implantation and fetal development.",
                },
                {
                  id: "BIO12-CH15-T04",
                  topicNumber: 4,
                  topic: "Structure of sperm",
                  brief:
                    "A human sperm is a small, motile male gamete consisting of a head, neck, middle piece, and tail. The head contains a haploid nucleus and an acrosome with enzymes that help sperm penetrate the egg's protective coverings. The middle piece contains mitochondria that supply energy, while the tail helps propel the sperm.",
                },
                {
                  id: "BIO12-CH15-T05",
                  topicNumber: 5,
                  topic: "Structure of ovum",
                  brief:
                    "The human ovum is a large female gamete containing a haploid nucleus, cytoplasm, and protective coverings. These include the zona pellucida and, around the ovulated egg, the surrounding cells of the corona radiata. The ovum provides maternal genetic material and cellular components needed for the beginning of embryonic development.",
                },
                {
                  id: "BIO12-CH15-T06",
                  topicNumber: 6,
                  topic: "Spermatogenesis",
                  brief:
                    "Spermatogenesis is the process of sperm formation in the seminiferous tubules of the testes. Spermatogonia divide by mitosis, and some develop into primary spermatocytes that undergo meiosis to produce haploid spermatids. Spermatids then differentiate into spermatozoa through spermiogenesis. The process is regulated by hormones, including FSH, LH, and testosterone.",
                },
                {
                  id: "BIO12-CH15-T07",
                  topicNumber: 7,
                  topic: "Oogenesis",
                  brief:
                    "Oogenesis is the process of female gamete formation in the ovaries. It begins before birth, when oogonia develop into primary oocytes. After puberty, selected oocytes resume meiosis during reproductive cycles. Usually, one secondary oocyte is ovulated, and meiosis II is completed only if fertilisation occurs. The process produces one functional ovum and polar bodies.",
                },
                {
                  id: "BIO12-CH15-T08",
                  topicNumber: 8,
                  topic: "Menstrual cycle",
                  brief:
                    "The menstrual cycle involves cyclic changes in the ovaries and uterus, usually occurring over approximately 21–35 days in adults, although variation is normal. Its main phases are the menstrual phase, follicular or proliferative phase, ovulation, and luteal or secretory phase. Hormonal changes regulate the growth of ovarian follicles, release of the oocyte, and preparation of the uterine lining for possible pregnancy.",
                },
                {
                  id: "BIO12-CH15-T09",
                  topicNumber: 9,
                  topic: "Hormonal regulation of reproduction",
                  brief:
                    "Reproductive functions are regulated by the hypothalamus, pituitary gland, and gonads. The hypothalamus releases GnRH, which stimulates the anterior pituitary to secrete FSH and LH. These hormones regulate gamete production and sex hormone secretion. Oestrogen, progesterone, testosterone, and inhibin participate in feedback mechanisms that control reproductive activity.",
                },
                {
                  id: "BIO12-CH15-T10",
                  topicNumber: 10,
                  topic: "Ovulation",
                  brief:
                    "Ovulation is the release of a secondary oocyte from a mature ovarian follicle. It is usually triggered by a surge in luteinising hormone (LH), which occurs following changes in oestrogen levels. The released oocyte enters the uterine tube, where fertilisation may occur if viable sperm are present.",
                },
                {
                  id: "BIO12-CH15-T11",
                  topicNumber: 11,
                  topic: "Fertilisation",
                  brief:
                    "Fertilisation is the union of a male gamete and a female gamete to form a diploid zygote. In humans, it usually occurs in the ampulla of the uterine tube. Sperm penetration triggers changes that help prevent additional sperm from entering, and the genetic material from both gametes combines to establish the zygote's chromosome complement.",
                },
                {
                  id: "BIO12-CH15-T12",
                  topicNumber: 12,
                  topic: "Cleavage and blastulation",
                  brief:
                    "Cleavage is a series of rapid mitotic divisions of the zygote without a substantial increase in its overall size. These divisions produce smaller cells called blastomeres, forming a solid morula. Fluid then enters to form the blastocyst, which contains an inner cell mass that develops into the embryo and an outer trophoblast layer that contributes to the placenta.",
                },
                {
                  id: "BIO12-CH15-T13",
                  topicNumber: 13,
                  topic: "Implantation",
                  brief:
                    "Implantation is the attachment and embedding of the developing blastocyst into the endometrium, the lining of the uterus. It generally begins about six to seven days after fertilisation. The trophoblast helps the blastocyst attach to the uterine lining and contributes to the development of the placenta.",
                },
                {
                  id: "BIO12-CH15-T14",
                  topicNumber: 14,
                  topic: "Embryonic development",
                  brief:
                    "Embryonic development begins after fertilisation and includes cleavage, implantation, gastrulation, and organogenesis. Gastrulation forms the three primary germ layers: ectoderm, mesoderm, and endoderm. These layers give rise to different tissues and organs. In humans, the embryonic period extends through the eighth week after fertilisation, after which the developing individual is generally called a fetus.",
                },
                {
                  id: "BIO12-CH15-T15",
                  topicNumber: 15,
                  topic: "Placenta and its functions",
                  brief:
                    "The placenta is a temporary organ formed from fetal and maternal tissues during pregnancy. It transfers oxygen and nutrients from maternal blood to the fetus and allows carbon dioxide and metabolic wastes to pass toward the maternal circulation. It also produces hormones, including human chorionic gonadotropin (hCG), progesterone, and oestrogens, that support pregnancy. Maternal and fetal blood normally remain separated by a placental barrier.",
                },
                {
                  id: "BIO12-CH15-T16",
                  topicNumber: 16,
                  topic: "Pregnancy and childbirth",
                  brief:
                    "Pregnancy is the period during which an embryo and then a fetus develop in the uterus. Human pregnancy lasts approximately 38 weeks from fertilisation, or about 40 weeks when dated from the first day of the last menstrual period. Childbirth, or parturition, involves cervical dilation, delivery of the baby, and expulsion of the placenta. Hormonal signals, uterine contractions, and positive feedback involving oxytocin help coordinate labour.",
                },
                {
                  id: "BIO12-CH15-T17",
                  topicNumber: 17,
                  topic: "Lactation",
                  brief:
                    "Lactation is the production and release of breast milk after childbirth. Prolactin stimulates milk production in the mammary glands, while oxytocin causes milk ejection by contracting cells around the milk-producing structures. Suckling stimulates the release of these hormones and helps maintain milk production.",
                },
                {
                  id: "BIO12-CH15-T18",
                  topicNumber: 18,
                  topic: "Contraception",
                  brief:
                    "Contraception refers to methods used to prevent pregnancy. Methods include barrier methods such as condoms, hormonal methods such as pills and implants, intrauterine devices, fertility-awareness methods, and permanent methods such as sterilisation. Condoms also reduce the risk of many sexually transmitted infections. The most suitable method depends on individual needs, health considerations, and access to reliable medical advice.",
                },
                {
                  id: "BIO12-CH15-T19",
                  topicNumber: 19,
                  topic: "Assisted reproductive technologies",
                  brief:
                    "Assisted reproductive technologies (ART) are medical procedures that help people achieve pregnancy when conception is difficult. Examples include in vitro fertilisation (IVF), in which an egg is fertilised outside the body, and intracytoplasmic sperm injection (ICSI), in which a sperm is injected directly into an egg. Embryos may subsequently be transferred into the uterus under clinical supervision.",
                },
                {
                  id: "BIO12-CH15-T20",
                  topicNumber: 20,
                  topic: "Reproductive health",
                  brief:
                    "Reproductive health is a state of physical, mental, and social well-being in matters related to the reproductive system. It includes access to accurate reproductive education, family planning, safe pregnancy and childbirth care, prevention and treatment of reproductive disorders, and informed, voluntary decisions about reproduction.",
                },
                {
                  id: "BIO12-CH15-T21",
                  topicNumber: 21,
                  topic: "Sexually transmitted infections",
                  brief:
                    "Sexually transmitted infections (STIs) are infections that can spread primarily through sexual contact. Examples include HIV infection, syphilis, gonorrhoea, chlamydia, genital herpes, human papillomavirus (HPV), and hepatitis B. Some STIs cause few or no symptoms but can lead to serious complications if untreated. Prevention includes correct condom use, vaccination where available, testing, and timely treatment.",
                },
              ],
            },
            {
              id: "BIO12-CH16",
              chapterNumber: 16,
              chapterName: "Evolution and Population Biology",
              topics: [
                {
                  id: "BIO12-CH16-T01",
                  topicNumber: 1,
                  topic: "Evidence for evolution",
                  brief:
                    "Evolution is the change in heritable characteristics of populations over generations. Evidence supporting evolution includes fossils, comparative anatomy, embryology, molecular similarities in DNA and proteins, and biogeography. These lines of evidence help explain relationships among organisms and changes in life through time.",
                },
                {
                  id: "BIO12-CH16-T02",
                  topicNumber: 2,
                  topic: "Natural selection",
                  brief:
                    "Natural selection is a process in which individuals with heritable traits that improve survival or reproductive success tend to leave more offspring. Over generations, these advantageous traits may become more common in a population. Natural selection is a major mechanism of evolution.",
                },
                {
                  id: "BIO12-CH16-T03",
                  topicNumber: 3,
                  topic: "Mutation and genetic variation",
                  brief:
                    "A mutation is a change in the DNA sequence that can create new genetic variants. Genetic variation refers to differences in genes and alleles among individuals in a population. Mutations and genetic recombination during sexual reproduction contribute to variation, which provides the raw material for evolution.",
                },
                {
                  id: "BIO12-CH16-T04",
                  topicNumber: 4,
                  topic: "Genetic drift",
                  brief:
                    "Genetic drift is a random change in allele frequencies from one generation to the next, especially in small populations. It may cause alleles to become fixed or disappear regardless of whether they are beneficial. The founder effect and population bottleneck are examples of situations in which genetic drift can have a strong influence.",
                },
                {
                  id: "BIO12-CH16-T05",
                  topicNumber: 5,
                  topic: "Gene flow",
                  brief:
                    "Gene flow is the transfer of alleles between populations through the movement and reproduction of individuals or the movement of gametes. It can introduce new alleles into a population and reduce genetic differences between populations.",
                },
                {
                  id: "BIO12-CH16-T06",
                  topicNumber: 6,
                  topic: "Hardy-Weinberg principle",
                  brief:
                    "The Hardy-Weinberg principle states that allele and genotype frequencies remain constant across generations in an ideal population when specific conditions are met. These conditions include a very large population, random mating, and no mutation, migration, or natural selection. For two alleles, the equations are p + q = 1 and p² + 2pq + q² = 1, where p and q are allele frequencies and the terms represent genotype frequencies.",
                },
                {
                  id: "BIO12-CH16-T07",
                  topicNumber: 7,
                  topic: "Factors affecting allele frequencies",
                  brief:
                    "Allele frequencies in a population can change through mutation, natural selection, genetic drift, and gene flow. Non-random mating can change genotype frequencies and may influence evolutionary patterns, while recombination reshuffles existing alleles into new combinations. These processes contribute to changes in genetic composition over generations.",
                },
                {
                  id: "BIO12-CH16-T08",
                  topicNumber: 8,
                  topic: "Adaptation",
                  brief:
                    "An adaptation is an inherited characteristic that improves an organism's ability to survive or reproduce in a particular environment. Adaptations may be structural, physiological, or behavioural. They become more common over generations when natural selection favours the associated traits.",
                },
                {
                  id: "BIO12-CH16-T09",
                  topicNumber: 9,
                  topic: "Speciation",
                  brief:
                    "Speciation is the formation of new species from existing populations. It commonly occurs when populations become reproductively isolated and accumulate genetic differences through mutation, natural selection, and genetic drift. Speciation may occur through geographic separation or without physical separation.",
                },
                {
                  id: "BIO12-CH16-T10",
                  topicNumber: 10,
                  topic: "Reproductive isolation",
                  brief:
                    "Reproductive isolation occurs when populations cannot successfully interbreed to produce viable, fertile offspring. Prezygotic barriers prevent mating or fertilisation, while postzygotic barriers reduce the viability or fertility of hybrids. These barriers help maintain species boundaries and can contribute to speciation.",
                },
                {
                  id: "BIO12-CH16-T11",
                  topicNumber: 11,
                  topic: "Evolutionary relationships",
                  brief:
                    "Evolutionary relationships describe how organisms are related through common ancestors. Scientists study fossils, anatomical structures, embryological features, and molecular evidence to infer these relationships. Phylogenetic trees represent proposed patterns of evolutionary ancestry and divergence among organisms.",
                },
                {
                  id: "BIO12-CH16-T12",
                  topicNumber: 12,
                  topic: "Human evolution",
                  brief:
                    "Human evolution is the evolutionary history of humans and their ancestors. Evidence from fossils, comparative anatomy, archaeology, and DNA indicates that modern humans share common ancestors with other primates. Important developments in the human lineage include habitual bipedalism, changes in brain size, tool use, and increasingly complex social and cultural behaviour.",
                },
                {
                  id: "BIO12-CH16-T13",
                  topicNumber: 13,
                  topic: "Population size and density",
                  brief:
                    "Population size is the total number of individuals of a species living in a defined area, while population density is the number of individuals per unit area or volume. These measurements help ecologists understand population distribution, resource requirements, competition, and changes in population status.",
                },
                {
                  id: "BIO12-CH16-T14",
                  topicNumber: 14,
                  topic: "Population growth",
                  brief:
                    "Population growth is the change in population size over time due to births, deaths, immigration, and emigration. Exponential growth occurs when resources are abundant and limiting factors are minimal, producing a J-shaped curve. Logistic growth slows as the population approaches the environment's carrying capacity, often producing an S-shaped curve.",
                },
                {
                  id: "BIO12-CH16-T15",
                  topicNumber: 15,
                  topic: "Population regulation",
                  brief:
                    "Population regulation refers to processes that influence population size and growth. Density-dependent factors, such as competition, disease, and predation, often become stronger as population density increases. Density-independent factors, such as floods, droughts, and severe storms, can affect populations regardless of their density.",
                },
                {
                  id: "BIO12-CH16-T16",
                  topicNumber: 16,
                  topic: "Age structure",
                  brief:
                    "Age structure describes the distribution of individuals in a population among age groups, commonly pre-reproductive, reproductive, and post-reproductive stages. Population age-structure diagrams help predict future growth patterns. A population with many young individuals may grow rapidly, while one with a larger proportion of older individuals may grow slowly or decline.",
                },
                {
                  id: "BIO12-CH16-T17",
                  topicNumber: 17,
                  topic: "Survivorship curves",
                  brief:
                    "Survivorship curves show the proportion of individuals in a population surviving at different ages. Type I curves show high survival during early and middle life followed by increased mortality in old age. Type II curves show a roughly constant mortality rate, while Type III curves show high mortality among young individuals, with better survival among those that reach adulthood.",
                },
                {
                  id: "BIO12-CH16-T18",
                  topicNumber: 18,
                  topic: "Population interactions",
                  brief:
                    "Population interactions describe relationships between organisms of different species in a community. Competition occurs when organisms use the same limited resources, predation involves one organism consuming another, and parasitism benefits a parasite while harming its host. Mutualism benefits both species, while commensalism benefits one species without significantly affecting the other.",
                },
                {
                  id: "BIO12-CH16-T19",
                  topicNumber: 19,
                  topic: "Conservation of populations",
                  brief:
                    "Conservation of populations involves protecting species and maintaining their genetic diversity, habitats, and long-term survival. Important approaches include habitat protection and restoration, wildlife corridors, sustainable resource use, control of invasive species, and prevention of poaching and pollution. Conservation planning also considers population size, reproductive success, genetic variation, and threats to survival.",
                },
              ],
            },
          ],
        },
        {
          id: "BIO12-B03",
          branchNumber: 3,
          branchName: "Applied Biology and Health",
          chapters: [
            {
              id: "BIO12-CH17",
              chapterNumber: 17,
              chapterName: "Microbiology and Disease",
              topics: [
                {
                  id: "BIO12-CH17-T01",
                  topicNumber: 1,
                  topic: "Introduction to microorganisms",
                  brief:
                    "Microorganisms are microscopic organisms or biological agents that are generally too small to be seen clearly without a microscope. They include bacteria, fungi, protozoa, microscopic algae, and viruses, although viruses are not considered cellular organisms. Microorganisms play important roles in decomposition, nutrient cycling, food production, and disease.",
                },
                {
                  id: "BIO12-CH17-T02",
                  topicNumber: 2,
                  topic: "Bacteria",
                  brief:
                    "Bacteria are unicellular prokaryotic organisms that lack a membrane-bound nucleus and other membrane-bound organelles. They commonly occur in spherical, rod-shaped, or spiral forms and reproduce mainly through binary fission. Some bacteria are beneficial, while others cause diseases such as tuberculosis, cholera, and typhoid fever.",
                },
                {
                  id: "BIO12-CH17-T03",
                  topicNumber: 3,
                  topic: "Viruses",
                  brief:
                    "Viruses are acellular infectious agents consisting of genetic material, either DNA or RNA, enclosed in a protein coat called a capsid; some also possess a lipid envelope. They cannot reproduce independently and must use the machinery of living host cells. Viruses cause diseases such as influenza, measles, dengue, and COVID-19.",
                },
                {
                  id: "BIO12-CH17-T04",
                  topicNumber: 4,
                  topic: "Fungi",
                  brief:
                    "Fungi are eukaryotic organisms that obtain nutrients by absorption. They include yeasts, moulds, and mushrooms and have cell walls containing chitin. Fungi contribute to decomposition and food production, while some cause infections such as ringworm and candidiasis. Certain fungi also produce useful medicines, including penicillin.",
                },
                {
                  id: "BIO12-CH17-T05",
                  topicNumber: 5,
                  topic: "Protozoa",
                  brief:
                    "Protozoa are a diverse group of mostly unicellular eukaryotic organisms, many of which live in water or moist environments. They may move using structures such as cilia, flagella, or pseudopodia. Some protozoa are parasitic and cause diseases, including malaria caused by Plasmodium and amoebiasis caused by Entamoeba histolytica.",
                },
                {
                  id: "BIO12-CH17-T06",
                  topicNumber: 6,
                  topic: "Microbial growth",
                  brief:
                    "Microbial growth usually refers to an increase in the number of microbial cells in a population. Bacteria commonly reproduce through binary fission and may pass through lag, exponential, stationary, and death phases in a closed culture. Growth is affected by temperature, pH, nutrients, moisture, oxygen availability, and other environmental conditions.",
                },
                {
                  id: "BIO12-CH17-T07",
                  topicNumber: 7,
                  topic: "Useful microorganisms",
                  brief:
                    "Useful microorganisms contribute to food production, medicine, agriculture, and environmental processes. Lactobacillus helps produce yoghurt, yeast is used in bread-making and fermentation, and some bacteria fix atmospheric nitrogen for plants. Microorganisms are also used to manufacture antibiotics, enzymes, and other products and to decompose organic waste.",
                },
                {
                  id: "BIO12-CH17-T08",
                  topicNumber: 8,
                  topic: "Pathogenic microorganisms",
                  brief:
                    "Pathogenic microorganisms are microbes capable of causing disease in a host. They may damage tissues directly, produce toxins, invade cells, or trigger harmful inflammatory responses. Examples include Mycobacterium tuberculosis, which causes tuberculosis; Vibrio cholerae, which causes cholera; and Plasmodium species, which cause malaria.",
                },
                {
                  id: "BIO12-CH17-T09",
                  topicNumber: 9,
                  topic: "Modes of disease transmission",
                  brief:
                    "Infectious diseases can spread through several routes. Direct transmission occurs through physical contact or exposure to infectious secretions, while indirect transmission may occur through contaminated food, water, objects, or airborne particles. Some diseases are transmitted by vectors such as mosquitoes and ticks, and others may spread from mother to child during pregnancy, birth, or breastfeeding.",
                },
                {
                  id: "BIO12-CH17-T10",
                  topicNumber: 10,
                  topic: "Infectious and non-infectious diseases",
                  brief:
                    "Infectious diseases are caused by pathogens such as bacteria, viruses, fungi, and parasites and may spread between hosts directly or indirectly. Non-infectious diseases are not caused by transmissible pathogens and include many genetic disorders, nutritional deficiencies, cancers, and cardiovascular diseases. Some diseases, such as diabetes and heart disease, involve complex interactions among genetic, environmental, and lifestyle factors.",
                },
                {
                  id: "BIO12-CH17-T11",
                  topicNumber: 11,
                  topic: "Host-pathogen interactions",
                  brief:
                    "Host-pathogen interactions describe the relationship between a disease-causing organism and the host it infects. The outcome depends on factors such as pathogen virulence, the route of entry, host immunity, and the condition of the host. A pathogen may colonize tissues, multiply, evade immune defences, and cause damage, while the host attempts to eliminate it through immune responses.",
                },
                {
                  id: "BIO12-CH17-T12",
                  topicNumber: 12,
                  topic: "Innate immunity",
                  brief:
                    "Innate immunity is the body's immediate, non-specific defence against pathogens. It includes physical barriers such as skin and mucous membranes, chemical defences such as stomach acid, and cellular responses involving phagocytes and natural killer cells. Inflammation, fever, and the complement system also contribute to innate defence.",
                },
                {
                  id: "BIO12-CH17-T13",
                  topicNumber: 13,
                  topic: "Adaptive immunity",
                  brief:
                    "Adaptive immunity is a specific defence system that recognizes particular antigens and develops targeted responses. B lymphocytes can produce antibodies, while T lymphocytes help coordinate immune responses or destroy infected cells. Adaptive immunity can form memory cells, allowing a faster and stronger response when the same antigen is encountered again.",
                },
                {
                  id: "BIO12-CH17-T14",
                  topicNumber: 14,
                  topic: "Antibodies and antigens",
                  brief:
                    "An antigen is a substance or molecular structure recognized by the immune system that can trigger or participate in a specific immune response. Antibodies are proteins produced by plasma cells derived from B lymphocytes. Each antibody binds selectively to particular antigenic structures and can help neutralize pathogens or toxins and mark them for elimination.",
                },
                {
                  id: "BIO12-CH17-T15",
                  topicNumber: 15,
                  topic: "Vaccination",
                  brief:
                    "Vaccination exposes the immune system to an antigen or instructions for producing an antigen without causing the intended disease in the usual way. This stimulates an immune response and the formation of memory cells, helping protect against future infection or severe disease. Vaccines may contain weakened or inactivated pathogens, purified components, or genetic instructions such as mRNA.",
                },
                {
                  id: "BIO12-CH17-T16",
                  topicNumber: 16,
                  topic: "Antibiotics",
                  brief:
                    "Antibiotics are medicines used to treat certain bacterial infections by killing bacteria or inhibiting their growth. Different antibiotics target processes such as cell-wall formation, protein synthesis, or DNA replication. Antibiotics do not treat viral infections such as the common cold or influenza, and they should be used appropriately under qualified medical guidance.",
                },
                {
                  id: "BIO12-CH17-T17",
                  topicNumber: 17,
                  topic: "Antibiotic resistance",
                  brief:
                    "Antibiotic resistance occurs when bacteria acquire or develop traits that allow them to survive exposure to antibiotics that would normally inhibit or kill them. Resistance can spread through mutations and the transfer of resistance genes between bacteria. Misuse and overuse of antibiotics increase selection pressure favouring resistant bacteria, making infections harder to treat.",
                },
                {
                  id: "BIO12-CH17-T18",
                  topicNumber: 18,
                  topic: "Disease prevention",
                  brief:
                    "Disease prevention includes measures that reduce the risk of infection and illness. Important strategies include vaccination, handwashing, safe food preparation, clean drinking water, sanitation, vector control, appropriate use of medicines, and early diagnosis and treatment. Healthy nutrition and lifestyle practices also help reduce the risk of many non-infectious diseases.",
                },
                {
                  id: "BIO12-CH17-T19",
                  topicNumber: 19,
                  topic: "Public health and sanitation",
                  brief:
                    "Public health focuses on protecting and improving the health of communities through prevention, education, surveillance, and coordinated health services. Sanitation includes safe disposal of human waste, management of wastewater, clean water supplies, and hygienic environments. Effective public health and sanitation reduce the spread of infectious diseases and help prevent outbreaks.",
                },
              ],
            },
            {
              id: "BIO12-CH18",
              chapterNumber: 18,
              chapterName: "Applied Biology and Biotechnology",
              topics: [
                {
                  id: "BIO12-CH18-T01",
                  topicNumber: 1,
                  topic: "Biotechnology in healthcare",
                  brief:
                    "Biotechnology in healthcare uses living organisms, cells, and biological molecules to prevent, diagnose, and treat diseases. Applications include the production of insulin, vaccines, therapeutic proteins, diagnostic tests, and certain gene-based treatments. It also supports the development of personalized medicine and improved disease detection.",
                },
                {
                  id: "BIO12-CH18-T02",
                  topicNumber: 2,
                  topic: "Biotechnology in agriculture",
                  brief:
                    "Biotechnology in agriculture applies biological techniques to improve crops and livestock. It includes plant tissue culture, marker-assisted breeding, genetic engineering, and the development of crops with improved nutritional value or resistance to pests and diseases. These techniques can help improve productivity, although their benefits and risks require careful assessment.",
                },
                {
                  id: "BIO12-CH18-T03",
                  topicNumber: 3,
                  topic: "Industrial microbiology",
                  brief:
                    "Industrial microbiology uses microorganisms or their enzymes to manufacture useful products on a commercial scale. Bacteria, yeasts, and fungi are used to produce foods, beverages, organic acids, enzymes, antibiotics, and biofuels. Production conditions are controlled to obtain the desired product efficiently and consistently.",
                },
                {
                  id: "BIO12-CH18-T04",
                  topicNumber: 4,
                  topic: "Fermentation",
                  brief:
                    "Fermentation is a metabolic process in which microorganisms convert organic substances into other products, often releasing energy without using oxygen as the final electron acceptor. In food and industrial production, yeasts can convert sugars into ethanol and carbon dioxide, while certain bacteria produce lactic acid. Fermentation is used in making bread, yoghurt, cheese, and other products.",
                },
                {
                  id: "BIO12-CH18-T05",
                  topicNumber: 5,
                  topic: "Production of antibiotics",
                  brief:
                    "Antibiotics are substances that kill bacteria or inhibit their growth. Some antibiotics are produced naturally by microorganisms, such as penicillin from Penicillium fungi and streptomycin from Streptomyces bacteria. Industrial production involves selecting productive strains, growing them under controlled conditions, and extracting and purifying the antibiotic.",
                },
                {
                  id: "BIO12-CH18-T06",
                  topicNumber: 6,
                  topic: "Production of vaccines",
                  brief:
                    "Vaccine production involves preparing antigens or biological instructions that stimulate protective immunity against a disease. Vaccines may use weakened or inactivated pathogens, purified microbial components, recombinant proteins, viral vectors, or nucleic acids such as mRNA. Production requires controlled manufacturing, quality testing, and safety evaluation to ensure the vaccine meets required standards.",
                },
                {
                  id: "BIO12-CH18-T07",
                  topicNumber: 7,
                  topic: "Diagnostic biotechnology",
                  brief:
                    "Diagnostic biotechnology uses biological molecules and laboratory techniques to detect diseases, pathogens, or genetic changes. Examples include polymerase chain reaction (PCR), antigen and antibody tests, DNA probes, and enzyme-linked immunosorbent assay (ELISA). These methods can help identify infections, inherited conditions, and other health problems, depending on the test used.",
                },
                {
                  id: "BIO12-CH18-T08",
                  topicNumber: 8,
                  topic: "DNA fingerprinting",
                  brief:
                    "DNA fingerprinting is a technique used to identify individuals by examining variations in their DNA. Modern methods often analyse short tandem repeats (STRs), which vary among individuals. Applications include forensic investigations, paternity testing, identification of human remains, and certain wildlife conservation studies. Identical twins generally have the same inherited DNA profile at the markers used in routine testing.",
                },
                {
                  id: "BIO12-CH18-T09",
                  topicNumber: 9,
                  topic: "Genetic engineering",
                  brief:
                    "Genetic engineering involves deliberately modifying an organism's genetic material using molecular techniques. Scientists may insert, remove, or alter particular DNA sequences to produce desired traits or biological products. Applications include producing human insulin using genetically modified microorganisms, developing improved crops, and investigating gene function.",
                },
                {
                  id: "BIO12-CH18-T10",
                  topicNumber: 10,
                  topic: "Tissue culture",
                  brief:
                    "Tissue culture is the growth of cells, tissues, or organs under controlled conditions in a suitable nutrient medium. Plant tissue culture can produce many plants from a small amount of starting material, often using sterile conditions and appropriate plant hormones. Animal cell and tissue culture is used in research, drug testing, vaccine development, and some medical applications.",
                },
                {
                  id: "BIO12-CH18-T11",
                  topicNumber: 11,
                  topic: "Transgenic organisms",
                  brief:
                    "Transgenic organisms contain genetic material introduced from another organism using genetic engineering. Examples include certain crops engineered to resist insect pests and bacteria modified to produce human insulin. Transgenic organisms are used in agriculture, medicine, and research, but their environmental, health, and ethical implications should be assessed carefully.",
                },
                {
                  id: "BIO12-CH18-T12",
                  topicNumber: 12,
                  topic: "Stem cells",
                  brief:
                    "Stem cells are unspecialized cells that can self-renew and develop into specialized cell types. Embryonic stem cells can give rise to nearly all cell types of the body, while adult stem cells generally have more restricted developmental potential. Induced pluripotent stem cells are mature cells reprogrammed to a pluripotent state. Stem cells are studied for tissue repair, disease modelling, and regenerative medicine.",
                },
                {
                  id: "BIO12-CH18-T13",
                  topicNumber: 13,
                  topic: "Gene therapy",
                  brief:
                    "Gene therapy aims to treat or prevent disease by introducing, removing, or modifying genetic material in a patient's cells. It may replace a faulty gene, alter gene activity, or introduce instructions that help cells perform a useful function. Some approaches use viral vectors to deliver genetic material, while others use non-viral delivery systems or genome-editing tools. Safety and effectiveness depend on the condition and treatment.",
                },
                {
                  id: "BIO12-CH18-T14",
                  topicNumber: 14,
                  topic: "Bioinformatics",
                  brief:
                    "Bioinformatics combines biology, computer science, mathematics, and statistics to store, analyse, and interpret biological data. It is used to compare DNA and protein sequences, study genomes, predict protein structures, identify evolutionary relationships, and support drug discovery. Computational analysis helps researchers interpret large datasets that would be difficult to examine manually.",
                },
                {
                  id: "BIO12-CH18-T15",
                  topicNumber: 15,
                  topic: "Bioremediation",
                  brief:
                    "Bioremediation uses microorganisms, plants, or their biological processes to remove, transform, or reduce environmental pollutants. Certain microbes can break down petroleum compounds and other organic contaminants, while plants can absorb or stabilize some pollutants. The effectiveness of bioremediation depends on the pollutant, environmental conditions, and the organisms involved.",
                },
                {
                  id: "BIO12-CH18-T16",
                  topicNumber: 16,
                  topic: "Biosafety",
                  brief:
                    "Biosafety refers to practices, equipment, and procedures used to prevent accidental exposure to biological agents or their unintended release. It includes appropriate laboratory containment, protective equipment, safe handling and disposal of biological materials, risk assessment, and staff training. Biosafety measures are selected according to the hazards posed by the biological material and the work being performed.",
                },
                {
                  id: "BIO12-CH18-T17",
                  topicNumber: 17,
                  topic: "Bioethics",
                  brief:
                    "Bioethics examines the ethical, social, and legal issues arising from biology and biotechnology. Important topics include genetic testing, gene editing, stem cell research, cloning, animal welfare, privacy of genetic information, and equitable access to treatments. Ethical decisions consider potential benefits, possible harms, informed consent, fairness, and respect for human and animal welfare.",
                },
                {
                  id: "BIO12-CH18-T18",
                  topicNumber: 18,
                  topic: "Biotechnology and sustainable development",
                  brief:
                    "Biotechnology can support sustainable development by improving food production, developing cleaner industrial processes, producing renewable biofuels, treating waste, and reducing some forms of pollution. Its contribution depends on responsible design, appropriate regulation, environmental protection, and fair access to benefits. Potential risks, including biodiversity impacts and unequal access, must also be considered.",
                },
              ],
            },
          ],
        },
      ],
    },
  },
};
