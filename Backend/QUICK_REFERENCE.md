# EduReach Backend - Quick Reference

## 🚀 Start Server
```bash
npm run dev              # Development with auto-reload
npm start               # Production mode
```

## 🔗 API Endpoints

| Method | Endpoint | Body |
|--------|----------|------|
| POST | `/api/chat/message` | `{"message": "Your question"}` |
| POST | `/auth/register` | `{"email":"","password":""}` |
| POST | `/auth/login` | `{"email":"","password":""}` |
| GET | `/` | - |

## 📦 Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `@langchain/google-genai` | Latest | Gemini AI integration |
| `@langchain/mongodb` | Latest | Vector search |
| `mongodb` | 6.9.0 | Database driver |
| `express` | 4.21.1 | Web framework |
| `langchain` | 0.1.36 | Core LLM library |

## 🗄️ MongoDB Collections

| Collection | Auto-Created | Purpose |
|------------|--------------|---------|
| `users` | Yes (auth) | User accounts |
| `knowledge_docs` | Yes | RAG documents |
| `chats` | No | Chat history |

## 🔐 Environment Variables

```env
PORT=5000
MONGODB_URI=mongodb+srv://user:pass@cluster.net
GOOGLE_API_KEY=AIzaSyB...
NODE_ENV=development
```

## 📋 Vector Index Setup (One-Time)

1. MongoDB Atlas → Collections
2. Database: `edureach_db` → Collection: `knowledge_docs`
3. Create Search Index:
   - Name: `edureach_vector_index`
   - Vector Field: `embedding`
   - Dimensions: `768`
   - Similarity: `cosine`

## 🧠 How RAG Works

```
User Question
    ↓
Vector Search (MongoDB)
    ↓
Retrieve Top 5 Chunks
    ↓
Feed to Gemini AI
    ↓
Generate Response
```

## 📊 Document Structure

```json
{
  "_id": ObjectId,
  "text": "Document content...",
  "embedding": [0.123, 0.456, ...],  // 768 dimensions
  "metadata": {}
}
```

## ✅ Health Check

```bash
curl http://localhost:5000/
# Response: "API is running"
```

## 🐛 Common Issues

| Error | Fix |
|-------|-----|
| `404 Not Found` (embedding) | Model is `models/embedding-001` |
| `Vector index not found` | Create in MongoDB Atlas UI |
| `Connection refused` | Check MONGODB_URI & IP whitelist |
| `Module not found` | Run `npm install` |

## 📈 Logs to Watch

```
✓ MongoDB Connected           ← DB is working
✓ Embedding API working       ← Gemini is working
✓ Successfully stored X chunks ← Knowledge base is ready
Server is running on port 5000 ← Ready for requests
```

## 🔄 Update Knowledge Base

Edit: `knowledge-base/edureach-knowledge.txt`
→ Restart server with `npm run dev`
→ Automatically re-indexes

## 🚀 Deploy

```bash
# Vercel
vercel

# Docker
docker build -t edureach-backend .
docker run -p 5000:5000 edureach-backend

# Heroku
git push heroku main
```

## 📞 Support Resources

- **Google AI Studio:** https://aistudio.google.com
- **MongoDB Docs:** https://docs.mongodb.com
- **LangChain Docs:** https://js.langchain.com
- **Express Docs:** https://expressjs.com

---

**⚡ Server Status:** Ready to Deploy  
**🔧 Last Check:** ✅ All Systems Operational
