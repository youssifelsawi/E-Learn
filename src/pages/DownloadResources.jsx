import React from "react";

const resources = [
  {
    label: "Download Video",
    href: "/downloads/lesson-video.mp4",
    icon: (
      <svg
        className="w-5 h-5 mr-2 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 16v-8m0 8l-4-4m4 4l4-4M4 20h16"
        />
      </svg>
    ),
  },
  {
    label: "Download PDF",
    href: "/downloads/lesson.pdf",
    icon: (
      <svg
        className="w-5 h-5 mr-2 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 16v-8m0 8l-4-4m4 4l4-4M4 20h16"
        />
      </svg>
    ),
  },
  {
    label: "Download Code",
    href: "/downloads/lesson-code.zip",
    icon: (
      <svg
        className="w-5 h-5 mr-2 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 16v-8m0 8l-4-4m4 4l4-4M4 20h16"
        />
      </svg>
    ),
  },
];

export default function DownloadResources() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        Download Lesson Resources
      </h1>

      <div className="bg-gray-100 rounded-lg p-6 sm:p-8 shadow-md w-full max-w-md">
        <div className="flex flex-col gap-4">
          {resources.map((res) => (
            <a
              key={res.label}
              href={res.href}
              download
              className="flex items-center justify-center w-full bg-blue-600 text-white font-semibold py-3 rounded-md shadow hover:bg-blue-700 transition-colors border border-gray-100"
            >
              {res.icon}
              {res.label}
            </a>
          ))}
        </div>
      </div>

      <p className="mt-6 text-gray-600 text-center text-sm sm:text-base max-w-sm">
        Click a button to download the corresponding resource for your lesson.
      </p>
    </div>
  );
}
