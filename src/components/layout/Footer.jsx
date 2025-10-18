// Footer.jsx
import React from "react";
import logo from "../../assets/images/Logo.png"; // replace with your logo path

const Footer = () => {
  return (
    <footer className="bg-[#232323] text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Container */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          
          {/* Logo + Text */}
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
            <span className="text-lg sm:text-xl font-semibold">Logoipsum</span>
          </div>

          {/* Navigation Links */}
          <nav>
            <ul className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-medium">
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">Services</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">Contact</a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Logoipsum. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
