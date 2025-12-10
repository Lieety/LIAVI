// /utils/authMiddleware.js
import jwt from 'jsonwebtoken';

/**
 * Funció que verifica el token de la capçalera de la petició.
 * @param {object} handler - La funció principal de Next.js API Route (req, res) => {...}
 */
export const protect = (handler) => async (req, res) => {
  // 1. Extreure el token de la capçalera
  const authHeader = req.headers.authorization;
  let token;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.split(' ')[1];
  }

  if (!token) {
    // 401 Unauthorized: El token no existeix
    return res.status(401).json({ message: 'Not authorized, token missing.' });
  }

  try {
    // 2. Verificar el token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // 3. Afegir les dades de l'usuari (userId, role) a l'objecte de petició (req)
    req.user = decoded; 
    
    // 4. Continuar amb la funció principal (el "handler" original)
    return handler(req, res);
  } catch (error) {
    console.error('Token verification failed:', error.message);
    // 401 Unauthorized: El token no és vàlid o ha caducat
    return res.status(401).json({ message: 'Not authorized, token failed.' });
  }
};