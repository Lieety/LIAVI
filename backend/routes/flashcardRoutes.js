import express from 'express';
import { generateFlashcard } from '../controllers/flashcardController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/generate', authMiddleware, generateFlashcard);

export default router;
