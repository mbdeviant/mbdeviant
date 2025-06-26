"use client";

import React from "react";
import { Link } from "react-scroll";
import { useActiveSection } from "../../lib/hooks/useActiveSection";

export default function Navbar() {
  const sections = ["home", "about", "projects", "contact"];
  const active = useActiveSection(sections);

  return (
    <nav
      className="fixed top-5 left-1/2 -translate-x-1/2 z-15 bg-black/80 backdrop-blur-xs px-6 py-3 rounded-xl shadow-md transition-all duration-300"
      aria-label="navigation bar"
    >
      <div className="max-w-7xl mx-auto flex justify-center items-center ">
        <ul className="flex gap-6 ">
          {sections.map((id) => (
            <li key={id} className="cursor-pointer">
              <Link
                to={id}
                smooth={true}
                duration={500}
                className={`transition-colors duration-200 ${
                  active === id
                    ? "text-[#DAA520] font-bold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
