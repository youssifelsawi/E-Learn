// components/LessonSidebar.js
import React from "react";
import { CheckCircle, Circle } from "lucide-react";
import { Link } from "react-router-dom";

export default function LessonSidebar({ course, dispatch, currentLesson }) {
  return (
    <div className="w-80 bg-white border-l flex flex-col">
      <div className="p-4 border-b">
        <h2 className="font-semibold">{course.title}</h2>
        <p className="text-sm text-gray-600">{course.instructor}</p>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <h3 className="font-medium mb-3">Course Content</h3>
          <div className="space-y-1">
            {course.curriculum.map((lesson) => (
            <div
              key={lesson.id}
              onClick={() => dispatch({ type: 'SET_CURRENT_LESSON', payload: lesson })}
              className={`p-3 rounded cursor-pointer hover:bg-gray-50 ${
                currentLesson?.id === lesson.id ? 'bg-blue-50 border-l-4 border-blue-500' : ''
              }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {lesson.completed ? (
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    ) : (
                      <Circle className="h-4 w-4 text-gray-300" />
                    )}
                    <span className="text-sm font-medium">{lesson.title}</span>
                  </div>
                  <span className="text-xs text-gray-500">
                    {lesson.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 border-t">
        <button
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 mb-2 cursor-pointer"
          onClick={() =>
            dispatch({ type: "TOGGLE_LESSON_COMPLETION", payload: currentLesson.id })
          }
        >
          {currentLesson?.completed ? "Mark as Incomplete" : "Mark as Complete"}
        </button>
        <Link to='/resources'>
        <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 cursor-pointer">
          Download Resources
        </button>
        </Link>
      </div>
    </div>
  );
}
