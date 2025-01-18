import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMoon, FiSun } from "react-icons/fi";
import { motion } from "framer-motion";
import logo from "../../../assets/logo/logo.png";
import rlogo from "../../../assets/logo/rlogo.png";
import useReadingProgress from "../../../Hooks/useReadingProgress";

const Navbar = () => {
  const user = null;
  const [activeNav, setActiveNav] = useState("#home");
  const completion = useReadingProgress();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [navbarBg, setNavbarBg] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      setNavbarBg(window.pageYOffset > 120 ? "solid" : "transparent");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const navOptions = (
    <>
      <li>
        <a
          href="#home"
          className={activeNav === "#home" ? " active_link" : ""}
          onClick={() => setActiveNav("#home")}
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#programmes"
          className={activeNav === "#programmes" ? " active_link" : ""}
          onClick={() => setActiveNav("#programmes")}
        >
          Programs
        </a>
      </li>
      <li>
        <a
          href="#facilities"
          className={activeNav === "#facilities" ? " active_link" : ""}
          onClick={() => setActiveNav("#facilities")}
        >
          Facilities
        </a>
      </li>
      <li>
        <a
          href="#instructors"
          className={activeNav === "#instructors" ? " active_link" : ""}
          onClick={() => setActiveNav("#instructors")}
        >
          Coaches and Staff
        </a>
      </li>
      <li>
        <a
          href="#aboutus"
          className={activeNav === "#aboutus" ? " active_link" : ""}
          onClick={() => setActiveNav("#aboutus")}
        >
          About Us
        </a>
      </li>
      <li>
        <a
          href="#contactus"
          className={activeNav === "#contactus" ? " active_link" : ""}
          onClick={() => setActiveNav("#contactus")}
        >
          Contact Us
        </a>
      </li>
      {user ? (
        <>
          <li>
            <a>Dashboard</a>
          </li>
          <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
            <img
              className="w-10 rounded-full dark:border-white border-custom-blue border mx-4"

              src={
                user.photoURL
                  ? user.photoURL
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"
              }
              alt=""
            />
          </div>
          <button className="btn-sm ms-3 bg-custom-blue hover:bg-blue-700 text-white rounded">
            Log Out
          </button>
        </>
      ) : (
        <>
          <li>
            <Link to="/signin">Login</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div className="lg:hidden bg-custom-blue flex justify-center items-center py-2">
        <img className="w-32" src={logo} alt="logo" /> 
      </div>
      <div
        className={`navbar top-0 transition-all ease-out duration-300  text-white lg:fixed z-50 py-3 md:px-8 ${
          navbarBg !== "transparent" ? "navbar_bg" : "lg:py-4 py-5"
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost bg-custom-blue lg:hidden hover:bg-custom-blue"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-custom-blue dark:bg-gray-700 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link to="/" className="cursor-pointer hidden md:block">
            {navbarBg !== "transparent" ? (
              <img className="w-40" src={rlogo} />
            ) : (
              <img className="w-40" src={logo} />
            )}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul
            className={`menu menu-horizontal px-1 font-semibold ${
              navbarBg !== "transparent"
                ? "text-custom-blue dark:text-white"
                : "text-white"
            } `}
          >
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex justify-center relative w-fit items-center rounded-full">
            <button
              className="toggle_class text-white dark:lg:text-white dark:text-blue-900"
              onClick={() => setTheme("light")}
            >
              <FiMoon className="relative z-10 text-lg md:text-sm" />
              <span className="relative z-10 hidden md:block">Light</span>
            </button>
            <button
              className={`toggle_class dark:text-white ${
                navbarBg !== "transparent"
                  ? "text-custom-blue"
                  : "text-custom-blue lg:text-white"
              }`}
              onClick={() => setTheme("dark")}
            >
              <FiSun className="relative z-10 text-lg md:text-sm" />
              <span className="relative z-10 hidden md:block ">Dark</span>
            </button>
            <div className="absolute inset-0 z-0 flex dark:justify-end justify-start">
              <motion.span
                layout
                transition={{ type: "spring", damping: 15, stiffness: 250 }}
                className="h-full w-1/2 rounded-full bg-gradient-to-r from-custom-blue to-custom-ash"
              ></motion.span>
            </div>
          </div>
        </div>
        <span
          className="absolute bg-gradient-to-r from-custom-blue via-custom-ash to-transparent h-1 w-full bottom-0"
          style={{ transform: `translateX(${completion - 101}%)` }}
        ></span>
      </div>
    </>
  );
};

export default Navbar;
