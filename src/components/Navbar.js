import React from 'react';
import style from '../css/Navbar.module.css';
import { useScrollPosition } from './hooks/useScrollPosition';

const Navbar = () => {
	const scrollPosition = useScrollPosition();
	console.log(scrollPosition);
	return (
		<header
			className={`${style.navWrapper} ${
				scrollPosition > 0 ? null : style.navWrapper_bg
			}`}
		>
			<div className={style.logoWrapper}>
				<h1 className={style.title}>
					<a href='/'>Hel Ved</a>
				</h1>
			</div>
			<ul className={style.navObjects}>
				<li className={style.navObject}>
					<a className={style.navObjectRef} href='/'>
						Tjenester
					</a>
				</li>
				<li className={style.navObject}>
					<a className={style.navObjectRef} href='/'>
						Om meg
					</a>
				</li>
				<li className={`${style.navObject} ${style.navKontakt}`}>
					<a className={style.navObjectRef} href='/'>
						Kontakt
					</a>
				</li>
			</ul>
		</header>
	);
};

export default Navbar;
