// components/EnrolledCourseCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Circle } from 'lucide-react';

export default function EnrolledCourseCard({ course }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <div className="flex items-start space-x-4">
        <img src={course.thumbnail} alt={course.title} className="w-24 h-18 object-cover rounded" />
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
          <p className="text-gray-600 text-sm mb-2">by {course.instructor}</p>
          
          <div className="mb-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-gray-600">Progress</span>
              <span className="text-sm font-medium">{course.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full" 
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
          </div>
          
          <Link
            to="/lesson"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            {course.progress > 0 ? 'Continue Learning' : 'Start Course'}
          </Link>
        </div>
      </div>
      
      <div className="mt-6">
        <h4 className="font-medium mb-3">Course Content</h4>
        <div className="space-y-2 max-h-40 overflow-y-auto">
          {course.curriculum.map(lesson => (
            <div key={lesson.id} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
              <div className="flex items-center space-x-3">
                {lesson.completed ? (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                ) : (
                  <Circle className="h-5 w-5 text-gray-300" />
                )}
                <span className={`text-sm ${lesson.completed ? 'line-through text-gray-500' : ''}`}>
                  {lesson.title}
                </span>
              </div>
              <span className="text-xs text-gray-500">{lesson.duration}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}