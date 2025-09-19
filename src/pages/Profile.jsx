// pages/Profile.js
import React from 'react';
import { User } from 'lucide-react';
import ProfileHeader from '../components/ProfileHeader';
import LearningStreak from '../components/LearningStreak';
import RecentActivity from '../components/RecentActivity';
import SkillsSection from '../components/SkillsSection';

export default function Profile({ state, dispatch }) {
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <ProfileHeader user={state.user} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <LearningStreak />
          <RecentActivity />
        </div>

        <SkillsSection />
      </div>
    </div>
  );
}