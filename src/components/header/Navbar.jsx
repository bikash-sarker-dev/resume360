import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, NavLink, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

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
      <NavLink to="/" className="cursor-pointer w-8/12  transition-all">
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
          className={`fixed  top-0 left-0  w-full bg-r-primary  text-r-text  z-50  py-1  shadow-md transition-transform duration-500 ${
            hidden ? "-translate-y-full" : "translate-y-0"
          }`}
        >
          <div className="flex items-center justify-between w-10/12 mx-auto">
            {/* Logo */}
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
                    className="hidden lg:block shadow shadow-r-primary px-6 py-2 rounded-lg text-lg font-semibold duration-500 text-r-accent hover:text-r-text hover:bg-r-primary transition"
                  >
                    Logout
                  </button>
                </Link>
              </>
            ) : (
              <>
                {/* Login Button (Desktop) */}
                <div className="flex gap-">
                  <Link to="/login">
                    <button className="hidden lg:block shadow-sm hover:shadow-sm shadow-r-text  px-6 py-2 rounded-lg text-lg font-semibold duration-500 text-r-text hover:text-r-card hover:bg-r-primary transition">
                      Login
                    </button>
                  </Link>
                  <Link to="/register">
                    <button className="hidden lg:block shadow-sm hover:shadow-sm shadow-r-text px-6 py-2 rounded-lg text-lg font-semibold duration-500 text-r-text hover:text-r-card hover:bg-r-primary transition">
                      Register
                    </button>
                  </Link>
                </div>
              </>
            )}

            {/* Mobile hamburger Button */}
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
          className={`md:hidden z-30 fixed top-0 rounded-3xl backdrop-blur-3xl opacity-30  bg-r-primary right-10 w-[300px]  text-r-text transition-all duration-500 ease-in-out ${
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
          <div className=" items-center justify-center">
            <Link to="/login">
              <button className="shadow-sm hover:shadow-none shadow-r-text px-6 py-3 rounded-lg text-lg font-semibold duration-500 text-r-text hover:text-r-text hover:bg-r-info transition">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="shadow-sm hover:shadow-none shadow-r-text  px-6 py-3 rounded-lg text-lg font-semibold duration-500 text-r-text hover:text-r-text hover:bg-r-info transition">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
