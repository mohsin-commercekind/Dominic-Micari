// src/pages/CategoryProducts.jsx
import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { productShowcaseData } from "../../../constants/productShowcase";
import { theme } from "../../../constants/theme";
import { slugify } from "../../utils/slugify";
import ProductCard from "./ProductCard";

const CategoryProducts = () => {
  const { slug } = useParams();

  const categoryName = useMemo(() => {
    const keys = Object.keys(productShowcaseData.productCategories || {});
    return keys.find((k) => slugify(k) === slug) || null;
  }, [slug]);

  const products = useMemo(() => {
    if (!categoryName) return [];
    return productShowcaseData.productCategories[categoryName] || [];
  }, [categoryName]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Changed to match ProductShowcase
  const totalPages = Math.max(1, Math.ceil(products.length / itemsPerPage));
  const paged = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (p) => {
    setCurrentPage(p);
    const el = document.querySelector(".category-products-container");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const buildImageUrl = (imgPath) => {
    if (!imgPath)
      return `${import.meta.env.BASE_URL || "/"}assets/images/placeholder.png`;
    if (/^https?:\/\//i.test(imgPath)) return imgPath;
    const normalized = imgPath.replace(/^\/+/, "");
    const base = import.meta.env.BASE_URL || "/";
    return `${base.replace(/\/+$/, "")}/${normalized}`;
  };

  const getBadgeClasses = (badge) => {
    const badgeStyles = {
      "Amazon's Choice": {
        bg: theme.colors.secondary,
        text: theme.colors.primary,
      },
      BSR: { bg: theme.colors.secondary, text: theme.colors.primary },
      "#1 Best Seller": {
        bg: theme.colors.secondary,
        text: theme.colors.primary,
      },
    };

    return (
      badgeStyles[badge] || {
        bg: theme.colors.secondary,
        text: theme.colors.primary,
      }
    );
  };

  const renderPagination = () => {
    if (products.length <= itemsPerPage) return null;

    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    if (currentPage > 1) {
      pages.push(
        <button
          key="prev"
          onClick={() => handlePageChange(currentPage - 1)}
          className="px-3 py-2 mx-1 rounded-lg border transition-all duration-300 hover:transform hover:-translate-y-0.5 cursor-pointer"
          style={{
            borderColor: theme.colors.secondary,
            color: theme.colors.secondary,
            backgroundColor: theme.colors.secText,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = theme.colors.secondary;
            e.currentTarget.style.color = theme.colors.secText;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = theme.colors.secText;
            e.currentTarget.style.color = theme.colors.secondary;
          }}
        >
          ←
        </button>
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      const isActive = i === currentPage;
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className="px-3 py-2 mx-1 rounded-lg border font-semibold transition-all duration-300 hover:transform hover:-translate-y-0.5 cursor-pointer"
          style={{
            borderColor: theme.colors.secondary,
            backgroundColor: isActive
              ? theme.colors.secondary
              : theme.colors.secText,
            color: isActive ? theme.colors.secText : theme.colors.secondary,
          }}
          onMouseEnter={(e) => {
            if (!isActive) {
              e.currentTarget.style.backgroundColor = theme.colors.secondary;
              e.currentTarget.style.color = theme.colors.secText;
            }
          }}
          onMouseLeave={(e) => {
            if (!isActive) {
              e.currentTarget.style.backgroundColor = theme.colors.secText;
              e.currentTarget.style.color = theme.colors.secondary;
            }
          }}
        >
          {i}
        </button>
      );
    }

    if (currentPage < totalPages) {
      pages.push(
        <button
          key="next"
          onClick={() => handlePageChange(currentPage + 1)}
          className="px-3 py-2 mx-1 rounded-lg border transition-all duration-300 hover:transform hover:-translate-y-0.5 cursor-pointer"
          style={{
            borderColor: theme.colors.secondary,
            color: theme.colors.secondary,
            backgroundColor: theme.colors.secText,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = theme.colors.secondary;
            e.currentTarget.style.color = theme.colors.secText;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = theme.colors.secText;
            e.currentTarget.style.color = theme.colors.secondary;
          }}
        >
          →
        </button>
      );
    }

    return (
      <div className="flex justify-center items-center gap-2 mt-8">
        {pages}
        <span className="ml-4 text-sm text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
      </div>
    );
  };

  if (!categoryName) {
    return (
      <section className="category-products-container py-20 px-8">
        <h2
          className="text-3xl font-bold md:text-center"
          style={{ fontFamily: theme.fonts.heading, color: theme.colors.text }}
        >
          Category not found
        </h2>
      </section>
    );
  }

  return (
    <section className="category-products-container relative py-10 pt-18 font-['Poppins'] overflow-hidden min-h-screen">
      <div className="max-w-[87rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2
            className="text-4xl font-bold tracking-tight mb-4 uppercase"
            style={{
              fontFamily: theme.fonts.heading,
              color: theme.colors.secondary,
            }}
          >
            {categoryName}
          </h2>
          <div
            className="w-24 h-1 mx-auto rounded-full mb-4"
            style={{ backgroundColor: theme.colors.secondary }}
          />
          <p
            className="text-sm max-w-2xl mx-auto"
            style={{
              fontFamily: theme.fonts.body,
              color: "#64748B",
            }}
          >
            Explore our curated collection of {categoryName.toLowerCase()}{" "}
            products
          </p>
        </div>

        {/* Products Grid - Using same grid as ProductShowcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
          {paged.length > 0 ? (
            paged.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                productCategory={categoryName}
                buildImageUrl={buildImageUrl}
                getBadgeClasses={getBadgeClasses}
                page={true}
              />
            ))
          ) : (
            <div className="col-span-full flex justify-center items-center py-20">
              <p className="text-lg text-gray-500">
                No products found in this category.
              </p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {renderPagination()}
      </div>

      <style>{`
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .title-ellipsis {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        @media (prefers-reduced-motion: reduce) {
          * { 
            animation-duration: 0.01ms !important; 
            animation-iteration-count: 1 !important; 
            transition-duration: 0.01ms !important; 
          }
          .hover\\:transform:hover { transform: none !important; }
          .hover\\:scale-105:hover { transform: none !important; }
        }

        /* Responsive adjustments for smaller cards */
        @media (min-width: 1280px) {
          .grid.xl\\:grid-cols-4 > div {
            max-width: none;
          }
        }
      `}</style>
    </section>
  );
};

export default CategoryProducts;
