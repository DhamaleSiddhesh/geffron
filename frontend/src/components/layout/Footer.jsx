import React from "react";
import footerLogo from "../../assets/images/logos/footer-logo.png";
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
    <footer className="bg-black/80 text-white border-t">
      <div className="max-w-screen-xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <img
            src={footerLogo}
            alt="Geffron Logo"
            className="h-32 w-auto"
          />
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li className="hover:text-[#B32922] transition-colors cursor-pointer">
              Home
            </li>
            <li className="hover:text-[#B32922] transition-colors cursor-pointer">
              About Us
            </li>
            <li className="hover:text-[#B32922] transition-colors cursor-pointer">
              Products
            </li>
            <li className="hover:text-[#B32922] transition-colors cursor-pointer">
              Contact
            </li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Products</h3>
          <ul className="space-y-3">
            <li className="hover:text-[#B32922] transition-colors cursor-pointer">
              Bags
            </li>
            <li className="hover:text-[#B32922] transition-colors cursor-pointer">
              Agarbatti
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact</h3>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-white text-sm" />
              <p>+91 98765 43210</p>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-white text-sm" />
              <p>info@geffron.com</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-[#1877F2] hover:border-[#1877F2] transition-all duration-300"
            >
              <FaFacebookF className="text-white" />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-[#E4405F] hover:border-[#E4405F] transition-all duration-300"
            >
              <FaInstagram className="text-white" />
            </a>

            <a
              href="#"
              aria-label="YouTube"
              className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-[#FF0000] hover:border-[#FF0000] transition-all duration-300"
            >
              <FaYoutube className="text-white" />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all duration-300"
            >
              <FaLinkedinIn className="text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 py-5 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Geffron. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;