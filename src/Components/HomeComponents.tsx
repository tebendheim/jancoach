import React, { Children, ReactNode } from "react";

interface props {
  myButton: ReactNode;
  bgColor: string;
  darkBgColor: string;
  flexDirection: string;
  image: string;
  h1: string;
  h2: string;
  children: React.ReactNode;
}

const HomeComponents: React.FC<props> = ({
  bgColor,
  flexDirection,
  myButton,
  image,
  darkBgColor,
  h1,
  h2,
  children,
}) => {
  return (
    <section
      className={`flex ${flexDirection} justify-around px-20 py-10 gap-20 w-full ${bgColor}`}
    >
      <div className="w-full md:w-5/12">
        <h1 className="text-3xl font-extrabold text-white">{h1}</h1>
        <h2 className="text-xl font-semibold text-white">{h2}</h2>
        <p className="text-white text-md mb-10">{children}</p>

        {myButton}
      </div>
      <div
        className={`w-full h-96 md:w-5/12 rounded-3xl
                  bg-no-repeat bg-cover bg-right-bottom bg-clip-content`}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </section>
  );
};

export default HomeComponents;
