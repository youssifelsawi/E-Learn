// components/PostCard.js
import React from 'react';
import { Heart, MessageSquare, Share2 } from 'lucide-react';

export default function PostCard({ post }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <div className="flex items-start space-x-4">
        <img src={post.avatar} alt="User" className="w-10 h-10 rounded-full" />
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="font-semibold">{post.author}</h3>
            <span className="text-sm text-gray-500">{post.time}</span>
          </div>
          <p className="text-gray-700 mb-4">{post.content}</p>
          <div className="flex items-center space-x-6 text-sm text-gray-500">
            <button className="flex items-center space-x-1 hover:text-red-500">
              <Heart className="h-4 w-4" />
              <span>{post.likes}</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-blue-500">
              <MessageSquare className="h-4 w-4" />
              <span>{post.comments}</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-green-500">
              <Share2 className="h-4 w-4" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}