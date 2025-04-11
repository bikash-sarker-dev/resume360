import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="relative   bg-r-info  text-r-text pt-16 pb-8 px-8 md:px-16">
      <div className="container">
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    {/* Brand Section */}
    <div className="text-3xl font-serif flex flex-col min-w-full sm:min-w-[200px] lg:min-w-[280px] xl:min-w-[350px] text-left items-start">
      <h1>
        Resumes<span className="font-bold text-r-primary">360</span>
      </h1>
      <p className="text-base mt-3 sm:w-2/3">
              Create, design, and manage your professional resume with ease. Our
              virtual resume builder helps you showcase your skills, experience,
              and education in a sleek and user-friendly format.
            </p>
    </div>

    {/* Col 2 */}
    <div className="flex flex-col text-left items-start">
      <h3 className="text-xl mt-8 md:mt-0 font-semibold">Menu</h3>
      <ul className="mt-3 space-y-2 flex flex-col">
        <Link to="/"><a className="hover:text-r-accent">Home</a></Link>
        <Link to=""><a className="hover:text-r-accent">Features</a></Link>
        <Link to=""><a className="hover:text-r-accent">Pricing</a></Link>
        <Link to="/contact"><a className="hover:text-r-accent">Contact</a></Link>
      </ul>
    </div>

    {/* Col 3 */}
    <div className="flex flex-col text-left items-start">
      <h3 className="text-xl mt-8 md:mt-0 font-semibold">Information</h3>
      <ul className="mt-3 space-y-2 flex flex-col">
        <Link to="/about"><a className="hover:text-r-accent">About Us</a></Link>
        <Link to="/terms"><a className="hover:text-r-accent">Terms & Conditions</a></Link>
        <Link to="/privacy-policy"><a className="hover:text-r-accent">Privacy Policy</a></Link>
        <Link to="/faq"><a className="hover:text-r-accent">FAQ</a></Link>
      </ul>
    </div>

    {/* Col 4 */}
    <div className="flex flex-col text-left items-start">
      <h3 className="text-xl mt-8 md:mt-0 font-semibold">Stay Connected</h3>
      <div className="mt-4 flex space-x-4 ">
        <a className="p-1 bg-blue-400 text-white rounded-md text-2xl"><FaFacebookF /></a>
        <a className="p-1 bg-blue-400 text-white rounded-md text-2xl"><FaTwitter /></a>
        <a className="p-1 bg-blue-400 text-white rounded-md text-2xl"><FaLinkedinIn /></a>
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
