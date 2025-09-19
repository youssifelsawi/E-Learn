// components/CourseCard.js
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Star, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function CourseCard({ course = {}, dispatch = () => {}, state = {} }) {
  const wishlist = state?.wishlist || [];
  const isInWishlist = wishlist.includes(course.id);

  // Ref for thumbnail
  const thumbnailRef = useRef(null);

  const handleWishlist = () => {
    // Dispatch first
    dispatch({ type: "TOGGLE_WISHLIST", payload: course.id });

    // Find wishlist icon
    const wishlistIcon = document.querySelector("#wishlist-icon");
    if (!wishlistIcon || !thumbnailRef.current) return;

    const thumbRect = thumbnailRef.current.getBoundingClientRect();
    const iconRect = wishlistIcon.getBoundingClientRect();

    // Create a flying thumbnail
    const flyingThumb = document.createElement("img");
    flyingThumb.src = course.thumbnail;
    flyingThumb.style.position = "fixed";
    flyingThumb.style.left = `${thumbRect.left}px`;
    flyingThumb.style.top = `${thumbRect.top}px`;
    flyingThumb.style.width = `${thumbRect.width}px`;
    flyingThumb.style.height = `${thumbRect.height}px`;
    flyingThumb.style.borderRadius = "8px";
    flyingThumb.style.zIndex = "9999";
    flyingThumb.style.transition = "all 0.7s cubic-bezier(0.22, 1, 0.36, 1)";

    document.body.appendChild(flyingThumb);

    // Animate to wishlist icon
    requestAnimationFrame(() => {
      flyingThumb.style.left = `${iconRect.left}px`;
      flyingThumb.style.top = `${iconRect.top}px`;
      flyingThumb.style.width = "20px";
      flyingThumb.style.height = "20px";
      flyingThumb.style.opacity = "0.5";
    });

    // Cleanup
    flyingThumb.addEventListener("transitionend", () => {
      flyingThumb.remove();
    });
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="relative">
        <img
          ref={thumbnailRef}
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-48 object-cover"
        />

        {/* Wishlist button */}
        <button
          onClick={handleWishlist}
          className="absolute top-2 right-2 p-2 rounded-full bg-white shadow hover:bg-gray-100 transition"
        >
          <Heart
            className={`h-5 w-5 transition-colors duration-300 ${
              isInWishlist ? "text-red-500 fill-red-500" : "text-gray-400"
            }`}
          />
        </button>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {course.category}
          </span>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{course.rating}</span>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{course.description}</p>

        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <span>{course.instructor}</span>
          <span>{course.duration}</span>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <span>{course.lessons} lessons</span>
          <span>{course.students} students</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">${course.price}</span>
          {course.enrolled ? (
            <Link
              to="/lesson"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Continue
            </Link>
          ) : (
            <button
              onClick={() =>
                dispatch({ type: "ENROLL_COURSE", payload: course.id })
              }
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Enroll Now
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
