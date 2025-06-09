import React, { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Aquí pots simular login automàtic o verificar token
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  if (loading) return <div style={{ padding: '2rem', textAlign: 'center' }}>Carregant...</div>;

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
