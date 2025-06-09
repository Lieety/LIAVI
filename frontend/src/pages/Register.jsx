import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      alert("Error de registre: " + error.message);
    }
  };

  return (
    <form onSubmit={handleRegister} className="p-4 max-w-sm mx-auto space-y-3">
      <h2 className="text-xl font-semibold">Crea un compte</h2>
      <input
        className="border p-2 w-full"
        placeholder="Correu electrònic"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="border p-2 w-full"
        placeholder="Contrasenya"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="bg-green-600 text-white p-2 rounded w-full">
        Registrar-se
      </button>
    </form>
  );
}
