// /pages/api/user/profile.js
import { protect } from '../../../utils/authMiddleware';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Aquesta és la funció de controlador que volem protegir
const handler = async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // 1. Si s'arriba aquí, el token és vàlid i req.user conté la informació del JWT.
  // 2. Utilitzem req.user.userId per buscar les dades actualitzades de l'usuari a la BD
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.userId },
      select: { id: true, email: true, name: true, role: true }, // No retornem la contrasenya!
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    res.status(200).json({ 
      user: user,
      message: `Welcome ${user.name || user.email}! Your role is ${user.role}.`
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

// Apliquem la funció 'protect' al nostre 'handler'
export default protect(handler);