import React,{ useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import CourseList from "../components/CourseList"
import Footer from "../components/Footer"
import { fetchCourses } from "../services/api"



export default function Home() {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    fetchCourses().then(data => setCourses(data))
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <CourseList courses={courses} />
      <Footer />  
    </>
  )
}