import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Flashcards from "./pages/Flashcards";
import Resums from "./pages/Resums";
import Esquemes from "./pages/Esquemes";  // Si no el tens, crea un arxiu buit de moment
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flashcards" element={<Flashcards />} />
        <Route path="/resums" element={<Resums />} />
        <Route path="/esquemes" element={<Esquemes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </Router>
  );
}

export default App;
