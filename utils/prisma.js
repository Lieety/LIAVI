// /utils/prisma.js
import { PrismaClient } from '@prisma/client'

// Si estem en desenvolupament i la instància global no existeix, la creem.
// Això evita múltiples instàncies de PrismaClient amb el hot reload de Next.js.
const prisma = global.prisma || new PrismaClient({
  log: ['query'],
})

if (process.env.NODE_ENV !== 'production') global.prisma = prisma

export default prisma