export default function Login() {
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Inicia sessió</h2>
      <form className="bg-white shadow rounded p-6 space-y-4">
        <input type="email" placeholder="Correu electrònic" className="w-full p-2 border rounded" />
        <input type="password" placeholder="Contrasenya" className="w-full p-2 border rounded" />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">Entrar</button>
      </form>
    </div>
  );
}