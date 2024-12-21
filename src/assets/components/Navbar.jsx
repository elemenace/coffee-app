import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="z-50 w-full fixed bg-[#3b141c]">
      <nav className="flex items-center justify-between max-w-[1300px] mx-auto p-5">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-semibold">
          ☕ Coffee
        </Link>

        {/* Desktop Menu */}
        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex gap-3 absolute md:relative top-20 md:top-auto left-0 md:left-auto w-full md:w-auto bg-[#3b141c] md:bg-transparent flex-col md:flex-row items-center`}
        >
          <li className="nav-item">
            <Link
              to="/"
              className="px-4 py-2 text-white text-lg rounded-[30px] transition duration-300 hover:text-[#3b141c] hover:bg-[#f3961c]"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className="px-4 py-2 text-white text-lg rounded-[30px] transition duration-300 hover:text-[#3b141c] hover:bg-[#f3961c]"
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/gallery"
              className="px-4 py-2 text-white text-lg rounded-[30px] transition duration-300 hover:text-[#3b141c] hover:bg-[#f3961c]"
            >
              Gallery
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/testimonials"
              className="px-4 py-2 text-white text-lg rounded-[30px] transition duration-300 hover:text-[#3b141c] hover:bg-[#f3961c]"
            >
              Testimonials
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className="px-4 py-2 text-white text-lg rounded-[30px] transition duration-300 hover:text-[#3b141c] hover:bg-[#f3961c]"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Menu Toggle Buttons */}
        <button
          id="menu-open-button"
          className={`fas fa-bars text-white text-2xl md:hidden ${
            isMenuOpen ? "hidden" : "block"
          }`}
          onClick={() => setIsMenuOpen(true)}
        ></button>
        <button
          id="menu-close-button"
          className={`fas fa-times text-white text-2xl md:hidden ${
            isMenuOpen ? "block" : "hidden"
          }`}
          onClick={() => setIsMenuOpen(false)}
        ></button>
      </nav>
    </header>
  );
};

export default Navbar;
