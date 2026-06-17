import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black/80 text-white mt-0 border-t">
      <div className="max-w-screen-xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold tracking-widest">GEFFRON</h2>
          <p className="text-white mt-4 text-sm">
            Eco-friendly products crafted for a sustainable future.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-white ">
            <li className="hover:text-green-600 cursor-pointer">Home</li>
            <li className="hover:text-green-600 cursor-pointer">About Us</li>
            <li className="hover:text-green-600 cursor-pointer">Products</li>
            <li className="hover:text-green-600 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="font-semibold mb-4">Products</h3>
          <ul className="space-y-2 text-white ">
            <li className="hover:text-green-600 cursor-pointer">Bags</li>
            <li className="hover:text-green-600 cursor-pointer">Agarbatti</li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>

          <p className="text-white ">📞 +91 98765 43210</p>
          <p className="text-white mt-1">✉ info@geffron.com</p>

          {/* Social Initial Icons */}
          <div className="flex gap-3 mt-5">
            <a
              href="#"
              className="text-black w-9 h-9 flex items-center justify-center rounded-full bg-white shadow text-sm font-semibold hover:bg-blue-600 hover:text-white transition"
            >
              FB
            </a>

            <a
              href="#"
              className="text-black w-9 h-9 flex items-center justify-center rounded-full bg-white shadow text-sm font-semibold hover:bg-pink-500 hover:text-white transition"
            >
              IG
            </a>

            <a
              href="#"
              className="text-black w-9 h-9 flex items-center justify-center rounded-full bg-white shadow text-sm font-semibold hover:bg-red-500 hover:text-white transition"
            >
              YT
            </a>

            <a
              href="#"
              className="text-black w-9 h-9 flex items-center justify-center rounded-full bg-white shadow text-sm font-semibold hover:bg-blue-500 hover:text-white transition"
            >
              LI
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center py-5 border-t text-gray-500 text-sm">
        © {new Date().getFullYear()} Geffron. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
