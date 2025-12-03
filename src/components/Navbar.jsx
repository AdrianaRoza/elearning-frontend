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

        <Link
          to="/registro"
          className="px-4 py-2 border rounded-lg"
        >
          Comece grátis
        </Link>

        <a
          href="/admin"
          className="bg-pink-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-pink-700 transition"
        >
          Admin
        </a>
      </div>
    </nav>
  )
}
