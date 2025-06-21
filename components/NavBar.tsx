import Link from "next/link"

export default function Navbar() {
  return (
    <section className='w-full sticky flex justify-center mt-7 z-50'>
      <nav className="bg-white  py-4 px-12 flex justify-between items-center w-4/5 rounded-xl">
        <div>
          <Link href="/" className="text-xl font-bold text-black">LIAVI</Link>
        </div>
        <div className='flex flex-row justify-between w-1/3 text-shadow-amber-500'>
          <Link href="/flashcards">Flashcards</Link>
          <Link href="/resums">Resums</Link>
          <Link href="/esquemes">Esquemes</Link>
        </div>
        <div className="space-x-4">
          <Link href="/login" className="text-accent-2 hover:underline">Iniciar Sessió</Link>
          <Link href="/register" className="bg-accent text-white px-4 py-2 rounded hover:bg-accent-2">Registra't</Link>
        </div>
      </nav>
    </section>
  );
}