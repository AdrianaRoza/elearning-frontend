import React from "react"

import CourseCard from "./CourseCard"

export default function CourseList({courses = []}){
    return(
        <section id="popular" className="max-w-6xl mx-auto px-6 py-8">
            <h2 className="text-2xl font-bold mb-6">Cursos Populares</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {courses.map((c) => (
                    <CourseCard key={c.id} course={c} />
                ))}
            </div>
        </section>
    )
}