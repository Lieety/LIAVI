// /components/NavBar.tsx
'use client'; 

import { useAuth } from '../context/AuthContext';
import Link from 'next/link'; // Assegura't d'importar Link de Next.js

export default function Navbar() {
  const { isLoggedIn, user, logout } = useAuth(); 

  const AuthControls = () => {
    if (isLoggedIn) {
      return (
        // Estat: USUARI AUTENTICAT
        <div className="flex items-center space-x-4">
          <span className="text-black">Hola, **{user?.name || user?.email}**</span>
          <button 
            onClick={logout} 
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Tancar Sessió
          </button>
        </div>
      );
    } else {
      return (
        // Estat: USUARI NO AUTENTICAT (Mostrar botons de Login/Register)
        <div className="space-x-4">
          <Link href="/login" className="text-accent-2 hover:underline">
            Iniciar Sessió
          </Link>
          <Link href="/register" className="bg-accent text-white px-4 py-2 rounded hover:bg-accent-2 transition">
            Registra't
          </Link>
        </div>
      );
    }
  };


  return (
    <section className='w-full sticky flex justify-center mt-7 z-50'>
      <nav className="bg-white py-4 px-12 flex justify-between items-center w-4/5 rounded-xl shadow-lg">
        {/* LIAVI Logo/Link */}
        <div>
          <Link href="/" className="text-xl font-bold text-black">LIAVI</Link>
        </div>
        
        {/* Navegació Central */}
        <div className='flex flex-row justify-between w-1/2 text-black'>
          <Link href="/flashcards">Flashcards</Link>
          <Link href="/resums">Resums</Link>
          <Link href="/esquemes">Esquemes</Link>
        </div>
        
        {/* 🔑 Control d'Autenticació (Crida a la lògica condicional) */}
        <AuthControls />

      </nav>
    </section>
  );
}