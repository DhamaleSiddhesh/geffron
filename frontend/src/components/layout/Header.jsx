import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logos/main-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = [
    {
      name: "HOME",
      path: "/",
    },
    {
      name: "ABOUT US",
      path: "/about",
    },
    {
      name: "PRODUCTS",
      path: "/products",
    },
    {
      name: "CONTACT",
      path: "/contact",
    },
  ];

  return (
    <header
      className={`sticky top-0 z-50 flex justify-around items-center py- transition-all duration-300 ${
        isSticky ? "bg-[#e7e7e9] shadow-md" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <Link to={"/"}>
        <div className="">
          <img className="h-30 w-auto" src={logo} alt="geffron logo" />
        </div>
      </Link>
      {/* nav */}
      <nav>
        <ul className="flex gap-15">
          {navItems.map((nav, i) => (
            <Link key={i} to={nav.path}>
              {console.log(nav.name)}
              <li className="relative overflow-hidden h-6 cursor-pointer group">
                {/* Default text (slides up) */}
                <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                  {nav.name}
                </span>

                {/* Hover text (comes from bottom) */}
                <span className="block left- top-full transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                  {nav.name}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
