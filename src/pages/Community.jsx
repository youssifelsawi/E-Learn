// pages/Community.js
import React from 'react';
import PostCard from '../components/PostCard';
import DiscussionSideBar from '../components/DiscussionSideBar';

export default function Community({ posts = {}, dispatch = () => {}, state = {} }) {

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Community</h2>
        <p className="text-gray-600">Connect with fellow learners and instructors</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {state.posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        <DiscussionSideBar />
      </div>
    </div>
  );
}