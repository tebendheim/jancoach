import React, { ReactComponentElement, useState, useEffect } from 'react';
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
		<nav className='sticky top-0 bg-transparent border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-transparent z-30 backdrop-blur-xl -backdrop-hue-rotate-10 backdrop-brightness-50 dark:backdrop-brightness-125'>
			<div className='container flex flex-wrap justify-between items-center mx-auto'>
				<a href="/" className='self-center text-xl whitespace-nowrap dark:text-gray-300 font-medium hover:text-white'>
					HEL VED
				</a>
				{}
				<button
					//data-collapse-toggle='navbar-default'
					type='button'
					className={
						'inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
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
					<ul className='flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-neutral-600 md:dark:bg-gray-200 dark:border-gray-700'>
						<li>
							<a
								href='/kontakt'
								className='block py-2 pr-4 pl-3 text-gray-700 hover:bg-blue-650 hover:text-blue-400 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
								aria-current='page'
							>
								Kontakt
							</a>
						</li>
						<li>
							<a
								href='/tjenester'
								className='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
							>
								Tjenester
							</a>
						</li>
						<li>
							<a
								href='om'
								className='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
							>
								Om meg
							</a>
						</li>
						<li>
						<button onClick={toggle} className="text-blue-500">
						{isDarkMode ? (
						<MoonIcon className="h-6 w-6" />
						) : (
						<SunIcon className="h-6 w-6" />
						)}
					</button>
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
