import React from "react";
import { Link } from "react-router-dom";
import { solutionsData } from "../../constants/solutions";
import { theme } from "../../constants/theme";


const Solutions = () => {
    return (
        <section className="w-full py-20 bg-[#F9FAFB]">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-16">

                {/* Header */}
                <div className="text-center mb-16">
                    <h4
                        className="tracking-normal text-sm font-bold tracking-[0.2em] mb-4 uppercase"
                        style={{ color: theme.colors.primary, fontFamily: theme.fonts.heading }}
                    >
                        {solutionsData.badge}
                    </h4>
                    <h2
                        className="text-1xl md:text-3xl lg:text-4xl font-bold uppercase text-[#111] tracking-tighter" style={{ fontFamily: theme.fonts.heading }}
                    >
                        {solutionsData.title}
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
                    {solutionsData.solutions.map((item) => (
                        <div
                            key={item.id}

                            className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-md flex flex-col transition-transform duration-300 hover:-translate-y-2 w-full max-w-[500px] min-h-[450px]"
                        >
                            {/* Icon Image at top-left */}
                            <div className="flex items-start mb-4">
                                <div
                                    className="w-28 h-28 flex items-center justify-center rounded-full shadow-lg"
                                    style={{ backgroundColor: theme.colors.primary }}
                                >
                                    <img
                                        src={item.icon}
                                        alt={item.title}
                                        className="w-14 h-14 object-contain brightness-0 invert"
                                    />
                                </div>
                            </div>

                            {/* Card Title */}
                            <h3
                                className="text-xl md:text-2xl font-bold mb-4 text-black uppercase"
                                style={{ fontFamily: theme.fonts.heading }}
                            >
                                {item.title}
                            </h3>

                            {/* Description (max 12 lines) */}
                            <div
                                className="text-gray-600 text-sm md:text-[15px] leading-relaxed mb-6 overflow-hidden"
                                style={{
                                    fontFamily: theme.fonts.body,
                                    display: "-webkit-box",
                                    WebkitLineClamp: 12,
                                    WebkitBoxOrient: "vertical",
                                }}
                            >
                                <p>{item.desc1}</p>
                                <div className="my-4"></div>                                 <p>{item.desc2}</p>
                            </div>

                            {/* Contact Us Button at bottom */}
                            <div className="mt-auto">
                                <Link
                                    to="/contact-us"
                                    className="inline-flex items-center gap-3 px-6 py-3 rounded-lg border-2 font-bold transition-all duration-300"
                                    style={{
                                        borderColor: theme.colors.secondary,
                                        color: theme.colors.secondary,
                                        fontFamily: theme.fonts.body
                                    }}
                                >
                                    Contact Us
                                    <svg
                                        className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={3}
                                            d="M13 5l7 7-7 7M5 5l7 7-7 7"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Solutions;