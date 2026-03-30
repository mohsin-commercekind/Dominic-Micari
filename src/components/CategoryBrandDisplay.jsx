import React from "react";
import BrandCarousel from "./BrandCarousel";
import { theme } from "../../constants/theme";
import { useParams } from "react-router-dom";
import { slugify } from "../utils/slugify";
import { productShowcaseData } from "../../constants/productShowcase";
import {
    row1Brands,
    row2Brands,
    row3Brands,
} from "../../constants/brandCarousel";

const CategoryBrandDisplay = () => {
    const { slug } = useParams();

    const categoryName = React.useMemo(() => {
        const keys = Object.keys(productShowcaseData.productCategories || {});
        return keys.find((k) => slugify(k) === slug) || null;
    }, [slug]);

    return (
        <section className="py-20 bg-gray-50/50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
                <h2
                    className="text-4xl font-bold mb-4"
                    style={{ fontFamily: theme.fonts.heading, color: theme.colors.primary }}
                >
                    {categoryName || "Our Products"} Brands
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Explore the top-tier brands we partner with within the {categoryName?.toLowerCase() || "industry"} sector.
                </p>
                <div className="w-24 h-1 bg-purple-600 mx-auto mt-6 rounded-full" style={{ backgroundColor: theme.colors.primary }}></div>
            </div>

            <div className="flex flex-col gap-8 md:gap-12">
                {/* Row 1: Normal speed, Set 1 */}
                <BrandCarousel speed={3500} showTitle={false} logos={row1Brands} />
                
                {/* Row 2: Faster and Reverse, Set 2 */}
                <BrandCarousel speed={3000} reverse={true} showTitle={false} logos={row2Brands} />
                
                {/* Row 3: Slower, Set 3 */}
                <BrandCarousel speed={4500} showTitle={false} logos={row3Brands} />
            </div>
        </section>
    );
};

export default CategoryBrandDisplay;
