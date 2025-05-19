import React from "react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md px-4 py-3 shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        <ul className="flex gap-4">
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#footer">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
