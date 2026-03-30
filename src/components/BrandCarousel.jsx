import React, { useState, useEffect, useRef } from "react";
import {
  brandLogos,
  brandCarouselConfig as cfg,
} from "../../constants/brandCarousel";
import { theme } from "../../constants/theme";

export default function BrandCarousel({
  speed = 3500,
  reverse = false,
  showTitle = true,
  title = "Featured Brands",
  logos = brandLogos,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const carouselRef = useRef(null);

  // Split title to style the last word
  const titleParts = title.split(" ");
  const lastWord = titleParts.pop();
  const mainTitle = titleParts.join(" ");

  const buildImageUrl = (imgPath) => {
    if (!imgPath)
      return `${import.meta.env.BASE_URL || "/"}assets/images/placeholder.png`;
    if (/^https?:\/\//i.test(imgPath)) return imgPath;
    const normalized = imgPath.replace(/^\/+/, "");
    const base = import.meta.env.BASE_URL || "/";
    return `${base.replace(/\/+$/, "")}/${normalized}`;
  };

  const getResponsiveValues = () => {
    if (typeof window === "undefined") return { slideWidth: 280, gap: 50 };

    const width = window.innerWidth;

    if (width <= 320) return { slideWidth: 160, gap: 25 };
    if (width <= 428) return { slideWidth: 180, gap: 30 };
    if (width <= 506) return { slideWidth: 200, gap: 35 };
    if (width <= 632) return { slideWidth: 220, gap: 40 };
    if (width <= 770) return { slideWidth: 240, gap: 45 };
    if (width <= 1518) return { slideWidth: 260, gap: 50 };
    return { slideWidth: 280, gap: 50 };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (reverse ? prevIndex - 1 : prevIndex + 1));
    }, speed);

    return () => clearInterval(interval);
  }, [speed, reverse]);

  useEffect(() => {
    if (!reverse && currentIndex >= logos.length) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);

        setTimeout(() => {
          setIsTransitioning(true);
        }, 50);
      }, 700);

      return () => clearTimeout(timer);
    }

    if (reverse && currentIndex <= -logos.length) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);

        setTimeout(() => {
          setIsTransitioning(true);
        }, 50);
      }, 700);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, reverse, logos.length]);

  const extendedLogos = reverse
    ? [...logos, ...logos, ...logos]
    : [...logos, ...logos, ...logos];

  const getTransform = () => {
    const { slideWidth, gap } = getResponsiveValues();
    const totalSlideWidth = slideWidth + gap;
    // Offset by one length if reversing to avoid starting at the very beginning
    const baseIndex = reverse ? currentIndex - logos.length : currentIndex;
    return `translateX(-${baseIndex * totalSlideWidth}px)`;
  };

  const { gap } = getResponsiveValues();

  return (
    <section className={`w-full px-6 overflow-hidden relative ${showTitle ? "py-16 md:py-24" : "py-5"}`}>
      {/* Heading */}
      {showTitle && (
        <div className="text-center pb-16 relative">
          <h2
            className="text-4xl font-bold tracking-tight inline-block uppercase
            max-[632px]:text-3xl max-[506px]:text-2xl"
            style={{
              fontFamily: theme.fonts.heading,
            }}
          >
            {mainTitle}{" "}
            <span
              className="relative inline-block pb-2"
              style={{ color: theme.colors.primary }}
            >
              {lastWord}
              <span
                className="absolute bottom-0 left-0 w-full h-1 rounded-full"
                style={{ backgroundColor: theme.colors.secondary }}
              ></span>
            </span>
          </h2>
        </div>
      )}

      {/* Carousel */}
      <div
        className="w-full overflow-hidden relative"
        style={{ height: "180px" }}
      >
        <div
          ref={carouselRef}
          className="flex w-max will-change-transform h-full items-center"
          style={{
            transform: getTransform(),
            gap: `${gap}px`,
            transition: isTransitioning
              ? "transform 700ms cubic-bezier(0.4, 0, 0.2, 1)"
              : "none",
          }}
        >
          {extendedLogos.map((logo, i) => {
            const src = buildImageUrl(logo.src);
            const { slideWidth } = getResponsiveValues();

            return (
              <div
                key={`brand-${i}`}
                className="flex-none h-full flex items-center justify-center cursor-pointer"
                style={{ width: `${slideWidth}px` }}
              >
                <div
                  className="relative w-full h-[150px] flex items-center justify-center
                  transition-transform duration-300 ease-out
                  hover:scale-110"
                >
                  <img
                    src={src}
                    alt={logo.alt || `brand-${i}`}
                    loading="eager"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = `${import.meta.env.BASE_URL || "/"
                        }assets/images/placeholder.png`;
                    }}
                    className="max-w-full max-h-full object-contain relative z-10
                      opacity-100
                      transition-opacity duration-300
                      drop-shadow-sm"
                    style={{ maxWidth: "85%", maxHeight: "85%" }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .transition-transform,
          .transition-opacity {
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
