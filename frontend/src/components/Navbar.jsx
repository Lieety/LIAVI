// Estructura inicial del projecte Liavi (React + TailwindCSS)
// Inclou: Navbar, Home i rutes bàsiques (Flashcards, Resums, Esquemes)

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
//import { useState } from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <div className="text-2xl font-bold text-blue-600">
        <Link to="/">Liavi</Link>
      </div>
      <div className="flex space-x-6 text-orange-600 font-medium">
        <Link to="/flashcards">Flashcards</Link>
        <Link to="/resums">Resums</Link>
        <Link to="/esquemes">Esquemes</Link>
      </div>
      <div>
        <Link to="/login">
          <Button>Iniciar sessió / Registre</Button>
        </Link>
      </div>
    </nav>
  );
};

const Home = () => {
  return (
    <div className="bg-yellow-50 min-h-screen px-6 py-12 text-slate-800">
      <h1 className="text-5xl font-bold mb-6 text-slate-900">Inici</h1>
      <p className="text-xl max-w-xl">
        Benvingut a <span className="text-purple-600 font-semibold">Liavi</span>, la teva eina d’estudi amb IA.
        <br />Crea flashcards, apunts i resums automàticament gràcies a la potència de GPT-4 Turbo.
      </p>
      <div className="mt-12">
        {/* Aquí podries posar una il·lustració més endavant */}
      </div>
    </div>
  );
};

const Flashcards = () => <div className="p-6">Flashcards (en construcció)</div>;
const Resums = () => <div className="p-6">Resums (en construcció)</div>;
const Esquemes = () => <div className="p-6">Esquemes (en construcció)</div>;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flashcards" element={<Flashcards />} />
        <Route path="/resums" element={<Resums />} />
        <Route path="/esquemes" element={<Esquemes />} />
      </Routes>
    </Router>
  );
}

export default App;
