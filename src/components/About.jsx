import React from "react";
import { Link } from "react-router-dom";
import { aboutData } from "../../constants/aboutData";
import { theme } from "../../constants/theme";

const AboutSection = () => {
  return (
    <section className="w-full py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left Side */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[620px] mx-auto lg:mx-0">

              {/* Purple thick L-frame */}
              <div
                className="absolute -left-8 -bottom-8 w-[calc(100%+4rem)] h-[calc(100%+4rem)] border-l-[20px] border-b-[20px] border-t-0 border-r-0 -z-10"
                style={{ borderColor: theme.colors.primary }}
              />

              {/* Main Image */}
              <div className="relative z-10 border-[6px]" style={{ borderColor: theme.colors.primary }}>
                <img
                  src={aboutData.images.main}
                  alt="Warehouse Storage with Boxes"
                  className="w-full h-[480px] md:h-[580px] lg:h-[620px] object-cover rounded-sm relative -top-8 -right-8"
                />
              </div>

              {/* Overlapping Image */}
              <div className="absolute -bottom-12 -right-6 md:-right-10 lg:-right-12 z-20 w-[75%] md:w-[70%] lg:w-[65%] p-3 md:p-4 bg-white rounded-sm">
                <div className="overflow-hidden">
                  <img
                    src={aboutData.images.overlapping}
                    alt="Warehouse Team Working"
                    className="w-full h-[250px] md:h-[300px] lg:h-[320px] object-cover relative left-6 transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Right Side Content */}
          <div className="w-full lg:w-1/2">
            <div className="max-w-[650px] lg:pl-10">

              {/* Badge */}
              <h4
                className="text-xs font-bold tracking-[0.2em] mb-4 uppercase"
                style={{ color: theme.colors.primary, fontFamily: theme.fonts.heading }}
              >
                {aboutData.badge}
              </h4>

              {/* Heading */}
              <h2
                className="text-xl md:text-2xl lg:text-[22px] font-bold leading-[1.2] mb-8 uppercase text-[#1a1a1a] max-w-[550px]"
                style={{ fontFamily: theme.fonts.heading }}
              >
                {aboutData.title}
              </h2>

              {/* Descriptions */}
              <div
                className="space-y-2 text-gray-500 text-sm md:text-[16px] leading-relaxed text-justify lg:text-left max-w-[540px]"
                style={{ fontFamily: theme.fonts.body }}
              >
                <p>{aboutData.description1}</p>
                <p>{aboutData.description2}</p>
              </div>

              {/* Button */}
              <div className="mt-12">
                <Link
                  to={aboutData.button.link}
                  className="inline-flex items-center group overflow-hidden"
                >
                  <div
                    className="px-10 py-4 text-white font-bold uppercase tracking-wider text-sm transition-all duration-300"
                    style={{ backgroundColor: theme.colors.secondary }}
                  >
                    {aboutData.button.text}
                  </div>

                  <div className="bg-[#111] px-5 py-[13px] flex items-center justify-center text-white transition-all duration-300">
                    <svg
                      className="w-6 h-6 transform transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={4}
                        d="M13 5l7 7-7 7M5 5l7 7-7 7"
                      />
                    </svg>
                  </div>

                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;