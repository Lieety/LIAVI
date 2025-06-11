import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import Home from './pages/Home';
import Flashcards from './pages/Flashcards';
import Esquemes from "./pages/Esquemes"
import Resums from "./pages/Resums"
import Login from './pages/Login';
import Register from './pages/Register';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 text-gray-800">
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Flashcards" element={<Flashcards />} />
        <Route path="/Resums" element={<Resums />} />
        <Route path="/Esquemes" element={<Esquemes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      </Layout>
    </div>
  );
}
