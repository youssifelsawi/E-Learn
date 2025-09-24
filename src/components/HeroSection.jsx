import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => (
    <section className="flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-br from-[#2563EB] to-gray-400 text-white text-center px-4 py-12 rounded-xl shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Unlock Your Learning Potential
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-xl">
            Explore a wide range of courses and boost your career with our expert-led e-learning platform.
        </p>
        <Link
            to="/courses"
            className="bg-white text-blue-500 px-8 py-3 rounded-full font-bold text-base shadow-md hover:bg-blue-50 transition"
        >
            Browse Courses
        </Link>
    </section>
);

export default HeroSection;
