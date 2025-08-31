import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const { username, email, password } = await request.json();

    // Validació bàsica
    if (!username || !email || !password) {
      return new Response(
        JSON.stringify({ error: "Falten camps" }),
        { status: 400 }
      );
    }

    // Comprovar si l'usuari ja existeix
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return new Response(
        JSON.stringify({ error: "Aquest correu ja existeix!" }),
        { status: 400 }
      );
    }

    // Hash de la contrasenya
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear usuari
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    return new Response(
      JSON.stringify({
        message: "Usuari registrat correctament!",
        user: { id: newUser.id, email: newUser.email, username: newUser.username },
      }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500 }
    );
  }
}
