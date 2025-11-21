import React from "react"

export default function CourseCard({ course }){
    return(
        <div className="bg-white rounded-xl shadow p-4 flex flex-col">
            <div className="h-40 bg-gray-100 rounded-md mb-4 overflow-hidden rounded-md">
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg">{course.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{course.author}</p>
            <div className="mt-4 flex items-center justify-between">
              <div className="text-xl font-bold">{course.price}</div>
              <button className="px-3 py-1 bg-pink-500 text-white rounded-md">Matricular</button>
            </div>
        </div>
    )
}