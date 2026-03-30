import React from "react";
import { Link } from "react-router-dom";
import { hero } from "../../constants/Hero";
import { theme } from "../../constants/theme";

const Hero = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={hero.image.src}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay - Optimized for readability */}
        <div className="absolute inset-0 "></div>
      </div>

      {/* Content Container - Centered */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 text-center">
        <div className="max-w-[760px] md:max-w-[1200px]">
          {/* Small Title - Moved down slightly and size reduced */}
          <h2
            className="text-white text-sm md:text-lg lg:text-xl font-medium mb-4 tracking-wider uppercase mt-8"
            style={{ fontFamily: theme.fonts.heading }}
          >
            {hero.title.small}
          </h2>

          {/* Large Title - Wrapped for mobile, larger on desktop */}
          <h1
            className="text-white text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6 uppercase break-words"
            style={{ fontFamily: theme.fonts.heading }}
          >
            {hero.title.large}
          </h1>

          {/* Subtitle / Paragraph */}
          <p
            className="text-white text-xs md:text-base lg:text-lg mb-8 leading-relaxed font-medium mx-auto opacity-90"
            style={{ fontFamily: theme.fonts.body }}
          >
            {hero.subtitle}
          </p>

          {/* Horizontal Line */}
          <div className="w-full h-px bg-white/30 mb-8 mx-auto max-w-[500px]"></div>

          {/* Buttons Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {hero.buttons.map((btn, index) => (
              <Link
                key={index}
                to={btn.link}
                className={`px-8 py-4 rounded-lg font-bold text-base transition-all duration-300 min-w-[280px] ${btn.type === "primary"
                  ? "text-white"
                  : "border-2 border-white text-white"
                  }`}
                style={{
                  backgroundColor: btn.type === "primary" ? theme.colors.primary : "transparent",
                  fontFamily: theme.fonts.body,
                }}
              >
                {btn.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
