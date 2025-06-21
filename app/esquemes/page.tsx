import Link from "next/link"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Esquemes',
}

export default function Esquemes() {
  return (
    <div className="p-20 h-full">
      <h1 className=" text-5xl font-bold mb-4">Esquemes</h1>
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
