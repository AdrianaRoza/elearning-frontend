import Reac from "react"

function Navbar(){
    return(
        <nav className="px-6 py-4 flex items-center justify-between test-blue max-w-6xl mx-auto">
            <div className="text-2xl font-bold text-gray-900">Learnify</div>
            <div className="hidden md:flex gap-6">
                <a href="#courses" className="hover:underline">Cursos</a>
                <a href="#popular" className="hover:underline">Popular</a>
                <a href="#about" className="hover:underline">Sobre</a>
            </div>
            <div className="flex items-center gap-3">
                <button className="px-4 py-2 rounded-md border">Entrar</button>
                <button className="px-4 py-2 rounded-md bg-white text-pink-700">Comece grátis</button>
            </div>

        </nav>
    )
}
export default Navbar