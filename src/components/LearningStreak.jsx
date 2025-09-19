// components/LearningStreak.js
import React from 'react';

export default function LearningStreak() {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h3 className="text-lg font-semibold mb-4">Learning Streak</h3>
      <div className="text-center">
        <div className="text-4xl font-bold text-orange-500 mb-2">15</div>
        <p className="text-gray-600">Days in a row</p>
      </div>
      <div className="mt-4 grid grid-cols-7 gap-1">
        {Array.from({ length: 21 }).map((_, i) => (
          <div
            key={i}
            className={`w-6 h-6 rounded ${
              i < 15 ? 'bg-orange-200' : 'bg-gray-100'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}