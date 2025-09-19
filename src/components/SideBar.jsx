// components/Sidebar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  BookOpen,
  User,
  Settings,
  Play,
  X,
  Award,
  TrendingUp,
  Users
} from 'lucide-react';

export default function Sidebar({ state, dispatch }) {
  const location = useLocation();

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: TrendingUp },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'my-learning', label: 'My Learning', icon: Play },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'community', label: 'Community', icon: Users },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${state.sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
      <div className="flex items-center justify-between h-16 px-6 bg-blue-600 text-white">
        <h1 className="text-xl font-bold">E-learn</h1>
        <button
          onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR' })}
          className="lg:hidden"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

            <nav className="mt-8">
        {navigationItems.map((item) => {
          const path = item.id === "dashboard" ? "/" : `/${item.id}`;
          const active = location.pathname === path;

          return (
            <Link
              to={path}
              key={item.id}
              className={`w-full flex items-center px-6 py-3 text-left hover:bg-gray-50 ${
                active
                  ? "bg-blue-50 text-blue-600 border-r-2 border-blue-600"
                  : "text-gray-700"
              }`}
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}