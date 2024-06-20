import React, { Children, ReactNode } from "react";

interface props {
  myButton: ReactNode;
  bgColor: string;
  darkBgColor: string;
  section: string;
  wrapper?: string;
  image: string;
  h1?: string;
  h2?: string;
  children: React.ReactNode;
}

const HomeComponents: React.FC<props> = ({
  bgColor,
  section,
  myButton,
  image,
  darkBgColor,
  wrapper,
  h1,
  h2,
  children,
}) => {
  return (
    <section
      className={`flex ${section} justify-between px-20 py-10 gap-20 w-full ${bgColor}`}
    >
      <div
        className={`w-full md:w-7/12 flex flex-col items-center md:items-start  ${wrapper}`}
      >
        {h1 && <h1 className="text-3xl  font-extrabold text-white">{h1}</h1>}
        {h2 && <h2 className="text-xl mt-3 font-semibold text-white">{h2}</h2>}
        <p className="text-white text-md mb-10">{children}</p>
        <div className="flex justify-center">{myButton}</div>
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
