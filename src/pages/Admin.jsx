import React, { useState, useEffect } from "react"

export default function Admin() {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")
  const [courses, setCourses] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/courses")
      .then(res => res.json())
      .then(data => setCourses(data))
      .catch(err => console.log("Erro ao buscar cursos:", err))
  }, [])

  
  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:8000/courses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        author,
        price: parseFloat(price),
        image
      })
    })
      .then(res => res.json())
      .then(data => {
        alert("Curso criado com sucesso!")
        setCourses([...courses, data])

        // Limpar campos
        setTitle("")
        setAuthor("")
        setPrice("")
        setImage("")
      })
      .catch(err => console.log("Erro ao criar curso:", err))
  }

  // Deletar curso
  function deleteCourse(id) {
    fetch(`http://localhost:8000/courses/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setCourses(courses.filter(c => c.id !== id));
      })
      .catch(err => console.log("Erro ao deletar curso:", err))
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      {/* Título */}
      <h1 className="text-4xl font-bold text-center text-pink-700 mb-10">
        Painel Administrativo 
      </h1>

      {/* Painel */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

        {/* Formulário */}
        <div className="bg-white shadow-xl p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            Cadastrar novo curso
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              className="border p-3 w-full rounded"
              placeholder="Título do curso"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
            />

            <input
              className="border p-3 w-full rounded"
              placeholder="Autor"
              value={author}
              onChange={e => setAuthor(e.target.value)}
              required
            />

            <input
              type="number"
              className="border p-3 w-full rounded"
              placeholder="Preço"
              value={price}
              onChange={e => setPrice(e.target.value)}
              required
            />

            <input
              className="border p-3 w-full rounded"
              placeholder="URL da imagem"
              value={image}
              onChange={e => setImage(e.target.value)}
              required
            />

            <button
              className="bg-pink-600 text-white font-semibold px-6 py-3 rounded-lg w-full hover:bg-pink-700 transition"
            >
              Salvar Curso
            </button>
          </form>
        </div>

        {/* Lista de cursos */}
        <div className="bg-white shadow-xl p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            Cursos cadastrados
          </h2>

          <div className="space-y-4">
            {courses.map(course => (
              <div
                key={course.id}
                className="flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow"
              >
                <div>
                  <p className="font-semibold">{course.title}</p>
                  <p className="text-gray-500 text-sm">{course.author}</p>
                </div>

                <button
                  onClick={() => deleteCourse(course.id)}
                  className="text-red-600 font-semibold hover:text-red-800"
                >
                  Excluir
                </button>
              </div>
            ))}

            {courses.length === 0 && (
              <p className="text-gray-500">Nenhum curso cadastrado ainda.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
