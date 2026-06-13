import React from "react";
import logo from "../../assets/images/logos/geffron-logo.jpg.jpeg";
import { Link } from "react-router-dom";

const Header = () => {
  const navItems = [
    {
      name: "HOME",
      path: "/",
    },
    {
      name: "ABOUT US",
      path: "/",
    },
    {
      name: "PRODUCTS",
      path: "/",
    },
    {
      name: "CONTACT",
      path: "/",
    },
  ];
  return (
    <header className="bg-transparent flex justify-around items-center py-5">
      {/* Logo */}
      <div className="">
        <img className="h-25 w-25" src={logo} alt="geffron logo" />
      </div>
      {/* nav */}
      <nav>
        <ul className="flex gap-15">
          {navItems.map((nav, i) => (
            <Link key={i} to={nav.path}>
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
