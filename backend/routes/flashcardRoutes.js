import express from 'express';
const router = express.Router();
router.post('/generate', (req, res) => {
    res.json({ flashcard: "Flashcard generada (fake data)" });
});
export default router;
