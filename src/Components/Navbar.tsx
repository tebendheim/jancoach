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
	const { isDarkMode, toggle } = useDarkMode();

	return (
		<nav className='h-26 fixed w-screen top-0 bg-transparent border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-transparent z-30 backdrop-blur-xl  dark:backdrop-brightness-50 backdrop-brightness-125'>
			<div className='container flex flex-wrap justify-between items-center mx-auto'>
				<a href="/" className='self-center text-xl whitespace-nowrap dark:text-white font-bold dark:hover:text-gray-300'>
					HEL VED
				</a>
				{}
				<button
					//data-collapse-toggle='navbar-default'
					type='button'
					className={
						'inline-flex items-center p-2 ml-3 text-sm text-gray-700 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600'
					}
					aria-controls='navbar-default'
					aria-expanded='false'
					onClick={handleClick}
				>
					<span className='sr-only'>Open main menu</span>
					<svg
						className='w-6 h-6'
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
				<div
					className={`${toggleDD ? '' : 'hidden'} w-full md:block md:w-auto`}
					id='navbar-default'
				>
					{/*her må jeg få fjernet Hidden ved å trykke på hamburger*/}
					<ul className='flex flex-col p-4 mt-4  rounded-lg border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-transparent dark:to-slate-700 justify-items-end'>
					<li>
						<button onClick={toggle} className="block py-2 pr-4 pl-0 ml-0 text-blue-500">
						{isDarkMode ? (
						<SunIcon className="h-6 w-6" />
						) : (
						<MoonIcon className="h-6 w-6" />
						)}
					</button>
						</li>
						<li>
							<Link
								to='/kontakt'
								className='block py-2 pr-4 pl-3 rounded md:bg-transparent   text-slate-900 text-lg dark:text-gray-50 dark:hover:text-gray-400 '
								aria-current='page'
							>
								Kontakt
							</Link>
						</li>
						<li>
							<Link
								to='/tjenester'
								className='block py-2 pr-4 pl-3 rounded md:bg-transparent   text-slate-900 text-lg dark:text-gray-50 dark:hover:text-gray-400 '
							>
								Tjenester
							</Link>
						</li>
						<li>
							<Link
								to='om'
								className='block py-2 pr-4 pl-3 rounded md:bg-transparent   text-slate-900 text-lg dark:text-gray-50 dark:hover:text-gray-400 '
							>
								Om meg
							</Link>
						</li>
						
					</ul>
					
					
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

{
	/* <header classNameName='flex flex-row  sticky top-0 w-full h-12 mb-2 bg-slate-800'>
<div classNameName='bg-slate-800'>
    <h1 classNameName=''>
        <a href='/'>Hel Ved</a>
    </h1>
</div>
<ul classNameName=''>
    <li classNameName=''>
        <a classNameName='' href='/'>
            Tjenester
        </a>
    </li>
    <li classNameName=''>
        <a classNameName='' href='/'>
            Om meg
        </a>
    </li>
    <li classNameName=''>
        <a classNameName='' href='/'>
            Kontakt
        </a>
    </li>
</ul>
</header> */
}
