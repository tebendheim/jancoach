import React from 'react';
import {Navigate, Link} from 'react-router-dom'
import OmHome from '../Components/OmHome'
import Navbar from '../Components/Navbar'
import JanPaaFjeler from '../../Bilder/janPaaFjellet.png'


function Home():JSX.Element {
	// h-full w-full relative -top-24 left-0
	return (
			<section className="col-span-full grid grid-rows-5 grid-cols-12">
				<section className="row-start-1 row-span-2 col-start-1 col-span-full">
					<div className="h-screen
						bg-[url('/Bilder/janPaaFjellet.png')]
						bg-no-repeat
						bg-cover bg-right-bottom bg-clip-content z-0 ">
						<div className="relative h-full pt-16 md:pt-24 grid grid-rows-12 grid-cols-12">
							<div className = "relative self-center  h-full w-full row-span-2 col-span-8 col-start-3 row-start-11 sm:col-span-6 sm:col-start-4 lg:row-start-5 lg:col-start-2 lg:col-span-5 lg:row-span-3 bg-white bg-opacity-90 dark:bg-black dark:bg-opacity-60 dark:text-white backdrop-filter backdrop-blur-2xl flex flex-col justify-between border-solid border-slate-300 border-2 border-r-slate-300-300 rounded-3xl">
								<p className="pl-4 pt-2 self-start font-semibold sm:text-lg md:text-2xl lg:text-2xl xl:text-3xl ">- Det handler om å være hel ved</p>
								<div className="z-0 flex justify-between mb-2 mx-4 md:mb-6 lg:mb-8 ">
									<div className="p-4 rounded-full h-fit font-bold  whitespace-nowrap bg-blue-400 border-slate-300 border-2 border-r-slate-300-300"><Link  className="text-center align-bottom  text-black " to="/kontakt">Kontakt meg</Link></div>
									<div className="p-4 rounded-full h-fit font-bold bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-75 border-slate-300 border-2 border-r-slate-300-300 "><Link  className="text-center align-bottom text-black dark:text-white " to="/om">Om</Link></div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<div className="bg-red-500 row-start-3 row-span-2 col-start-1 col-span-3"></div>
			</section>
			


	);
}

export default Home;


{/* Alternative måter å legge til BG bilder på: Begge deler fungerer. :) 

<div className="" style={{backgroundImage: `url(${JanPaaFjellet})`}}></div> 

<div className="bg-[url('/Bilder/janPaaFjellet.png')]">

*/}
