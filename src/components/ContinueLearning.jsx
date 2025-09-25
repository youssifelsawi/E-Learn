import React from "react";
import { Link } from "react-router-dom";

export default function ContinueLearning({ courses }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <h3 className="text-lg font-semibold mb-4">Continue Learning</h3>
      <div className="space-y-4">
        {courses.map((course) => (
          <div
            key={course.id}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          >
            {/* Left section: image + info */}
            <div className="flex items-center gap-4 flex-1">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-24 h-24 sm:w-20 sm:h-20 rounded object-contain bg-gray-100 p-1"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-medium truncate">{course.title}</h4>
                <div className="flex items-center mt-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-3 mr-2">
                    <div
                      className="bg-blue-600 h-3 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 shrink-0">
                    {course.progress}%
                  </span>
                </div>
              </div>
            </div>

            {/* Right section: button */}
            <div className="sm:flex-shrink-0">
              <Link
                to="/lesson"
                className="block text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full sm:w-auto"
              >
                Continue
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
