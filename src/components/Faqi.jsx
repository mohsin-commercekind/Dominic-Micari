import React, { useState } from "react";
import { Link } from "react-router-dom";
import { faqData } from "../../constants/FaqData";
import { theme } from "../../constants/theme";

const FAQSection = () => {
  const [openId, setOpenId] = useState(1);
  const toggleQuestion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      className="w-full py-16 px-4 sm:px-6 lg:px-8"
      style={{
        // backgroundColor: "#EFEDEE",
        fontFamily: theme.fonts.body,
      }}
    >
      {/* Center Container - Max Width 1400px */}
      <div
        className="mx-auto flex flex-col lg:flex-row justify-between gap-8"
        style={{
          maxWidth: "1400px",
        }}
      >
        {/* LEFT SIDE - Header Section */}
        <div className="text-center lg:text-left mb-12 lg:mb-0 w-full lg:w-[500px]">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 uppercase"
            style={{
              fontFamily: theme.fonts.heading,
              color: theme.colors.primary,
            }}
          >
            {faqData.header.title}{" "}
            <span style={{ color: theme.colors.secondary }}>
              {faqData.header.titleAccent}
            </span>
          </h2>
          <p
            className="text-base sm:text-lg mb-8 leading-relaxed"
            style={{ color: "#64748b" }}
          >
            {faqData.header.subtitle}
          </p>
          <Link to="/contact-us">
            <button
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 hover:gap-4 hover:shadow-lg cursor-pointer"
              style={{
                backgroundColor: theme.colors.secondary,
                color: theme.colors.textLight,
              }}
            >
              Learn More
              <svg
                className="w-5 h-5 transition-transform duration-300"
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
            </button>
          </Link>
        </div>
        {/* RIGHT SIDE - FAQ Accordion */}
        <div className="space-y-4 px-0 lg:px-7 w-full lg:w-[1000px]">
          {faqData.questions.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="rounded-xl overflow-hidden transition-all duration-300 shadow-sm"
                style={{
                  backgroundColor: isOpen
                    ? theme.colors.primary
                    : "#F8FAFC",
                }}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleQuestion(faq.id)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left transition-all duration-300 cursor-pointer"
                >
                  <span
                    className="font-medium text-sm sm:text-base pr-4"
                    style={{
                      color: isOpen ? theme.colors.textLight : "#1F2937",
                    }}
                  >
                    {faq.question}
                  </span>

                  <svg
                    className="w-5 h-5 flex-shrink-0 transition-transform duration-300"
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      color: isOpen
                        ? theme.colors.textLight
                        : theme.colors.secondary,
                    }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Answer - Animated */}
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: isOpen ? "500px" : "0",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div
                    className="px-6 pb-4 text-sm sm:text-base leading-relaxed"
                    style={{
                      color: theme.colors.textLight,
                    }}
                  >
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * { 
            animation-duration: 0.01ms !important; 
            animation-iteration-count: 1 !important; 
            transition-duration: 0.01ms !important; 
          }
        }
      `}</style>
    </section>
  );
};

export default FAQSection;
