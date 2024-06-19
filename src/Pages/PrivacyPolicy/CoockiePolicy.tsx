import React from "react";
import Navbar from "../../Components/Navbar";
import CookiePolicyText from "./Components/Legal/CookiePolicyText";

const CookiePolicy = () => {
  return (
    <section>
      <Navbar
        bgColor="bg-new-dark-green sm:bg-new-dark-green/90 text-white dark:bg-nav-dark"
        logoColor="bg-skog"
      />
      <div className="mt-20 bg-white">
        <CookiePolicyText />
      </div>
    </section>
  );
};

export default CookiePolicy;
