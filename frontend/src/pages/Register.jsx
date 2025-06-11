export default function Register() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Registra’t</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Nom complet" className="w-full border p-2 rounded" />
        <input type="email" placeholder="Correu electrònic" className="w-full border p-2 rounded" />
        <input type="password" placeholder="Contrasenya" className="w-full border p-2 rounded" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700">Registrar</button>
      </form>
    </div>
  );
}
