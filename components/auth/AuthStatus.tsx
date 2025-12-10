// /components/Auth/AuthStatus.tsx
'use client'; // <-- Només aquesta peça és client

import { useAuth } from '../../context/AuthContext'; // Ajusta la ruta

export default function AuthStatus() {
  const { isLoggedIn, user, logout } = useAuth(); 

  if (!isLoggedIn) {
    return (
      <a href="/login">Iniciar Sessió</a>
    );
  }

  return (
    <>
      <span>Hola, {user.name || user.email}</span>
      <button onClick={logout}>Tancar Sessió</button>
    </>
  );
}