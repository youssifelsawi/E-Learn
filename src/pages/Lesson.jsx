// pages/Lesson.js
import React, { useMemo, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";
import LessonSideBar from "../components/LessonSideBar";

export default function Lesson({ state, dispatch }) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const courseIdParam = searchParams.get("courseId");
  const lessonIdParam = searchParams.get("lessonId");

  // Find the correct course by courseId query param (fallbacks included)
  const currentCourse = useMemo(() => {
    if (!state.courses || state.courses.length === 0) return null;
    if (!courseIdParam) return state.courses[0]; // optional: default to first
    return (
      state.courses.find((c) => String(c.id) === String(courseIdParam)) || null
    );
  }, [state.courses, courseIdParam]);

  // If a courseId was provided but we couldn't find it, redirect to courses
  useEffect(() => {
    if (courseIdParam && state.courses.length > 0 && !currentCourse) {
      navigate("/courses");
    }
  }, [courseIdParam, state.courses, currentCourse, navigate]);

  if (!state.courses || state.courses.length === 0) {
    return <div className="p-6">Loading courses…</div>;
  }

  if (!currentCourse) {
    return <div className="p-6">Course not found.</div>;
  }

  // Select current lesson: prefer lessonId query param → state.currentLesson (if it belongs) → first lesson
  const currentLesson = useMemo(() => {
    const curriculum = currentCourse.curriculum || [];
    if (curriculum.length === 0) return null;

    if (lessonIdParam) {
      const found = curriculum.find((l) => String(l.id) === String(lessonIdParam));
      if (found) return found;
    }

    if (state.currentLesson) {
      const fromState = curriculum.find(
        (l) => String(l.id) === String(state.currentLesson.id)
      );
      if (fromState) return fromState;
    }

    return curriculum[0];
  }, [currentCourse, lessonIdParam, state.currentLesson]);

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
