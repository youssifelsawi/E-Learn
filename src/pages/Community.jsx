// pages/Community.js
import React from 'react';
import PostCard from '../components/PostCard';
import DiscussionSidebar from '../components/DiscussionSidebar';

export default function Community({ state, dispatch }) {
  const posts = [
    {
      id: 1,
      author: 'John Smith',
      time: '2 hours ago',
      content: 'Just completed the React Hooks section! The explanation of useEffect was particularly helpful. Anyone else working through this course?',
      likes: 12,
      comments: 5
    },
    {
      id: 2,
      author: 'Emily Johnson',
      time: '5 hours ago',
      content: 'Looking for study partners for the JavaScript advanced course. Anyone interested in forming a study group?',
      likes: 8,
      comments: 12
    },
    {
      id: 3,
      author: 'Mike Chen',
      time: '1 day ago',
      content: 'Great explanation on async/await in the latest lesson. The practical examples really helped me understand the concept better.',
      likes: 15,
      comments: 3
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Community</h2>
        <p className="text-gray-600">Connect with fellow learners and instructors</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        <DiscussionSidebar />
      </div>
    </div>
  );
}