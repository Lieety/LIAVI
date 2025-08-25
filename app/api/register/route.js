import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const { username, email, password } = await request.json();

if (!username || !email || !password) {
  return new Response
  (JSON.stringify({ error: 'Falten camps' }), { status: 400 });
}

await prisma.user.create({
  data: {
    username,
    email,
    password: hashedPassword,
  },
});


export async function POST(request) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return new Response(JSON.stringify({ error: 'Falten camps' }), { status: 400 });
  }

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return new Response(JSON.stringify({ error: 'Aquest correu ja existeix!' }), { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });

  return new Response(JSON.stringify({ message: 'Usuari registrat correctament!' }), { status: 201 });
}
