import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function Navbar() {
  const { user } = useAuth();

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <nav className="flex justify-between items-center bg-gray-800 text-white px-6 py-3">
      <Link to="/" className="text-xl font-bold">Liavi</Link>

      <div className="space-x-4">
        <Link to="/flashcards">Flashcards</Link>
        <Link to="/resums">Resums</Link>
        <Link to="/esquemes">Esquemes</Link>
      </div>

      <div>
        {user ? (
          <>
            <span className="mr-2">{user.email}</span>
            <button onClick={handleLogout} className="text-sm underline">
              Tancar sessió
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="mr-2">Inicia sessió</Link>
            <Link to="/register">Registra't</Link>
          </>
        )}
      </div>
    </nav>
  );
}
