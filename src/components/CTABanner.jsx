import React from "react";
import { theme } from "../../constants/theme";
import { Link } from "react-router-dom";
const CTABanner = () => {
  return (
    <div className="w-full flex justify-center px-3 mt-4 sm:px-6 lg:px-6 py-4 sm:py-6 md:py-8 -mb-9 md:-mb-12">
      <div className="w-full max-w-[1400px] rounded-2xl md:rounded-3xl px-5 sm:px-8 md:px-12 lg:px-16 py-5 md:py-6 lg:py-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8"
      style={{backgroundColor:theme.colors.primary}}>
        {/* Left Side - Text Content */}
        <div className="text-left md:text-left w-full md:w-auto">
          <p
            className="text-sm sm:text-base md:text-lg font-medium mb-2"
            style={{
              fontFamily: theme.fonts.heading,
              color: 'white',
            }}
          >
            Accelerate
          </p>
          <h2
            className="text-2xl sm:text-2xl md:text-4xl lg:text-4xl font-bold text-white leading-tight"
            style={{
              fontFamily: theme.fonts.heading,
            }}
          >
            Your Brand's
            <br />
            Growth Today
          </h2>
        </div>
        {/* Right Side - Button */}
        <div className="w-full md:w-auto flex justify-center md:justify-end">
          <Link to="/contact-us">
            <button
              className="bg-white hover:bg-gray-100 text-gray-800 font-bold px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-lg hover:cursor-pointer"
              style={{
                fontFamily: theme.fonts.heading,
              }}
            >
              <span className="text-base sm:text-lg md:text-xl">
                Get Started
              </span>
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="#8bc34a"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CTABanner;
