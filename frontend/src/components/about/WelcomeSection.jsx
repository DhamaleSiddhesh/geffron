import React, { useState } from "react";

const WelcomeSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="px-4 md:px-10 py-10">

      <div className="text-center mx-auto md:tracking-wider leading-relaxed font-light text-gray-700 space-y-6 max-w-5xl">

        {/* Paragraph 1 (always visible) */}
        <p>
          Welcome to <span className="brand-text font-medium">Geffron</span>, a
          forward-thinking company dedicated to delivering high-quality solutions
          that help businesses and individuals grow. At Geffron, we combine
          innovation, expertise, and customer-focused service to create real value
          for our clients.
        </p>

        {/* Paragraph 2 (collapsed on mobile) */}
        <p className={`${!expanded ? "line-clamp-3 md:line-clamp-none" : ""}`}>
          <span className="brand-text font-medium">Geffron</span> is a professionally
          managed company specializing in the manufacturing and supply of premium
          <span className="brand-text font-medium"> Agarbatti (Incense Sticks) </span>
          and <span className="brand-text font-medium"> Bags </span> for domestic and
          international markets. We are committed to delivering high-quality products
          that combine traditional craftsmanship with modern manufacturing standards.
        </p>

        {/* Paragraph 3 (also part of expandable content on mobile) */}
        <p className={`${!expanded ? "hidden md:block" : ""}`}>
          With a strong focus on quality, consistency, and customer satisfaction,
          <span className="brand-text font-medium"> Geffron </span>
          serves wholesalers, retailers, and private-label brands across various
          industries. Our products are crafted using carefully selected raw materials,
          advanced production processes, and strict quality control measures to ensure
          superior performance and reliability.
        </p>

        {/* Read More Button (mobile only) */}
        <div className="md:hidden">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-[#7C2420] font-medium underline underline-offset-4"
          >
            {expanded ? "Read Less" : "Read More"}
          </button>
        </div>

      </div>

    </div>
  );
};

export default WelcomeSection;