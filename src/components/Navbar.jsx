import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { navbar } from "../../constants/navbar";
import { theme } from "../../constants/theme";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import WebsiteLogo from "/assets/images/website-logo.png";

export default function Navbar() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  // const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSideNav = () => setIsSideNavOpen(!isSideNavOpen);
  const closeSideNav = () => setIsSideNavOpen(false);

  const goToSearch = () => {
    const q = searchQuery.trim();
    if (!q) return;
    navigate(`/search?q=${encodeURIComponent(q)}`);
    setSearchQuery("");
    setIsSideNavOpen(false);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") goToSearch();
  };

  const PURPLE = theme.colors.primary;
  const PURPLE_DARK = theme.colors.accent;

  return (
    <>
      {/* Purple Top Contact Bar - Scrolls away */}
      <div
        className="bg-blue-800 text-white py-2 text-sm relative z-[1100]"
        style={{ backgroundColor: PURPLE }}
      >
        <div className="max-w-[1500px] mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10">
          <a href={`tel:${navbar.contact.phone}`} className="hover:underline flex items-center gap-2">
            <FiPhone size={14} /> {navbar.contact.phone}
          </a>
          <a
            href={`mailto:${navbar.contact.email}`}
            className="hover:underline flex items-center gap-2"
          >
            <FiMail size={14} /> {navbar.contact.email}
          </a>
          {/* <div className="flex items-center gap-2">
            <FiMapPin size={14} /> {navbar.contact.address}
          </div> */}
        </div>
      </div>

      {/* Main Navbar - Sticky when scrolled */}
      <header
        className={`bg-white shadow-md transition-all duration-300 z-[1000] w-full ${scrolled ? "fixed top-0 left-0 right-0" : "relative"
          }`}
      >
        <div className="max-w-[1500px] mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="inline-block">
                <img
                  src={WebsiteLogo}
                  alt="Barginnest Distribution Logo"
                  className="h-13 md:h-15 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Desktop Navigation - Increased Gap */}
            <nav className="hidden lg:flex items-center justify-center flex-1 gap-10 xl:gap-16">
              {navbar.links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative font-semibold text-base xl:text-lg transition-colors duration-200 group pb-2 ${isActive ? "text-primary active" : "text-gray-800"
                    }`
                  }
                  style={({ isActive }) => ({
                    fontFamily: theme.fonts.heading,
                    color: isActive ? theme.colors.primary : "#1F2937",
                  })}
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-current transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                          }`}
                        style={{ backgroundColor: theme.colors.primary }}
                      ></span>
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Contact Us Button */}
            <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
              <Link
                to="/contact-us"
                className="px-8 py-2.5 rounded-lg font-semibold text-white transition hover:opacity-90 shadow-lg"
                style={{ backgroundColor: theme.colors.secondary }}
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden flex flex-col gap-1.5 cursor-pointer"
              onClick={toggleSideNav}
              aria-label="Toggle menu"
            >
              {[1, 2, 3].map((_, i) => (
                <span
                  key={i}
                  className={`w-7 h-0.5 bg-blue-800 block transition-all duration-300 ${isSideNavOpen
                    ? i === 0
                      ? "rotate-45 translate-y-2"
                      : i === 1
                        ? "opacity-0"
                        : "-rotate-45 -translate-y-2"
                    : ""
                    }`}
                  style={{ backgroundColor: PURPLE }}
                />
              ))}
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-[999] transition-opacity duration-300 lg:hidden ${isSideNavOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
        onClick={closeSideNav}
      />

      {/* Mobile Side Drawer */}
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-white z-[1050] shadow-2xl p-6 flex flex-col transform transition-transform duration-300 lg:hidden ${isSideNavOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center mb-8">
          <img
            src={WebsiteLogo}
            alt="Barginnest Distribution Logo"
            className="h-10 w-auto object-contain"
          />
          <button
            onClick={closeSideNav}
            className="text-4xl font-light"
            style={{ color: PURPLE }}
          >
            ×
          </button>
        </div>

        <nav className="flex flex-col gap-5 mb-auto">
          {navbar.links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeSideNav}
              className={({ isActive }) =>
                `text-lg font-semibold border-b border-gray-100 pb-3 transition-colors ${isActive ? "text-primary" : "text-gray-800"
                }`
              }
              style={({ isActive }) => ({
                color: isActive ? theme.colors.primary : "#374151",
              })}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-10">
          <Link
            to="/contact-us"
            onClick={closeSideNav}
            className="block w-full py-3 px-6 text-center text-white font-semibold rounded-lg mb-6 shadow-md"
            style={{ backgroundColor: PURPLE }}
          >
            Contact Us
          </Link>

          {/* Mobile Search */}
          {/* <div className="relative">
            <FiSearch
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              size={18}
            />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={onKeyDown}
              className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-600 text-sm"
            />
          </div> */}
        </div>
      </div>

      {/* Spacer so content doesn't jump when fixed navbar appears */}
      {scrolled && <div className="h-24" aria-hidden="true" />}
    </>
  );
}
