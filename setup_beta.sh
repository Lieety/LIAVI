#!/bin/bash
echo "Configurant versió beta de Laevi..."

# BACKEND
mkdir -p backend/{controllers,models,routes,services,middleware}

cat > backend/index.js <<'EOL'
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
EOL

cat > backend/routes/authRoutes.js <<'EOL'
import express from 'express';
const router = express.Router();
router.post('/register', (req, res) => res.send("Register"));
router.post('/login', (req, res) => res.send("Login"));
export default router;
EOL

cat > backend/routes/flashcardRoutes.js <<'EOL'
import express from 'express';
const router = express.Router();
router.post('/generate', (req, res) => {
    res.json({ flashcard: "Flashcard generada (fake data)" });
});
export default router;
EOL

# FRONTEND
npx create-vite@latest frontend --template react
cd frontend
npm install
cd ..

echo "node_modules/
frontend/node_modules/
.env" > .gitignore

echo "✅ Estructura creada!"
