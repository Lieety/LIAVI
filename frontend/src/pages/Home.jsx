import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
    <h1 className="text-4xl font-bold mb-4">Benvingut a Laevi</h1>
    <p className="mb-6">La teva eina d'estudi amb IA per crear flashcards i apunts automàtics.</p>
    <Link to="/login" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
      Inicia Sessió
    </Link>
  </div>
);

export default Home;
