// components/NotificationSettings.js
import React from 'react';

export default function NotificationSettings() {
  const notificationOptions = [
    { id: 'email', label: 'Email notifications', checked: true },
    { id: 'push', label: 'Push notifications', checked: true },
    { id: 'weekly', label: 'Weekly progress summary', checked: false },
    { id: 'marketing', label: 'Marketing emails', checked: false }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h3 className="text-lg font-semibold mb-4">Notifications</h3>
      <div className="space-y-4">
        {notificationOptions.map((setting) => (
          <div key={setting.id} className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">
              {setting.label}
            </label>
            <input
              type="checkbox"
              defaultChecked={setting.checked}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}