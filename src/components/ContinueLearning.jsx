import React from 'react';
import { Link } from 'react-router-dom';

export default function ContinueLearning({ courses }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <h3 className="text-lg font-semibold mb-4">Continue Learning</h3>
      <div className="space-y-4">
        {courses.map(course => (
          <div key={course.id} className="flex items-center space-x-4">
            <img src={course.thumbnail} alt={course.title} className="w-16 h-12 rounded" />
            <div className="flex-1">
              <h4 className="font-medium">{course.title}</h4>
              <div className="flex items-center mt-1">
                <div className="flex-1 bg-gray-200 rounded-full h-2 mr-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600">{course.progress}%</span>
              </div>
            </div>
            <Link
              to='/lesson'
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Continue
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}