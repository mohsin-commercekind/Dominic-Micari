import React from "react";
import { Link } from "react-router-dom";
import { logisticsData } from "../../constants/logistics";
import { theme } from "../../constants/theme";

const LogisticsSection = () => {
    return (
        <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${logisticsData.image})` }}
            >
                {/* <div className="absolute inset-0 bg-black/70"></div> */}
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
                <div className="max-w-[1000px]">
                    {/* Heading - 2 lines */}
                    <h2
                        className="text-white text-1xl md:text-3xl lg:text-4xl font-bold mb-4 uppercase leading-tight tracking-tight"
                        style={{ fontFamily: theme.fonts.heading }}
                    >
                        {logisticsData.title}
                    </h2>

                    {/* Description - 3 lines focused width */}
                    <p
                        className="text-white/90 text-sm md:text-lg mb-10 leading-relaxed max-w-[850px] mx-auto opacity-80"
                        style={{ fontFamily: theme.fonts.body }}
                    >
                        {logisticsData.description}
                    </p>

                    {/* Contact Us Now Button */}
                    <Link
                        to={logisticsData.button.link}
                        className="inline-block px-10 py-4 rounded-lg font-bold text-white transition-all duration-300 hover:scale-105 shadow-xl"
                        style={{
                            backgroundColor: theme.colors.secondary,
                            fontFamily: theme.fonts.body
                        }}
                    >
                        {logisticsData.button.text}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default LogisticsSection;
