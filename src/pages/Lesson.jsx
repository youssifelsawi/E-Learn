// pages/Lesson.js
import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import LessonSideBar from '../components/LessonSideBar';

export default function Lesson({ state, dispatch }) {
  const currentCourse = state.courses[0]; // demo: first course
  const currentLesson = state.currentLesson || currentCourse.curriculum[0];

  return (
    <div className="flex h-screen">
      <VideoPlayer lesson={currentLesson} />
      <LessonSideBar
        course={currentCourse}
        dispatch={dispatch}
        currentLesson={currentLesson}
      />
    </div>
  );
}
