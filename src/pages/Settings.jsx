// pages/Settings.js
import React from 'react';
import AccountSettings from '../components/AccountSettings';
import NotificationSettings from '../components/NotificationSettings';
import LearningPreferences from '../components/LearningPreferences';
import DangerZone from '../components/DangerZone';

export default function Settings({ state, dispatch }) {
  return (
    <div className="p-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Settings</h2>
        
        <div className="space-y-6">
          <AccountSettings user={state.user} dispatch={dispatch} />
          <NotificationSettings />
          <LearningPreferences />
          <DangerZone />
          
          <div className="flex justify-end space-x-4">
            <button className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400">
              Cancel
            </button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}