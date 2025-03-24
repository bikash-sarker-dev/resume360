import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, NavLink, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import "./navbar.css"

const Navbar = () => {
  const { signOutUser, user, setUser } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [hidden, setHidden] = useState(false);

  // Signout
  const handleSignOut = () => {
    // console.log('logOut')
    signOutUser()
      .then(() => {
        Swal.fire({
          title: "Success",
          text: "Logout successfully",
          icon: "success",
          confirmButtonText: "Done",
        });
        setUser(null);
      })
      .catch((error) => {});
  };

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

  const menu = [
    <>
      <NavLink to="/" className="cursor-pointer w-8/12   transition-all">
        Home
      </NavLink>
      <NavLink
        to="/dashboard/home"
        className="cursor-pointer w-8/12 transition-all"
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/add-information"
        className="cursor-pointer w-8/12 transition-all"
      >
        AddInfo
      </NavLink>
      <NavLink to="/about" className="cursor-pointer w-8/12 transition-all">
        About
      </NavLink>
      <NavLink to="/templates" className="cursor-pointer w-8/12 transition-all">
        Templates
      </NavLink>
      <NavLink to="/faq" className="cursor-pointer w-8/12 transition-all">
        FAQ
      </NavLink>
    </>,
  ];

  return (
    <>
      <div className=" ">
        <header
          className={`fixed  top-0 left-0  w-full bg-r-primary  text-r-text  z-50  py-3 sm:py-2  shadow-md transition-transform duration-500 ${
            hidden ? "-translate-y-full" : "translate-y-0"
          }`}
        >
          <div className="flex items-center justify-between w-10/12 mx-auto">
           
            <div className="text-2xl font-serif ">
              Resumes<span className="font-bold text-r-background">360</span>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex ml-20  space-x-2  text-lg font-medium">
              {menu}
            </ul>
            {user ? (
              <>
                <Link>
                  <button
                    onClick={handleSignOut}
                    className="relative hidden lg:block  items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded shadow-xl hover:bg-white group"
                    >
                      <span className="w-72 h-48 rounded rotate-[-40deg] bg-r-primary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                      <span className="relative w-full text-left text-r-text transition-colors duration-300 ease-in-out group-hover:text-white">
                        Logout
                      </span>
                  </button>
                </Link>
              </>
            ) : (
              <>
                {/* Login Button (Desktop) */}
                <div className="flex gap-5">
                  <Link to="/login">
                    <button
                      className="relative hidden lg:block  items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded shadow-xl hover:bg-white group"
                    >
                      <span className="w-72 h-48 rounded rotate-[-40deg] bg-r-primary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                      <span className="relative w-full text-left text-r-text transition-colors duration-300 ease-in-out group-hover:text-white">
                        Login
                      </span>
                    </button>
                  </Link>
                  <Link to="/register">
                    <button
                      className="relative hidden lg:block   items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded shadow-xl hover:bg-white group"
                    >
                      <span className="w-72 h-48 rounded rotate-[-40deg] bg-r-primary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                      <span className="relative w-full text-left text-r-text transition-colors duration-300 ease-in-out group-hover:text-white">
                        Register
                      </span>
                    </button>
                  </Link>
                </div>
              </>
            )}

            <button
              className="lg:hidden text-3xl  px-2 focus:outline-none z-30"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div>{menuOpen ? <FiX></FiX> : <FiMenu></FiMenu>}</div>
            </button>
          </div>
        </header>

        {/* Mobile Dropdown Menu */}
        <div
          className={`lg:hidden z-30 fixed top-0 rounded-3xl backdrop-blur-3xl opacity-30  bg-r-primary right-10 w-[300px]  text-r-text transition-all duration-500 ease-in-out ${
            menuOpen
              ? "opacity-100 z-0 translate-y-0 top-16"
              : "opacity-0  -translate-y-full pointer-events-none"
          }`}
        >
          <ul
            className="flex flex-col  items-center space-y-4 py-6 text-lg"
            onClick={() => setMenuOpen(false)}
          >
            {menu}
          </ul>
          <div onClick={() => setMenuOpen(false)}
           className="flex gap-5 justify-center mb-5">
                  <Link to="/login">
                    <button
                      className="relative   items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded shadow-xl hover:bg-white group"
                    >
                      <span className="w-72 h-48 rounded rotate-[-40deg] bg-r-primary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                      <span className="relative w-full text-left text-r-text transition-colors duration-300 ease-in-out group-hover:text-white">
                        Login
                      </span>
                    </button>
                  </Link>
                  <Link to="/register">
                    <button
                      className="relative    items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded shadow-xl hover:bg-white group"
                    >
                      <span className="w-72 h-48 rounded rotate-[-40deg] bg-r-primary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                      <span className="relative w-full text-left text-r-text transition-colors duration-300 ease-in-out group-hover:text-white">
                        Register
                      </span>
                    </button>
                  </Link>
                </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
