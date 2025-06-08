import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import authRoutes from './routes/authRoutes.js';
import flashcardRoutes from './routes/flashcardRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Rutes
app.use('/api/auth', authRoutes);
app.use('/api/flashcards', flashcardRoutes);

app.get('/', (req, res) => {
  res.send('API Laevi is running');
});

export default app;
