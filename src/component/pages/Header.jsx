import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/40"
            alt="Logo"
            className="h-10 w-10 mr-2"
          />
          <span className="text-xl font-bold text-gray-800">Your Logo</span>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;
