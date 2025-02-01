import React from "react";
import { Navigate, Link } from "react-router-dom";
import OmHome from "./OmHome";
import JanPaaFjellet from "../../Bilder/janPaaFjellet.png";
import janSmiler from "../../Bilder/20250201_091157.jpg";
import logo from "../../Bilder/Logo-cropped.svg";
import logoWhite from "../../Bilder/Hel Ved Coaching.png";
import naturogskog from "../../Bilder/naturogskog.jpg";
import janMil from "../../Bilder/janmil1.jpg";
import janMilSortHvit from "../../Bilder/janmil2SortHvit.jpg";
import MyButton from "./MyButton";
import Navbar from "../../Components/Navbar";
import NavbarPicture from "../../Components/NavbarPicture";
import HomeComponents from "./HomeComponents";
import ServicesList from "./ServiceList";
import Om from "../Om/Om";
import FullContactForm from "../Kontakt/FormComponents/FullContactForm";
import Veiledningstime from "./Veiledningstime";

function Home(): JSX.Element {
  const scrollToSection = () => {
    document.getElementById("gratisVeiledning")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  // h-full w-full relative -top-24 left-0

  const navSlogan = () => {
    return (
      <div className="mt-10 self-center justify-self-center">
        <p className="font-semibold font-rockwell text-3xl lg:text-4xl xl:text-6xl text-black dark:text-white">
          DET HANDLER OM Å VÆRE HEL VED
        </p>
      </div>
    );
  };

  return (
    <section className="bg-light-beige">
      <div className="relative bg-light-beige dark:bg-section-beige pb-10 dark:text-white">
        <NavbarPicture
          imgUrl={
            document.documentElement.classList.contains("dark")
              ? logoWhite
              : logo
          }
          componentHeight={"full"}
          height="full"
          width={"full"}
          tekstkomponent={navSlogan}
          navColor={
            "bg-new-dark-green sm:bg-new-dark-green text-white dark:bg-nav-dark"
          }
          logoColor={"bg-skog dark:bg-section-beige"}
        />
      </div>

      <HomeComponents
        bgColor="bg-skog dark:bg-section-green"
        darkBgColor="bg-section-green "
        section="flex-col md:flex-row px-6 sm:px-20 md:px-32 items-center md:justify-center lg:flex-row py-10"
        wrapper=""
        myButton={
          <MyButton
            className="w-fit items-center inline-flex bg-gradient-to-terracotta-red dark:bg-gradient-button-dark-mode"
            buttonText="Gratis veiledningstime - Din Mulighet til Forandring"
            onClick={scrollToSection}
            textColor="text-white"
          />
        }
        // h2={`Noen av tingene jeg kan hjelpe deg med er:`}
        children={
          <>
            <div className="relative h-fit">
              <h1 className="relative  sm:left-0 w-full xs:w-auto mb-10 text-white bg-new-dark-green dark:bg-section-green rounded-md  font-extrabold text-md xs:text-xl md:text-3xl">
                HVA KAN JEG HJELPE DEG MED?
              </h1>
            </div>
            <ServicesList gridCols="grid-cols-1 lg:grid-cols-2" />
          </>
        }
        images={[janSmiler, naturogskog]}
      />

      <HomeComponents
        bgColor=" bg-light-beige dark:bg-section-beige"
        darkBgColor=""
        section="flex-col px-6 sm:px-20 md:px-32 md:flex-row-reverse"
        wrapper=""
        myButton={
          <MyButton
            className="w-fit inline-flex bg-gradient-to-terracotta-red dark:bg-gradient-button-dark-mode"
            buttonText="Gratis veiledningstime"
            onClick={scrollToSection}
            textColor="text-white"
          />
        }
        children={
          <>
            <div className=" flex flex-col gap-10 ">
              <div className="relative h-fit">
                <h1 className=" p-2 w-full xs:w-auto transform  text-white  bg-new-dark-green dark:bg-section-green rounded-md  font-extrabold text-md xs:text-xl md:text-3xl">
                  OM MEG
                </h1>
              </div>
              <div className="flex flex-col-reverse md:flex-row items-center gap-10">
                <div className="w-full text-2xl text-black dark:text-white">
                  <p className="mb-4 ">
                    <span className="font-bold">Jan Bendheim</span> har vært
                    yrkesoffiser i nærmere 40 år, med lederansvar og
                    lederstillinger det meste av tiden. Han har i lange perioder
                    også vært tillitsvalgt for befal i Forsvaret, og han har
                    vært ettertraktet seminarleder og foredragsholder for Famlab
                    (famlab.no).
                  </p>
                  <p className="mb-4 ">
                    Jan er kjent for å være hel ved, robust og trygg, og han
                    skaper tillit og bygger sterke relasjoner. Han er en god
                    formidler som er verdiorientert og helhetsorientert. Som
                    leder er han tydelig og fleksibel, og han ser hver enkelt
                    person. Jan er en aktiv lytter, arbeidsom og reflektert,
                    samt analytisk og lojal. Han er autentisk og gir alltid sitt
                    beste.
                  </p>
                  <p className="mb-4 ">
                    Jan har fire barn i hvorav de eldste er voksne. Han har
                    periodevis vært aleneforelder både til småbarn og
                    tenåringsbarn.
                  </p>
                </div>
              </div>
            </div>
          </>
        }
        image={janMilSortHvit}
      />

      <HomeComponents
        id="gratisVeiledning"
        bgColor="bg-skog dark:bg-section-green"
        darkBgColor="bg-section-green "
        section="flex-col px-6 sm:px-20 md:px-32 md:flex-row-reverse"
        wrapper=""
        myButton={
          <MyButton
            className="w-fit inline-flex bg-gradient-to-terracotta-red dark:bg-gradient-button-dark-mode"
            buttonText="Bestill gratis veiledningstime"
            to="/kontakt"
            textColor="text-white"
          />
        }
        children={
          <>
            <div
              className={`w-full flex flex-col items-center md:items-start `}
            >
              <section className="text-white text-md mb-10">
                <div className="relative h-fit">
                  <h1 className="relative p-2 sm:left-0 w-full xs:w-auto mb-10 text-white bg-new-dark-green dark:bg-section-green rounded-md font-extrabold text-md xs:text-xl md:text-3xl">
                    Gratis uforpliktende oppstartsamtale - Din Mulighet til
                    Forandring
                  </h1>
                </div>
                <div className="text-black dark:text-white">
                  <p className="mb-4">
                    Ønsker du en endring i livet, men synes det er vanskelig å
                    finne veien? Å ta kontakt med meg for en gratis
                    uforpliktende oppstartsamtale kan være det aller viktigste
                    steget! I samtalen utforsker vi sammen hva du ønsker deg.
                    Jeg blir litt kjent med deg og du blir litt kjent med meg.
                    Til slutt finner vi ut om vi skal samarbeide videre.
                  </p>
                  <h2 className={`font-bold text-lg mb-2 `}>
                    Hvorfor Bør Du Booke en Gratis Uforpliktende Oppstartsamtale
                    i Dag?
                  </h2>
                  <ul className="list-disc ml-5 mb-4">
                    <li>
                      <strong>Personlig Vekst:</strong> Oppdag dine styrker,
                      utfordre dine begrensninger, og sett klare mål for
                      fremtiden. Coaching gir deg verktøyene du trenger for å
                      vokse både personlig og profesjonelt.
                    </li>
                    <li>
                      <strong>Klarhet og Fokus:</strong> Få klarhet i dine mål
                      og drømmer. Coaching hjelper deg å identifisere hva som
                      virkelig betyr noe for deg, og hvordan du kan oppnå det.
                    </li>
                    <li>
                      <strong>Stressmestring:</strong> Lær effektive teknikker
                      for å håndtere stress og øke din mentale robusthet. Dette
                      kan forbedre både din personlige og profesjonelle
                      livskvalitet.
                    </li>
                    <li>
                      <strong>Bedre Relasjoner:</strong> Forbedre dine
                      kommunikasjonsferdigheter og bygg sterkere, mer
                      meningsfulle relasjoner med de rundt deg.
                    </li>
                    <li>
                      <strong>Økt Selvtillit:</strong> Bygg selvtillit ved å
                      forstå og utnytte dine unike evner og talenter. Coaching
                      gir deg selvtilliten til å ta modige skritt mot dine mål.
                    </li>
                  </ul>
                  <h2 className="font-bold text-lg mb-2">
                    Hva Kan Du Forvente Under Den Gratis Oppstartsamtalen?
                  </h2>
                  <ul className="list-disc ml-5 mb-4">
                    <li>
                      <strong>Introduksjon til Coaching:</strong> Forstå hva
                      coaching er og hvordan det kan hjelpe deg med å nå dine
                      mål.
                    </li>
                    <li>
                      <strong>Målsetting:</strong> Identifiser dine primære mål
                      og hva du ønsker å oppnå gjennom coaching.
                    </li>
                    <li>
                      <strong>Handlingsplan:</strong> Begynn å lage en
                      handlingsplan som tar deg fra hvor du er nå til hvor du
                      ønsker å være.
                    </li>
                    <li>
                      <strong>Spørsmål og Svar:</strong> Få svar på dine
                      spørsmål om coaching og hvordan det fungerer.
                    </li>
                  </ul>
                  <p className="mb-4">
                    Ikke vent med å ta grep om ditt liv. Denne gratis
                    oppstartsamtalen er ditt første skritt mot en lysere
                    fremtid. Klikk på knappen nedenfor for å booke din gratis
                    veiledningstime i dag.
                  </p>
                </div>
              </section>
            </div>
          </>
        }
      />

      <FullContactForm
        className="z-0 bg-light-beige dark:bg-section-beige px-6 py-6  sm:py-14 lg:px-8"
        textColor="text-black dark:text-white"
        bgInputs="bg-white text-black dark:bg-section-beige dark:text-white"
        textPrivacy="text-indigo-700"
      />
    </section>
  );
}

export default Home;
