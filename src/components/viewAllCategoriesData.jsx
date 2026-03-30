import React from "react";
import { Link } from "react-router-dom";
import { viewAllCategoriesData } from "../../constants/viewAllCategoriesData";
import { theme } from "../../constants/theme";
import { slugify } from "../utils/slugify";

const ViewAllCategories = () => {
  const buildImageUrl = (imgPath) => {
    if (!imgPath)
      return `${import.meta.env.BASE_URL || "/"}assets/images/placeholder.png`;
    if (/^https?:\/\//i.test(imgPath)) return imgPath;
    const normalized = imgPath.replace(/^\/+/, "");
    const base = import.meta.env.BASE_URL || "/";
    return `${base.replace(/\/+$/, "")}/${normalized}`;
  };

  const hydratedCategories = (viewAllCategoriesData.categories || []).map(
    (c) => ({
      ...c,
      imageUrl: buildImageUrl(c.image),
      slug: slugify(c.name),
    })
  );

  const PRIMARY_COLOR = theme.colors.primary;

  return (
    <div className="w-full py-20 ">
      <div className="max-w-[1300px] mx-auto px-6">

        {/* Section Title */}
        <h2
          className="text-1xl md:text-3xl font-bold text-center mb-16 text-black uppercase tracking-tighter"
          style={{ fontFamily: theme.fonts.heading }}
        >
          {viewAllCategoriesData.header.title}
        </h2>

        {/* Categories Grid - 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hydratedCategories.map((category) => (
            <div
              key={category.id}
              className="relative group overflow-hidden rounded-sm shadow-lg h-[450px] transition-transform duration-500 hover:-translate-y-2"
            >
              {/* Background Image - Reverted to object-cover for consistency */}
              <img
                src={category.imageUrl}
                alt={category.name}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = `${import.meta.env.BASE_URL || "/"}assets/images/placeholder.png`;
                }}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient Overlay - Bottom to top */}
              <div
                className="absolute inset-0 flex flex-col justify-end items-center pb-8 p-6 text-center"
                style={{
                  background: `linear-gradient(to top, ${PRIMARY_COLOR} 0%, ${PRIMARY_COLOR}CC 20%, transparent 60%)`
                }}
              >
                {/* Category Name */}
                <h3
                  className="text-white text-xl md:text-2xl font-bold mb-4 uppercase drop-shadow-md"
                  style={{ fontFamily: theme.fonts.heading }}
                >
                  {category.name}
                </h3>

                {/* Read More Button */}
                <Link
                  to={`/category/${category.slug}`}
                  className="px-8 py-2.5 text-white text-sm font-bold uppercase rounded-md transition-all duration-300 shadow-md"
                  style={{
                    fontFamily: theme.fonts.body,
                    backgroundColor: theme.colors.secondary,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = theme.colors.secondary;
                    e.currentTarget.style.color = theme.colors.secText;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = theme.colors.secondary;
                    e.currentTarget.style.color = "white";
                  }}
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ViewAllCategories;
