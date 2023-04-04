import React from 'react';
import {Navigate, Link} from 'react-router-dom'


interface MyButtonProps {
    buttonText: string;
    className?:string;
    to:string;
  }

const MyButton: React.FC<MyButtonProps> = ({buttonText, className, to}) => {
    return (
                <Link className={`${className} px-4 bg-gradient-to-tr from-slate-700 dark:from-slate-200 to bg-blue-700 dark:bg-blue-400 rounded-md`} to={to}>
					<button className=" text-white text-center text-xl font-medium  dark:text-black">{buttonText}</button>
				</Link>
    );
}
export default MyButton;