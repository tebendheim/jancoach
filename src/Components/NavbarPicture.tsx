import React, { ReactNode } from "react";
import Navbar from "../Components/Navbar";
import JanPaaFjellet from "../Bilder/janPaaFjellet.png";

type Size = "screen" | "full" | "custom";

interface BildeProps {
  imgUrl: string;
  height: Size | number; // Can be a string or a number
  width: Size | number; // Can be a string or a number
  componentHeight: Size | number;
  tekstkomponent: React.FC;
  children?: ReactNode; // Children can be any valid ReactNode
  navColor: string;
  logoColor: string;
}

const NavbarPicture: React.FC<BildeProps> = ({
  imgUrl,
  height,
  width,
  componentHeight,
  tekstkomponent: TekstKomponent,
  children,
  navColor,
  logoColor,
}) => {
  return (
    <section className={`relative  h-screen flex flex-col`} id="NavPicture">
      <div className="relative h-fit">
        <Navbar bgColor={navColor} logoColor={logoColor} />
      </div>

      <div className="m-auto mt-16">
        <TekstKomponent />
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-evenly overflow-hidden ">
        <img
          className="mt-10 max-h- w-auto object-contain overflow-auto lg:border-2 lg:border-black lg:p-10 rounded-2xl"
          src={imgUrl}
        />
        <div className="flex flex-col lg:my-auto w-full p-10 lg:w-1/3 lg:h-3/4  rounded-2xl">
          <p className="my-auto text-black md:text-xl lg:text-2xl text-justify">
            HEL VED - handler om å være deg selv. For å være deg selv må du
            kjenne deg selv. Du må vite hva du står for, og hvorfor du står for
            det. Du må tørre å kjenne etter både når det føles godt og når det
            føles vondt. Du må kjenne dine sterke sider og kjenne til og
            akseptere dine svake. Du må tørre å være sårbar, men også tørre å
            vise styrken din og være sterk. Når du er deg selv er du til å stole
            på. Du er gjenkjennelig for andre. Du er ærlig. Du er hel ved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NavbarPicture;

{
  /* <div
className=" mt-m22
flex-grow flex flex-col items-center justify-around overflow-hidden"
>
<div className=" mt-10">
  <TekstKomponent />
</div>
<div className="flex flex-col">
  <img
    className=" mt-24 max-h- w-auto object-contain overflow-auto"
    src={imgUrl}
  />
</div>
<div className="mt-24 max-h- w-auto">
  <p>Dette er hvor vi kan skrive en tekst</p>
</div>
</div> */
}
