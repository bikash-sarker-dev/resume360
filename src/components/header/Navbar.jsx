import React, { useEffect, useState } from "react";
import { FaUserLock } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import "./navbar.css";

const Navbar = () => {
  const { signOutUser, user, setUser } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          confirmButtonColor: "#3e563f",
        });
        setUser(null);
      })
      .catch((error) => {});
  };

  const getBgColor = (email) => {
    const colors = [
      "bg-red-500",
      "bg-green-500",
      "bg-blue-500",
      "bg-yellow-500",
      "bg-purple-500",
      "bg-pink-500",
    ];
    const index = email?.charCodeAt(0) % colors.length;
    return colors[index];
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
        to="/add-information"
        className="cursor-pointer w-8/12 relative group transition-all"
      >
        Generate
        <div className="absolute left-0 hidden group-hover:block bg-white text-black shadow-md mt-2 rounded-md w-48">
          <NavLink
            to="/add-information"
            className="block px-4 py-2 text-sm transition-all hover:bg-gray-100"
          >
            Resume Builder
          </NavLink>
          <NavLink
            to="/cover-letter"
            className="block px-4 py-2 text-sm transition-all hover:bg-gray-100"
          >
            Cover Letter Builder
          </NavLink>
        </div>
      </NavLink>
      <NavLink to="/about" className="cursor-pointer w-8/12 transition-all">
        About
      </NavLink>
      <NavLink to="/templates" className="cursor-pointer w-8/12 transition-all">
        Templates
      </NavLink>
      <NavLink to="/contact" className="cursor-pointer w-8/12 transition-all">
        Contact
      </NavLink>
    </>,
  ];

  return (
    <>
      <div className=" ">
        <header
          className={`fixed   top-0 left-0  w-full bg-r-info  text-r-card  z-50  py-4  shadow-md transition-transform duration-500 ${
            hidden ? "-translate-y-full" : "translate-y-0"
          }`}
        >
          <div className="flex container items-center justify-between w-10/12 mx-auto">
            <div className="text-2xl font-serif ">
              Resumes
              <span className="font-bold text-3xl text-r-background">360</span>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex ml-20  space-x-2  text-lg font-medium">
              {menu}
            </ul>
            {user ? (
              <>
                <div className="relative hidden  lg:flex items-center">
                  <div
                    onMouseEnter={() => setIsModalOpen(true)}
                    onMouseLeave={() => setIsModalOpen(false)}
                    className={`cursor-pointer flex justify-center items-center w-12 h-12 rounded-full text-white text-lg font-bold overflow-hidden  bg-gray-400`}
                  >
                    {user?.photoURL ? (
                      <img
                        className="w-full h-full object-cover"
                        src={user.photoURL}
                        alt="User"
                      />
                    ) : (
                      <span>{user?.email?.charAt(0)?.toUpperCase()}</span>
                    )}
                  </div>

                  {/* Modal */}
                  {isModalOpen && (
                    
                    <div
                      onMouseEnter={() => setIsModalOpen(true)}
                      onMouseLeave={() => setIsModalOpen(false)}
                      className="absolute w-[200px] top-4 right-0 z-50  max-w-sm  bg-none  p-10 "
                    >
                      <div className="bg-r-secondary/80 backdrop-blur-2xl  p-5 rounded-xl w-max">
                     

                      <h2 className="text-r-text mb-4 ">
                        {user?.displayName}
                      </h2>

                      <ul className="flex flex-col space-y-4 mb-4">
                        <NavLink
                          to="/user"
                          className={({ isActive }) =>
                            `cursor-pointer text-lg w-max transition-all hover:text-r-hover ${
                              isActive
                                ? "border-b border-r-background font-semibold"
                                : "text-r-background"
                            }`
                          }
                        >
                          resume setting
                        </NavLink>
                        <NavLink
                          to="/dashboard/home"
                          className="cursor-pointer  text-lg hover:text-r-hover  transition-all"
                        >
                          Dashboard
                        </NavLink>
                        <NavLink
                          to="/dashboard/profile"
                          className="cursor-pointer  text-lg hover:text-r-hover  transition-all"
                        >
                          profile
                        </NavLink>
                      </ul>

                      <button
                        onClick={() => {
                          handleSignOut();
                          setIsModalOpen(false);
                        }}
                        
                        className="relative  hidden lg:flex  z-10  px-4 py-2 text-[17px] font-semibold text-r-card border  border-r-card rounded-full overflow-hidden transition-colors duration-300 ease-out group hover:text-r-text hover:border-transparent"
                        >
                          <div className="flex items-center">
                            <span className="absolute top-1/2 left-1/2 w-[20em] h-[20em] -translate-x-1/2 -translate-y-1/2 rounded-full z-[-1] transition-[box-shadow] duration-500 ease-out group-hover:shadow-[inset_0_0_0_10em_var(--color-r-accent)]" />
        
                            <FaUserLock className="mr-3"></FaUserLock>
        
                            <span>logout</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                {/* Login Button (Desktop) */}
                <div className="flex gap-5">
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      `relative hidden lg:flex px-4 py-2 text-[17px] font-semibold border rounded-full overflow-hidden transition-colors duration-300 ease-out group
                ${
                  isActive
                    ? "text-r-text bg-[var(--color-r-accent)] border-transparent"
                    : "text-text border-r-card hover:text-r-text hover:border-transparent"
                }`
                    }
                  >
                    <div className="flex items-center">
                      <span className="absolute top-1/2 left-1/2 w-[20em] h-[20em] -translate-x-1/2 -translate-y-1/2 rounded-full z-[-1] transition-[box-shadow] duration-500 ease-out group-hover:shadow-[inset_0_0_0_10em_var(--color-r-accent)]" />
                      <FaUserLock className="mr-3" />
                      <span>login</span>
                    </div>
                  </NavLink>

                  <NavLink
                    to="/register"
                    className={({ isActive }) =>
                      `relative hidden lg:flex px-4 py-2 text-[17px] font-semibold border rounded-full overflow-hidden transition-colors duration-300 ease-out group
                 ${
                   isActive
                     ? "text-r-text bg-[var(--color-r-accent)] border-transparent"
                     : "text-text border-r-card hover:text-r-text hover:border-transparent"
                 }`
                    }
                  >
                    <div className="flex items-center">
                      <span className="absolute top-1/2 left-1/2 w-[20em] h-[20em] -translate-x-1/2 -translate-y-1/2 rounded-full z-[-1] transition-[box-shadow] duration-500 ease-out group-hover:shadow-[inset_0_0_0_10em_var(--color-r-accent)]" />
                      <FaUserLock className="mr-3" />
                      <span>register</span>
                    </div>
                  </NavLink>
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
            <NavLink
              to="/user"
              className="cursor-pointer text-lg  w-8/12   transition-all"
            >
              resume setting
            </NavLink>
            <NavLink
              to="/dashboard/home"
              className="cursor-pointer text-lg w-8/12  transition-all"
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/dashboard/profile"
              className="cursor-pointer text-lg w-8/12  transition-all"
            >
              profile
            </NavLink>
          </ul>

          {user ? (
            <>
              <div className=" lg:hidden justify-evenly pb-10 flex items-center">
                <div
                  className={`cursor-pointer flex justify-center items-center w-12 h-12 rounded-full text-white text-lg font-bold overflow-hidden  bg-gray-400`}
                >
                  {user?.photoURL ? (
                    <img
                      className="w-full h-full object-cover"
                      src={user.photoURL}
                      alt="User"
                    />
                  ) : (
                    <span>{user?.email?.charAt(0)?.toUpperCase()}</span>
                  )}
                </div>
                <button
                  onClick={() => {
                    handleSignOut();
                  }}
                  className="relative  lg:hidden flex   px-4 py-2 text-[17px] font-semibold text-r-card border  border-r-card rounded-full overflow-hidden transition-colors duration-300 ease-out group hover:text-r-text hover:border-transparent"
                >
                  <div className="flex items-center">
                    <span className="absolute top-1/2 left-1/2 w-[20em] h-[20em] -translate-x-1/2 -translate-y-1/2 rounded-full z-[-1] transition-[box-shadow] duration-500 ease-out group-hover:shadow-[inset_0_0_0_10em_var(--color-r-accent)]" />

                    <FaUserLock className="mr-3"></FaUserLock>

                    <span>logout</span>
                  </div>
                </button>
              </div>
            </>
          ) : (
            <>
              <div
                onClick={() => setMenuOpen(false)}
                className="flex gap-5 justify-center mb-5"
              >
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `relative flex md:hidden px-4 py-2 text-[17px] font-semibold border rounded-full overflow-hidden transition-colors duration-300 ease-out group
                 ${
                   isActive
                     ? " bg-[var(--color-r-accent)] border-transparent"
                     : "text-r-hover border border-r-card hover:text-r-text hover:border-transparent"
                 }`
                  }
                >
                  <div className="flex items-center">
                    <span className="absolute top-1/2 left-1/2 w-[20em] h-[20em] -translate-x-1/2 -translate-y-1/2 rounded-full z-[-1] transition-[box-shadow] duration-500 ease-out group-hover:shadow-[inset_0_0_0_10em_var(--color-r-accent)]" />
                    <FaUserLock className="mr-3" />
                    <span>login</span>
                  </div>
                </NavLink>

                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    `relative flex md:hidden px-4 py-2 text-[17px] font-semibold border rounded-full overflow-hidden transition-colors duration-300 ease-out group
                  ${
                    isActive
                      ? " bg-[var(--color-r-accent)]  border-transparent"
                      : "text-r-hover border border-r-card hover:text-r-text hover:border-transparent"
                  }`
                  }
                >
                  <div className="flex items-center">
                    <span className="absolute top-1/2 left-1/2 w-[20em] h-[20em] -translate-x-1/2 -translate-y-1/2 rounded-full z-[-1] transition-[box-shadow] duration-500 ease-out group-hover:shadow-[inset_0_0_0_10em_var(--color-r-accent)]" />
                    <FaUserLock className="mr-3" />
                    <span>register</span>
                  </div>
                </NavLink>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
