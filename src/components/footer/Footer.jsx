import React from "react";
import { FaFacebookF, FaLinkedinIn,  FaDiscord } from "react-icons/fa";
import { Link } from "react-router";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="relative   bg-r-accent/80  text-r-text pt-16 pb-8 px-8 md:px-16">
      <div className="container">
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="text-4xl md:text-3xl lg:text-4xl font-serif flex  flex-col min-w-full sm:min-w-[200px]  md:min-w-[200px] lg:min-w-[290px] xl:min-w-[350px] text-left items-start">
            <h1>
              Resumes<span className="font-bold text-5xl md:text-4xl lg:text-5xl text-r-info-card">360</span>
            </h1>
            <p className="text-base mt-3 ">
              Create, design, and manage your professional resume with ease. Our
              virtual resume builder helps you showcase your skills, experience,
              and education in a sleek and user-friendly format.
            </p>
          </div>

          <div className="flex flex-col   text-left items-start md:items-center   ">
            <h3 className="text-xl ml-[-0px] md:ml-[-18px] sm:mt-0 mt-8 font-semibold">
              Menu
            </h3>
            <ul className="mt-3 grid grid-cols-1  space-y-2">
              <Link to="/">
                <a className="hover:text-r-info-card cursor-pointer">Home</a>
              </Link>
              <Link to="/features">
                <a className="hover:text-r-info-card cursor-pointer">Features</a>
              </Link>
              <Link to="/pricing">
                <a className="hover:text-r-info-card cursor-pointer">Pricing</a>
              </Link>
              <Link to="/contact">
                <a className="hover:text-r-info-card cursor-pointer">Contact</a>
              </Link>
            </ul>
          </div>
          <div className="flex flex-col  items-start md:items-center text-left">
            <h3 className="text-xl  ml-[-0px] md:ml-[-36px] mt-9 sm:mt-0 font-semibold">
              Information
            </h3>
            <ul className="mt-3 grid grid-cols-1 space-y-2">
              <Link to="/about">
                <a className="hover:text-r-info-card cursor-pointer ">About Us</a>
              </Link>
              <Link to="/terms">
                <a className="hover:text-r-info-card cursor-pointer">
                  Terms & Conditions
                </a>
              </Link>
              <Link to="/privacy-policy">
                <a className="hover:text-r-info-card cursor-pointer">
                  Privacy Policy
                </a>
              </Link>
              <Link to="/faq">
                <a className="hover:text-r-info-card cursor-pointer">FAQ</a>
              </Link>
            </ul>
          </div>
          <div className=" flex flex-col items-start md:items-center ">
            <h3 className="text-xl mt-5 md:mt-0 font-semibold">
              Stay Connected
            </h3>

            <div className="mt-4 flex justify-center md:justify-start space-x-4">
              <a
              href="https://www.facebook.com/tamjid.razin/"
              target="_blank"
              className=" p-1 bg-[#1877F2]
 text-white rounded-md cursor-pointer text-2xl">
                <FaFacebookF />
              </a>
              
              <a href="https://www.linkedin.com/in/sadia-afrin-597515301/" target="_blank" className=" p-1 bg-[#0077B5] text-white rounded-md cursor-pointer text-2xl">
                <FaLinkedinIn />
              </a>
              <a href="https://discord.gg/FNbcjMhZ" target="_blank" className=" p-1 bg-[#5865F2] text-white rounded-md cursor-pointer text-2xl">
                < FaDiscord />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="relative z-10 text-center text-r-info-card mt-10 border-t border-gray-600 pt-5">
          &copy; {new Date().getFullYear()} innovativeDevs. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
