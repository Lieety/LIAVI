import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="h-full flex flex-col justify-center items-center text-gray-800">
      <h1 className="text-5xl font-extrabold  mb-6">Benvingut a <span className="text-blue-600">L<span className=' text-6xl'>IA</span>VI</span></h1>
      <p className="text-lg text-center max-w-xl mb-8 text-gray-600">La teva eina per generar apunts, resums, flashcards i esquemes a l'instant. Amb la potència de la IA, estudiar mai havia estat tan eficient.</p>
      <div className="flex gap-4">
        <Link to="/login" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-medium text-white transition-colors">Inicia sessió</Link>
        <Link to="/register" className="border border-blue-400 px-6 py-3 rounded-xl font-medium hover:bg-blue-50 transition-colors">Registra't</Link>
      </div>
    </div>
  );
}

