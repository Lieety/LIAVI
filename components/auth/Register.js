// /pages/api/auth/register.js
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
// No cal jsonwebtoken aquí, ja que només estem REGISTRANT, no fent login.

// Inicialitzem el client de Prisma
const prisma = new PrismaClient();

export default async function handler(req, res) {
  // Assegura't que el mètode sigui POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email, password, name } = req.body;

  // Validació bàsica de les dades rebudes
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }
  
  if (password.length < 6) {
    return res.status(400).json({ message: 'Password must be at least 6 characters long.' });
  }


  try {
    // 1. Hashejar la contrasenya
    // 10 és el cost recomanat per al hashing (més alt = més segur, però més lent)
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // 2. Crear l'usuari a la base de dades utilitzant Prisma
    const user = await prisma.user.create({
      data: {
        email: email.toLowerCase(), // Bona pràctica: guardar el correu en minúscules
        name,
        password: hashedPassword,
        // El camp 'role' es posa per defecte a 'FREE' segons el teu schema.prisma
      },
      // Seleccionem els camps que volem retornar (MAI la contrasenya!)
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
      },
    });

    // 3. Resposta exitosa
    // Normalment, després del registre es fa el login automàtic.
    // Però aquí només retornem l'èxit i l'ID d'usuari.
    res.status(201).json({ 
      message: 'User registered successfully. Please login.', 
      user: user 
    });

  } catch (error) {
    // Gestió d'errors de Prisma (P2002 = Unique Constraint Failed, l'email ja existeix)
    if (error.code === 'P2002') {
      return res.status(409).json({ message: 'The email address is already in use.' });
    }
    
    console.error("Registration error:", error);
    res.status(500).json({ message: 'Internal server error during registration.' });

  } finally {
    // Assegurar la desconnexió de la base de dades al final de la petició
    await prisma.$disconnect();
  }
}