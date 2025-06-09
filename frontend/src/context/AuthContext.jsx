import React, { createContext, useContext, useState, useEffect } from 'react';

// Opcional: exporta el context si el uses directament
export const AuthContext = createContext(null);

// Exporta el hook personalitzat
export function useAuth() {
  return useContext(AuthContext);
}

// Opcional: si tens un AuthProvider
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Inicia la sessió de l'usuari (ex. amb token o API)
    // i després ”setUser” i ”setLoading(false)”
  }, []);

  const login = (data) => { /* ... */ };
  const logout = () => { setUser(null); /* ... */ };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
