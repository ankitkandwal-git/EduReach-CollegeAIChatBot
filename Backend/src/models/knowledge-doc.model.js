import mongoose, { Schema } from 'mongoose';

const KnowledgeDocSchema = new Schema(
    {
        title: { type: String, required: true },
        content: { type: String, required: true },
        embeddings: { type: [Number], default: [] },
        metadata: { type: Schema.Types.Mixed, default: {} },
    },
    { timestamps: true }
);

export default mongoose.model('KnowledgeDoc', KnowledgeDocSchema);