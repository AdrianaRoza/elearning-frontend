import Reac from "react"

function Navbar(){
    return(
        <nav className="px-6 py-4 flex items-center justify-between test-blue max-w-6xl mx-auto">
            <div className="text-2xl font-bold">Eteck.</div>
            <div className="hidden md:flex gap-6">
                <a href="#courses" className="hover:underline">Courses</a>
                <a href="#popular" className="hover:underline">Popular</a>
                <a href="#about" className="hover:underline">About</a>
            </div>
            <div className="flex items-center gap-3">
                <button className="px-4 py-2 rounded-md border">Sign In</button>
                <button className="px-4 py-2 rounded-md bg-white text-purple-700">Start Free</button>
            </div>

        </nav>
    )
}
export default Navbar