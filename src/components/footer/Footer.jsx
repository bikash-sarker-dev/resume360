import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="relative bg-cover bg-center bg-no-repeat text-r-text py-16 px-8 md:px-16"
      style={{
        backgroundImage: "url('')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0  bg-opacity-60"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand Section */}
        <div>
        <div className="text-3xl font-serif ">
            Resumes<span className="font-bold text-r-primary">360</span>
          </div>
          <p className="mt-2 text-gray-500">
            Build your perfect resume in minutes with our AI-powered tools.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li><a  className="hover:text-gray-400">Home</a></li>
            <li><a  className="hover:text-gray-400">Features</a></li>
            <li><a  className="hover:text-gray-400">Pricing</a></li>
            <li><a  className="hover:text-gray-400">Contact</a></li>
          </ul>
        </div>

        {/* Social & Legal Links */}
        <div>
          <h3 className="text-xl font-semibold">Stay Connected</h3>
          <div className="mt-3 flex justify-center md:justify-start space-x-4">
      <a href="#" className="hover:text-gray-400 text-2xl">
        <FaFacebookF />
      </a>
      <a href="#" className="hover:text-gray-400 text-2xl">
        <FaTwitter />
      </a>
      <a href="#" className="hover:text-gray-400 text-2xl">
        <FaLinkedinIn />
      </a>
    </div>
          <div className="mt-4">
            <a  className="text-gray-400 text-sm hover:text-gray-500">Privacy Policy</a> |  
            <a  className="text-gray-400 text-sm hover:text-gray-500"> Terms of Use</a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 text-center text-gray-400 mt-10 border-t border-gray-600 pt-5">
        &copy; {new Date().getFullYear()} innovativeDevs. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
