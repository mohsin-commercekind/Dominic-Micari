import React from "react";
import { theme } from "../../constants/theme";

const ContactSection = ({ phone, email }) => {
    return (
        <section className="w-full py-20 bg-[#F9FAFB]">
            <div className="max-w-[1200px] mx-auto px-4">
                {/* Main Card Container */}
                <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[650px]">

                    {/* LEFT COLUMN - Primary Sidebar */}
                    <div
                        className="w-full lg:w-[42%] p-10 md:p-14 flex flex-col justify-between text-white"
                        style={{ backgroundColor: theme.colors.primary }}
                    >
                        <div>
                            <h2
                                className="text-5xl md:text-6xl font-bold leading-[1.1] mb-8"
                                style={{ fontFamily: theme.fonts.heading }}
                            >
                                Let's build <br />
                                something <br />
                                <span style={{ color: theme.colors.secondary }}>together.</span>
                            </h2>
                            <p
                                className="text-white/80 text-lg leading-relaxed max-w-md mb-12"
                                style={{ fontFamily: theme.fonts.body }}
                            >
                                Have questions or need assistance? Our team is here to help and provide prompt support. Reach out to us and we'll ensure your inquiries are addressed quickly and efficiently.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {/* Call Us Box */}
                            <div
                                className="rounded-2xl p-6 flex items-center gap-5 border border-white/10"
                                style={{ backgroundColor: theme.colors.primary + "CC" }} // Slightly lighter/darker variation
                            >
                                <div
                                    className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                                    style={{ backgroundColor: theme.colors.secondary }}
                                >
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.12.45 2.33.69 3.58.69a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.24 2.46.69 3.58a1 1 0 01-.27 1.11z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-[11px] uppercase tracking-widest text-white/50 font-bold mb-1">Call Us</p>
                                    <p className="text-sm font-bold max-w-[200px] md:max-w-none">{phone || "+1 (832) 602-9749"}</p>
                                </div>
                            </div>

                            {/* Email Box */}
                            <div
                                className="rounded-2xl p-6 flex items-center gap-5 border border-white/10"
                                style={{ backgroundColor: theme.colors.primary + "CC" }}
                            >
                                <div
                                    className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                                    style={{ backgroundColor: theme.colors.secondary }}
                                >
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-[11px] uppercase tracking-widest text-white/50 font-bold mb-1">Email</p>
                                    <p className="text-sm font-bold max-w-[200px] md:max-w-none">{email || "partnership@e-comvaultdistribution.com"}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN - White Form */}
                    <div className="w-full lg:w-[58%] p-10 md:p-14 bg-white flex flex-col">
                        <h3
                            className="text-2xl font-bold mb-10 uppercase tracking-tight"
                            style={{ fontFamily: theme.fonts.heading, color: theme.colors.secondary }}
                        >
                            Send a Message
                        </h3>

                        <form className="flex-grow flex flex-col gap-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                                {/* First Name */}
                                <div className="relative group">
                                    <label
                                        className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-1"
                                        style={{ fontFamily: theme.fonts.body }}
                                    >
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="John"
                                        className="w-full py-2 bg-transparent border-b border-gray-200 outline-none focus:border-black transition-colors placeholder:text-gray-300"
                                        style={{ fontFamily: theme.fonts.body }}
                                    />
                                </div>
                                {/* Last Name */}
                                <div className="relative group">
                                    <label
                                        className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-1"
                                        style={{ fontFamily: theme.fonts.body }}
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Doe"
                                        className="w-full py-2 bg-transparent border-b border-gray-200 outline-none focus:border-black transition-colors placeholder:text-gray-300"
                                        style={{ fontFamily: theme.fonts.body }}
                                    />
                                </div>
                                {/* Email */}
                                <div className="relative group">
                                    <label
                                        className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-1"
                                        style={{ fontFamily: theme.fonts.body }}
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="name@example.com"
                                        className="w-full py-2 bg-transparent border-b border-gray-200 outline-none focus:border-black transition-colors placeholder:text-gray-300"
                                        style={{ fontFamily: theme.fonts.body }}
                                    />
                                </div>
                                {/* Phone Number */}
                                <div className="relative group">
                                    <label
                                        className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-1"
                                        style={{ fontFamily: theme.fonts.body }}
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder="+1 (123) 456 7890"
                                        className="w-full py-2 bg-transparent border-b border-gray-200 outline-none focus:border-black transition-colors placeholder:text-gray-300"
                                        style={{ fontFamily: theme.fonts.body }}
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div className="relative group mt-2">
                                <label
                                    className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-1"
                                    style={{ fontFamily: theme.fonts.body }}
                                >
                                    Message
                                </label>
                                <textarea
                                    rows="4"
                                    placeholder="Write your message..."
                                    className="w-full py-2 bg-transparent border-b border-gray-200 outline-none focus:border-black transition-colors placeholder:text-gray-300 resize-none"
                                    style={{ fontFamily: theme.fonts.body }}
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="mt-8">
                                <button
                                    type="submit"
                                    className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                                    style={{
                                        fontFamily: theme.fonts.body,
                                        backgroundColor: theme.colors.secondary,
                                        boxShadow: `0 10px 25px -5px ${theme.colors.secondary}4D`
                                    }}
                                >
                                    SEND MESSAGE
                                    {/* <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg> */}
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;
