// pages/MyLearning.js
import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';
import EnrolledCourseCard from '../components/EnrolledCourseCard';

export default function MyLearning({ state, dispatch }) {
  const enrolledCourses = state.courses.filter(course => course.enrolled);

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">My Learning</h2>
        <p className="text-gray-600">Track your progress and continue learning</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {enrolledCourses.map(course => (
          <EnrolledCourseCard 
            key={course.id} 
            course={course} 
            dispatch={dispatch}
          />
        ))}
      </div>
    </div>
  );
}