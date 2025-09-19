// components/CertificateCard.js
import React from 'react';
import { Award, Download, Share2 } from 'lucide-react';

export default function CertificateCard({ certificate }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 text-center">
      <Award className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
      <h3 className="text-lg font-semibold mb-2">{certificate.title}</h3>
      <p className="text-gray-600 text-sm mb-2">Completed on {certificate.date}</p>
      <p className="text-gray-600 text-sm mb-4">Score: {certificate.score}</p>
      <div className="flex space-x-2">
        <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Download className="h-4 w-4 inline mr-1" />
          Download
        </button>
        <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200">
          <Share2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}