// Navbar.js
import React, { useState } from 'react';
import logo from '../images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-violet-700 border-b-4">
      <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
        <div>
          <img src={logo} alt="Logo" className="h-10" />
        </div>
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } lg:flex lg:flex-row lg:space-x-4`}
        >
          <li className="text-white cursor-pointer hover:text-pink-500 transition duration-200">
            SERVICES
          </li>
          <li className="text-white cursor-pointer hover:text-pink-500 transition duration-200">
            ABOUT US
          </li>
          <li className="text-white cursor-pointer hover:text-pink-500 transition duration-200">
            CONTACT US
          </li>
          <li className="text-white cursor-pointer hover:text-pink-500 transition duration-200">
            CAREERS
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
