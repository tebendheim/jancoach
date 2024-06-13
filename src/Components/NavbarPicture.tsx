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
    <section className={`relative h-full`}>
      <Navbar />
      <div
        className="absolute top-0 z-0 h-full w-full bg-no-repeat bg-cover bg-right-bottom bg-clip-content"
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></div>
      {TekstKomponent && <TekstKomponent />}
    </section>
  );
};

export default NavbarPicture;
