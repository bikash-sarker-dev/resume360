import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="relative   bg-r-info  text-r-text pt-16 pb-8 px-8 md:px-16">
      <div className="container">
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-16 text-center md:text-left">
        {/* Brand Section */}

        <div className="text-3xl font-serif  flex flex-col  justify-center  ">
          <h1>
            Resumes<span className="font-bold text-r-primary">360</span>
          </h1>
          <p className="text-base">this is our virtual resume builder wevsite , stay with me .</p>
        </div>

        <div className="flex flex-col  text-left items-center">
          <h3 className="text-xl ml-[-20px] font-semibold">Menu</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <a className="hover:text-gray-400">Home</a>
            </li>
            <li>
              <a className="hover:text-gray-400">Features</a>
            </li>
            <li>
              <Link to='/pricing' className="hover:text-gray-400">Pricing</Link>
            </li>
            <li>
              <a className="hover:text-gray-400">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center text-left">
          <h3 className="text-xl  ml-[-50px] font-semibold">Information</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <a className="hover:text-gray-400">About Us</a>
            </li>
            <li>
              <a className="hover:text-gray-400">Terms & Conditions</a>
            </li>
            <li>
              <a className="hover:text-gray-400">Privacy Policy</a>
            </li>
            <li>
              <a className="hover:text-gray-400">FAQ</a>
            </li>
          </ul>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <h3 className="text-xl mt-5 md:mt-0 font-semibold">Stay Connected</h3>

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
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 text-center text-gray-400 mt-10 border-t border-gray-600 pt-5">
        &copy; {new Date().getFullYear()} innovativeDevs. All rights reserved.
      </div>
      </div>
    </footer>
  );
};

export default Footer;
