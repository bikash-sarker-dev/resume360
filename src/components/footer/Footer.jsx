import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative   bg-r-info  text-r-text pt-16 pb-8 px-8 md:px-16">
      <div className="container">
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 text-center md:text-left">
          {/* Brand Section */}

          <div className="text-3xl font-serif  flex flex-col    ">
            <h1>
              Resumes<span className="font-bold text-r-primary">360</span>
            </h1>
            <p className="text-base mt-3">
              Create, design, and manage your professional resume with ease. Our
              virtual resume builder helps you showcase your skills, experience,
              and education in a sleek and user-friendly format.
            </p>
          </div>

          <div className="flex flex-col  text-left items-center">
            <h3 className="text-xl ml-[-20px] font-semibold">Menu</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a className="hover:text-r-accent cursor-pointer">Home</a>
              </li>
              <li>
                <a className="hover:text-r-accent cursor-pointer">Features</a>
              </li>
              <li>
                <a className="hover:text-r-accent cursor-pointer">Pricing</a>
              </li>
              <li>
                <a className="hover:text-r-accent cursor-pointer">Contact</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center text-left">
            <h3 className="text-xl  ml-[-50px] font-semibold">Information</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a className="hover:text-r-accent cursor-pointer ">About Us</a>
              </li>
              <li>
                <a className="hover:text-r-accent cursor-pointer">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a className="hover:text-r-accent cursor-pointer">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="hover:text-r-accent cursor-pointer">FAQ</a>
              </li>
            </ul>
          </div>
          <div className=" flex flex-col items-center ">
            <h3 className="text-xl mt-5 md:mt-0 font-semibold">
              Stay Connected
            </h3>

            <div className="mt-4 flex justify-center md:justify-start space-x-4">
              <a className=" p-1 bg-blue-400 text-white rounded-md cursor-pointer text-2xl">
                <FaFacebookF />
              </a>
              <a className=" p-1 bg-blue-400 text-white rounded-md cursor-pointer text-2xl">
                <FaTwitter />
              </a>
              <a className=" p-1 bg-blue-400 text-white rounded-md cursor-pointer text-2xl">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="relative z-10 text-center text-r-primary mt-10 border-t border-gray-600 pt-5">
          &copy; {new Date().getFullYear()} innovativeDevs. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
