import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="w-fit h-fit flex flex-row gap-6 justify-center items-center text-white bg-cards p-12 absolute m-auto left-0 right-0 bottom-0 top-0 rounded-3xl">
      <section>
        <h1 className="text-5xl font-extrabold  mb-6">Benvingut a <span className="text-primary">L<span className=' text-6xl'>IA</span>VI</span></h1>
        <p className="text-3xl text-justify max-w-xl mb-8">La teva eina per generar apunts, resums, flashcards i esquemes a l'instant. Amb la potència de la IA, estudiar mai havia estat tan eficient.</p>
        <div className="flex gap-4">
          <Link to="/login" className="bg-accent hover:bg-blue-700 px-6 py-3 rounded-xl font-medium text-white transition-colors">Inicia sessió</Link>
          <Link to="/register" className="border border-accent px-6 py-3 rounded-xl font-medium hover:bg-blue-50 transition-colors">Registra't</Link>
        </div>
      </section>
      <img src="/personaje.png" alt="personaje2" className='-mb-12' />
    </div>
  );
}

