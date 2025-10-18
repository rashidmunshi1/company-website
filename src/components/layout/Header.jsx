import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../../assets/images/navbar-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const [openMobileServices, setOpenMobileServices] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#121212] text-white py-4 px-6 md:px-8 flex items-center justify-between z-[9999] shadow-lg">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-8 w-auto" />
        <h1 className="text-xl font-bold text-yellow-500">Logoipsum</h1>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-10 text-lg font-medium">
        <Link to="/" className="hover:text-yellow-400 cursor-pointer">
          Home
        </Link>
        <Link to="/how-it-works" className="hover:text-yellow-400 cursor-pointer">
          How It Work
        </Link>
        <Link to="/portfolio" className="hover:text-yellow-400 cursor-pointer">
          Portfolio
        </Link>

        {/* Services with dropdown */}
        <li
          className="relative flex items-center space-x-1 hover:text-yellow-400 cursor-pointer"
          onMouseEnter={() => setOpenServices(true)}
          onMouseLeave={() => setOpenServices(false)}
        >
          <span>Services</span>
          <ChevronDown size={16} />

          {/* Desktop Submenu */}
          {openServices && (
            <ul className="absolute top-full left-0 mt-2 w-52 bg-[#121212] text-white rounded-lg shadow-lg border border-gray-800 z-50">
              <li>
                <Link
                  to="/services/design"
                  className="block px-4 py-2 hover:bg-yellow-400 hover:text-black rounded-t-lg"
                >
                  Design Service
                </Link>
              </li>
              <li>
                <Link
                  to="/services/development"
                  className="block px-4 py-2 hover:bg-yellow-400 hover:text-black"
                >
                  Development Service
                </Link>
              </li>
              <li>
                <Link
                  to="/services/marketing"
                  className="block px-4 py-2 hover:bg-yellow-400 hover:text-black rounded-b-lg"
                >
                  Marketing Service
                </Link>
              </li>
            </ul>
          )}
        </li>

        <Link to="/customer-service" className="hover:text-yellow-400 cursor-pointer">
          Customer Services
        </Link>
      </ul>

      {/* Desktop Contact Button */}
      <button className="hidden md:block bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-400 transition-all">
        <Link to="/contact">Contact Us</Link>
      </button>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#121212] flex flex-col items-start md:hidden py-4 px-6 space-y-3 z-[9998] border-t border-gray-800">
          <Link to="/" className="hover:text-yellow-400 cursor-pointer w-full">
            Home
          </Link>
          <Link to="/how-it-works" className="hover:text-yellow-400 cursor-pointer w-full">
            How It Work
          </Link>
          <Link to="/portfolio" className="hover:text-yellow-400 cursor-pointer w-full">
            Portfolio
          </Link>

          {/* Mobile Services with dropdown */}
          <div className="w-full">
            <button
              onClick={() => setOpenMobileServices(!openMobileServices)}
              className="flex items-center justify-between w-full hover:text-yellow-400"
            >
              <span>Services</span>
              <ChevronDown
                size={18}
                className={`transform transition-transform ${
                  openMobileServices ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {openMobileServices && (
              <ul className="mt-2 ml-4 space-y-2 border-l border-gray-700 pl-3">
                <li>
                  <Link
                    to="/services/design"
                    className="block hover:text-yellow-400"
                  >
                    Design Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/development"
                    className="block hover:text-yellow-400"
                  >
                    Development Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/marketing"
                    className="block hover:text-yellow-400"
                  >
                    Marketing Service
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <Link
            to="/customer-service"
            className="hover:text-yellow-400 cursor-pointer w-full"
          >
            Customer Services
          </Link>

          <button className="bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-400 transition-all w-full">
            <Link to="/contact">Contact Us</Link>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
