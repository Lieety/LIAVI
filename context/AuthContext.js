'use client'; // 👈 [1] IMPRESCINDIBLE: Marca com a Client Component

import { createContext, useContext, useState, useEffect } from 'react'; 
import { useRouter } from 'next/navigation';

const AuthContext = createContext({ 
    // Afegeix el camp 'loading' al valor per defecte
    user: null, token: null, isLoggedIn: false, login: async () => {}, logout: () => {}, loading: true 
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // Carregar l'estat des de localStorage al carregar l'aplicació
 useEffect(() => {
    // Aquesta funció només s'executa al client (on existeix localStorage)
    const storedToken = localStorage.getItem('authToken');
    const storedUser = localStorage.getItem('user');
    
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
    setLoading(false); // 👈 [2] Quan acabem de llegir, posem loading a false
  }, []);

  // 1. Funció de LOGIN
  const login = (newToken, userData) => {
    localStorage.setItem('authToken', newToken);
    localStorage.setItem('user', JSON.stringify(userData));
    setToken(newToken);
    setUser(userData);
    router.push('/'); // Redirigeix a la pàgina principal després del login
  };

  // 2. Funció de LOGOUT
  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
    router.push('/login'); // Redirigeix a la pàgina de login
  };

return (
    <AuthContext.Provider value={{ 
        user, 
        token, 
        loading, // 👈 [3] Passem l'estat
        // ... (login, logout, isLoggedIn)
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);