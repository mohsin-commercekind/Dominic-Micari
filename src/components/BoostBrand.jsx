import React from "react";
import { Link } from "react-router-dom";
import { boostBrand } from "../../constants/boostBrand";
import { theme } from "../../constants/theme";

const BoostBrand = () => {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-8 lg:px-16 mt-40 sm:mt-10 md:mt-10 lg:mt-10">
        {/* Main Container - Flex Column on Mobile, Row on Desktop */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Side - Text Content */}
          <div className="w-full lg:w-1/2">
            {/* Title - "Boost Your" in green + "Brand" in black */}
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 leading-tight"
              style={{ fontFamily: theme.fonts.heading }}
            >
              <span style={{ color: theme.colors.secondary }}>
                {boostBrand.title.highlight}
              </span>{" "}
              <span style={{ text: theme.colors.primary }}>
                {boostBrand.title.normal}
              </span>
            </h2>

            {/* Description */}
            <p
              className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed"
              style={{ fontFamily: theme.fonts.body }}
            >
              {boostBrand.description}
            </p>

            {/* Learn More Button */}
            <Link
              to={boostBrand.button.link}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor: theme.colors.secondary,
                color: 'white',
                fontFamily: theme.fonts.body,
              }}
            >
              {boostBrand.button.text}
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          {/* Right Side - Image with Green Blob */}
          <div className="w-auto lg:w-1/2 relative">
            {/* Green Blob Background */}
            <div
              className="absolute -bottom-8 -left-8 w-auto h-auto rounded-full -z-10"
              style={{ backgroundColor: theme.colors.secondary }}
            ></div>

            {/* Truck Image - Circular Crop */}
            <div className="relative">
              <img
                src={boostBrand.image.src}
                alt={boostBrand.image.alt}
                className="w-auto h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoostBrand;
