import React, { useState, useMemo, forwardRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Menu, Heart } from "lucide-react";

const Header = forwardRef(({ state, dispatch }, wishlistRef) => {
  const [isFocused, setIsFocused] = useState(false);
  const location = useLocation();

   const pageTitles = {
    "/": "Dashboard",
    "/courses": "Courses",
    "/my-learning": "My Learning",
    "/lesson": "Lesson",
    "/certificates": "Certificates",
    "/community": "Community",
    "/profile": "Profile",
    "/settings": "Settings",
    "/edit-profile": "Edit Profile",
    "/profile-updated": "Profile Updated",
    "/wishlist": "Wishlist",
  };

const currentTitle = pageTitles[location.pathname] || "Page";

  // Filtered courses based on search query
  const filteredCourses = useMemo(() => {
    if (!state.searchQuery.trim()) return [];
    return state.courses.filter((course) =>
      course.title.toLowerCase().includes(state.searchQuery.toLowerCase())
    );
  }, [state.searchQuery, state.courses]);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="flex items-center justify-between h-16 px-6">
        {/* Left section */}
        <div className="flex items-center">
          <button
            onClick={() => dispatch({ type: "TOGGLE_SIDEBAR" })}
            className="mr-4 cursor-pointer"
          >
            <Menu className="h-6 w-6" />
          </button>

          <h2 className="text-xl font-semibold capitalize">
            {currentTitle}
          </h2>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-4 relative">
          {/* Search box */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search courses..."
              value={state.searchQuery}
              onChange={(e) =>
                dispatch({ type: "SET_SEARCH_QUERY", payload: e.target.value })
              }
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
            />

            {/* Dropdown results */}
            {isFocused && filteredCourses.length > 0 && (
              <div className="absolute mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                {filteredCourses.map((course) => (
                  <Link
                    key={course.id}
                    to={`/lesson?courseId=${course.id}`}
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100"
                  >
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-6 h-6 object-contain"
                    />
                    <span className="text-sm text-gray-700">
                      {course.title}
                    </span>
                  </Link>
                ))}
              </div>
            )}

            {/* No results */}
            {isFocused && state.searchQuery && filteredCourses.length === 0 && (
              <div className="absolute mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 px-4 py-2 text-sm text-gray-500">
                No courses found
              </div>
            )}
          </div>

          {/* Wishlist Icon (ref here!) */}
          <Link to="/wishlist" id="wishlist-icon" className="relative" ref={wishlistRef}>
            <Heart className="h-6 w-6 text-gray-600 hover:text-red-500" />
            {state.wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
                {state.wishlist.length}
              </span>
            )}
          </Link>

          {/* User Profile */}
          <Link to="/profile">
            <div className="flex items-center space-x-2">
              <img
                src={`${import.meta.env.BASE_URL}assets/${state.user.avatar}`}
                alt={state.user.name}
                className="h-8 w-8 rounded-full"
              />
              <span className="hidden md:inline text-sm font-medium">
                {state.user.name}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
});

export default Header;
