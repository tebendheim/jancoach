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
      <div
        className=" mt-m22
       flex-grow flex flex-col items-center justify-around overflow-hidden"
      >
        <img
          className=" mt-24 max-h- w-auto object-contain overflow-auto"
          src={imgUrl}
        />
        <div className=" mt-auto mb-0">
          <TekstKomponent />
        </div>
      </div>
    </section>
  );
};

export default NavbarPicture;
