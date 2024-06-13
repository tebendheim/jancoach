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
}

const NavbarPicture: React.FC<BildeProps> = ({
  imgUrl,
  height,
  width,
  componentHeight,
  tekstkomponent: TekstKomponent,
  children,
}) => {
  return (
    <section className={`relative h-screen flex flex-col`}>
      <div className="relative h-20">
        <Navbar />
      </div>
      <div
        className="mt-20
       flex-grow flex flex-col items-center justify-around overflow-hidden"
      >
        <img
          className=" mt-auto max-h- w-auto object-contain overflow-auto mb-5"
          src={imgUrl}
        />
        <div className=" mt-auto mb-5">
          <TekstKomponent />
        </div>
      </div>
    </section>
  );
};

export default NavbarPicture;
