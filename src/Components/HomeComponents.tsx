import React, { ReactNode } from "react";

interface props {
  myButton: ReactNode;
  bgColor: string;
  darkBgColor: string;
  flexDirection: string;
  image: string;
}

const HomeComponents: React.FC<props> = ({
  bgColor,
  flexDirection,
  myButton,
  image,
  darkBgColor,
}) => {
  return (
    <section
      className={`flex ${flexDirection} justify-around px-20 py-10 gap-20 w-full ${bgColor}`}
    >
      <div className="w-full md:w-5/12">
        <h1 className="text-3xl font-extrabold text-white">Lorem Ipsum</h1>
        <h2 className="text-xl font-semibold text-white">
          What is Lorem Ipsum?
        </h2>
        <p className="text-white text-md mb-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>

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
