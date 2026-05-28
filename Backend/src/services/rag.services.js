import path from "node:path";
import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { MongoClient } from "mongodb";
import { GoogleGenAI } from "@google/genai";
import { MongoDBAtlasVectorSearch } from "@langchain/mongodb";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { pipeline } from "@xenova/transformers";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ai = new GoogleGenAI({
  apiKey:
    process.env.GOOGLE_API_KEY ||
    process.env.GEMINI_API_KEY,
});

let extractor = null;

const getExtractor = async () => {
  if (!extractor) {
    extractor = await pipeline(
      "feature-extraction",
      "Xenova/all-MiniLM-L6-v2"
    );
  }

  return extractor;
};

let mongoClient = null;

const getMongoClient = async () => {
  if (!mongoClient) {
    mongoClient = new MongoClient(
      process.env.MONGODB_URI
    );

    await mongoClient.connect();

    console.log("✓ MongoDB Connected");
  }

  return mongoClient;
};

const getEmbeddings = () => {
  return {
    embedQuery: async (text) => {
      const extractor =
        await getExtractor();

      const output =
        await extractor(text, {
          pooling: "mean",
          normalize: true,
        });

      return Array.from(output.data);
    },

    embedDocuments: async (texts) => {
      const extractor =
        await getExtractor();

      const embeddings =
        await Promise.all(
          texts.map(async (text) => {
            const output =
              await extractor(text, {
                pooling: "mean",
                normalize: true,
              });

            return Array.from(
              output.data
            );
          })
        );

      return embeddings;
    },
  };
};

const getVectorStore = async () => {
  const client = await getMongoClient();

  const collection = client
    .db("edureach_db")
    .collection("knowledge_docs");

  const embeddings = getEmbeddings();

  return new MongoDBAtlasVectorSearch(
    embeddings,
    {
      collection,
      indexName:
        "edureach_vector_index",
      textKey: "text",
      embeddingKey: "embedding",
    }
  );
};

export const initializeKnowledgeBase =
  async () => {
    try {
      console.log(
        "🔄 Initializing knowledge base..."
      );

      const client =
        await getMongoClient();

      const collection = client
        .db("edureach_db")
        .collection(
          "knowledge_docs"
        );

      const existingDoc =
        await collection.findOne({
          embedding: {
            $exists: true,
          },
        });

      if (existingDoc) {
        const count =
          await collection.countDocuments();

        console.log(
          `✓ Knowledge base already initialized (${count} chunks)`
        );

        return;
      }

      console.log(
        "📝 Indexing knowledge base..."
      );

      const embeddings =
        getEmbeddings();

      const testEmbedding =
        await embeddings.embedQuery(
          "test"
        );

      console.log(
        `✓ Embedding API working (${testEmbedding.length} dimensions)`
      );

      const filePath = path.join(
        __dirname,
        "../../knowledge-base/edureach-knowledge.txt"
      );

      const text =
        await fs.readFile(
          filePath,
          "utf-8"
        );

      const docs = [
        {
          pageContent: text,
          metadata: {
            source: filePath,
          },
        },
      ];

      const splitter =
        new RecursiveCharacterTextSplitter(
          {
            chunkSize: 500,
            chunkOverlap: 100,
          }
        );

      const splits =
        await splitter.splitDocuments(
          docs
        );

      console.log(
        `✓ Created ${splits.length} chunks`
      );

      const vectorStore =
        await getVectorStore();

      await vectorStore.addDocuments(
        splits
      );

      console.log(
        `✓ Successfully stored ${splits.length} chunks`
      );
    } catch (error) {
      console.error(
        "❌ Knowledge base initialization failed:",
        error.message
      );

      console.error(error);
    }
  };

export const getRAGResponse =
  async (question) => {
    try {
      const vectorStore =
        await getVectorStore();

      const retrievedDocs =
        await vectorStore.similaritySearch(
          question,
          5
        );

      const context =
        retrievedDocs
          .map(
            (doc) =>
              doc.pageContent
          )
          .join("\n\n");

      const prompt = `
You are EduReach Bot, an AI counselor for EduReach College Hyderabad.

Answer ONLY using the context below.

If answer is unavailable, say:
"I don't have that information right now. Click Talk to Us to speak with a counselor."

Context:
${context}

Question:
${question}
`;

      const response =
        await ai.models.generateContent({
          model:
            "gemini-2.5-flash",
          contents: prompt,
        });

      return response.text;
    } catch (error) {
      console.error(
        "❌ RAG Error:",
        error
      );

      return "I'm having trouble right now.";
    }
  };