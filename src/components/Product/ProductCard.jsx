// src/components/ProductCard/ProductCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { theme } from "../../../constants/theme";

const ProductCard = ({
  product,
  productCategory,
  buildImageUrl,
  getBadgeClasses,
  page,
}) => {
  const navigate = useNavigate();

  if (!product) return null;

  const imgUrl = buildImageUrl(product.image);
  const badgeStyle = getBadgeClasses(product.badge);

  return (
    <div
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100
             transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg
             group relative w-full"
      style={{ maxHeight: "450px", maxWidth: "320px" }}
    >
      {/* Amazon Badge - Always visible without hover */}
      {product.badge && (
        <div
          className="absolute top-3 left-3 px-2 py-1 rounded-lg text-xs font-medium z-20 shadow-sm"
          style={{
            backgroundColor: badgeStyle.secondary,
            color: badgeStyle.primary,
          }}
        >
          {product.badge}
        </div>
      )}

      {/* Product Image */}
      <div className="relative h-58 p-3">
        <img
          src={imgUrl}
          alt={product.name}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = `${import.meta.env.BASE_URL || "/"
              }assets/images/placeholder.png`;
          }}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Category Badge above title */}
        {productCategory && (
          <div className="mb-2">
            <span
              className="inline-block px-2 py-0.5 rounded-full text-xs font-medium"
              style={{
                backgroundColor: theme.colors.secondary + "15",
                color: theme.colors.secondary,
                border: `1px solid ${theme.colors.secondary}30`,
              }}
            >
              {productCategory}
            </span>
          </div>
        )}

        {/* Product Title - Single line with ellipsis */}
        <h3
          className="font-bold text-md mb-1 line-clamp-1 title-ellipsis"
          style={{
            fontFamily: theme.fonts.heading,
            color: theme.colors.text,
          }}
          title={product.name}
        >
          {product.name}
        </h3>

        <p
          className="text-xs text-gray-600 mb-3 line-clamp-2"
          style={{ fontFamily: theme.fonts.body }}
        >
          {product.description}
        </p>

        {/* Price and Button */}
        {/* Price & Button */}
        <div
          className={`flex items-center ${page ? "justify-between" : "justify-center"
            }`}
        >
          {page && (
            <div
              className="text-base font-bold"
              style={{ color: theme.colors.text }}
            >
              {product.price}
            </div>
          )}

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/product/${product.id}`);
            }}
            className="min-w-[160px] px-6 py-2 rounded-lg font-medium text-xs transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            style={{
              backgroundColor: theme.colors.secondary,
              color: 'white',
              fontFamily: theme.fonts.body,
            }}
          >
            View Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
