// src/components/ProductShowcase/ProductShowcase.jsx
import React, { useState, useMemo } from "react";
import { productShowcaseData } from "../../../constants/productShowcase";
import { theme } from "../../../constants/theme";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const ProductShowcase = ({ page = true }) => {
  const [activeCategory, setActiveCategory] = useState(
    Object.keys(productShowcaseData.productCategories || {})[0] || ""
  );
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const buildImageUrl = (imgPath) => {
    if (!imgPath)
      return `${import.meta.env.BASE_URL || "/"}assets/images/ProductsBg.png`;
    if (/^https?:\/\//i.test(imgPath)) return imgPath;
    const normalized = imgPath.replace(/^\/+/, "");
    const base = import.meta.env.BASE_URL || "/";
    return `${base.replace(/\/+$/, "")}/${normalized}`;
  };

  const hydratedCategories = useMemo(
    () => productShowcaseData.productCategories || {},
    []
  );

  const allProducts = useMemo(
    () => Object.values(hydratedCategories).flat(),
    [hydratedCategories]
  );

  // Function to get product category
  const getProductCategory = (productId) => {
    for (const [categoryName, products] of Object.entries(hydratedCategories)) {
      if (products.some((product) => product.id === productId)) {
        return categoryName;
      }
    }
    return null;
  };

  const productsToDisplay = useMemo(() => {
    if (page) {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      return allProducts.slice(startIndex, endIndex);
    }
    const categoryProducts = hydratedCategories[activeCategory] || [];
    return categoryProducts.slice(0, 4);
  }, [allProducts, hydratedCategories, activeCategory, page, currentPage]);

  const totalProducts = page
    ? allProducts.length
    : hydratedCategories[activeCategory]?.length || 0;
  const totalPages = Math.max(1, Math.ceil(totalProducts / itemsPerPage));
  const shouldShowPagination = page && totalProducts > itemsPerPage;

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    const element = document.querySelector(".product-showcase-container");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
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
    if (!shouldShowPagination) return null;

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
            borderColor: theme.colors.primary,
            color: "white",
            backgroundColor: theme.colors.primary,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = theme.colors.primary;
            e.currentTarget.style.color = "white";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = theme.colors.primary;
            e.currentTarget.style.color = "white";
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
            borderColor: theme.colors.primary,
            backgroundColor: isActive ? theme.colors.primary : "white",
            color: isActive ? "white" : theme.colors.primary,
          }}
          onMouseEnter={(e) => {
            if (!isActive) {
              e.currentTarget.style.backgroundColor = theme.colors.primary;
              e.currentTarget.style.color = "white";
            }
          }}
          onMouseLeave={(e) => {
            if (!isActive) {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.color = theme.colors.primary;
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
            borderColor: theme.colors.primary,
            color: "white",
            backgroundColor: theme.colors.primary,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = theme.colors.primary;
            e.currentTarget.style.color = "white";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = theme.colors.primary;
            e.currentTarget.style.color = "white";
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

  return (
    <section
      className="product-showcase-container py-10 pt-13"
      style={{ fontFamily: theme.fonts.body }}
    >
      {/* HOME PAGE DESIGN */}
      {!page && (
        <div className="max-w-[87rem] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-10">
            <h2
              className="text-4xl font-extrabold tracking-tight mb-4 uppercase"
              style={{
                fontFamily: theme.fonts.heading,
                color: theme.colors.text,
              }}
            >
              {productShowcaseData.header.title}
            </h2>

            <p
              className="text-lg max-w-3xl mx-auto mb-8"
              style={{
                fontFamily: theme.fonts.body,
                color: "#4B5563",
              }}
            >
              {productShowcaseData.header.subtitle}
            </p>

            {/* Category Tabs - Directly in content */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {Object.keys(productShowcaseData.productCategories).map(
                (category) => {
                  const isActive = activeCategory === category;
                  return (
                    <button
                      key={category}
                      className="px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 cursor-pointer border-2"
                      style={{
                        backgroundColor: isActive
                          ? theme.colors.secondary
                          : "transparent",
                        color: isActive ? "white" : "#374151",
                        borderColor: isActive
                          ? theme.colors.secondary
                          : "#E5E7EB",
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.backgroundColor =
                            theme.colors.secondary;
                          e.currentTarget.style.color = "white";
                          e.currentTarget.style.borderColor =
                            theme.colors.secondary;
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.backgroundColor = "transparent";
                          e.currentTarget.style.color = "#374151";
                          e.currentTarget.style.borderColor = "#E5E7EB";
                        }
                      }}
                      onClick={() => handleCategoryChange(category)}
                    >
                      {category}
                    </button>
                  );
                }
              )}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 justify-items-center">
            {productsToDisplay.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                productCategory={getProductCategory(product.id)}
                buildImageUrl={buildImageUrl}
                getBadgeClasses={getBadgeClasses}
                page={true} // Forcing true here so it shows price and between layout as per screenshot
              />
            ))}
          </div>
        </div>
      )}

      {/* PRODUCTS PAGE DESIGN - Without Filters */}
      {page && (
        <div className="max-w-[87rem] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h2
              className="text-4xl font-bold tracking-tight mb-3"
              style={{
                fontFamily: theme.fonts.heading,
                color: theme.colors.primary,
              }}
            >
              {productShowcaseData.header.title}
            </h2>
            <div className="flex justify-center mb-4">
              <div
                className="h-1 w-40 rounded-full"
                style={{ backgroundColor: theme.colors.secondary }}
              ></div>
            </div>
            <p
              className="text-base max-w-3xl mx-auto mb-6"
              style={{
                fontFamily: theme.fonts.body,
                color: "#64748B",
              }}
            >
              {productShowcaseData.header.subtitle}
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8 place-items-center">
            {productsToDisplay.length > 0 ? (
              productsToDisplay.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  productCategory={getProductCategory(product.id)}
                  buildImageUrl={buildImageUrl}
                  getBadgeClasses={getBadgeClasses}
                  page={page}
                />
              ))
            ) : (
              <div className="col-span-full flex justify-center items-center py-20">
                <p className="text-lg text-gray-500">No products found.</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {renderPagination()}
        </div>
      )}

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
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
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

        @media (min-width: 1280px) {
          .grid.xl\\:grid-cols-4 > div {
            max-width: none;
          }
        }
      `}</style>
    </section>
  );
};

export default ProductShowcase;
