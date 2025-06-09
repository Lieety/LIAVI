export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black via-gray-900 to-indigo-900 text-white">
      <h1 className="text-5xl font-extrabold mb-6">Benvingut a <span className="text-indigo-400">LIAVI</span></h1>
      <p className="text-lg text-center max-w-xl mb-8">La teva eina per generar apunts, resums, flashcards i esquemes a l'instant. Amb la potència de la IA, estudiar mai havia estat tan eficient.</p>
      <div className="flex gap-4">
        <a href="/login" className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl font-medium">Inicia sessió</a>
        <a href="/register" className="border border-indigo-400 px-6 py-3 rounded-xl font-medium hover:bg-indigo-800">Registra't</a>
      </div>
    </div>
  );
}
