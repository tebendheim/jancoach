import React from 'react';
import {Navigate} from 'react-router-dom'
import fBilde from "../../Bilder/janPaaFjellet.png";

function Home() {
	return (
		<div className="absolute to-transparent
		bg-[url('/Bilder/janPaaFjellet.png')]
		bg-no-repeat
		bg-cover bg-clip-content min-w-full min-h-full z-0 top-0 left-0">
		<p className="text-lg absolute bottom-0 left-32 text-center ">Det handler om hel ved</p>
		<a  className="rounded-full w-40 h-10 absolute bottom-1/3 left-32  text-center align-bottom backdrop-blur-xl backdrop-brightness-50 text-white" href="/kontakt">Kontakt meg</a>
	</div>

	);
}

export default Home;

{/* <div className="absolute to-transparent
				bg-[url('../../Bilder/janPaaFjellet.png')]
				bg-no-repeat
				bg-cover bg-clip-content min-w-full min-h-full z-0 top-0 left-0">
				<p className="text-lg absolute bottom-0 left-32 text-center ">Det handler om hel ved</p>
				<a  className="rounded-full w-40 h-10 absolute bottom-1/3 left-32  text-center align-bottom backdrop-blur-xl backdrop-brightness-50 text-white" href="/kontakt">Kontakt meg</a>
			</div> */}




		// 	<section className='h-auto h-max-full min-h-fit bg'>
		// 	<img src={fBilde} className=" absolute min-h-full min-w-full overflow-clip z-0 top-0 left-0">
		// 	</img>
			
		// 	<div className='text-black dark:text-white h-auto'>
		// 		<i className='fas fa-bars text-green-800 text-'></i> Home
		// 	</div>
		// 	<div className="bg-green-600 h-screen w-32"> test</div>
		// 	<div className='bg-nav h-screen w-55'></div>
		// 	<div className='bg-red-600 h-screen w-55'></div>
		// </section>