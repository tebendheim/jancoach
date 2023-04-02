import React, { ReactComponentElement, useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import { AcademicCapIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useDarkMode } from "usehooks-ts";

const Navbar: React.FC = () => {
	const [toggleDD, onToggleDD] = React.useState<boolean>(false);
	const menu = document.getElementById('navbar-default');
	const handleClick = () => {
		onToggleDD(!toggleDD);
	};
	
	React.useEffect(() => {
		const handleResize = () => {
			onToggleDD(false);
		};
		window.addEventListener('resize', handleResize);
	})
	
	
	const { isDarkMode, toggle } = useDarkMode();
/*Alternativ på nav: bg-transparent backdrop-blur-xl dark:backdrop-brightness-50 backdrop-brightness-125 */
	return (
		<section className="bg-white dark:bg-black row-start-1 col-span-full row-span-2">
			{/*  "backdrop-filter backdrop-blur-2xl  h-16 md:h-24 dark:bg-black bg-opacity-75 sticky w-screen top-0  border-gray-200 px-2 md:px-4 z-30  md:flex md:flex-row" */}
			<nav className={`fixed backdrop-filter backdrop-blur-2xl w-full dark:backdrop-brightness-50 backdrop-brightness-125 `}>
				{/* grid ${toggleDD ? "grid-rows-3" : "grid-rows-1" } md:grid-rows-1 grid-cols-12 md:container md:flex md:flex-wrap md:justify-between place-items-center */}
				<div className={`grid ${toggleDD ? "grid-rows-navBar2":"grid-rows-navBar1"} md:grid-rows-1 md:h-24 auto-rows-auto grid-cols-12 items-center`}>
					{/* col-start-2 w-fit text-xl whitespace-nowrap dark:text-white font-bold dark:hover:text-gray-300 */}
					<a href="/" className=' font-bold text-lg whitespace-nowrap col-start-2 justify-self-start row-start-1 text-slate-900 dark:text-gray-50 dark:hover:text-gray-400'>
						HEL VED
					</a>
					{/* 'col-end-13 w-fit h-fit text-sm text-gray-700 rounded-lg md:hidden hover:bg-gray-100  hover:ring-2 dark:text-white dark:hover:bg-gray-700 */}
					<button
						//data-collapse-toggle='navbar-default'
						type='button'
						className={
							"text-white  col-start-11 justify-self-end md:hidden"
						}
						aria-controls='navbar-default'
						aria-expanded='false'
						onClick={handleClick}
					>
						<span className='sr-only'>Open main menu</span>
						<svg
							className='fill-current w-6 h-6 -m-0.5'
							aria-hidden='true'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
								clipRule='evenodd'

							></path>
						</svg>
					</button>

						{/*her må jeg få fjernet Hidden ved å trykke på hamburger*/}
						{/* <ul id='navbar-default' className={`${toggleDD ? "flex": "hidden"} md:flex flex-col rounded-lg border md:flex-row md:mt-0 md:text-sm md:font-medium md:border-0  dark:to-slate-700 row-start-2`}>   {/* {bg-transparent backdrop-blur-xl dark:backdrop-brightness-50 backdrop-brightness-125} */}
						<ul className={` ${toggleDD ? "flex-col" : "hidden"} justify-center place-items-center md:flex col-start-6 justify-self-start row-start-2  md:row-start-1  md:col-start-7 md:col-span-5 lg:col-start-8 lg:col-span-4 md:justify-self-stretch md:justify-between`}>
						{/*  <li>
							<button  className=" justify-self-start rounded md:bg-transparent   text-slate-900 text-lg dark:text-gray-50 dark:hover:text-gray-400 text-blue-500">
							
						</button> 
							</li> */}
							<li className="my-4 text-center">
								<button className="align-middle" onClick={toggle}>
									{isDarkMode ? (
									<SunIcon className="h-6 w-6 text-blue-600" />
									) : (
									<MoonIcon className="h-6 w-6 text-blue-600" />
									)}
								</button>
							</li>
							<li className="my-4 text-center">
								<Link
									to='/kontakt'
									className=' justify-self-start rounded md:bg-transparent   text-slate-900 text-lg dark:text-gray-50 dark:hover:text-gray-400 '
									aria-current='page'
								>
									Kontakt
								</Link>
							</li>
							<li className="my-4 text-center">
								<Link
									to='/tjenester'
									className='rounded md:bg-transparent   text-slate-900 text-lg dark:text-gray-50 dark:hover:text-gray-400 '
								>
									Tjenester
								</Link>
							</li>
							<li className="my-4 text-center">
								<Link
									to='om'
									className='whitespace-nowrap rounded md:bg-transparent  text-slate-900 text-lg dark:text-gray-50 dark:hover:text-gray-400 '
								>
									Om meg
								</Link>
							</li>
							
						</ul>
				</div>
			</nav>
		</section>
	);
};

export default Navbar;
