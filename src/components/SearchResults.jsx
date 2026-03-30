// src/pages/SearchResults.jsx
import React, { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { productShowcaseData } from "../../constants/productShowcase";
import { theme } from "../../constants/theme";
import ProductCard from "../components/Product/ProductCard";

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
    "Amazon's Choice": { bg: theme.colors.primary, text: theme.colors.secText },
    BSR: { bg: theme.colors.primary, text: theme.colors.secText },
    "#1 Best Seller": { bg: theme.colors.primary, text: theme.colors.secText },
  };
  return (
    badgeStyles[badge] || {
      bg: theme.colors.secondary,
      text: theme.colors.secText,
    }
  );
};

const flattenProducts = (categoriesObj) => {
  const out = [];
  for (const [category, items] of Object.entries(categoriesObj || {})) {
    for (const p of items) out.push({ ...p, __category: category });
  }
  return out;
};

export default function SearchResults() {
  const [params] = useSearchParams();
  const qRaw = params.get("q") || "";
  const q = qRaw.trim().toLowerCase();

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // reset page when query changes
  useEffect(() => setCurrentPage(1), [q]);

  const allProducts = useMemo(
    () => flattenProducts(productShowcaseData.productCategories),
    []
  );

  const results = useMemo(() => {
    if (!q) return [];

    // category match (partial)
    const matchedCategories = Object.keys(
      productShowcaseData.productCategories || {}
    ).filter((c) => c.toLowerCase().includes(q));

    // filter by:
    // - product name contains q
    // - description contains q
    // - category contains q (using matchedCategories)
    return allProducts.filter((p) => {
      const nameHit = String(p.name || "")
        .toLowerCase()
        .includes(q);
      const descHit = String(p.description || "")
        .toLowerCase()
        .includes(q);
      const catHit =
        matchedCategories.includes(p.__category) ||
        p.__category.toLowerCase().includes(q);
      return nameHit || descHit || catHit;
    });
  }, [q, allProducts]);

  const totalPages = Math.max(1, Math.ceil(results.length / itemsPerPage));
  const paged = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return results.slice(start, start + itemsPerPage);
  }, [results, currentPage]);

  const handlePageChange = (p) => {
    setCurrentPage(p);
    const el = document.querySelector(".search-results-container");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const renderPagination = () => {
    if (results.length <= itemsPerPage) return null;

    const pages = [];
    const maxVisible = 5;
    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let end = Math.min(totalPages, start + maxVisible - 1);
    if (end - start < maxVisible - 1) start = Math.max(1, end - maxVisible + 1);

    if (currentPage > 1) {
      pages.push(
        <button
          key="prev"
          onClick={() => handlePageChange(currentPage - 1)}
          className="px-3 py-2 mx-1 rounded-lg border transition-all duration-300 hover:transform hover:-translate-y-0.5 cursor-pointer"
          style={{
            borderColor: theme.colors.secondary,
            color: theme.colors.primary,
            backgroundColor: theme.colors.secondary,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = theme.colors.secondary;
            e.currentTarget.style.color = theme.colors.primary;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = theme.colors.secondary;
            e.currentTarget.style.color = theme.colors.primary;
          }}
        >
          ←
        </button>
      );
    }

    for (let i = start; i <= end; i++) {
      const active = i === currentPage;
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className="px-3 py-2 mx-1 rounded-lg border font-semibold transition-all duration-300 hover:transform hover:-translate-y-0.5 cursor-pointer"
          style={{
            borderColor: theme.colors.secondary,
            backgroundColor: active
              ? theme.colors.secondary
              : theme.colors.primary,
            color: active ? theme.colors.primary : theme.colors.secondary,
          }}
          onMouseEnter={(e) => {
            if (!active) {
              e.currentTarget.style.backgroundColor = theme.colors.secondary;
              e.currentTarget.style.color = theme.colors.primary;
            }
          }}
          onMouseLeave={(e) => {
            if (!active) {
              e.currentTarget.style.backgroundColor = theme.colors.secondary;
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
            borderColor: theme.colors.secondary,
            color: theme.colors.primary,
            backgroundColor: theme.colors.secondary,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = theme.colors.secondary;
            e.currentTarget.style.color = theme.colors.primary;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = theme.colors.secondary;
            e.currentTarget.style.color = theme.colors.primary;
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
    <section className="search-results-container py-10 pt-4 font-['Poppins']">
      <div className="max-w-[87rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2
            className="text-4xl font-bold tracking-tight mb-3"
            style={{
              fontFamily: theme.fonts.heading,
              color: theme.colors.text,
            }}
          >
            Search Results
          </h2>
          <p
            className="text-sm"
            style={{ fontFamily: theme.fonts.body, color: "#64748B" }}
          >
            {q ? (
              <>
                Showing results for <strong>"{qRaw}"</strong> — {results.length}{" "}
                item
                {results.length === 1 ? "" : "s"}
              </>
            ) : (
              "Type something in the search bar to see results."
            )}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
          {q && paged.length > 0 ? (
            paged.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                productCategory={product.__category}
                buildImageUrl={buildImageUrl}
                getBadgeClasses={getBadgeClasses}
              />
            ))
          ) : q ? (
            <div className="col-span-full flex justify-center items-center py-20">
              <p className="text-lg text-gray-500">
                No products matched "<strong>{qRaw}</strong>".
              </p>
            </div>
          ) : (
            <div className="col-span-full flex justify-center items-center py-20">
              <p className="text-lg text-gray-500">Start a search above.</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {q && renderPagination()}
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
      `}</style>
    </section>
  );
}
