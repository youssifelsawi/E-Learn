// components/RecentAchievements.js
import React from 'react';
import { Award, Trophy, Star } from 'lucide-react';

export default function RecentAchievements() {
  const achievements = [
    {
      icon: Award,
      title: 'React Expert',
      description: 'Completed React Fundamentals',
      color: 'text-yellow-500'
    },
    {
      icon: Trophy,
      title: 'Quick Learner',
      description: 'Completed 3 courses this month',
      color: 'text-gold-500'
    },
    {
      icon: Star,
      title: 'High Scorer',
      description: 'Scored 95% on JavaScript quiz',
      color: 'text-blue-500'
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <h3 className="text-lg font-semibold mb-4">Recent Achievements</h3>
      <div className="space-y-4">
        {achievements.map((achievement, index) => (
          <div key={index} className="flex items-center space-x-3">
            <achievement.icon className={`h-8 w-8 ${achievement.color}`} />
            <div>
              <p className="font-medium">{achievement.title}</p>
              <p className="text-sm text-gray-600">{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}