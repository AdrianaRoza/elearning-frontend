import React from "react"

export default function Testimonials(){
  return(
    <section className="max-w-6xl mx-auto px-6 mt-24">

    {/* Título */}
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
      Feedback dos alunos
    </h2>

    {/* Grid dos depoimentos */}
    <div className="grid md:grid-cols-3 gap-10">
      
      {/* Card 1 */}
      <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col gap-4">
        <p className="text-gray-600 leading-relaxed">
          “A plataforma é muito intuitiva e os cursos são incríveis! Estou aprendendo rápido.”
        </p>

        <div className="flex items-center gap-4">
          <img 
            src="https://randomuser.me/api/portraits/women/45.jpg" 
            alt="Estudante" 
            className="w-12 h-12 rounded-full object-cover" 
          />
          <div>
            <strong className="text-gray-900 text-sm">Denise Vilas Boas</strong>
            <p className="text-gray-500 text-xs">Estudante de Backend</p>
          </div>
        </div>
      </div>

      {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col gap-4">
          <p className="text-gray-600 leading-relaxed">
            “Os professores são excelentes e o conteúdo super atualizado!”
          </p>
          <div className="flex items-center gap-4">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Estudante"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <strong className="text-gray-900 text-sm">Jeferson Padilha</strong>
              <p className="text-gray-500 text-xs">Desenvolvedor Full-stack</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col gap-4">
          <p className="text-gray-600 leading-relaxed">
            “Recomendo demais! Minha produtividade aumentou muito com os cursos.”
          </p>
          <div className="flex items-center gap-4">
            <img
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="Student"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <strong className="text-gray-900 text-sm">Beatriz Carvalho</strong>
              <p className="text-gray-500 text-xs">Desenvolvedor Frontend</p>
            </div>
          </div>
        </div>

    </div>

    </section>
  )
}