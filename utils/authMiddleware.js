// /utils/authMiddleware.js
import jwt from 'jsonwebtoken';

export const protect = (handler) => async (req, res) => {
  const authHeader = req.headers.authorization;
  let token;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({ message: 'Not authorized, token missing.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Afegim les dades de l'usuari (userId, role, etc.)
    return handler(req, res);
  } catch (error) {
    return res.status(401).json({ message: 'Not authorized, token failed.' });
  }
};