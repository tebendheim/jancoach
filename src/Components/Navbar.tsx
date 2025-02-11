import React, { ReactComponentElement, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AcademicCapIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useDarkMode } from "usehooks-ts";
//import "../css/mask.css";
// import logo from "../../Bilder/Logo (2).svg";
import logo from "../Bilder/Logo (2).svg";
import logowhite from "../Bilder/logoNy.png";

interface props {
  bgColor: string;
  logoColor: string;
}

const Navbar: React.FC<props> = ({ bgColor, logoColor }) => {
  const [toggleDD, onToggleDD] = React.useState<boolean>(false);
  const menu = document.getElementById("navbar-default");
  const handleClick = () => {
    onToggleDD(!toggleDD);
  };

  React.useEffect(() => {
    const handleResize = () => {
      onToggleDD(false);
    };
    window.addEventListener("resize", handleResize);
  });

  const { isDarkMode, toggle } = useDarkMode();
  return (
    <section className="fixed w-full top-0 z-10">
      {/* <nav className={` md:h-24 grid grid-rows-1 grid-cols-1 fixed bg-gradient-to-b from-white to-transparent bg-opacity-20 dark:bg-gradient-to-b dark:from-black    dark:bg-opacity-20 w-full `}> */}
      <nav
        // className={`w-full  fixed bg-gradient-to-b from-white to-transparent bg-opacity-80 dark:from-black dark:to-transparent`}
        className={`flex w-full ${bgColor}  `}
      >
        <div
          // className={`inline-flex flex-row justify-around ${toggleDD ? "" : ""} `}
          className="flex flex-col sm:flex-row justify-between items-center w-full  mx-6 my-2"
        >
          <div className="flex justify-between w-full sm:w-fit">
            <Link to="/" className="flex items-center h-full">
              <img
                className={` h-16 ${logoColor} rounded-full`}
                src={
                  document.documentElement.classList.contains("dark")
                    ? logowhite
                    : logo
                }
              ></img>
            </Link>
            <button
              type="button"
              className={"text-white justify-self-end sm:hidden"}
              aria-controls="navbar-default"
              aria-expanded="false"
              onClick={handleClick}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="fill-current w-6 h-6 -m-0.5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <ul
            //   className={` ${toggleDD ? "" : ""}  `}
            className={` ${
              !toggleDD && "hidden sm:flex"
            }  gap-10 flex flex-col sm:flex-row justify-between sm:items-center "`}
          >
            <li className="flex justify-center">
              <button className="align-middle" onClick={toggle}>
                {isDarkMode ? (
                  <SunIcon className="h-6 w-6 text-blue-600" />
                ) : (
                  <MoonIcon className="h-6 w-6 text-blue-600" />
                )}
              </button>
            </li>
            <li>
              <Link to={"/"} className="text-xl" aria-current="page">
                Hjem
              </Link>
            </li>
            <li className="">
              <Link to="/kontakt" className="text-xl" aria-current="page">
                Kontakt
              </Link>
            </li>
            <li className="text-xl">
              <Link to="/tjenester">Tjenester</Link>
            </li>
            <li className="text-xl">
              <Link to="/om">Om meg</Link>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;

// <section className=" row-start-1 col-span-full z-30">
// {/* <nav className={` md:h-24 grid grid-rows-1 grid-cols-1 fixed bg-gradient-to-b from-white to-transparent bg-opacity-20 dark:bg-gradient-to-b dark:from-black    dark:bg-opacity-20 w-full `}> */}
// <nav className={`w-full grid grid-rows-1 grid-cols-1 fixed bg-gradient-to-b from-white to-transparent bg-opacity-80 dark:from-black dark:to-transparent`}>
// 	<div className="row-start-1 row-span-1 col-start-1 col-span-1 h-full w-full gradient-blur">
// 			<div></div>
// 			<div></div>
// 			<div></div>
// 			<div></div>
// 			<div></div>
// 			<div></div>
// 	</div>

// 	<div className={`grid ${toggleDD ? "grid-rows-navBar2":"grid-rows-navBar1"} md:grid-rows-1  row-start-1 row-span-1 col-start-1 col-span-1 auto-rows-auto grid-cols-12 items-center z-20`}>
// 		<Link to="/" className='col-start-2 col col-span-2 justify-self-start row-start-1 flex flex-col justify-center h-full'>
// 			<img className=" h-3/5 bg-none dark:bg-white rounded-full" src={logo}></img>
// 		</Link>
// 		<button
// 			type='button'
// 			className={
// 				"text-white  col-start-11 justify-self-end md:hidden"
// 			}
// 			aria-controls='navbar-default'
// 			aria-expanded='false'
// 			onClick={handleClick}
// 		>
// 			<span className='sr-only'>Open main menu</span>
// 			<svg
// 				className='fill-current w-6 h-6 -m-0.5'
// 				aria-hidden='true'
// 				fill='currentColor'
// 				viewBox='0 0 20 20'
// 				xmlns='http://www.w3.org/2000/svg'
// 			>
// 				<path
// 					fillRule='evenodd'
// 					d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
// 					clipRule='evenodd'

// 				></path>
// 			</svg>
// 		</button>

// 			<ul className={` ${toggleDD ? "flex-col" : "hidden"} justify-center place-items-center md:flex col-start-6 justify-self-start row-start-2  md:row-start-1  md:col-start-7 md:col-span-5 lg:col-start-8 lg:col-span-4 md:justify-self-stretch md:justify-between`}>
// 				<li className="my-4 text-center">
// 					<button className="align-middle" onClick={toggle}>
// 						{isDarkMode ? (
// 						<SunIcon className="h-6 w-6 text-blue-600" />
// 						) : (
// 						<MoonIcon className="h-6 w-6 text-blue-600" />
// 						)}
// 					</button>
// 				</li>
// 				<li className="my-4 text-center border-2 p-2 m-0.5 rounded-xl hover:border-4 hover:m-0 border-gray-800 dark:border-gray-100">
// 					<Link
// 						to='/kontakt'
// 						className=' justify-self-start rounded md:bg-transparent font-medium  text-slate-900 hover:text-slate-500  text-lg dark:text-gray-50 dark:hover:text-gray-400 '
// 						aria-current='page'
// 					>
// 						Kontakt
// 					</Link>
// 				</li>
// 				<li className="my-4 text-center">
// 					<Link
// 						to='/tjenester'
// 						className='rounded md:bg-transparent   text-slate-900  font-medium hover:text-slate-500 text-lg dark:text-gray-50 dark:hover:text-gray-400 '
// 					>
// 						Tjenester
// 					</Link>
// 				</li>
// 				<li className="my-4 text-center">
// 					<Link
// 						to='om'
// 						className='whitespace-nowrap rounded md:bg-transparent  text-slate-900 font-medium hover:text-slate-500 text-lg dark:text-gray-50 dark:hover:text-gray-400 '
// 					>
// 						Om meg
// 					</Link>
// 				</li>

// 			</ul>
// 	</div>
// </nav>
// </section>
// );
// };
