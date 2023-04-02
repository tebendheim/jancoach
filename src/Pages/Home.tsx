import React from 'react';
import {Navigate, Link} from 'react-router-dom'
import OmHome from '../Components/OmHome'
import Navbar from '../Components/Navbar'


function Home():JSX.Element {
	// h-full w-full relative -top-24 left-0
	return (
			<section className="left-0 col-span-full  row-start-2 ">
				<section>
					<div className="h-screen to-transparent
						bg-[url('../../Bilder/janPaaFjellet.png')]
						bg-no-repeat
						bg-cover bg-clip-content min-w-full min-h-full z-0 left-0">	
						<div className="flex justify-items-start w-fit relative top-2/3 left-36 ">
							<div className="rounded-full w-fit h-fit p-4 font-bold  mr-2 bg-yellow-300 bg-opacity-80"><Link  className="text-center align-bottom  text-black " to="/kontakt">Kontakt meg</Link></div>
							<div className="rounded-full w-fit h-fit p-4 font-bold bg-white dark:bg-black bg-opacity-50"><Link  className="text-center align-bottom text-black dark:text-white " to="/om">Om</Link></div>
						</div>
					</div>
					
				</section>
				<section>
					<div className='relative top-f bg-nav h-screen w-full '></div>
					<div className='bg-red-600 h-screen w-full'></div>
				</section>
			</section>
			


	);
}

export default Home;


{/*  */}
