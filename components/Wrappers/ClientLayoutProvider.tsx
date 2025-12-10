'use client'; 

import { AuthProvider, useAuth } from '@/context/AuthContext'; // Hauràs d'importar useAuth aquí també
import Navbar from '@/components/NavBar';
import React from 'react';

interface ClientLayoutProviderProps {
  children: React.ReactNode;
}

function LayoutContent({ children }: { children: React.ReactNode }) {
    const { loading } = useAuth(); 
    if (loading) {
  
        return (
            <div className='flex flex-col bg-primary text-gray-900 min-h-screen'>
                <Navbar /> {}
                <div className='flex-grow p-10 text-center'>Carregant sessió...</div>
                {}
            </div>
        );
    }
    
    return (
        <div className='flex flex-col bg-primary text-gray-900 min-h-screen'>
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <footer className='bg-white shadow-inner px-6 py-4 text-center text-sm text-gray-500 w-full'>
                © 2025 Liavi. Fet amb 💙 per estudiants.
            </footer>
        </div>
    );
}

export default function ClientLayoutProvider({ children }: ClientLayoutProviderProps) {
  return (
    <AuthProvider>
      {}
      <LayoutContent>{children}</LayoutContent>
    </AuthProvider>
  );
}