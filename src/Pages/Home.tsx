import React from 'react';
import {Navigate, Link} from 'react-router-dom'
import OmHome from '../Components/OmHome'
import Navbar from '../Components/Navbar'
import JanPaaFjeler from '../../Bilder/janPaaFjellet.png'


function Home():JSX.Element {
	// h-full w-full relative -top-24 left-0
	return (
			<section className="col-span-full row-start-1 grid-cols-12 grid-rows-5">
				<section className="row-start-1 row-span-2">
					<div className="h-screen
						bg-[url('/Bilder/janPaaFjellet.png')]
						bg-no-repeat
						bg-cover bg-clip-content z-0 grid grid-rows-6 grid-cols-12">	
						<div className="z-0 row-start-5 col-start-2 flex col-span-3 justify-between">
							<div className="backdrop-filter backdrop-blur-2xl rounded-full h-fit p-6 font-bold  whitespace-nowrap bg-yellow-300 bg-opacity-80"><Link  className="text-center align-bottom  text-black " to="/kontakt">Kontakt meg</Link></div>
							<div className="backdrop-filter backdrop-blur-2xl rounded-full h-fit p-6 font-bold bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-75 "><Link  className="text-center align-bottom text-black dark:text-white " to="/om">Om</Link></div>
						</div>
					</div>
				</section>
			</section>
			


	);
}

export default Home;


{/* Alternative måter å legge til BG bilder på: Begge deler fungerer. :) 

<div className="" style={{backgroundImage: `url(${JanPaaFjellet})`}}></div> 

<div className="bg-[url('/Bilder/janPaaFjellet.png')]">

*/}
