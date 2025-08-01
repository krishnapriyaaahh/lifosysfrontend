import React, { useState } from 'react';
 // Import a search icon
 // Replace with your company logo component

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[rgb(25,25,25)]  shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <a href="/" className="flex items-center py-4 px-2">
              <img src="src/assets/logo.jpg"  className="h-17 w-19 mr-2" />

            </a>
          </div>

          {/* Primary Nav Links */}
          <div className="hidden md:flex items-center space-x-1">
            <a href="#about" className="py-5 px-5 text-gray-100 hover:text-gray-500 transition duration-300">About Us</a>
            <a href="#news" className="py-5 px-5 text-gray-100 hover:text-gray-500 transition duration-300">News</a>
            <a href="#trending" className="py-5 px-5git text-gray-100 hover:text-gray-500 transition duration-300">Trending Tools</a>
          </div>


          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="mobile-menu-button focus:outline-none">
              <svg className="w-6 h-6 text-gray-500 hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white`}>
        <a href="#about" className="block py-2 px-4 text-sm hover:bg-gray-200">About Us</a>
        <a href="#contact" className="block py-2 px-4 text-sm hover:bg-gray-200">Contact</a>
        <a href="#news" className="block py-2 px-4 text-sm hover:bg-gray-200">News</a>
        <a href="#trending" className="block py-2 px-4 text-sm hover:bg-gray-200">Trending Tools</a>
      </div>
    </nav>
  );
};

export default Navbar;