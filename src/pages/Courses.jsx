// pages/Courses.js
import React from 'react';
import CourseCard from '../components/CourseCard';
import CourseFilters from '../components/CourseFilters';

export default function Courses({ state, dispatch }) {
  const categories = ['all', 'programming', 'design', 'data science', 'business'];
  
  const filteredCourses = state.courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(state.searchQuery.toLowerCase());
    const matchesCategory = state.selectedCategory === 'all' || 
                          course.category.toLowerCase() === state.selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h2 className="text-2xl font-bold mb-4 md:mb-0">All Courses</h2>
        <CourseFilters 
          categories={categories}
          selectedCategory={state.selectedCategory}
          dispatch={dispatch}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map(course => (
          <CourseCard 
            key={course.id} 
            course={course} 
            dispatch={dispatch}
            state={state}
          />
        ))}
      </div>
    </div>
  );
}