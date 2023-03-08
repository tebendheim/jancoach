import React from 'react';
import {Navigate, Link} from 'react-router-dom'
import OmHome from '../Components/OmHome'
import Navbar from '../Components/Navbar'


function Home():JSX.Element {
	return (
			<section className="h-full w-full absolute top-0 left-0">
				<div className="h-screen to-transparent
					bg-[url('../../Bilder/janPaaFjellet.png')]
					bg-no-repeat
					bg-cover bg-clip-content min-w-full min-h-full z-0 left-0">	
					<div className="flex justify-items-start   relative top-2/3 left-36 ">
						<div className="rounded-full w-fit h-fit p-4 font-bold  mr-2 bg-yellow-300 opacity-80 "><Link  className="text-center align-bottom  text-black " to="/kontakt">Kontakt meg</Link></div>
						<div className="rounded-full w-fit h-fit p-4 font-bold bg-white opacity-60 dark:opacity-90 backdrop-blur-xl backdrop-brightness-125 -backdrop-hue-rotate-10 dark:bg-transparent dark:backdrop-brightness-50 "><Link  className="text-center align-bottom text-black dark:text-white " to="/kontakt">Om</Link></div>
					</div>
			</div>
				<div className='relative top-f bg-nav h-screen w-full '></div>
				<div className='bg-red-600 h-screen w-full'></div>
			</section>
			


	);
}

export default Home;


{/*  */}
