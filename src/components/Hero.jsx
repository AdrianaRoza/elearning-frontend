import React from "react"

function Hero(){
    return(
        <header className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-extrabold text-green-900">
                    Desenvolva suas habilidades de uma maneira nova e única.
                </h1>
                <p className="mt-4 text-gray-700">
                  Junte-se a milhares de alunos e aprenda com os melhores instrutores.
                </p>
                <div className="mt-6 flex gap-3">
                  <input
                    className="px-4 py-2 rounded-l-md w-full max-w-md"
                    placeholder="Procure cursos..."
                  />
                    <button className="px-4 py-2 rounded-r-md bg-white text-purple-700">
                      Procurar
                    </button>
                </div>
            </div>

            <div className="flex-1 flex justify-center">
              <div className="w-64 h-64 bg-white rounded-full shadow-lg flex items-center justify-center">
                <span className="text-purple-600 font-bold">Imagem do herói</span>
              </div>
            </div>
        </header>
    )

}
export default Hero