import React, { ReactComponentElement, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AcademicCapIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useDarkMode } from "usehooks-ts";
import logo from "../Bilder/Logo (2).svg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-new-dark-green relative bottom-0 z-0 shadow dark:bg-nav-dark">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to="#" className="flex items-center mb-4 sm:mb-0 ">
            <img
              src={logo}
              className="h-8 mr-3 bg-white rounded-full"
              alt="Flowbite Logo"
            />
            <span className="self-center text-skog text-2xl font-semibold whitespace-nowrap dark:text-white">
              Hel Ved Coaching
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-skog sm:mb-0 dark:text-gray-400">
            <li>
              <Link to="/om" className="mr-4 hover:underline md:mr-6 ">
                About
              </Link>
            </li>
            <li>
              <Link
                to="/legal/privacypolicy"
                className="mr-4 hover:underline md:mr-6"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/kontakt" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-skog sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-skog sm:text-center dark:text-gray-400">
          © 2023 <span className="hover:underline">Tom-Elbin Bendheim</span>
        </span>
      </div>
    </footer>
  );
};
export default Footer;
