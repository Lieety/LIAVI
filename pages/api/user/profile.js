// /pages/api/user/profile.js
import { protect } from '../../../utils/authMiddleware'; // Ajusta la ruta si cal
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const handler = async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // La informació de l'usuari (ID, rol) prové del JWT verificat
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.userId },
      select: { id: true, email: true, name: true, role: true }, 
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    res.status(200).json({ 
      user: user
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error.' });
  }
};

export default protect(handler); // 👈 Apliquem el middleware!