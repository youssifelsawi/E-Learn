// components/DiscussionSidebar.js
import React from 'react';

export default function DiscussionSidebar() {
  const activeDiscussions = [
    'React vs Vue: Which to learn first?',
    'Best practices for state management',
    'JavaScript interview preparation tips'
  ];

  const studyGroups = [
    'React Study Group',
    'JavaScript Fundamentals',
    'UI/UX Design Circle'
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="font-semibold mb-4">Active Discussions</h3>
        <div className="space-y-3">
          {activeDiscussions.map((topic, index) => (
            <div key={index} className="p-3 hover:bg-gray-50 rounded cursor-pointer">
              <p className="text-sm font-medium mb-1">{topic}</p>
              <p className="text-xs text-gray-500">24 replies</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="font-semibold mb-4">Study Groups</h3>
        <div className="space-y-3">
          {studyGroups.map((group, index) => (
            <div key={index} className="p-3 hover:bg-gray-50 rounded cursor-pointer">
              <p className="text-sm font-medium mb-1">{group}</p>
              <p className="text-xs text-gray-500">12 members</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}