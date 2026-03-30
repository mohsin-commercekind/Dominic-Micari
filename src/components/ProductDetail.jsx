// src/components/layout/ProductDetail.jsx
import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { productShowcaseData } from "../../constants/productShowcase";
import { theme } from "../../constants/theme";

// Reuse-safe image URL builder (matches your pattern)
const buildImageUrl = (imgPath) => {
  if (!imgPath)
    return `${import.meta.env.BASE_URL || "/"}assets/images/placeholder.png`;
  if (/^https?:\/\//i.test(imgPath)) return imgPath;
  const normalized = imgPath.replace(/^\/+/, "");
  const base = import.meta.env.BASE_URL || "/";
  return `${base.replace(/\/+$/, "")}/${normalized}`;
};

const parseRating = (r) => {
  if (typeof r === "number") return r;
  const m = String(r).match(/(\d+(\.\d+)?)/);
  return m ? parseFloat(m[1]) : 0;
};

const getBadgeStyles = (badge) =>
  !badge
    ? {}
    : {
        backgroundImage: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
      };

const ProductDetail = () => {
  const { id } = useParams();

  // find product by id across all categories
  const { product } = useMemo(() => {
    const cats = productShowcaseData.productCategories || {};
    for (const items of Object.values(cats)) {
      const found = items.find((p) => String(p.id) === String(id));
      if (found) return { product: found };
    }
    return { product: null };
  }, [id]);

  if (!product) {
    return (
      <div className="max-w-5xl mx-auto p-6 font-['Poppins']">
        <h1 className="text-xl font-semibold mb-2">Product not found</h1>
        <Link to="/products" className="text-blue-600 underline">
          Back to products
        </Link>
      </div>
    );
  }

  const ratingNum = parseRating(product.rating);
  const imgUrl = buildImageUrl(product.image);

  return (
    <div className="max-w-6xl mx-auto p-6 font-['Poppins'] mt-15">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Image */}
        <div className="w-full">
          <div
            className="relative product-image overflow-hidden rounded-2xl shadow bg-white"
            style={{ aspectRatio: "4 / 3" }}
          >
            <img
              src={imgUrl}
              alt={product.name}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = `${
                  import.meta.env.BASE_URL || "/"
                }assets/images/placeholder.png`;
              }}
              className="absolute inset-0 w-full h-full object-contain p-3"
            />
          </div>
        </div>

        {/* Info */}
        <div className="space-y-4">
          {product.badge && (
            <span
              className="inline-block text-xs font-bold text-white px-3 py-1 rounded-full uppercase tracking-wider"
              style={getBadgeStyles(product.badge)}
            >
              {product.badge}
            </span>
          )}

          <h1
            className="text-3xl font-bold leading-snug"
            style={{
              color: theme.colors.text,
              fontFamily: theme.fonts.heading,
            }}
          >
            {product.name}
          </h1>

          <div className="flex items-center gap-3">
            <div>
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={`text-2xl ${
                    i < Math.floor(ratingNum)
                      ? "text-[#adaab3]"
                      : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-sm text-gray-600">({product.rating})</span>
          </div>

          <div
            className="text-2xl font-extrabold tracking-tight"
            style={{ color: theme.colors.text }}
          >
            {product.price}
          </div>

          <p className="text-gray-700 leading-relaxed">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
