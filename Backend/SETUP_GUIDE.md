# EduReach Backend - Production Setup Guide

## Overview
This is a full-stack RAG (Retrieval-Augmented Generation) chatbot backend for EduReach College using:
- Node.js + Express
- MongoDB Atlas
- Google Generative AI (Gemini)
- LangChain.js
- Vector Search

## ✅ Prerequisites

1. **Node.js v18+** - Install from nodejs.org
2. **MongoDB Atlas Account** - mongodb.com/cloud/atlas
3. **Google API Key** - aistudio.google.com/apikey

## 🚀 Quick Start

### 1. Install Dependencies

```bash
cd EduReach/Backend
npm install
```

**Fixed dependencies in package.json:**
- `@langchain/google-genai` - Google Generative AI integration
- `@langchain/mongodb` - MongoDB Vector Search
- `@langchain/core` - Core LangChain
- `mongodb` v6.9.0 - MongoDB Driver
- `express` v4.21.1 - Web framework
- All other required packages

### 2. Configure Environment

Update `.env`:

```env
PORT=5000
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/?appName=Cluster1
GOOGLE_API_KEY=your-api-key-from-aistudio.google.com
NODE_ENV=development
```

### 3. Create MongoDB Collections

The backend will auto-create:
- Database: `edureach_db`
- Collection: `knowledge_docs` (auto-created on first init)

### 4. Create Vector Search Index (REQUIRED)

**Manual Setup in MongoDB Atlas UI:**

1. Navigate to: Collections > edureach_db > knowledge_docs
2. Click "Indexes" tab
3. Click "Create Search Index" → "Vector Search"
4. **Index Name:** `edureach_vector_index`
5. **Fields:**
   - Vector Field: `embedding`
   - Dimensions: 768 (models/embedding-001)
   - Similarity: cosine
   - Filter Field: `text` (optional)
6. Click "Create"

**Wait 1-2 minutes for index to be ready**

### 5. Start Backend

```bash
npm run dev
```

**Expected Terminal Output:**

```
✓ MongoDB Connected
🔄 Initializing knowledge base...
📝 Indexing knowledge base...
✓ Embedding API working (768D vectors)
📄 Loaded XXXX characters from knowledge base
✂️  Split into 150+ chunks
✓ Successfully stored 150+ chunks with embeddings
Server is running on port 5000
```

## 📁 Project Structure

```
Backend/
├── src/
│   ├── server.js              # Express server entry
│   ├── app.js                 # Express app config
│   ├── services/
│   │   ├── rag.services.js    # RAG & embeddings logic
│   │   └── chat.services.js   # Chat endpoints
│   ├── controller/
│   │   └── chat.controller.js # Request handlers
│   ├── routes/
│   │   ├── authroutes.js
│   │   └── chat.routes.js
│   └── config/
│       └── db.js              # MongoDB connection
├── knowledge-base/
│   └── edureach-knowledge.txt # Knowledge base content
├── .env                       # Environment variables
├── package.json               # Dependencies
└── VECTOR_INDEX_CONFIG.json  # MongoDB index config
```

## 🔧 Key Fixes Applied

### ✅ Dependency Issues Fixed
- ❌ Removed `@google/genai` (outdated)
- ✅ Added `@langchain/google-genai` (current)
- ❌ Removed `@langchain/classic` (deprecated)
- ✅ Using `langchain` v0.1.36
- ✅ MongoDB driver v6.9.0

### ✅ Embedding Model Fixed
- ❌ ~~text-embedding-004~~ (404 error)
- ✅ **models/embedding-001** (working)
- Dimensions: 768

### ✅ LangChain Integration
- Using latest `createReactAgent` pattern
- Proper tool definitions with Zod schemas
- Correct response handling

### ✅ RAG Architecture
- Vector Search with similarity scoring
- Proper document chunking (1000 chars, 200 overlap)
- Streaming-ready implementation

## 📝 API Endpoints

### Chat Endpoint
```
POST /api/chat/message
Content-Type: application/json

{
  "message": "What are the fees at EduReach?"
}

Response:
{
  "success": true,
  "data": {
    "message": "B.Tech fees at EduReach are Rs 1,50,000 per year..."
  }
}
```

## 🧪 Testing

### Test Question Examples

```
"What are the fees for B.Tech in VIT Vellore?"
"Compare placements of NIT Rourkee and BITS Pilani"
"Tell me about admissions at EduReach"
"Which college is best for CSE?"
```

### Test Embedding (Manual)

```javascript
const embeddings = getEmbeddings();
const result = await embeddings.embedQuery("test");
console.log(result.length); // Should be 768
```

## 🐛 Troubleshooting

### Issue: "Embedding API Error: 404 Not Found"
**Solution:** Use correct model `models/embedding-001` (✅ Already fixed)

### Issue: "MongoDB connection refused"
**Solution:** 
- Check MONGODB_URI in .env
- Whitelist your IP in MongoDB Atlas
- Use full connection string with credentials

### Issue: "Vector index not found"
**Solution:**
- Create index manually in MongoDB Atlas UI
- Index name must be: `edureach_vector_index`
- Wait 1-2 minutes after creation

### Issue: "No relevant documents retrieved"
**Solution:**
- Check knowledge-base file exists
- Verify chunks were created and stored
- Check console logs during initialization

## 📊 Monitoring

### Check Knowledge Base Status

```bash
# In MongoDB Atlas Console
use edureach_db
db.knowledge_docs.countDocuments() // Should be 150+
db.knowledge_docs.findOne({}) // Check document structure
```

### View Logs

```bash
npm run dev  # All logs displayed
```

## 🔐 Security Notes

- Store API keys in `.env` (add to .gitignore)
- Use environment variables for all secrets
- MongoDB Atlas IP whitelist your server
- Enable HTTPS in production

## 📦 Production Deployment

### Environment Variables for Production
```env
PORT=3000
NODE_ENV=production
MONGODB_URI=mongodb+srv://...
GOOGLE_API_KEY=...
```

### Deploy Options
- **Vercel**: Supports Node.js serverless
- **Heroku**: Traditional Node.js hosting
- **Railway**: Modern cloud platform
- **AWS EC2**: Full control VM

### Production Build
```bash
npm install --production
npm start  # Uses node src/server.js
```

## 📚 Documentation Links

- **Google Generative AI:** https://ai.google.dev
- **LangChain.js:** https://js.langchain.com
- **MongoDB Atlas:** https://docs.atlas.mongodb.com
- **Vector Search:** https://www.mongodb.com/docs/atlas/atlas-vector-search

## 🤝 Support

For issues:
1. Check this guide
2. Review console error messages
3. Check MongoDB Atlas status
4. Verify all environment variables
5. Test with curl or Postman

---

**Backend Status:** ✅ Production Ready
**Last Updated:** May 2026
