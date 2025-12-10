// /pages/api/auth/register.js
import prisma from '../../../utils/prisma'; 
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password, name } = req.body;

  try {
    // Validació bàsica de la contrasenya
    if (!email || !password || password.length < 6) {
        return res.status(400).json({ message: 'Invalid input: Email and password (min 6 chars) are required.' });
    }

    // 1. Hashejar la contrasenya
    const hashedPassword = await bcrypt.hash(password, 10);

    // 2. Crear l'usuari a la base de dades
    const user = await prisma.user.create({
      data: {
        email: email.toLowerCase(), // Bona pràctica
        name,
        password: hashedPassword,
      },
    });


    res.status(201).json({ 
        message: 'User registered successfully', 
        userId: user.id, 
        email: user.email 
    });

  } catch (error) {
    if (error.code === 'P2002') {
      // Codi d'error de Prisma per a "unique constraint failed"
      return res.status(409).json({ message: 'Email already exists.' });
    }
    console.error("Error during registration:", error);
    // Retornem un error 500 amb un missatge clar, no amb un stack trace
    res.status(500).json({ message: 'Internal server error during database operation.' });

  } 
}