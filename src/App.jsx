// App.js
import React, { useReducer, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/SideBar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import MyLearning from "./pages/MyLearning";
import Lesson from "./pages/Lesson";
import Certificates from "./pages/Certificates";
import Community from "./pages/Community";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import EditProfile from "./pages/EditProfile";
import ProfileUpdated from "./pages/ProfileUpdated";
import WishlistPage from "./pages/WishlistPage";
import { appReducer, initialState } from "./store/reducer";
import "./App.css";
import DownloadResources from "./pages/DownloadResources";
import { ArrowUp } from "lucide-react";

export default function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // State for showing the button
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Router>
      <div
        className={`min-h-screen flex ${
          state.darkMode
            ? "dark bg-gray-900 text-white"
            : "bg-gray-50 text-gray-900"
        }`}
      >
        <Sidebar state={state} dispatch={dispatch} />
        <div
          className={`flex-1 transition-all duration-300 ${
            state.sidebarOpen ? "lg:ml-64" : "ml-0"
          }`}
        >
          <Header state={state} dispatch={dispatch} />
          <main className="min-h-screen p-4 relative">
            <Routes>
              <Route
                path="/"
                element={<Dashboard state={state} dispatch={dispatch} />}
              />
              <Route
                path="/courses"
                element={<Courses state={state} dispatch={dispatch} />}
              />
              <Route
                path="/my-learning"
                element={<MyLearning state={state} dispatch={dispatch} />}
              />
              <Route
                path="/lesson"
                element={<Lesson state={state} dispatch={dispatch} />}
              />
              <Route
                path="/certificates"
                element={<Certificates state={state} dispatch={dispatch} />}
              />
              <Route
                path="/community"
                element={<Community state={state} dispatch={dispatch} />}
              />
              <Route
                path="/profile"
                element={<Profile state={state} dispatch={dispatch} />}
              />
              <Route
                path="/settings"
                element={<Settings state={state} dispatch={dispatch} />}
              />
              <Route
                path="/edit-profile"
                element={<EditProfile state={state} dispatch={dispatch} />}
              />
              <Route
                path="/profile-updated"
                element={<ProfileUpdated />}
                state={state}
                dispatch={dispatch}
              />
              <Route
                path="/wishlist"
                element={<WishlistPage state={state} dispatch={dispatch} />}
              />
              <Route
                path="/resources"
                element={<DownloadResources state={state} dispatch={dispatch} />}
              />
            </Routes>

            {/* Scroll to Top Button */}
            {showScroll && (
              <button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition"
              >
                <ArrowUp className="h-5 w-5" />
              </button>
            )}
          </main>
        </div>

        {/* Mobile overlay */}
        {state.sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => dispatch({ type: "TOGGLE_SIDEBAR" })}
          ></div>
        )}
      </div>
    </Router>
  );
}
