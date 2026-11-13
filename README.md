# ask-prabhupada
"Ask Prabhupada" is an AI-powered conversational app that answers spiritual and philosophical questions strictly using the authentic books, lectures, and letters of Srila Prabhupāda.

# Core Product Features

1. **RAG-Powered Conversational Search (Retrieval-Augmented Generation):**
* Users can ask natural language questions (e.g., *"What does Srila Prabhupada say about managing the mind?"* or *"How do I overcome anxiety according to the Gita?"*).
* The system retrieves exact passages and generates a synthesis while strictly adhering to the source text.


2. **Precise Citations & Source Linking:**
* Every answer must explicitly cite the source (e.g., *Bhagavad-gītā 2.14, Purport*, or *Lecture, New York, August 22, 1966*), allowing users to tap and read the original paragraph or verse.


3. **Multi-Layer Corpus Ingestion:**
* **Tier 1 (Core Books):** Bhagavad-gītā, Srimad-Bhagavatam (all Cantos), Caitanya-caritamrta, Nectar of Devotion, Nectar of Instruction.
* **Tier 2 (Conversations & Lectures):** Morning walks, room conversations, and formal lectures (crucial for capturing Prabhupada's personal conversational tone and practical instruction style).
* **Tier 3 (Letters):** Correspondence with disciples addressing practical spiritual life and management.


4. **Sanskrit/Bengali Glossary & Transliteration Helper:**
* Automatically map diacritical terms (e.g., *Krishna*, *Bhakti*, *Dharma*) so that users searching with or without diacritics find precise scriptural matches.


5. **Study & Preservation Tools (Retention Features):**
* **"Save to Study Collection":** Bookmark answers or favorite verses into personal folders.
* **Daily Wisdom / Verse of the Day Widget:** Push notifications delivering a profound quote or verse purport each morning.

# Phase-Wise Development Plan

## Phase 1: The Core MVP (The "Books-Only" Proof of Concept)

*Goal: Build the fundamental pipeline using just the core foundational books.*

* **Data Engineering:** Scrape or ingest clean text from public digital repositories (like Vedabase or PrabhupadaBooks data structures) for the core books (*Bhagavad-gītā As It Is*, *Śrīmad-Bhagavatam* Cantos 1–10, *Nectar of Devotion*).
* **Chunking & Vector Database:** Split text semantically by paragraph/purport rather than arbitrary token lengths to keep verse context intact. Store embeddings in a vector database (e.g., Pinecone, pgvector, or Chroma).
* **Basic Chat Interface:** A clean, minimal cross-platform mobile/web UI where users type a question and receive an LLM-synthesized answer backed strictly by book excerpts.

## Phase 2: Expanding the Corpus & Grounding (Lectures & Letters)

*Goal: Deepen the knowledge base beyond books into daily conversations and letters.*

* **Audio/Text Transcripts Ingestion:** Ingest thousands of lecture and morning walk transcripts. Because spoken transcripts can be conversational or fragmented, refine chunking strategies so the LLM doesn't hallucinate context.
* **Strict Anti-Hallucination Guardrails:** Implement evaluation prompts and source-checking filters. If a user asks a question outside the corpus, the bot should politely state: *"I can only answer based on the recorded teachings, books, and letters of Srila Prabhupada."*
* **Citation UI Cards:** Enhance the frontend so that tapping a citation pops open a clean reader view of the original book page or lecture transcript.

## Phase 3: Polish, Personalization & Distribution

*Goal: Make the app delightful, easy to share, and ready for a wider audience.*

* **Personal Study Features:** User accounts, saved Q&A histories, and bookmarking favorite purports.
* **Audio Read-Aloud Integration:** Text-to-speech option using high-quality neural voices so users can listen to the answers.
* **Free + Optional Support Model:** Keep the app entirely free and ad-free as a service to the community, with a voluntary "Support the Server / Donate" option or unlockable offline download packs if server costs scale up.
