// /pages/api/auth/login.js
import prisma from '../../../utils/prisma'; 
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  const { email, password } = req.body;

  try {
    // 1. Buscar l'usuari
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials (Email not found).' });
    }

    // 2. Comparar la contrasenya
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return res.status(401).json({ message: 'Invalid credentials (Password mismatch).' });
    }

    // 3. Generar el JWT
    const token = jwt.sign(
      { userId: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET, // Defineix-la al teu .env
      { expiresIn: '1d' } // El token caduca en 1 dia
    );

    // 4. Retornar el token (el frontend l'emmagatzemarà)
    res.status(200).json({ token, user: { id: user.id, email: user.email, name: user.name, role: user.role } });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}