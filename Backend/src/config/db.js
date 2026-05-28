import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {

    try {

        const mongoUri = process.env.MONGODB_URI;

        if(!mongoUri){
            throw new Error('MongoDB connection string missing');
        }

        await mongoose.connect(mongoUri);

        console.log('MongoDB Connected');

    } catch(error){

        console.error('MongoDB connection failed:', error.message);

        process.exit(1);
    }
}

export default connectDB;