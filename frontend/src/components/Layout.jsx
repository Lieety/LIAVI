import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col bg-gray-50 text-gray-900'>
      <header className='bg-white shadow-md px-6 py-4 flex justify-between items-center'>
        <Link to='/' className='text-2xl font-bold text-blue-600'>Liavi</Link>
        <nav className='space-x-4'>
          <Link to='/dashboard' className='hover:underline'>Escriptori</Link>
          <Link to='/flashcards' className='hover:underline'>Flashcards</Link>
          <Link to='/resums' className='hover:underline'>Resums</Link>
          <Link to='/perfil' className='hover:underline'>Perfil</Link>
          <Link to='/login' className='hover:text-blue-700'>Inicia sessió</Link>
        </nav>
      </header>
      <main className='flex-1 p-6'>
        {children}
      </main>
      <footer className='bg-white shadow-inner px-6 py-4 text-center text-sm text-gray-500'>
        © 2025 Liavi. Fet amb 💙 per estudiants.
      </footer>
    </div>
  );
};

export default Layout;
