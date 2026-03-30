import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { row1Brands } from "../../constants/brandCarousel";
import { theme } from "../../constants/theme";

const BrandsPage = () => {
    const buildImageUrl = (imgPath) => {
        if (!imgPath)
            return `${import.meta.env.BASE_URL || "/"}assets/images/placeholder.png`;
        if (/^https?:\/\//i.test(imgPath)) return imgPath;
        const normalized = imgPath.replace(/^\/+/, "");
        const base = import.meta.env.BASE_URL || "/";
        return `${base.replace(/\/+$/, "")}/${normalized}`;
    };

    return (
        <div className="bg-white min-h-screen">
            <Breadcrumb />

            <div className="max-w-[1500px] mx-auto px-6 py-20">
                {/* Heading Styled like Carousel */}
                <div className="text-center mb-24">
                    <h2
                        className="text-4xl md:text-5xl font-bold tracking-tight inline-block uppercase"
                        style={{ fontFamily: theme.fonts.heading, color: theme.colors.textDark }}
                    >
                        Our Partner{" "}
                        <span
                            className="relative inline-block pb-2"
                            style={{ color: theme.colors.primary }}
                        >
                            Brands
                            <span
                                className="absolute bottom-0 left-0 w-full h-1.5 rounded-full"
                                style={{ backgroundColor: theme.colors.primary }}
                            ></span>
                        </span>
                    </h2>
                    <p className="mt-8 text-gray-500 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed" style={{ fontFamily: theme.fonts.body }}>
                        We collaborate with world-class manufacturers and brands to deliver excellence
                        through our global distribution network.
                    </p>
                </div>

                {/* Brands Grid with Carousel Item Style */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 md:gap-16">
                    {row1Brands.map((brand, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center p-6 transition-all duration-300 group"
                        >
                            <div className="relative w-full h-40 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                                {/* Subtle background glow effect like carousel */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="w-32 h-32 bg-purple-50 rounded-full blur-3xl opacity-60"></div>
                                </div>

                                <img
                                    src={buildImageUrl(brand.src)}
                                    alt={brand.alt}
                                    className="max-w-[90%] max-h-full object-contain relative z-10 filter drop-shadow-sm"
                                    onError={(e) => {
                                        e.currentTarget.onerror = null;
                                        e.currentTarget.src = "/assets/images/placeholder.png";
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrandsPage;
