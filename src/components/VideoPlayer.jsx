// components/VideoPlayer.js
import React from "react";

export default function VideoPlayer({ lesson }) {
  if (!lesson) {
    return (
      <div className="flex-1 bg-black flex items-center justify-center text-white">
        <p>No lesson selected</p>
      </div>
    );
  }

  // Extract video ID from YouTube link
  const getYouTubeEmbedUrl = (url) => {
    const match = url.match(/v=([^&]+)/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : url;
  };

  return (
    <div className="flex-1 bg-black flex flex-col min-h-0">
      <div className="flex-1 flex items-center justify-center min-h-0">
        <iframe
          key={lesson.id}
          className="w-full h-full max-h-screen"
          src={getYouTubeEmbedUrl(lesson.videoUrl)}
          title={lesson.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="bg-gray-900 text-white w-full p-4">
        <h3 className="text-lg font-semibold">{lesson.title}</h3>
        <p className="text-sm opacity-75">Duration: {lesson.duration}</p>
      </div>
    </div>
  );
}
