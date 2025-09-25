import React from "react";
import { Link } from "react-router-dom";
import { User } from "lucide-react";

export default function ProfileHeader({ user }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-4 sm:p-6 mb-6">
      <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-6">
        {/* Avatar + Edit Icon */}
        <div className="relative self-center sm:self-start">
          <img
            src={`${import.meta.env.BASE_URL}assets/${user.avatar}`}
            alt={user.name}
            className="w-28 h-28 sm:w-24 sm:h-24 rounded-full object-cover"
          />
          <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
            <User className="h-4 w-4" />
          </button>
        </div>

        {/* User info */}
        <div className="flex-1 mt-4 sm:mt-0">
          <h2 className="text-xl sm:text-2xl font-bold mb-1 truncate">{user.name}</h2>
          <p className="text-gray-600 mb-2 truncate">{user.email}</p>
          <p className="text-gray-700 mb-4 text-sm sm:text-base">
            Passionate learner with a focus on web development and design. Always eager to explore new technologies and share knowledge with the community.
          </p>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 mb-4 text-center">
            <div>
              <p className="text-xl sm:text-2xl font-bold text-blue-600">{user.completedCourses}</p>
              <p className="text-xs sm:text-sm text-gray-600">Courses Completed</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-green-600">{user.certificates}</p>
              <p className="text-xs sm:text-sm text-gray-600">Certificates</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-purple-600">{user.totalHours}</p>
              <p className="text-xs sm:text-sm text-gray-600">Learning Hours</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-orange-600">4.8</p>
              <p className="text-xs sm:text-sm text-gray-600">Avg. Rating</p>
            </div>
          </div>

          {/* Edit Profile Button */}
          <Link
            to="/edit-profile"
            className="block w-full sm:w-auto text-center bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Edit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
