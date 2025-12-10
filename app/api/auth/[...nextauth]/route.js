// /app/api/auth/[...nextauth]/route.js (o .ts)


import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from '../../../../utils/prisma';
import bcrypt from 'bcrypt';


export const authOptions = {
    // Configuració de la Sessió
    session: {
        strategy: "jwt",
    },
    // Clau secreta des del teu .env
    secret: process.env.NEXTAUTH_SECRET,

    // 3. Proveïdors (Login amb Email/Password)
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials.email || !credentials.password) {
                    return null;
                }

                // A. Buscar l'usuari amb Prisma
                const user = await prisma.user.findUnique({
                    where: { email: credentials.email },
                });

                if (!user) {
                    return null; // Usuari no trobat
                }

                // B. Comparar la contrasenya amb el hash
                // ✅ Ús correcte de la funció 'compare' importada
                const isValid = await compare(credentials.password, user.password); 
                
                if (!isValid) {
                    return null; // Contrasenya incorrecta
                }

                // C. Si és vàlid, retornar l'objecte d'usuari (sense la contrasenya hash)
                return {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    // Pots afegir el rol aquí per tenir-lo a la sessió:
                    role: user.role, 
                };
            },
        }),
    ],
    // 4. (Opcional) Configuració de Callbacks per afegir el Rol al JWT
    callbacks: {
        async jwt({ token, user }) {
            // Afegeix el rol a l'objecte JWT després de l'autorització
            if (user) {
                token.role = user.role;
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            // Afegeix el rol a l'objecte de Sessió del client
            if (token) {
                session.user.role = token.role;
                session.user.id = token.id;
            }
            return session;
        },
    },
};

// 5. Gestor de Rutes (Route Handler) per a l'App Router
// ✅ Aquesta estructura és la correcta per a /app/api/auth/[...nextauth]/route.js
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };