import React, { useState } from "react"

export default function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isAdmin, setIsAdmin] = useState(false)

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
        is_admin: isAdmin
      })
    })
      .then(res => res.json())
      .then(data => {
        alert("Conta criada com sucesso!")
        setName("")
        setEmail("")
        setPassword("")
        setIsAdmin(false)
      })
      .catch(err => console.log("Erro ao criar usuário:", err))
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-xl p-10 rounded-xl w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-pink-700 mb-8">
          Criar Conta
        </h1>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            className="border p-3 w-full rounded"
            placeholder="Seu nome"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />

          <input
            type="email"
            className="border p-3 w-full rounded"
            placeholder="Seu email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            className="border p-3 w-full rounded"
            placeholder="Senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          {/* Checkbox para admin */}
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={isAdmin}
              onChange={e => setIsAdmin(e.target.checked)}
            />
            <span className="text-gray-700 font-medium">
              Sou administrador
            </span>
          </label>

          {/* Botão */}
          <button className="bg-pink-600 text-white w-full py-3 rounded-lg font-semibold hover:bg-pink-700 transition">
            Criar Conta
          </button>

        </form>
      </div>
    </div>
  )
}
