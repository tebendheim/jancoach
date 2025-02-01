import React from "react";
import { Navigate, Link } from "react-router-dom";

interface MyButtonProps {
  buttonText: string;
  className?: string;
  to?: string;
  textColor?: string;
  onClick?: () => void;
}

const MyButton: React.FC<MyButtonProps> = ({
  buttonText,
  className,
  to,
  textColor,
  onClick,
}) => {
  if (to)
    return (
      <Link className={`${className} px-4  rounded-md`} to={to}>
        <button className={` ${textColor} text-center text-xl font-medium`}>
          {buttonText}
        </button>
      </Link>
    );
  return (
    <button
      onClick={onClick}
      className={`${className} ${textColor} px-4 rounded-md text-xl font-medium`}
    >
      {buttonText}
    </button>
  );
};
export default MyButton;
