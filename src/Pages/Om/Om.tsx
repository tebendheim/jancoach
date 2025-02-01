import { ShieldExclamationIcon } from "@heroicons/react/24/solid";
import React from "react";
import Navbar from "../../Components/Navbar";
import image from "../../Bilder/broMolo.jpg";
import janImg from "../../Bilder/JanPaaVannet.jpg";
import jan2 from "../../Bilder/image.png";
import FullContactForm from "../Kontakt/FormComponents/FullContactForm";

const Om = () => {
  return (
    <div>
      <section className="relative h-20">
        <Navbar
          bgColor="bg-new-dark-green sm:bg-new-dark-green/90 text-white dark:bg-nav-dark"
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
        <div className=" flex flex-col gap-10 ">
          <div className="relative h-fit">
            <h1 className="absolute -top-3 p-2 xs:-top-3 sm:left-0 w-full xs:w-auto transform -translate-y-full text-white bg-new-dark-green dark:bg-section-green rounded-md  font-extrabold text-md xs:text-xl md:text-3xl">
              OM MEG
            </h1>
          </div>
          <div className="flex flex-col-reverse md:flex-row items-center gap-10">
            <div className="w-full md:w-1/3">
              <img
                src={jan2} // Oppdater stien til det opplastede bildet
                alt="Jan Bendheim"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-2/3 text-2xl">
              <p className="mb-4">
                <span className="font-bold">Jan Bendheim</span> har vært
                yrkesoffiser i nærmere 40 år, med lederstillinger opp til høyt
                mellomledernivå. Han har lang erfaring som tillitsvalgt for
                befal i Forsvaret, og har vært ettertraktet seminarleder for
                Famlab.
              </p>
              <p>
                Jan er kjent for å være hel ved, robust og trygg, og han skaper
                tillit og bygger sterke relasjoner. Han er en god formidler som
                er verdiorientert og helhetsorientert. Som leder er han tydelig
                og fleksibel, og han ser hver enkelt person. Jan er en aktiv
                lytter, arbeidsom og reflektert, samt analytisk og lojal. Han er
                autentisk og gir alltid sitt beste.
              </p>
            </div>
          </div>
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

export default Om;
