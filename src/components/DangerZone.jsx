// components/DangerZone.js
import React from 'react';

export default function DangerZone() {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h3 className="text-lg font-semibold mb-4 text-red-600">Danger Zone</h3>
      <div className="space-y-4">
        <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700">
          Delete Account
        </button>
        <p className="text-sm text-gray-600">
          Once you delete your account, there is no going back. Please be certain.
        </p>
      </div>
    </div>
  );
}