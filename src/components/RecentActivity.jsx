// components/RecentActivity.js
import React from 'react';

export default function RecentActivity() {
  const activities = [
    { action: 'Completed', item: 'React Hooks lesson', time: '2 hours ago' },
    { action: 'Started', item: 'Advanced JavaScript course', time: '1 day ago' },
    { action: 'Earned', item: 'Quick Learner badge', time: '3 days ago' },
    { action: 'Posted', item: 'Question in React forum', time: '5 days ago' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
      <div className="space-y-3">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-center justify-between py-2">
            <div>
              <p className="text-sm">
                <span className="font-medium">{activity.action}</span> {activity.item}
              </p>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}