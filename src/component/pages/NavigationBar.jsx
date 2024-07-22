import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/40"
            alt="Logo"
            className="h-10 w-10 mr-2"
          />
          <span className="text-xl font-bold text-gray-800">Your Logo</span>
        </div>
        <div className="hidden md:flex space-x-4 justify-center flex-grow">
          <Link
            to="/"
            className="text-gray-800 hover:text-blue-500 transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/blog"
            className="text-gray-800 hover:text-blue-500 transition duration-200"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="text-gray-800 hover:text-blue-500 transition duration-200"
          >
            Contact Us
          </Link>
          <Link
            to="/about"
            className="text-gray-800 hover:text-blue-500 transition duration-200"
          >
            About
          </Link>
        </div>
        <div className="hidden md:flex">
          <Link
            to="/login"
            className="text-gray-800 hover:text-blue-500 transition duration-200"
          >
            Login
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="text-gray-800 hover:text-blue-500 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-6 pb-4 bg-stone-600">
          <Link
            to="/"
            className="block text-gray-800 hover:text-blue-500 transition duration-200 py-2"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/blog"
            className="block text-gray-800 hover:text-blue-500 transition duration-200 py-2"
            onClick={toggleMenu}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="block text-gray-800 hover:text-blue-500 transition duration-200 py-2"
            onClick={toggleMenu}
          >
            Contact Us
          </Link>
          <Link
            to="/about"
            className="block text-gray-800 hover:text-blue-500 transition duration-200 py-2"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/login"
            className="block text-gray-800 hover:text-blue-500 transition duration-200 py-2"
            onClick={toggleMenu}
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
