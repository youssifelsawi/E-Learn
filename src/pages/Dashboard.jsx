// pages/Dashboard.js
import React from 'react';
import { 
  BookOpen, 
  Clock, 
  Trophy, 
  Award, 
  Star
} from 'lucide-react';
import StatsCard from '../components/StatsCard';
import ContinueLearning from '../components/ContinueLearning';
import RecentAchievements from '../components/RecentAchievements';
import HeroSection from '../components/HeroSection';

export default function Dashboard({ state, dispatch }) {
  const statsData = [
    {
      title: 'Completed Courses',
      value: state.user.completedCourses,
      icon: Trophy,
      color: 'text-yellow-500'
    },
    {
      title: 'Current Courses',
      value: state.user.currentCourses,
      icon: BookOpen,
      color: 'text-blue-500'
    },
    {
      title: 'Certificates',
      value: state.user.certificates,
      icon: Award,
      color: 'text-green-500'
    },
    {
      title: 'Total Hours',
      value: state.user.totalHours,
      icon: Clock,
      color: 'text-purple-500'
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <HeroSection />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ContinueLearning 
          courses={state.courses.filter(course => course.enrolled && course.progress > 0)}
          dispatch={dispatch}
        />
        <RecentAchievements />
      </div>
    </div>
  );
}