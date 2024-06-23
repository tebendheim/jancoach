import React from "react";
import { Navigate, Link } from "react-router-dom";
import OmHome from "./OmHome";
import JanPaaFjellet from "../../Bilder/janPaaFjellet.png";
import logo from "../../Bilder/Logo-cropped.svg";
import MyButton from "./MyButton";
import Navbar from "../../Components/Navbar";
import NavbarPicture from "../../Components/NavbarPicture";
import HomeComponents from "./HomeComponents";
import ServicesList from "../Tjenester/ServiceList";
import Om from "../Om/Om";

function Home(): JSX.Element {
  // h-full w-full relative -top-24 left-0

  const navSlogan = () => {
    return (
      <div className="mt-10 self-center justify-self-center">
        <p className="font-semibold font-rockwell sm:text-lg md:text-2xl lg:text-4xl xl:text-6xl text-black">
          DET HANDLER OM Å VÆRE HEL VED
        </p>
      </div>
    );
  };

  return (
    <section className="bg-light-beige">
      <div className="relative bg-light-beige dark:bg-section-beige pb-10">
        <NavbarPicture
          imgUrl={logo}
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
        section="flex-col items-center md:justify-center lg:flex-row py-10"
        wrapper=""
        myButton={
          <MyButton
            className="w-fit items-center inline-flex bg-gradient-to-terracotta-red dark:bg-gradient-button-dark-mode"
            buttonText="Book veiledningstime"
            to="/kontakt"
            textColor="text-white"
          />
        }
        h1={"Mine tjenester"}
        // h2={`Noen av tingene jeg kan hjelpe deg med er:`}
        children={
          <>
            <ServicesList gridCols="grid-cols-1 lg:grid-cols-2" />
          </>
        }
        image={JanPaaFjellet}
      />

      <HomeComponents
        bgColor="bg-light-beige dark:bg-section-beige"
        darkBgColor=""
        section="flex-col md:flex-row-reverse"
        wrapper=""
        myButton={
          <MyButton
            className="w-fit inline-flex bg-gradient-to-terracotta-red dark:bg-gradient-button-dark-mode"
            buttonText="Gratis veiledningstime"
            to="/kontakt"
            textColor="text-white"
          />
        }
        h1={""}
        h2={""}
        children={
          <>
            <div className=" flex flex-col gap-10 ">
              <div className="relative h-fit">
                <h1 className=" p-2 w-full xs:w-auto transform  text-white bg-new-dark-green dark:bg-section-green rounded-md  font-extrabold text-md xs:text-xl md:text-3xl">
                  OM MEG
                </h1>
              </div>
              <div className="flex flex-col-reverse md:flex-row items-center gap-10">
                <div className="w-full md:w-2/3 text-2xl">
                  <p className="mb-4">
                    <span className="font-bold">Jan Bendheim</span> har vært
                    yrkesoffiser i nærmere 40 år, med lederstillinger opp til
                    høyt mellomledernivå. Han har lang erfaring som tillitsvalgt
                    for befal i Forsvaret, og har vært ettertraktet seminarleder
                    for Famlab.
                  </p>
                  <p>
                    Jan er kjent for å være hel ved, robust og trygg, og han
                    skaper tillit og bygger sterke relasjoner. Han er en god
                    formidler som er verdiorientert og helhetsorientert. Som
                    leder er han tydelig og fleksibel, og han ser hver enkelt
                    person. Jan er en aktiv lytter, arbeidsom og reflektert,
                    samt analytisk og lojal. Han er autentisk og gir alltid sitt
                    beste.
                  </p>
                </div>
              </div>
            </div>
          </>
        }
        image={JanPaaFjellet}
      />

      <HomeComponents
        bgColor="bg-skog dark:bg-section-green"
        darkBgColor=""
        section="flex-col md:flex-row"
        myButton={
          <MyButton
            className="w-fit inline-flex bg-gradient-to-terracotta-red dark:bg-gradient-button-dark-mode"
            buttonText="Gratis veiledningstime"
            to="/kontakt"
            textColor="text-white"
          />
        }
        h1={""}
        h2={""}
        children={
          <>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil, eveniet
            aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur
            error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias
            eos sapiente officiis modi at sunt excepturi expedita sint? Sed
            quibusdam recusandae alias error harum maxime adipisci amet laborum.
            Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates
            a cumque velit{" "}
          </>
        }
        image={JanPaaFjellet}
      />

      <HomeComponents
        bgColor="bg-light-beige dark:bg-section-beige"
        darkBgColor=""
        section="flex-col md:flex-row-reverse"
        myButton={
          <MyButton
            className="w-fit inline-flex bg-gradient-to-terracotta-red dark:bg-gradient-button-dark-mode"
            buttonText="Gratis veiledningstime"
            to="/kontakt"
            textColor="text-black"
          />
        }
        h1={""}
        h2={""}
        children={
          <>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil, eveniet
            aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur
            error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias
            eos sapiente officiis modi at sunt excepturi expedita sint? Sed
            quibusdam recusandae alias error harum maxime adipisci amet laborum.
            Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates
            a cumque velit{" "}
          </>
        }
        image={JanPaaFjellet}
      />
    </section>
  );
}

export default Home;
