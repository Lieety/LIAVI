import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes.js';
import flashcardRoutes from './routes/flashcardRoutes.js';

const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/flashcards', flashcardRoutes);
app.get('/', (req, res) => res.send('🔥 Laevi backend'));

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(process.env.PORT || 5000, () => console.log("Servidor actiu")))
  .catch(err => console.error(err));
