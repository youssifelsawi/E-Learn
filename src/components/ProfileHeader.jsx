// components/ProfileHeader.js
import React from 'react';
import { Link } from 'react-router-dom';
import { User } from 'lucide-react';

export default function ProfileHeader({ user }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
      <div className="flex items-start space-x-6">
        <div className="relative">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-24 h-24 rounded-full"
          />
          <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
            <User className="h-4 w-4" />
          </button>
        </div>
        
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
          <p className="text-gray-600 mb-4">{user.email}</p>
          <p className="text-gray-700 mb-4">
            Passionate learner with a focus on web development and design. 
            Always eager to explore new technologies and share knowledge with the community.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">{user.completedCourses}</p>
              <p className="text-sm text-gray-600">Courses Completed</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">{user.certificates}</p>
              <p className="text-sm text-gray-600">Certificates</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-600">{user.totalHours}</p>
              <p className="text-sm text-gray-600">Learning Hours</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-orange-600">4.8</p>
              <p className="text-sm text-gray-600">Avg. Rating</p>
            </div>
          </div>
          
          <Link to='/edit-profile' className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Edit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}