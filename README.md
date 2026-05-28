# 🎓 EduReach – Agentic College Chatbot Platform

<div align="center">

[![AI-Powered](https://img.shields.io/badge/AI--Powered-Agentic%20RAG-blue?style=for-the-badge&logo=brain&logoColor=white)](https://github.com)
[![Full Stack](https://img.shields.io/badge/Full%20Stack-Production%20Ready-brightgreen?style=for-the-badge&logo=stack-overflow&logoColor=white)](https://github.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-Advanced-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![React](https://img.shields.io/badge/React-19+-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

**An AI-powered autonomous college assistance platform with Agentic RAG, Voice AI, and intelligent admissions support.**

[🚀 Live Demo](#live-demo) • [📚 Documentation](#documentation) • [🤝 Contributing](#contributing) • [📧 Contact](#contact)

</div>

---

## 🎯 Problem Statement

Students navigating the college application and enrollment journey face significant friction:

### The Current Reality

| Challenge | Impact |
|-----------|--------|
| **Static Websites** | Information buried across outdated portals with no intelligent navigation |
| **Navigation Complexity** | Students spend hours searching for admission deadlines, fees, placements, scholarships |
| **Information Overload** | Overwhelming amount of text-based content with no contextual guidance |
| **Limited Support** | Dependent on office hours; counselors unavailable during peak inquiry periods |
| **Fragmented Experience** | Switching between websites, PDFs, emails, and phone calls for answers |
| **Accessibility Gap** | Voice-based counseling unavailable; text-only interfaces underserve diverse learning needs |

**Result**: Students resort to social media, forums, or rely on incomplete information—leading to missed opportunities and delayed decisions.

---

## 💡 Solution

EduReach reimagines college assistance through **autonomous AI agents** that work 24/7:

### How It Works

```
┌─────────────────┐
│  Student Query  │
│  (Text/Voice)   │
└────────┬────────┘
         │
         ▼
┌─────────────────────────────┐
│   AI Agent Orchestrator     │
│  (Intent + Context Analysis)│
└────────┬────────────────────┘
         │
    ┌────┴────┐
    ▼         ▼
┌───────┐ ┌──────────────┐
│ Tools │ │ RAG Pipeline │
│ Call  │ │ + Retrieval  │
└───┬───┘ └──────┬───────┘
    │            │
    └────┬───────┘
         ▼
┌──────────────────────┐
│ Context + Knowledge  │
│ Injected Prompt      │
└──────┬───────────────┘
       ▼
┌──────────────────────┐
│ LLM Generation       │
│ (Streaming Response) │
└──────┬───────────────┘
       ▼
┌──────────────────────┐
│ Real-Time Delivery   │
│ (Text + Voice)       │
└──────────────────────┘
```

### Key Innovations

🤖 **Agentic RAG**: Autonomous agents that decide which tools to use and when  
🎙️ **Voice AI**: Natural conversational counseling with real-time streaming  
🔍 **Semantic Retrieval**: Vector-based knowledge base search for precise answers  
💾 **Persistent Memory**: Contextual awareness across conversation sessions  
⚡ **Streaming Responses**: Real-time text and voice delivery without delays  

---

## ✨ Core Features

| Feature | Description | Status |
|---------|-------------|--------|
| 🤖 **Agentic RAG Chatbot** | Autonomous AI agent with tool calling & memory management | ✅ Production |
| 🎙️ **AI Voice Counselor** | Real-time voice interaction with natural language processing | ✅ Production |
| 🔐 **JWT Authentication** | Secure token-based user authentication & authorization | ✅ Production |
| ⚡ **Real-Time Responses** | Streaming responses with WebSocket integration | ✅ Production |
| 📄 **PDF Knowledge Base** | Semantic search across college documents & policies | ✅ Production |
| 🔎 **Semantic Search** | Vector embeddings for precise information retrieval | ✅ Production |
| 📡 **Streaming Responses** | Server-sent events for low-latency user experience | ✅ Production |
| 🎯 **Personalized Guidance** | Context-aware recommendations based on student profile | ✅ Production |
| 🏫 **College Information Portal** | Comprehensive repository of admission & placement data | ✅ Production |
| 📤 **Admin Upload System** | Bulk PDF ingestion with vector indexing | ✅ Production |
| 📱 **Responsive UI** | Mobile-first design with adaptive layouts | ✅ Production |
| 📊 **Modern Dashboard** | Analytics & performance monitoring for admins | ✅ Production |

---

## 🛠️ Tech Stack

### 🎨 Frontend

| Technology | Purpose |
|-----------|---------|
| **React 19** | Modern UI with hooks & concurrent rendering |
| **TypeScript** | Type-safe component development |
| **Tailwind CSS** | Utility-first styling with dark mode support |
| **Axios** | HTTP client for API communication |
| **Zustand** | Lightweight state management |
| **Vite** | Lightning-fast build tooling |

### 🔧 Backend

| Technology | Purpose |
|-----------|---------|
| **Node.js** | JavaScript runtime for server-side logic |
| **Express.js** | Minimal & flexible web framework |
| **MongoDB** | Document database for scalable data storage |
| **JWT** | Stateless authentication mechanism |
| **Socket.io** | Real-time bidirectional communication |
| **Mongoose** | ODM for MongoDB schema validation |

### 🤖 AI Stack

| Technology | Purpose |
|-----------|---------|
| **Google Gemini API** | Advanced LLM for conversational intelligence |
| **OpenAI GPT-4** | Fallback LLM & fine-tuned embeddings |
| **LangChain** | Framework for autonomous agent orchestration |
| **RAG Pipeline** | Retrieval-augmented generation architecture |
| **Vector Embeddings** | Semantic representation of knowledge |
| **Pinecone** | Scalable vector database for semantic search |

### 🚀 DevOps & Deployment

| Technology | Purpose |
|-----------|---------|
| **Docker** | Containerization for consistent environments |
| **Docker Compose** | Multi-container orchestration for local development |
| **Nginx** | Reverse proxy & load balancing |
| **Kubernetes** | Container orchestration for production scaling |
| **GitHub Actions** | CI/CD pipeline automation |
| **Vercel** | Serverless frontend deployment |
| **Render** | Backend deployment & database hosting |

---

## 🏗️ System Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    User Interface Layer                      │
│  (React Frontend - Chat UI, Voice Interface, Dashboard)     │
└────────────────────────┬────────────────────────────────────┘
                         │ HTTPS/WebSocket
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                    API Gateway Layer                         │
│  (Nginx - Rate Limiting, Load Balancing, Routing)          │
└────────────────────────┬────────────────────────────────────┘
                         │
        ┌────────────────┼────────────────┐
        ▼                ▼                ▼
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ Auth Routes  │ │ Chat Routes  │ │ Admin Routes │
│ (JWT Token)  │ │ (AI Queries) │ │ (PDF Upload) │
└──────┬───────┘ └──────┬───────┘ └──────┬───────┘
       │                │                │
       └────────────────┼────────────────┘
                        ▼
        ┌───────────────────────────────┐
        │   AI Agent Orchestration      │
        │  (LangChain Agent Router)     │
        └───────────────┬───────────────┘
                        │
        ┌───────────────┼───────────────┐
        ▼               ▼               ▼
    ┌────────┐  ┌──────────────┐  ┌────────────┐
    │ Gemini │  │ LangChain    │  │ Knowledge  │
    │  LLM   │  │   Tools      │  │  Retriever │
    └────────┘  └──────────────┘  └────────────┘
                                          │
        ┌─────────────────────────────────┴──────────┐
        ▼                                            ▼
    ┌──────────────┐                      ┌──────────────────┐
    │   MongoDB    │                      │  Pinecone Vector │
    │   Database   │                      │  Database        │
    └──────────────┘                      └──────────────────┘
```

### Core Components

**1. Agent Orchestration**
- Autonomous decision-making with tool calling
- Multi-turn conversation memory
- Intent classification & routing

**2. RAG Pipeline**
- Document ingestion & preprocessing
- Vector embedding generation
- Semantic similarity search
- Context injection into LLM prompts

**3. Real-Time Communication**
- WebSocket connections for live chat
- Server-sent events for streaming responses
- Voice stream processing via Socket.io

**4. Security Layer**
- JWT token validation
- Protected API routes
- Rate limiting & DDoS protection
- Encrypted payload transmission

---

## 📁 Folder Structure

```
EduReach/
│
├── 📂 Frontend/                          # React Application
│   ├── public/
│   ├── src/
│   │   ├── Components/
│   │   │   ├── ChatInterface/           # Main chat UI
│   │   │   ├── VoiceCounselor/          # Voice interaction
│   │   │   ├── Dashboard/               # Student dashboard
│   │   │   ├── AdminPanel/              # Admin controls
│   │   │   ├── Navbar/                  # Navigation
│   │   │   └── Footer/                  # Footer component
│   │   ├── pages/
│   │   │   ├── HomePage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   ├── ChatPage.jsx
│   │   │   └── AdminPage.jsx
│   │   ├── services/
│   │   │   ├── api.js                   # Axios API client
│   │   │   ├── auth.services.js         # Auth logic
│   │   │   └── chat.service.js          # Chat API calls
│   │   ├── context/
│   │   │   └── authContext.jsx          # Auth state
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── Dockerfile
│
├── 📂 Backend/                           # Express Server
│   ├── src/
│   │   ├── server.js                    # Express entry point
│   │   ├── config/
│   │   │   ├── db.js                    # MongoDB connection
│   │   │   └── env.js                   # Environment config
│   │   ├── controller/
│   │   │   ├── auth.controller.js       # Auth endpoints
│   │   │   ├── chat.controller.js       # Chat endpoint
│   │   │   └── admin.controller.js      # Admin endpoints
│   │   ├── routes/
│   │   │   ├── authroutes.js
│   │   │   ├── chat.routes.js
│   │   │   └── admin.routes.js
│   │   ├── middleware/
│   │   │   ├── auth.middleware.js       # JWT verification
│   │   │   └── errorHandler.js          # Error handling
│   │   ├── models/
│   │   │   ├── user.model.js            # User schema
│   │   │   └── knowledge-doc.model.js   # Document metadata
│   │   └── services/
│   │       └── rag.services.js          # RAG pipeline logic
│   ├── knowledge-base/
│   │   └── edureach-knowledge.txt       # Reference documents
│   ├── package.json
│   ├── app.js
│   ├── Dockerfile
│   └── .env.example
│
├── 📂 AI/                                # AI Agent Logic
│   ├── agents/
│   │   ├── collegeAgent.js              # Main agent
│   │   └── toolDefinitions.js           # Tool specifications
│   ├── rag/
│   │   ├── embeddings.js                # Embedding pipeline
│   │   ├── retriever.js                 # Vector search
│   │   └── contextBuilder.js            # Context assembly
│   ├── llm/
│   │   ├── geminiClient.js              # LLM client
│   │   └── prompts.js                   # System prompts
│   └── utils/
│       └── streaming.js                 # Streaming utilities
│
├── 📂 kubernetes/                        # K8s Deployments
│   ├── frontend-deployment.yaml
│   ├── backend-deployment.yaml
│   ├── mongodb-statefulset.yaml
│   ├── service.yaml
│   └── ingress.yaml
│
├── 📂 docker/                            # Docker configs
│   ├── Dockerfile.frontend
│   ├── Dockerfile.backend
│   └── nginx.conf
│
├── 📂 scripts/                           # Utility scripts
│   ├── seed-db.js                       # Database initialization
│   ├── ingest-knowledge-base.js         # Knowledge base ingestion
│   └── deploy.sh                        # Deployment script
│
├── docker-compose.yml                    # Local development setup
├── .env.example                          # Environment variables
├── .gitignore
└── README.md                             # Project documentation
```

---

## 🧠 AI Workflow

### Complete Conversational Flow

```
1. 📝 USER INPUT
   └─→ Student asks: "What are the admission requirements?"

2. 🎯 INTENT ANALYSIS
   └─→ Agent classifies intent: "ADMISSION_QUERY"
   └─→ Extracts entities: {"type": "admission", "topic": "requirements"}

3. 🔧 TOOL CALLING
   └─→ Agent decides tools needed:
       ├─ retrieve_knowledge (search knowledge base)
       ├─ get_admission_criteria (fetch DB)
       └─ format_response (structure output)

4. 🔍 KNOWLEDGE RETRIEVAL
   └─→ Semantic search in Pinecone vector DB
   └─→ Retrieves: admission_policy.pdf, requirements_2024.txt
   └─→ Scores: [0.92, 0.87] (relevance)

5. 📚 CONTEXT INJECTION
   └─→ Retrieved chunks injected into LLM prompt:
       ┌────────────────────────────────┐
       │ System: You are an AI counselor │
       │ Knowledge: [retrieved context]  │
       │ Query: admission requirements   │
       └────────────────────────────────┘

6. 🤖 LLM GENERATION
   └─→ Gemini API generates response:
       "Based on our 2024 criteria, you need:"
       "- 10+2 or equivalent"
       "- IELTS 6.0 minimum"
       "- Valid passport"

7. 📡 STREAMING RESPONSE
   └─→ Server-sent events stream response:
       ├─ Event 1: "Based on our..."
       ├─ Event 2: "- 10+2 or..."
       └─ Event 3: [END_STREAM]

8. 🎙️ VOICE CONVERSION (Optional)
   └─→ TTS converts text to speech
   └─→ Streams audio to client

9. 💾 CONTEXT PERSISTENCE
   └─→ Store in MongoDB:
       ├─ user_id
       ├─ query
       ├─ response
       ├─ timestamp
       └─ retrieved_docs (for audit)

10. ✅ RESPONSE DELIVERY
    └─→ Display in chat UI with citations
    └─→ Enable follow-up question
```

---

## 📸 Screenshots

### 1️⃣ Homepage

![Homepage](https://via.placeholder.com/800x600?text=EduReach+Homepage)

*Welcome screen with hero section and quick navigation*

### 2️⃣ AI Chat Interface

![Chat Interface](https://via.placeholder.com/800x600?text=Chat+Interface+with+AI+Agent)

*Real-time chat with streaming responses and conversation history*

### 3️⃣ Voice Counselor

![Voice Counselor](https://via.placeholder.com/800x600?text=Voice+Counselor+Interface)

*Voice-based interaction with visualization and transcript*

### 4️⃣ Student Dashboard

![Dashboard](https://via.placeholder.com/800x600?text=Student+Dashboard)

*Personalized recommendations, query history, and progress tracking*

### 5️⃣ Admin Panel

![Admin Panel](https://via.placeholder.com/800x600?text=Admin+Control+Panel)

*Knowledge base management, document upload, and analytics*

---

## 🚀 Installation Guide

### Prerequisites

- **Node.js** v18+ & npm
- **MongoDB** (local or Atlas)
- **Docker** & Docker Compose (optional)
- **Git**

### Clone & Setup

```bash
# Clone repository
git clone https://github.com/yourusername/edureach.git
cd edureach

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../Backend
npm install

# Return to root
cd ..
```

### Environment Configuration

```bash
# Copy environment template
cp Backend/.env.example Backend/.env

# Edit with your credentials
nano Backend/.env
```

### Run Locally

#### Option 1: Development Mode (Recommended)

```bash
# Terminal 1 - Start Backend
cd Backend
npm start
# Server runs on http://localhost:3001

# Terminal 2 - Start Frontend
cd frontend
npm start
# App runs on http://localhost:3000
```

#### Option 2: Docker Compose

```bash
# Start all services
docker-compose up -d

# Verify containers
docker-compose ps

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Database Setup

```bash
# Backend automatically initializes MongoDB on startup
# Seed optional data (if available)
cd Backend
npm run seed
```

---

## 🔐 Environment Variables

Create `Backend/.env` with the following:

```bash
# 🔗 Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/edureach
MONGODB_LOCAL=mongodb://localhost:27017/edureach

# 🔑 Authentication
JWT_SECRET=your_super_secret_jwt_key_min_32_chars_long
JWT_EXPIRY=7d

# 🤖 AI Services
GEMINI_API_KEY=your_google_gemini_api_key
OPENAI_API_KEY=your_openai_api_key
LLM_MODEL=gemini-pro  # or gpt-4

# 🔍 Vector Database
PINECONE_API_KEY=your_pinecone_api_key
PINECONE_INDEX=edureach-knowledge
PINECONE_ENVIRONMENT=us-east-1

# 💾 Caching
REDIS_URL=redis://localhost:6379

# 📧 Email (Optional)
EMAIL_SERVICE=gmail
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password

# 🌐 Frontend
VITE_API_BASE_URL=http://localhost:3001/api
VITE_SOCKET_URL=http://localhost:3001

# 🚀 Deployment
NODE_ENV=development  # production for deployment
PORT=3001
```

---

## 🐳 Docker & Kubernetes

### Docker Compose (Local Development)

```bash
# Build & start all services
docker-compose up -d --build

# View running containers
docker-compose ps

# Access services
# Frontend: http://localhost:3000
# Backend:  http://localhost:3001
# MongoDB:  localhost:27017

# Clean up
docker-compose down -v
```

### Docker Build Individual Services

```bash
# Build frontend
docker build -f Frontend/Dockerfile -t edureach-frontend:latest ./frontend

# Build backend
docker build -f Backend/Dockerfile -t edureach-backend:latest ./Backend

# Run containers
docker run -p 3000:3000 edureach-frontend:latest
docker run -p 3001:3001 --env-file Backend/.env edureach-backend:latest
```

### Kubernetes Deployment

```bash
# Create namespace
kubectl create namespace edureach

# Apply ConfigMaps & Secrets
kubectl apply -f kubernetes/configmap.yaml -n edureach
kubectl apply -f kubernetes/secret.yaml -n edureach

# Deploy services
kubectl apply -f kubernetes/ -n edureach

# Check deployment status
kubectl rollout status deployment/backend -n edureach

# Port forward to access
kubectl port-forward svc/frontend 3000:3000 -n edureach
kubectl port-forward svc/backend 3001:3001 -n edureach

# View logs
kubectl logs -f deployment/backend -n edureach
```

---

## 📡 API Endpoints

### Authentication Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/register` | Register new user |
| `POST` | `/api/auth/login` | Login user |
| `POST` | `/api/auth/logout` | Logout user |
| `GET` | `/api/auth/profile` | Get user profile (Protected) |
| `PUT` | `/api/auth/profile` | Update user profile (Protected) |

**Example Request:**
```bash
curl -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "student@college.com",
    "password": "securepass123"
  }'
```

### Chatbot Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/chat/query` | Send query to AI agent |
| `GET` | `/api/chat/history` | Get conversation history (Protected) |
| `DELETE` | `/api/chat/history/:id` | Delete conversation (Protected) |
| `POST` | `/api/chat/feedback` | Submit feedback on response (Protected) |

**Example Request:**
```bash
curl -X POST http://localhost:3001/api/chat/query \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "query": "What are the admission deadlines?",
    "stream": true
  }'
```

### Voice Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/voice/tts` | Convert text to speech |
| `POST` | `/api/voice/stt` | Convert speech to text |
| `WS` | `/api/voice/stream` | WebSocket for real-time audio |

### Admin Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/admin/upload-document` | Upload PDF to knowledge base (Admin Only) |
| `GET` | `/api/admin/documents` | List all documents (Admin Only) |
| `DELETE` | `/api/admin/documents/:id` | Delete document (Admin Only) |
| `POST` | `/api/admin/reindex` | Reindex knowledge base (Admin Only) |
| `GET` | `/api/admin/analytics` | View analytics dashboard (Admin Only) |

**Example Request:**
```bash
curl -X POST http://localhost:3001/api/admin/upload-document \
  -H "Authorization: Bearer ADMIN_JWT_TOKEN" \
  -F "file=@admission_policy.pdf" \
  -F "category=Admission"
```

---

## ⚡ Performance & Scalability

### Optimization Strategies

**1. Redis Caching**
```javascript
// Cache frequently accessed queries (15-min TTL)
const cachedResult = await redis.get(`query:${queryHash}`);
```

**2. Vector Search Optimization**
- Hybrid search: keyword + semantic similarity
- Query batching for bulk operations
- Indexed vector dimensions: 1536 (optimal for Pinecone)

**3. Kubernetes Horizontal Pod Autoscaling**
```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: backend-hpa
spec:
  scaleTargetRef:
    kind: Deployment
    name: backend
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        averageUtilization: 70
```

**4. Nginx Load Balancing**
- Round-robin distribution
- Health checks every 5 seconds
- Connection pooling to backend

**5. Async Processing**
- Queue long-running RAG operations
- Event-driven architecture for notifications
- Worker threads for embedding generation

**6. Database Optimization**
- Indexed MongoDB queries (email, userId)
- Pagination for large result sets
- Aggregate pipeline optimization

---

## 🔒 Security Features

### Authentication & Authorization

✅ **JWT Tokens**
- Signed with HS256 algorithm
- 7-day expiration + refresh tokens
- Secure HttpOnly cookie storage

✅ **Protected Routes**
```javascript
router.get('/profile', authenticateToken, getUserProfile);
```

✅ **Role-Based Access Control (RBAC)**
- `student` - Read access to knowledge base
- `admin` - Full CRUD on documents & users

### Network Security

✅ **Rate Limiting**
```javascript
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit per IP
});
```

✅ **HTTPS/TLS Encryption**
- SSL certificates via Let's Encrypt
- 256-bit AES encryption for sensitive data

✅ **Environment Variable Protection**
- Never commit `.env` files
- Use `.env.example` as template
- Secrets managed via CI/CD platform

✅ **API Key Security**
- Gemini & OpenAI keys never exposed to frontend
- All calls proxied through backend
- Regular key rotation schedule

✅ **Input Validation**
```javascript
const { error, value } = schema.validate(req.body);
if (error) throw new ValidationError(error);
```

---

## 🚀 Future Enhancements

| Feature | Timeline | Impact |
|---------|----------|--------|
| 🌍 **Multilingual AI Counselor** | Q3 2026 | Global reach + 50+ languages |
| 💬 **WhatsApp Integration** | Q3 2026 | Direct messaging channel |
| 🎓 **AI Admission Predictor** | Q4 2026 | Predict acceptance probability |
| 🏆 **AI Scholarship Advisor** | Q4 2026 | Personalized scholarship matching |
| 📝 **Autonomous Application Assistant** | Q1 2027 | Auto-fill forms & recommendations |
| 🎤 **Voice Cloning** | Q1 2027 | Custom counselor voices |
| 📊 **Advanced Analytics Dashboard** | Q2 2027 | Institutional insights & trends |
| 🔄 **Integration Marketplace** | Q2 2027 | Connect with external college systems |

---

## 👨‍💻 Author

**Ankit Kandwal**

- 🎯 **Role**: Full Stack Developer | AI Engineer | Innovation Builder
- 📧 **Email**: ankit@edureach.ai
- 🔗 **LinkedIn**: [linkedin.com/in/anitkkandwal](#)
- 🐙 **GitHub**: [github.com/anitkkandwal](#)
- 🌐 **Portfolio**: [ankit-kandwal.vercel.app](#)

> Building the future of education through intelligent, autonomous AI systems.

---

## 📜 License

This project is licensed under the **MIT License** - see [LICENSE](LICENSE) file for details.

Permissions:
- ✅ Commercial use
- ✅ Modification
- ✅ Distribution
- ✅ Private use

Conditions:
- 📝 License & copyright notice required

---

## 🤝 Contributing

We welcome contributions from developers, researchers, and educators! Here's how to get involved:

### Development Setup

```bash
# Fork the repository
git clone https://github.com/your-username/edureach.git

# Create feature branch
git checkout -b feat/amazing-feature

# Make changes & commit
git commit -m "feat: add amazing feature"

# Push to branch
git push origin feat/amazing-feature

# Open Pull Request
```

### Contribution Guidelines

1. **Code Style**: Follow ESLint configuration + Prettier formatting
2. **Commits**: Use conventional commits (feat, fix, docs, refactor)
3. **Testing**: Ensure 80%+ test coverage
4. **Documentation**: Update README & API docs
5. **PR Reviews**: At least 2 approvals required

### Areas for Contribution

- 🐛 **Bug Fixes**: Report & fix issues
- ✨ **New Features**: Implement roadmap items
- 📚 **Documentation**: Improve guides & examples
- 🧪 **Testing**: Expand test coverage
- 🎨 **UI/UX**: Design improvements
- 🚀 **Performance**: Optimization opportunities

---

## 📞 Support & Community

| Resource | Link |
|----------|------|
| 📖 **Documentation** | [docs.edureach.ai](#) |
| 💬 **Discord Community** | [discord.gg/edureach](#) |
| 🐛 **Issue Tracker** | [github.com/edureach/issues](#) |
| 💡 **Discussions** | [github.com/edureach/discussions](#) |
| 📧 **Email Support** | support@edureach.ai |

---

<div align="center">

### ⭐ Found EduReach Helpful?

**Star this repository** to support the project!

[![Stars](https://img.shields.io/github/stars/edureach/edureach-ai?style=social)](https://github.com/edureach/edureach-ai)
[![Forks](https://img.shields.io/github/forks/edureach/edureach-ai?style=social)](https://github.com/edureach/edureach-ai)
[![Twitter Follow](https://img.shields.io/twitter/follow/EduReachAI?style=social)](https://twitter.com/EduReachAI)

**Built with ❤️ by the EduReach Team**

*Transforming College Education Through Autonomous AI*

</div>
