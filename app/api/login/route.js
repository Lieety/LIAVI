import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return new Response(
        JSON.stringify({ error: 'Falten camps' }),
        { status: 400 }
      );
    }

    // Cerca usuari
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return new Response(
        JSON.stringify({ error: 'Usuari no trobat' }),
        { status: 400 }
      );
    }

    // Comprova contrasenya
    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      return new Response(
        JSON.stringify({ error: 'Contrasenya incorrecta' }),
        { status: 401 }
      );
    }

    // Login correcte
    return new Response(
      JSON.stringify({ message: 'Login correcte!' }),
      { status: 200 }
    );

  } catch (error) {
    console.error('Error login:', error);
    return new Response(
      JSON.stringify({ error: 'Error servidor' }),
      { status: 500 }
    );
  }
}
