import { ShieldExclamationIcon } from "@heroicons/react/24/solid";
import React from "react";
import Navbar from "../Components/Navbar";

const Tjenester = () => {
  return (
    <div>
      <section className="relative h-20">
        <Navbar
          bgColor="bg-new-dark-green sm:bg-new-dark-green/90 text-white dark:bg-nav-dark"
          logoColor="bg-skog"
        />
      </section>
      <div className="text-white">Tjenester</div>
    </div>
  );
};

export default Tjenester;
