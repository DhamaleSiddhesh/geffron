import React from "react";
import footerLogo from "../../assets/images/logos/footer-logo.png";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black/80 text-white border-t border-gray-800">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
        {/* Brand */}
        <div className="flex flex-col items-start">
          <Link to="/">
            <img
              src={footerLogo}
              alt="Geffron Logo"
              className="h-20 sm:h-24 md:h-28 w-auto object-contain"
            />
          </Link>
          <p className="text-gray-400 text-sm mt-3 leading-relaxed max-w-xs">
            Crafting premium Agarbatti and durable Bags with dedication to quality, purity, and excellence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-base sm:text-lg mb-4 text-white uppercase tracking-wider">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="inline-block py-1 hover:text-[#B32922] transition-colors cursor-pointer text-sm sm:text-base text-gray-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="inline-block py-1 hover:text-[#B32922] transition-colors cursor-pointer text-sm sm:text-base text-gray-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="inline-block py-1 hover:text-[#B32922] transition-colors cursor-pointer text-sm sm:text-base text-gray-300"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="inline-block py-1 hover:text-[#B32922] transition-colors cursor-pointer text-sm sm:text-base text-gray-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="font-semibold text-base sm:text-lg mb-4 text-white uppercase tracking-wider">
            Products
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/products"
                className="inline-block py-1 hover:text-[#B32922] transition-colors cursor-pointer text-sm sm:text-base text-gray-300"
              >
                Bags
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="inline-block py-1 hover:text-[#B32922] transition-colors cursor-pointer text-sm sm:text-base text-gray-300"
              >
                Agarbatti
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-base sm:text-lg mb-4 text-white uppercase tracking-wider">
            Contact Us
          </h3>

          <div className="space-y-3 text-sm sm:text-base text-gray-300">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className=" text-sm shrink-0" />
              <a href="tel:+917977447864" className="hover:text-white transition-colors">
                +91 7977447864
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className=" text-sm shrink-0" />
              <a href="mailto:info@geffron.com" className="hover:text-white transition-colors break-all">
                info@geffron.com
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="#"
              aria-label="Facebook"
              className="w-11 h-11 rounded-full border border-gray-600 flex items-center justify-center hover:bg-[#1877F2] hover:border-[#1877F2] transition-all duration-300 min-w-[44px] min-h-[44px]"
            >
              <FaFacebookF className="text-white text-base" />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="w-11 h-11 rounded-full border border-gray-600 flex items-center justify-center hover:bg-[#E4405F] hover:border-[#E4405F] transition-all duration-300 min-w-[44px] min-h-[44px]"
            >
              <FaInstagram className="text-white text-base" />
            </a>

            <a
              href="#"
              aria-label="YouTube"
              className="w-11 h-11 rounded-full border border-gray-600 flex items-center justify-center hover:bg-[#FF0000] hover:border-[#FF0000] transition-all duration-300 min-w-[44px] min-h-[44px]"
            >
              <FaYoutube className="text-white text-base" />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="w-11 h-11 rounded-full border border-gray-600 flex items-center justify-center hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all duration-300 min-w-[44px] min-h-[44px]"
            >
              <FaLinkedinIn className="text-white text-base" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-5 text-center text-xs sm:text-sm text-gray-400 px-4">
        © {new Date().getFullYear()} Geffron. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;