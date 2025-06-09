import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { app } from '../firebase';

const Register = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/perfil');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-4">Crea un compte</h1>
      <form onSubmit={handleRegister} className="flex flex-col gap-4 w-full max-w-sm">
        <input className="p-2 border rounded" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input className="p-2 border rounded" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contrasenya" />
        <button className="bg-green-500 text-white py-2 rounded hover:bg-green-600" type="submit">Registrar-se</button>
      </form>
    </div>
  );
};

export default Register;
