import React from "react";
import { Navigate, Link } from "react-router-dom";
import OmHome from "../Components/OmHome";
// import JanPaaFjeler from "../../Bilder/janPaaFjellet.png";
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
        imgUrl="/src/Bilder/janPaaFjellet.png"
        componentHeight={"screen"}
        height="screen"
        width={"screen"}
        tekstkomponent={navSlogan}
      />

      <section className="flex flex-row justify-between gap-32 mx-40 my-40 w-full">
        <div className="w-5/12">
          <h1 className="">Lorem Ipsum</h1>
          <h2 className="">What is Lorem Ipsum?</h2>
          <p className="">
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
          className={` h-96 w-1/2 bg-[url('${"/src/Bilder/janPaaFjellet.png"}')]
      				bg-no-repeat bg-cover bg-right-bottom bg-clip-content`}
          //   style={{ backgroundImage: `url(${"/Bilder/janPaaFjellet.png"})` }}
        ></div>
      </section>

      <section className=" bg-slate-200 dark:bg-slate-800 row-start-4 row-span-1 col-start-1 col-span-12 grid grid-rows-4-auto grid-cols-12 py-12"></section>

      <section className=" bg-slate-200 dark:bg-slate-800 row-start-4 row-span-1 col-start-1 col-span-12 grid grid-rows-4-auto grid-cols-12 py-12">
        <div className="col-start-2 col-span-10 md:col-start-8 md:col-span-4 row-start-1 row-span-1 flex flex-col max-h-full min-h-fit">
          <h1 className="text-4xl font-semibold dark:text-white">
            Lorem Ipsum
          </h1>
          <h2 className="pt-4 font-semibold dark:text-white">
            What is Lorem Ipsum?
          </h2>
          <p className="pt-2 mb-6 dark:text-white">
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
            className="w-fit py-2 self-start"
            buttonText="Gratis veiledningstime"
            to="/kontakt"
          />
        </div>
        <div className=" row-start-2 col-start-2 w-full col-span-10 h-96 md:col-start-2 md:row-start-1  bg-slate-400 row-span-1 my-12 md:col-span-5"></div>
      </section>
      <section className=" row-start-5 row-span-1 col-start-1 col-span-12 grid grid-rows-4-auto grid-cols-12 py-12 ">
        <div className="col-start-2 md:col-start-2 md:col-span-4 col-span-10 row-start-1 row-span-1 flex flex-col max-h-full min-h-fit">
          <h1 className="text-4xl font-semibold dark:text-white">
            Lorem Ipsum
          </h1>
          <h2 className="pt-4 font-semibold dark:text-white">
            What is Lorem Ipsum?
          </h2>
          <p className="pt-2 mb-6 dark:text-white">
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
            className="w-fit py-2 self-start"
            buttonText="Gratis veiledningstime"
            to="/kontakt"
          />
        </div>
        <div className=" row-start-2 col-start-2 w-full col-span-10 h-96 md:col-start-7 md:row-start-1  bg-slate-400 row-span-1 my-12 md:col-span-5"></div>
      </section>
    </section>
  );
}

export default Home;
