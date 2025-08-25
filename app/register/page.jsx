"use client";
a
import React, { useState } from 'react';

export default function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Les contrasenyes no coincideixen');
      return;
    }

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || 'Error desconegut al registrar');
      } else {
        alert('Usuari registrat correctament!');
        // pots redirigir a /login si vols
        // router.push('/login')
      }
    } catch (err) {
      console.error('Error:', err);
      alert('Error del servidor');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Crea un compte</h2>
        <input
          type="text"
          name="username"
          placeholder="Nom d'usuari"
          value={formData.username}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded mb-4"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Correu electrònic"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded mb-4"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contrasenya"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded mb-4"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirma la contrasenya"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded mb-6"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
        >
          Registra't
        </button>
      </form>
    </div>
  );
}
