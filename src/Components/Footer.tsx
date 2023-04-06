import React, { ReactComponentElement, useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import { AcademicCapIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useDarkMode } from "usehooks-ts";

const Footer: React.FC = () => {
    return (
        
<footer className="rounded-lg shadow bg-slate-200 dark:bg-slate-800 col-start-2 col-span-10 mb-4 row-start-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Hel Ved Coaching</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <Link to="#" className="mr-4 hover:underline md:mr-6 ">About</Link>
                </li>
                <li>
                    <Link to="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
                </li>
                <li>
                    <Link to="#" className="mr-4 hover:underline md:mr-6 ">Licensing</Link>
                </li>
                <li>
                    <Link to="#" className="hover:underline">Contact</Link>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <span className="hover:underline">Tom-Elbin bendheim</span></span>
    </div>
</footer>


    );
}
export default Footer;