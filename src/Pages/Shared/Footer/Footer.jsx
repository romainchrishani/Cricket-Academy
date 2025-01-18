import React from "react";
import logo from "../../../assets/logo/logo.png";
import facebook from "../../../assets/social/facebook.png";
import instagram from "../../../assets/social/instagram.png";
import whatsapp from "../../../assets/social/whatsapp.png";
import linkedin from "../../../assets/social/linkedin.png";
import youtube from "../../../assets/social/youtube.png";
import { Link } from "react-router-dom";
import "./Footer.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaHeadset,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer className="footer  py-14 px-10 bg-gray-800 dark:bg-gray-900 text-base-content">
        <aside>
          <img loading="lazy" className="w-36 md:w-44" src={logo} />
          <p className="-mt-3 ps-3.5 text-sm font-semibold text-slate-300 dark:text-white">
            Let's Conquer Together
          </p>
          <div className="flex justify-center space-x-4 mt-5 py-4">
            <Link to="#">
              <img className="w-8" src={facebook} alt="" />
            </Link>
            <Link to="#">
              <img className="w-8" src={instagram} alt="" />
            </Link>
            <Link to="#">
              <img className="w-8" src={whatsapp} alt="" />
            </Link>
            <Link to="#">
              <img className="w-8" src={linkedin} alt="" />
            </Link>
            <Link to="#">
              <img className="w-8" src={youtube} alt="" />
            </Link>
          </div>
        </aside>
        <nav>
          <header className="font-bold text-xl mb-3 text-white">
            Contact Us
          </header>
          <div className="flex flex-col space-y-3 text-base text-white">
            <p className="flex items-center gap-1">
              <FaMapMarkerAlt />
              London ON
            </p>
            <p className="flex items-center gap-1">
              <FaPhoneAlt />
              (226) 884-8095
            </p>
            <p className="flex items-center gap-1">
              <FaHeadset />
              (226) 884-8095
            </p>
            <p className="flex items-center gap-1">
              <FaEnvelope />
              info@westerncricketacademy.com
            </p>
          </div>
        </nav>
        <nav>
          <header className="font-bold text-xl mb-3 text-white">
            Quick Links
          </header>
          <div className="flex flex-col space-y-3 text-base text-white">
            <Link className="link link-hover hover:text-custom-blue">Home</Link>
            <Link className="link link-hover hover:text-custom-blue">
              About Us
            </Link>
            <Link className="link link-hover hover:text-custom-blue">
              Programmes
            </Link>
            <Link className="link link-hover hover:text-custom-blue">
              Instructors
            </Link>
          </div>
        </nav>
        <form>
          <header className="font-bold text-xl mb-3 text-white">
            Newsletter
          </header>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="text-base text-white">
                Enter your email address
              </span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full bg-white"
              />
              <button className="btn bg-custom-blue hover:bg-custom-blue text-white absolute top-0 right-0 rounded-l-none border-2 border-custom-blue hover:border-custom-blue ">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
      <div className="footer-center p-6 bg-white dark:bg-white text-custom-blue border-t border-white text-sm">
        <p>Copyright © {year} - All rights reserved</p>
        <div className="footer-center logos-container">
          <a
            href="https://www.yashisports.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-link"
          >
            <img
              src="https://www.yashisports.com/wp-content/uploads/2023/12/image-1.webp"
              alt="Logo"
              className="link-logo"
            />
          </a>
          <a
            href="https://mcpaccounting.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-link"
          >
            <img
              src="https://mcpaccounting.com/static/media/logo-removebg.ccd2feddcafe09848512.png"
              alt="Logo"
              className="link-logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
