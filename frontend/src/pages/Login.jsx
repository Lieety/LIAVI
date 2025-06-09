import { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isRegister) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">{isRegister ? 'Registre' : 'Iniciar sessió'}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Correu electrònic" className="w-full border p-2 rounded" />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Contrasenya" className="w-full border p-2 rounded" />
        <button className="w-full bg-blue-500 text-white py-2 rounded">
          {isRegister ? 'Registrar-se' : 'Iniciar sessió'}
        </button>
      </form>
      <p className="mt-4 text-sm">
        {isRegister ? 'Ja tens compte?' : 'No tens compte?'}{' '}
        <button onClick={() => setIsRegister(!isRegister)} className="text-blue-600 underline">
          {isRegister ? 'Inicia sessió' : 'Registra’t'}
        </button>
      </p>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}
