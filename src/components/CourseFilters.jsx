// components/CourseFilters.js
import React from 'react';

export default function CourseFilters({ categories, selectedCategory, dispatch }) {
  return (
    <div className="flex items-center space-x-4">
      <select
        value={selectedCategory}
        onChange={(e) => dispatch({ type: 'SET_CATEGORY', payload: e.target.value })}
        className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
      >
        {categories.map(category => (
          <option key={category} value={category}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}