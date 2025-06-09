import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Flashcards from "./pages/Flashcards";
import Resums from "./pages/Resums";
import Esquemes from "./pages/Esquemes";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flashcards" element={<Flashcards />} />
          <Route path="/resums" element={<Resums />} />
          <Route path="/esquemes" element={<Esquemes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
