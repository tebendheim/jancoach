import React from "react";
import { Navigate, Link } from "react-router-dom";
import OmHome from "../Components/OmHome";
import JanPaaFjeler from "../Bilder/janPaaFjellet.png";
import MyButton from "../Components/MyButton";
import Navbar from "../Components/Navbar";
import NavbarPicture from "../Components/NavbarPicture";

function Home(): JSX.Element {
  // h-full w-full relative -top-24 left-0

  const navSlogan = () => {
    return (
      <div className="absolute bottom-9 left-1/2 transform -translate-x-1/2">
        <p className="bottom-0 font-semibold sm:text-lg md:text-2xl lg:text-4xl xl:text-6xl text-white">
          Det handler om å være hel ved
        </p>
      </div>
    );
  };

  return (
    <section>
      <NavbarPicture
        imgUrl={JanPaaFjeler}
        componentHeight={"screen"}
        height="screen"
        width={"screen"}
        tekstkomponent={navSlogan}
      />

      <section className="flex flex-row justify-around px-20 py-10 gap-20 w-full">
        <div className="w-5/12">
          <h1 className="text-3xl font-extrabold text-white">Lorem Ipsum</h1>
          <h2 className="text-xl font-semibold text-white">
            What is Lorem Ipsum?
          </h2>
          <p className="text-white text-md mb-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          <MyButton
            className="w-fit inline-flex"
            buttonText="Gratis veiledningstime"
            to="/kontakt"
          />
        </div>
        <div
          className={` h-96 w-5/12 rounded-3xl
      				bg-no-repeat bg-cover bg-right-bottom bg-clip-content`}
          style={{ backgroundImage: `url(${JanPaaFjeler})` }}
        ></div>
      </section>

      <section className="flex flex-row justify-around px-20 py-10 gap-20 w-full bg-slate-200 dark:bg-slate-800">
        <div
          className={` h-96 w-5/12 rounded-3xl
      				bg-no-repeat bg-cover bg-right-bottom bg-clip-content`}
          style={{ backgroundImage: `url(${JanPaaFjeler})` }}
        ></div>
        <div className="w-5/12">
          <h1 className="text-3xl font-extrabold text-white">Lorem Ipsum</h1>
          <h2 className="text-xl font-semibold text-white">
            What is Lorem Ipsum?
          </h2>
          <p className="text-white text-md mb-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          <MyButton
            className="w-fit inline-flex"
            buttonText="Gratis veiledningstime"
            to="/kontakt"
          />
        </div>
      </section>

      <section className="flex flex-row justify-around px-20 my-20 gap-20 w-full">
        <div className="w-5/12">
          <h1 className="text-3xl font-extrabold text-white">Lorem Ipsum</h1>
          <h2 className="text-xl font-semibold text-white">
            What is Lorem Ipsum?
          </h2>
          <p className="text-white text-md mb-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          <MyButton
            className="w-fit inline-flex"
            buttonText="Gratis veiledningstime"
            to="/kontakt"
          />
        </div>
        <div
          className={` h-96 w-5/12 rounded-3xl
      				bg-no-repeat bg-cover bg-right-bottom bg-clip-content`}
          style={{ backgroundImage: `url(${JanPaaFjeler})` }}
        ></div>
      </section>
    </section>
  );
}

export default Home;
