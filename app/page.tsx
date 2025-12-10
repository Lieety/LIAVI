import Link from "next/link"

export default function Home() {
  return (
    <div>
      <div className="w-fit h-fit flex flex-row gap-6 justify-center items-center text-#0C0E0F bg-cards p-12 absolute m-auto left-0 right-0 bottom-0 top-0 rounded-3xl">
      <section>
        <h1 className="text-5xl font-extrabold  mb-6">Benvingut a LIAVI</h1>
        <p className="text-3xl text-justify max-w-xl mb-8">La teva eina per generar apunts, resums, flashcards i esquemes a l'instant. Amb la potència de la IA, estudiar mai havia estat tan eficient.</p>
        <div className="flex gap-4">
          <Link href="" className="bg-accent hover:bg-blue-700 px-6 py-3 rounded-xl font-medium text-white transition-colors">Inicia sessió</Link>
          <Link href="" className="border border-accent px-6 py-3 rounded-xl font-medium hover:bg-blue-50 transition-colors">Registra't</Link>
        </div>
      </section>
      <img src="/personaje2.png" alt="personaje2" className='-mb-12' />
    </div>
    </div>
  );
}
