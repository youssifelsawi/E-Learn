import React, { useMemo, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";
import LessonSideBar from "../components/LessonSideBar";

export default function Lesson({ state, dispatch }) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const courseIdParam = searchParams.get("courseId");
  const lessonIdParam = searchParams.get("lessonId");

  const currentCourse = useMemo(() => {
    if (!state.courses || state.courses.length === 0) return null;
    if (!courseIdParam) return state.courses[0];
    return (
      state.courses.find((c) => String(c.id) === String(courseIdParam)) || null
    );
  }, [state.courses, courseIdParam]);

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

  const currentLesson = useMemo(() => {
    const curriculum = currentCourse.curriculum || [];
    if (curriculum.length === 0) return null;

    if (lessonIdParam) {
      const found = curriculum.find(
        (l) => String(l.id) === String(lessonIdParam)
      );
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
    <div className="flex flex-col md:flex-row h-screen">
      {/* Video takes remaining space */}
      <div className="flex-1 flex">
        <VideoPlayer lesson={currentLesson} className="w-full h-full" />
      </div>

      {/* Sidebar */}
      <div className="w-full md:w-80 flex-shrink-0 border-t md:border-t-0 md:border-l border-gray-200 h-auto md:h-full overflow-y-auto">
        <LessonSideBar
          course={currentCourse}
          dispatch={dispatch}
          currentLesson={currentLesson}
        />
      </div>
    </div>
  );
}
