import React from "react";
import { Navigate, Link } from "react-router-dom";

interface MyButtonProps {
  buttonText: string;
  className?: string;
  to: string;
  textColor?: string;
}

const MyButton: React.FC<MyButtonProps> = ({
  buttonText,
  className,
  to,
  textColor,
}) => {
  return (
    <Link className={`${className} px-4  rounded-md`} to={to}>
      <button className={` ${textColor} text-center text-xl font-medium`}>
        {buttonText}
      </button>
    </Link>
  );
};
export default MyButton;
