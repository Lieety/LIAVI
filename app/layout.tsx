// /app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import ClientLayoutProvider from "@/components/Wrappers/ClientLayoutProvider"; 

const geistSans = Geist({
   variable: "--font-geist-sans",
   subsets: ["latin"],
});

// ... (la definició de geistMono és la mateixa)
const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
   subsets: ["latin"],
});


export const metadata: Metadata = {
// ...
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
     <html lang="en">
       <body
         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
       >
        
        <ClientLayoutProvider> 
          {children}
        </ClientLayoutProvider>
       </body>
     </html>
   );
}