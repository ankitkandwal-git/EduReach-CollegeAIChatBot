import app from '../app.js';
import connectDB from './config/db.js';
import { initializeKnowledgeBase } from './services/rag.services.js';
const port = process.env.PORT || 5000;

const start = async () =>{
    try{
        await connectDB();
        try {
            await initializeKnowledgeBase();
        } catch (kbError) {
            console.error('Knowledge base initialization failed, continuing without RAG:', kbError?.message || kbError);
        }

        app.listen(port,() =>{
            console.log(`Server is running on port ${port}`);
        });
    }catch(error){
        console.error("Failed to start server:", error);
    }
}

start();