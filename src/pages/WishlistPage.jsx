import React from 'react';
import CourseCard from '../components/CourseCard';
import { AnimatePresence } from "framer-motion";

export default function WishlistPage({ state, dispatch }) {
  const wishlistCourses = state.courses.filter(course =>
    state.wishlist.includes(course.id)
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">My Wishlist</h1>
      {wishlistCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
          {wishlistCourses.map(course => (
            <CourseCard
              key={course.id}
              course={course}
              dispatch={dispatch}
              state={state}
            />
          ))}
          </AnimatePresence>
        </div>
      ) : (
        <p className="text-gray-600">Your wishlist is empty.</p>
      )}
    </div>
  );
}
