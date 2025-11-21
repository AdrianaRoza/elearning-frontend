import React from "react"

export default function SearchBar(){
    return(
        <section className="w-full max-w-4xl mx-auto mt-10 px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
                Pesquisar cursos
            </h2>

            <div className="flex items-center bg-white shadow-md rounded-full overflow-hidden p-2">
                <input 
                    type="text" 
                    placeholder="Pesquisar curso, categoria..."
                    className="flex-1 px-4 py-2 text-gray-700 outline-none" 
                />

                <button className="px-6 py-2 bg-pink-500 text-white rounded-full font-semibold hover:bg-pink-700 transition">
                    Procurar
                </button>
            </div>
        </section>
    )
}