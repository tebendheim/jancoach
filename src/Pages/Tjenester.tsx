import { ShieldExclamationIcon } from "@heroicons/react/24/solid";
import React from "react";
import Navbar from "../Components/Navbar";
import image from "../Bilder/GammelBaat.jpg";

const Tjenester = () => {
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
              HVA KAN JEG HJELPE DEG MED?
            </h1>
          </div>
          <ul className="list-disc ml-4">
            <li>
              <h2>Coaching</h2>
              <p>
                {" "}
                Som NLP practitioner coach kan jeg være den støtten du trenger i
                forhold til å skape endring i ditt liv. Jeg hjelper deg til å
                sette mål og har en rekke verktøy jeg kan bruke for å støtte deg
                på veien til å nå målene. Gjennom samtaler, på nett eller ved
                fysisk møte, vil jeg hjelpe deg til å bli bedre kjent med deg
                selv – hva driver deg, hva hindrer deg, hva skaper glede og
                entusiasme, hvilke verdier styrer deg, hva gjør deg trist og
                hvorfor osv. – det skaper et skifte i deg i forhold til å ta
                grep om livet ditt og skape de endringene du ønsker eller
                trenger.{" "}
              </p>
            </li>
            <li className="">
              <h2>Lederutvikling</h2>{" "}
              <p>
                Jeg tar på meg oppdrag som mentor eller veileder for ledere på
                alle nivåer, som ønsker å utvikle seg selv og sitt lederskap for
                derigjennom å skape trygge gode arbeidsmiljøer med forutsetning
                for høyt prestasjonsnivå blant medarbeiderne. Jeg kan også legge
                til rette for utvikling av grupper. Det kan være i form av
                teamcoaching, teambuilding eller foredrag.
              </p>{" "}
            </li>
            <li>
              {" "}
              <h2>Foreldreutvikling</h2>{" "}
              <p>
                Er du usikker på foreldrerollen eller papparollen – Hvordan
                skape sunne relasjoner til dine barn? Hvordan skape læring og
                utvikling, heller enn konflikt og stagnasjon? Hvordan takle
                livet som småbarnsforelder og leder eller medarbeider, uten at
                stress, frustrasjon opplevelsen av å mislykkes tar overhånd? Er
                du usikker på hvordan du skal være pappa? Mister du deg selv på
                veien? Med en kombinasjon av coaching og rådgivning kan jeg
                bidra til at du får en bedre hverdag og periode i livet ditt,
                som ikke minst også skaper bedre rammer og hverdager for dine
                barn. Gjennom foredrag eller teamcoaching med tema som barns
                selvfølelse, kunsten å si nei, og trassalder, kan jeg også
                formidle til foreldregrupper mv.{" "}
              </p>
            </li>
            <li>
              {" "}
              <h2>Foredrag</h2> <p>Hel ved! Foredrag må lages</p>{" "}
            </li>
            <li>
              {" "}
              <h2>Rådgivning</h2>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tjenester;
