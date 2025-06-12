import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <section section className='w-full sticky flex justify-center mt-7 z-50'>
      <nav className="bg-white  py-4 px-12 flex justify-between items-center w-4/5 rounded-xl">
        <div>
          <Link to="/" className="text-xl font-bold text-black">LIAVI</Link>
        </div>
        <div className='flex flex-row justify-between w-1/3 text-shadow-amber-500'>
          <Link to="/Flashcards">Flashcards</Link>
          <Link to="/Resums">Resums</Link>
          <Link to="/Esquemes">Esquemes</Link>
        </div>
        <div className="space-x-4">
          <Link to="/login" className="text-accent-2 hover:underline">Iniciar Sessió</Link>
          <Link to="/register" className="bg-accent text-white px-4 py-2 rounded hover:bg-accent-2">Registra't</Link>
        </div>
      </nav>
    </section>
  );
}
