import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Courses from "./pages/Courses"
import Popular from "./pages/Popular"
import About from "./pages/About"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Admin from "./pages/Admin"

import Navbar from "./components/Navbar"

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cursos" element={<Courses />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  )
}
