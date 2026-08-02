import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logos/horizontal-logo2.png";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about" },
    { name: "PRODUCTS", path: "/products" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isSticky ? "bg-[#e7e7e9] shadow-md" : "bg-white/90 backdrop-blur-md md:bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-2 sm:py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            className="h-12 sm:h-16 md:h-20 w-auto object-contain"
            src={logo}
            alt="geffron logo"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 lg:gap-12">
            {navItems.map((nav, i) => (
              <Link key={i} to={nav.path}>
                <li className="relative overflow-hidden h-6 cursor-pointer group px-1">
                  {/* Default text (slides up) */}
                  <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full font-medium text-sm lg:text-base text-gray-800">
                    {nav.name}
                  </span>

                  {/* Hover text (comes from bottom) */}
                  <span className="block left-0 top-full transition-transform duration-300 ease-in-out group-hover:-translate-y-full font-semibold text-sm lg:text-base text-[#7C241F]">
                    {nav.name}
                  </span>
                </li>
              </Link>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2.5 text-gray-800 focus:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-black/5"
        >
          {mobileMenuOpen ? (
            <FaTimes className="text-2xl text-[#7C241F]" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Navigation with Smooth Animation */}
      <nav
        className={`md:hidden bg-[#e7e7e9] border-b border-gray-300 transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen
            ? "max-h-80 opacity-100 py-4 px-6 shadow-lg"
            : "max-h-0 opacity-0 py-0 px-6 border-b-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col space-y-1">
          {navItems.map((nav, i) => (
            <Link
              key={i}
              to={nav.path}
              onClick={() => setMobileMenuOpen(false)}
            >
              <li
                className={`py-3 px-4 rounded-lg font-semibold text-gray-800 hover:bg-[#7C241F] hover:text-white transition-all duration-300 min-h-[44px] flex items-center transform ${
                  mobileMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-2 opacity-0"
                }`}
                style={{ transitionDelay: `${mobileMenuOpen ? i * 60 + 50 : 0}ms` }}
              >
                {nav.name}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
