import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-neutral-900 text-white shadow-md">
      <Link to="/" className="text-2xl font-bold tracking-wide">LIAVI</Link>
      <div className="flex gap-4 items-center">
        {user ? (
          <>
            <Link to="/perfil" className="hover:text-blue-400">{user.email}</Link>
            <button onClick={logout} className="bg-red-600 px-3 py-1 rounded hover:bg-red-700">Sortir</button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-blue-400">Inicia sessi�</Link>
            <Link to="/register" className="hover:text-blue-400">Registra't</Link>
          </>
        )}
      </div>
    </nav>
  );
}
