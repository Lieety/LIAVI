import Link from "next/link"
import type { Metadata } from 'next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'

export const metadata: Metadata = {
  title: 'Esquemes',
}

export default function Esquemes() {
  return (
    <div className="p-20 h-full">
      <section>
        <h1 className=" text-5xl font-bold mb-4">Esquemes</h1>
        <article className="flex flex-row gap-2 m-2">
          <select className="block py-2.5 px-2 w-full text-sm text-gray-800 rounded-md bg-transparent border-2 p-2 border-b-2 border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-black" name="Curso" id="curso">
            <option selected value="" disabled>Curso</option>
            <option value="1r Batx">1r Batx</option>
            <option value="1r Batx">2n Batx</option>
            <option value="1r Batx">4t ESO</option>
          </select>
          <select className="block py-2.5 px-2 w-full text-sm text-gray-800 bg-transparent rounded-md border-2 border-b-2 border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-black" name="Asignatura" id="asignatura">
            <option selected value="" disabled>Asignatura</option>
            <option value="Historia">Historia</option>
            <option value="Mates">Mates</option>
            <option value="Castellano">Castellano</option>
          </select>
          <button className=" w-1/6 bg-accent text-white p-2 rounded-md">
            Aplicar Filtros
          </button>
        </article>
      </section>
      <section className="grid grid-flow-row grid-cols-4 gap-4 row-span-2 h-full">
        <article className="bg-cards rounded-2xl relative flex flex-col justify-center items-center p-2 h-full">
          <img src="/esquema.jpg" alt="" className="w-full h-full object-cover " />
          <div className="absolute h-1/2 w-full z-50 bg-cards bottom-0 rounded-b-2xl p-2 flex flex-col justify-center items-start gap-3">
            <h2 className=" font-semibold text-lg">
              Esquema 1
            </h2>
            <p>
              1r Batx &gt; Historia
            </p>
          </div>
        </article>
        <article className="bg-cards rounded-2xl relative flex flex-col justify-center items-center p-2 h-full">
          <img src="/esquema.jpg" alt="" className="w-full h-full object-cover " />
          <div className="absolute h-1/2 w-full z-50 bg-cards bottom-0 rounded-b-2xl p-2 flex flex-col justify-center items-start gap-3">
            <h2 className=" font-semibold text-lg">
              Esquema 1
            </h2>
            <p>
              1r Batx &gt; Historia
            </p>
          </div>
        </article>
        <article className="bg-cards rounded-2xl relative flex flex-col justify-center items-center p-2 h-full">
          <img src="/esquema.jpg" alt="" className="w-full h-full object-cover " />
          <div className="absolute h-1/2 w-full z-50 bg-cards bottom-0 rounded-b-2xl p-2 flex flex-col justify-center items-start gap-3">
            <h2 className=" font-semibold text-lg">
              Esquema 1
            </h2>
            <p>
              1r Batx &gt; Historia
            </p>
          </div>
        </article>
        <article className="bg-cards rounded-2xl relative flex flex-col justify-center items-center p-2 h-full">
          <img src="/esquema.jpg" alt="" className="w-full h-full object-cover " />
          <div className="absolute h-1/2 w-full z-50 bg-cards bottom-0 rounded-b-2xl p-2 flex flex-col justify-center items-start gap-3">
            <h2 className=" font-semibold text-lg">
              Esquema 1
            </h2>
            <p>
              1r Batx &gt; Historia
            </p>
          </div>
        </article>
        <article className="bg-cards rounded-2xl relative flex flex-col justify-center items-center p-2 h-full">
          <img src="/esquema.jpg" alt="" className="w-full h-full object-cover " />
          <div className="absolute h-1/2 w-full z-50 bg-cards bottom-0 rounded-b-2xl p-2 flex flex-col justify-center items-start gap-3">
            <h2 className=" font-semibold text-lg">
              Esquema 1
            </h2>
            <p>
              1r Batx &gt; Historia
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}
