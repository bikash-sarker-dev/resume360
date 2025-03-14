import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [hidden, setHidden] = useState(false);

  // Handle scroll behavior (hide on scroll down, show on scroll up)
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setHidden(currentScroll > lastScroll && currentScroll > 50);
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <>
      <div className="relative z-50 w-full">
        <header
          className={`fixed top-0 left-0 w-full  text-r-text bg-opacity-80 backdrop-blur-md z-20 p-4 flex items-center justify-between shadow-md transition-transform duration-300 ${
            hidden ? "-translate-y-full" : "translate-y-0"
          }`}
        >
          {/* Logo */}
          <div className="text-2xl font-serif ">
            Resumes<span className="font-bold text-r-primary">360</span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex space-x-6 text-lg font-medium">
            <Link className="cursor-pointer hover:text-gray-300 transition-all">
              Home
            </Link>
            <Link className="cursor-pointer hover:text-gray-300 transition-all">
              Vlog
            </Link>
            <Link className="cursor-pointer hover:text-gray-300 transition-all">
              Info
            </Link>
          </ul>

          {/* Login Button (Desktop) */}
          <button className="hidden lg:block shadow shadow-r-primary px-6 py-3 rounded-lg text-lg font-semibold duration-500 text-r-accent hover:text-r-text hover:bg-r-primary transition">
            Login
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden  p-2 focus:outline-none z-30"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div
              className={`w-6 h-0.5 bg-r-accent mb-1 transition-all ${
                menuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-r-accent mb-1 transition-all ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-r-primary transition-all ${
                menuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></div>
          </button>
        </header>

        {/* Mobile Dropdown Menu */}
        <div
          className={`lg:hidden fixed top-0 rounded-3xl backdrop-blur-3xl opacity-30  right-10 w-[300px]  text-r-text transition-all duration-300 ease-in-out ${
            menuOpen
              ? "opacity-100 z-0 translate-y-0 top-16"
              : "opacity-0  -translate-y-full pointer-events-none"
          }`}
        >
          <ul className="flex flex-col items-center space-y-4 py-6 text-lg">
            <Link
              className="cursor-pointer hover:text-gray-300"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              className="cursor-pointer hover:text-gray-300"
              onClick={() => setMenuOpen(false)}
            >
              Vlog
            </Link>
            <Link
              className="cursor-pointer hover:text-gray-300"
              onClick={() => setMenuOpen(false)}
            >
              Info
            </Link>
            <button
              className="shadow shadow-r-primary px-6 py-3 rounded-lg text-lg font-semibold duration-500 text-r-text hover:text-r-text hover:bg-r-primary transition"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </button>
          </ul>
        </div>
      </div>

      
    </>
  );
};

export default Navbar;
