import dotenv from 'dotenv';
import express from 'express';
import authRoutes from './src/routes/authroutes.js';
import cors from 'cors';
import connectDB from './src/config/db.js';
import chatRoutes from './src/routes/chat.routes.js';
dotenv.config();
connectDB();
const app = express();
const port = process.env.PORT || 5000; 
app.use(express.json());

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:5173'],
    credentials: true
}))
app.use('/auth', authRoutes);
app.get('/', (req, res) => {
    res.send('API is running');
})
app.use('/chat', chatRoutes);
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err && err.stack ? err.stack : err);
    res.status(err?.status || 500).json({
        success: false,
        message: err?.message || 'Server error',
        ...(process.env.NODE_ENV !== 'production' ? { stack: err?.stack } : {}),
    });
});

export default app;