// components/SkillsSection.js
import React from 'react';

export default function SkillsSection() {
  const skills = [
    'React', 'JavaScript', 'Node.js', 'Python', 'UI/UX Design',
    'Data Analysis', 'Machine Learning', 'CSS', 'HTML', 'MongoDB'
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 mt-6">
      <h3 className="text-lg font-semibold mb-4">Skills & Interests</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}