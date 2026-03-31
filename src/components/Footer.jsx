import React from "react";
import { Link } from "react-router-dom";
import { theme } from "../../constants/theme";
import { footerData } from "../../constants/FooterData";
import frame1 from "/assets/images/website-logo.png";
import {
  faPhone,
  faEnvelope,
  // faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="w-full border-t border-gray-100" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 sm:gap-10 md:gap-12 lg:gap-10 xl:gap-16 max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14">
          {/* Footer Part 1 - Logo and Description */}
          <div className="text-left leading-relaxed w-full lg:max-w-[450px] xl:max-w-[520px] flex flex-col items-start">
            <div className="mb-2">
              <Link to={footerData.logo.link}>
                <img
                  className="w-auto h-[100px]"
                  src={frame1}
                  alt={footerData.logo.alt}
                />
              </Link>
            </div>
            <p
              className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl leading-7 sm:leading-8 md:leading-9 lg:leading-8 xl:leading-9"
              style={{
                fontFamily: theme.fonts.heading,
                color: "#1F2937",
              }}
            >
              {footerData.description}
            </p>
          </div>

          {/* Footer Part 2 - Quick Menu */}
          <div className="flex flex-col items-start pt-0 lg:pt-8 w-full lg:w-auto">
            <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 leading-relaxed">
              <h4
                className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-2xl font-bold whitespace-nowrap mb-1"
                style={{
                  fontFamily: theme.fonts.heading,
                  color: "#1F2937",
                }}
              >
                {footerData.quickMenu.title}
              </h4>
              {footerData.quickMenu.links.map((link) => (
                <Link key={link.id} to={link.href}>
                  <p
                    className="no-underline transition-colors duration-500 ease-in-out font-normal text-base sm:text-lg md:text-xl lg:text-lg xl:text-lg leading-5 sm:leading-6 hover:cursor-pointer"
                    style={{
                      fontFamily: theme.fonts.heading,
                      color: "#1F2937",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.color = theme.colors.primary)
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.color = "#1F2937")
                    }
                  >
                    {link.label}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Part 3 - Categories */}
          <div className="flex flex-col items-start pt-0 lg:pt-8 w-full lg:w-auto">
            <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 leading-relaxed">
              <h4
                className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-2xl font-bold whitespace-nowrap mb-1"
                style={{
                  fontFamily: theme.fonts.heading,
                  color: "#1F2937",
                }}
              >
                {footerData.Categories.title}
              </h4>
              {footerData.Categories.links.map((link) => (
                <Link key={link.id} to={link.href}>
                  <p
                    className="no-underline transition-colors duration-500 ease-in-out font-normal text-base sm:text-lg md:text-xl lg:text-lg xl:text-lg leading-5 sm:leading-6 hover:cursor-pointer"
                    style={{
                      fontFamily: theme.fonts.heading,
                      color: "#1F2937",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.color = theme.colors.primary)
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.color = "#1F2937")
                    }
                  >
                    {link.label}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Part 4 - Contact Info */}
          <div className="flex flex-col pt-0 lg:pt-8 gap-5 md:gap-6 leading-relaxed w-full lg:max-w-[320px] xl:max-w-[360px]">
            {/* Phone */}
            <div className="space-y-2">
              <h4
                className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-xl xl:text-2xl leading-relaxed"
                style={{
                  fontFamily: theme.fonts.heading,
                  color: "#1F2937",
                }}
              >
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                {footerData.contact.phone.title}
              </h4>
              <p
                className="text-base sm:text-lg md:text-xl lg:text-base xl:text-lg"
                style={{
                  color: "#1F2937",
                }}
              >
                {footerData.contact.phone.value}
              </p>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <h4
                className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-xl xl:text-2xl leading-relaxed"
                style={{
                  fontFamily: theme.fonts.heading,
                  color: "#1F2937",
                }}
              >
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                {footerData.contact.email.title}
              </h4>
              <p
                className="text-base sm:text-lg md:text-xl lg:text-base xl:text-lg"
                style={{
                  color: "#1F2937",
                }}
              >
                {footerData.contact.email.value}
              </p>
            </div>

            {/* Address */}
            {/* <div className="space-y-2">
              <h4
                className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-xl xl:text-2xl leading-relaxed"
                style={{
                  fontFamily: theme.fonts.heading,
                  color: "#1F2937",
                }}
              >
                <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                {footerData.contact.address.title}
              </h4>
              <p
                className="text-base sm:text-lg md:text-xl lg:text-base xl:text-lg"
                style={{
                  color: "#1F2937",
                }}
              >
                {footerData.contact.address.value}
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
