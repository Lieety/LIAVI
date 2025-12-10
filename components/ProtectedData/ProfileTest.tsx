// crida a la ruta protegida i mostra els resultats

'use client'; 

import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { fetchAuth } from '@/utils/api'; 

export default function ProfileTest() {
  const { user, isLoggedIn } = useAuth();
  const [profileData, setProfileData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFetchProfile = async () => {
    if (!isLoggedIn) {
      setError("No has iniciat sessió. No es pot fer la crida autenticada.");
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      // 1. Utilitzem la nostra funció fetchAuth
      const response = await fetchAuth('/api/user/profile');
      
      if (!response.ok) {
        // El backend retorna 401 si el token és invàlid o 404/500 si hi ha un altre error
        const errorData = await response.json();
        setError(`Error: ${errorData.message || response.statusText}`);
        setProfileData(null);
        return;
      }

      const data = await response.json();
      setProfileData(data.user);

    } catch (err) {
      setError("Error de connexió amb el servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-bold mb-4">Prova de Ruta Protegida</h2>
      
      <p className="mb-4">
        Estat: {isLoggedIn ? 
          <span className="text-green-600">Autenticat com a **{user?.email}**</span> : 
          <span className="text-red-600">No autenticat</span>}
      </p>

      <button
        onClick={handleFetchProfile}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:bg-gray-400 transition"
      >
        {loading ? 'Carregant...' : 'Fer Crida a /api/user/profile'}
      </button>

      {error && <p className="mt-4 text-red-500 font-medium">❌ {error}</p>}

      {profileData && (
        <div className="mt-4 p-4 bg-gray-50 border rounded">
          <h3 className="font-semibold mb-2">Dades rebudes (Només si el JWT és vàlid):</h3>
          <pre className="whitespace-pre-wrap text-sm">{JSON.stringify(profileData, null, 2)}</pre>
          <p className="text-sm mt-2 text-green-700">✅ La ruta protegida funciona correctament!</p>
        </div>
      )}
    </div>
  );
}