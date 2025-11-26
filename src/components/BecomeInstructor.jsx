import React from "react"

export default function BecomeInstructor(){
  return(
    <section className="w-full max-w-6xl mx-auto px-6 mt-24 grid md:grid-cols-2 gap-12 items-center">

      
      {/* IMAGEM */}
        <div className="">
          <img 
            src="https://images.pexels.com/photos/3747140/pexels-photo-3747140.jpeg" 
            alt="Instructor" 
            className="w-full rounded-3xl shadow-lg object-cover"
          />
        </div>

        {/* TEXTO */}

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Se você for um profissional certificado
          </h2>

          <p className="text-gray-700 mb-6">
            Junte-se à nossa plataforma global e ensine milhares de alunos em todo o mundo.
            Compartilhe seu conhecimento, construa seu público e aumente sua renda fazendo o que você ama.
          </p>

          <button className="bg-pink-300 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 transition">
           Torne-se um instrutor
          </button>
        </div>

    </section>
  )
}