import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6">
      <h1 className="text-3xl font-bold">Learnify</h1>

      <div className="flex gap-6 text-lg font-medium">
        <Link to="/">Home</Link>
        <Link to="/cursos">Cursos</Link>
        <Link to="/popular">Popular</Link>
        <Link to="/sobre">Sobre</Link>
      </div>

      <div className="flex gap-4">
        <Link to="/login" className="px-4 py-2 border rounded-lg">
          Entrar
        </Link>

        <Link
          to="/registro"
          className="px-4 py-2 rounded-lg bg-pink-600 text-white"
        >
          Comece grátis
        </Link>
      </div>
    </nav>
  )
}
