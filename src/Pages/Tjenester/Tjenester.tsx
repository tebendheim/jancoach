import { ShieldExclamationIcon } from "@heroicons/react/24/solid";
import React from "react";
import Navbar from "../../Components/Navbar";
import image from "../../Bilder/GammelBaat.jpg";
import FullContactForm from "../Kontakt/FormComponents/FullContactForm";
import style from "../../css/Tjenester.module.css";
import ServicesList from "./ServiceList";

const Tjenester = () => {
  return (
    <div>
      <section className="relative h-20">
        <Navbar
          bgColor="bg-new-dark-green sm:bg-new-dark-green text-white dark:bg-nav-dark"
          logoColor="bg-skog"
        />
      </section>
      <div className="dark:bg-section-beige bg-light-beige py-10 px-6 flex flex-col gap-10 ">
        <div className="relative h-36 sm:h-56 md:h-86 w-full px-0  overflow-hidden">
          <div
            className="bg-left-center bg-120-percent md:bg-110-percent bg-no-repeat rounded-md md:rounded-3xl h-full w-full"
            style={{
              backgroundImage: `url(${image})`,
            }}
          ></div>
        </div>
        <div className={`flex flex-col gap-10`}>
          <div className="relative h-fit">
            <h1 className="absolute -top-3 p-2 xs:-top-3 sm:left-0 w-full xs:w-auto transform -translate-y-full text-white bg-new-dark-green dark:bg-section-green rounded-md  font-extrabold text-md xs:text-xl md:text-3xl">
              HVA KAN JEG HJELPE DEG MED?
            </h1>
          </div>

          <ServicesList gridCols="md:grid-cols-2 lg:grid-cols-3" />
        </div>
      </div>
      <FullContactForm
        className="z-0 bg-new-dark-green dark:bg-section-green px-6 py-6 sm:py-14 lg:px-8"
        textColor="text-white"
        bgInputs="bg-light-beige text-black dark:bg-section-beige dark:text-white"
        textPrivacy="text-indigo-200"
      />
    </div>
  );
};

export default Tjenester;
