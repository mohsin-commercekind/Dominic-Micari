import React from "react";
import { Link } from "react-router-dom";
import { theme } from "../../constants/theme";

const AboutContent = () => {
    const stats = [
        { label: "SHIPPING KNOWLEDGE", value: 96 },
        { label: "WORKER EXPERTISE", value: 97 },
        { label: "ON TIME PROGRESS", value: 95 },
        { label: "SAFETY & GUARANTEE", value: 90 },
    ];

    return (
        <div className="w-full bg-white">
            {/* Section 1: WHO WE ARE */}
            <section className="max-w-[1300px] mx-auto px-6 py-20 lg:py-28">
                <div className="max-w-[1000px]">
                    <h4
                        className="text-blue-700 font-bold tracking-wider mb-4 uppercase"
                        style={{ color: theme.colors.primary, fontFamily: theme.fonts.heading }}
                    >
                        WHO WE ARE
                    </h4>
                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-10 leading-tight uppercase"
                        style={{ fontFamily: theme.fonts.heading }}
                    >
                        DRIVING RELIABLE GLOBAL IMPORT SOLUTIONS
                    </h2>

                    <div className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed">
                        <p className="font-semibold text-gray-800">
                            Welcome to YB Distribution – Your Trusted Global Distribution Partner
                        </p>
                        <p>
                            At YB Distribution, we are committed to delivering reliability, efficiency, and transparency in the world of wholesale distribution. Our mission is to support businesses with dependable supply chains, ensuring smooth operations and consistent product availability across global markets.
                        </p>
                        <p>
                            Built on strong values of integrity and customer focus, YB Distribution works closely with businesses of all sizes—from independent retailers to large organizations. Our experienced team is dedicated to sourcing quality products and maintaining steady supply chains so that your business always has access to the merchandise it needs.
                        </p>
                        <p>
                            Transparency is at the heart of how we operate. We believe that strong partnerships are built on trust, open communication, and clear processes. From pricing structures to procurement and logistics, we maintain a high level of honesty and professionalism in every transaction.
                        </p>
                        <p>
                            Through our growing network of trusted suppliers and manufacturers, YB Distribution provides access to a wide variety of products across multiple industries. Whether your business requires consumer electronics, apparel, household goods, or other merchandise, we are equipped to help you find reliable and competitive solutions.
                        </p>
                    </div>

                    <Link
                        to="/contact-us"
                        className="inline-block mt-10 px-8 py-3 rounded-lg font-bold text-white transition-all duration-300 hover:opacity-90 shadow-md"
                        style={{ backgroundColor: theme.colors.secondary, fontFamily: theme.fonts.body }}
                    >
                        Contact Us
                    </Link>
                </div>
            </section>

            {/* Section 2: WHY CHOOSE US */}
            <section className="w-full bg-gray-50 py-20 lg:py-28">
                <div className="max-w-[1300px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Left: Content & Stats */}
                    <div className="w-full lg:w-1/2">
                        <h4
                            className="text-blue-700 font-bold tracking-wider mb-4 uppercase"
                            style={{ color: theme.colors.primary, fontFamily: theme.fonts.heading }}
                        >
                            WHY CHOOSE US
                        </h4>
                        <h2
                            className="text-3xl md:text-4xl font-bold mb-8 uppercase"
                            style={{ fontFamily: theme.fonts.heading }}
                        >
                            YB Distribution
                        </h2>
                        <p className="text-gray-600 mb-12 leading-relaxed text-lg">
                            Partner with YB Distribution for dependable and high-quality distribution solutions. Our company is built on a strong foundation of reliability, operational efficiency, and dedicated customer service. We work closely with our clients to understand their business needs and deliver solutions that help them grow and succeed.
                        </p>

                        <div className="space-y-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="w-full">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-bold text-sm md:text-base text-gray-800 uppercase tracking-tight">
                                            {stat.label}
                                        </span>
                                        <span className="font-bold text-gray-800">{stat.value}%</span>
                                    </div>
                                    <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                                        <div
                                            className="h-full rounded-full transition-all duration-1000"
                                            style={{
                                                width: `${stat.value}%`,
                                                backgroundColor: theme.colors.primary
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="w-full lg:w-1/2 relative">
                        {/* Decorative background box */}
                        <div
                            className="absolute -bottom-6 -right-6 w-3/4 h-3/4 -z-10"
                            style={{ backgroundColor: theme.colors.primary }}
                        ></div>
                        <div className="relative z-10 overflow-hidden rounded-sm shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=1000&auto=format&fit=crop"
                                alt="Warehouse management"
                                className="w-full h-[350px] md:h-[450px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutContent;
