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
        <p className="font-semibold font-rockwell sm:text-lg md:text-2xl lg:text-4xl xl:text-6xl text-white">
          Det handler om å være hel ved
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
            "bg-new-dark-green sm:bg-new-dark-green/90 text-white dark:bg-nav-dark"
          }
          logoColor={"bg-skog dark:bg-section-beige"}
        />
      </div>

      <HomeComponents
        bgColor="bg-skog dark:bg-section-green"
        darkBgColor="bg-section-green "
        section="flex-col items-center md:justify-center md:flex-row py-10"
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
            <ul className="flex flex-col list-disc mt-4 gap-5 ml-10">
              <li>Coaching</li>
              <li>Lederutvikling</li>
              <li>Foreldreutvikling</li>
              <li>Rådgivning</li>
            </ul>
            <p></p>
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
