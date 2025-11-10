import React from "react"

export default function CourseCard({ course }){
    return(
        <div className="bg-white rounded-xl shadow p-4 flex flex-col">
            <div className="h-40 bg-gray-100 rounded-md mb-4 flex items-center justify-center">
              {/* If real image: <img src={course.image} alt={course.title} /> */}
              <span className="text-gray-400">Image</span>
            </div>
            <h3 className="font-semibold text-lg">{course.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{course.author}</p>
            <div className="mt-4 flex items-center justify-between">
              <div className="text-xl font-bold">{course.price}</div>
              <button className="px-3 py-1 bg-purple-600 text-white rounded-md">Matricular</button>
            </div>
        </div>
    )
}