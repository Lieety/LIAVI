import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600">LIAVI</Link>
      <div className="space-x-4">
        <Link to="/login" className="text-blue-600 hover:underline">Iniciar Sessió</Link>
        <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Registra't</Link>
      </div>
    </nav>
  );
}
