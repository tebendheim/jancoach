import React from "react";
import { Navigate, Link } from "react-router-dom";
import OmHome from "../Components/OmHome";
import JanPaaFjellet from "../Bilder/janPaaFjellet.png";
import logo from "../Bilder/Logo-cropped.svg";
import MyButton from "../Components/MyButton";
import Navbar from "../Components/Navbar";
import NavbarPicture from "../Components/NavbarPicture";
import HomeComponents from "../Components/HomeComponents";

function Home(): JSX.Element {
  // h-full w-full relative -top-24 left-0

  const navSlogan = () => {
    return (
      <div className="self-center justify-self-center">
        <p className="font-semibold sm:text-lg md:text-2xl lg:text-4xl xl:text-6xl text-white">
          Det handler om å være hel ved
        </p>
      </div>
    );
  };

  return (
    <section className="bg-light-beige">
      <div className="relative h-screen mb-10 bg-light-beige dark:bg-gray-500">
        <NavbarPicture
          imgUrl={logo}
          componentHeight={"full"}
          height="full"
          width={"full"}
          tekstkomponent={navSlogan}
          navColor={"bg-new-dark-green/90"}
          logoColor={"bg-skog"}
        />
      </div>

      <HomeComponents
        bgColor="bg-skog"
        darkBgColor="bg-slate-800"
        flexDirection="flex-col md:flex-row"
        myButton={
          <MyButton
            className="w-fit inline-flex bg-gradient-to-terracotta-red"
            buttonText="Gratis veiledningstime"
            to="/kontakt"
            textColor="text-white"
          />
        }
        image={JanPaaFjellet}
      />

      <HomeComponents
        bgColor="bg-light-beige"
        darkBgColor=""
        flexDirection="flex-col md:flex-row-reverse"
        myButton={
          <MyButton
            className="w-fit inline-flex bg-gradient-to-terracotta-red"
            buttonText="Gratis veiledningstime"
            to="/kontakt"
            textColor="text-white"
          />
        }
        image={JanPaaFjellet}
      />

      <HomeComponents
        bgColor="bg-skog"
        darkBgColor=""
        flexDirection="flex-col md:flex-row"
        myButton={
          <MyButton
            className="w-fit inline-flex bg-gradient-to-terracotta-red"
            buttonText="Gratis veiledningstime"
            to="/kontakt"
            textColor="text-white"
          />
        }
        image={JanPaaFjellet}
      />

      <HomeComponents
        bgColor="bg-light-beige"
        darkBgColor=""
        flexDirection="flex-col md:flex-row-reverse"
        myButton={
          <MyButton
            className="w-fit inline-flex bg-gradient-to-terracotta-red"
            buttonText="Gratis veiledningstime"
            to="/kontakt"
            textColor="text-white"
          />
        }
        image={JanPaaFjellet}
      />
    </section>
  );
}

export default Home;
