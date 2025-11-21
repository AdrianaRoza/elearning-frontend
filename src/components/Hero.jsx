import React from "react"
import PartnerLogos from "./PartnerLogos"

function Hero(){
    return(
        <header className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-6">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
                    Desenvolva suas habilidades de uma maneira nova e única.
                </h1>
                <p className="text-gray-700 text-lg">
                  Junte-se a milhares de alunos e aprenda com os melhores instrutores.
                </p>
                <div className="flex gap-4">
                  
                    <button className="px-6 py-3 bg-pink-500 text-white rounded-xl shadow hover:opacity-90 transition">
                        Comece agora
                    </button>


                    <button className="px-6 py-3 bg-white border border-gray-300 rounded-xl shadow hover:bg-gray-50 transition">
                      Contacte-nos
                    </button>
                </div>
<div className="flex gap-10 mt-4">
                  <div>
                    <p className="text-3xl font-extrabold text-pink-700">3.0k+</p>
                    <span className="text-pink-600">Alunos</span>
            </div>

            <div>
                    <p className="text-3xl font-extrabold text-pink-700">450+</p>
                <span className="text-pink-600">Cursos</span>
</div>
                </div>
              </div>

            <div className="relative flex justify-center">

            {/* Círculo de fundo */}
            <div className="w-72 h-72 md:w-80 md:h-80 bg-linear-to-b from-pink-100 to-pink-300 rounded-full flex items-center justify-center shadow-xl">
              {/* IMAGEM PRINCIPAL */}
              <img
                src="https://images.pexels.com/photos/5908728/pexels-photo-5908728.jpeg"
                alt="Student"
                className="w-60 h-60 md:w-64 md:h-64 object-cover rounded-full border-4 border-white shadow-lg"
              />
            </div>

            {/* Cartão Flutuante 1 */}
            <div className="absolute -top-4 right-0 bg-white rounded-xl shadow-lg px-4 py-2 flex items-center gap-2">
              <div className="w-10 h-10 bg-pink-300 rounded-md"></div>
              <span className="font-semibold text-gray-700 text-sm">Visual Design</span>
            </div>

            {/* Cartão Flutuante 2 */}
            <div className="absolute -bottom-4 left-2 bg-white rounded-xl shadow-lg px-4 py-2 flex items-center gap-2">
              <div className="w-10 h-10 bg-pink-200 rounded-md"></div>
              <span className="font-semibold text-gray-700 text-sm">Front-End</span>
            </div>
          </div>

          {/* Logotipos dos parceiros abaixo*/}
          <div className="md:col-span-2">
            <PartnerLogos />
            </div>
        </header>
    )

}
export default Hero