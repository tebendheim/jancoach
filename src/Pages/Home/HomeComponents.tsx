import { List } from "postcss/lib/list";
import React, { Children, ReactNode } from "react";

interface props {
  myButton?: ReactNode;
  id?: string;
  bgColor: string;
  darkBgColor: string;
  section: string;
  wrapper?: string;
  image?: string;
  h1?: string;
  h2?: string;
  children: React.ReactNode;
  images?: String[];
}

const HomeComponents: React.FC<props> = ({
  bgColor,
  id,
  section,
  myButton,
  image,
  darkBgColor,
  wrapper,
  h1,
  h2,
  children,
  images,
}) => {
  return (
    <section
      id={id}
      className={`flex ${section} justify-between py-10 gap-20 w-full ${bgColor} h-fit`}
    >
      <div
        className={`w-full ${
          image && "lg:w-7/12"
        } flex flex-col items-center lg:items-start  ${wrapper}`}
      >
        {h1 && <h1 className="text-3xl  font-extrabold text-white">{h1}</h1>}
        {h2 && <h2 className="text-xl mt-3 font-semibold text-white">{h2}</h2>}
        <section className="text-white text-md mb-10">{children}</section>
        <div className="flex justify-center">{myButton}</div>
      </div>

      {images && images.length > 0 ? (
        <div className="flex flex-col gap-4 w-full md:w-5/12">
          {" "}
          {images.map((img, index) => (
            <div
              key={index}
              className="w-full h-96 rounded-3xl bg-no-repeat bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          ))}
        </div>
      ) : (
        image && (
          <div
            className="w-96 h-150 self-center
             rounded-3xl bg-white overflow-visible shadow-lg 
             bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        )
      )}
    </section>
  );
};

export default HomeComponents;
