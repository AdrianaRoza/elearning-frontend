import React,{ useEffect, useState } from "react"
import Hero from "../components/Hero"
import CourseList from "../components/CourseList"
import SearchBar from "../components/SearchBar"
import Footer from "../components/Footer"
import { fetchCourses } from "../services/api"
import Benefits from "../components/Benefits"
import BecomeInstructor from "../components/BecomeInstructor"
import Testimonials from "../components/Testimonials"



export default function Home() {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    fetchCourses().then(data => setCourses(data))
  }, [])

  return (
    <>
      <Hero />
      <SearchBar/>
      <Benefits/>
      <CourseList courses={courses} />
      <BecomeInstructor/>
      <Testimonials/>
      <Footer />  
    </>
  )
}