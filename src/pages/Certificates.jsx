// pages/Certificates.js
import React from 'react';
import CertificateCard from '../components/CertificateCard';

export default function Certificates({ state, dispatch }) {
  const certificates = [
    { id: 1, title: 'React Fundamentals', date: 'Jan 15, 2024', score: '95%' },
    { id: 2, title: 'Advanced JavaScript', date: 'Dec 22, 2023', score: '92%' },
    { id: 3, title: 'UI/UX Design', date: 'Nov 18, 2023', score: '88%' },
    { id: 4, title: 'Python Basics', date: 'Oct 30, 2023', score: '96%' }
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">My Certificates</h2>
        <p className="text-gray-600">Your earned certificates and achievements</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map(certificate => (
          <CertificateCard key={certificate.id} certificate={certificate} />
        ))}
      </div>
    </div>
  );
}