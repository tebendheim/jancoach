import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import PrivacyText from "./Components/PrivacyText/privacyText";

const PrivacyPolicy = () => {
  return (
    <section>
      <Navbar
        bgColor="bg-new-dark-green sm:bg-new-dark-green/90 text-white dark:bg-nav-dark"
        logoColor="bg-skog"
      />
      <div className="my-24 bg-white">
        <PrivacyText />
      </div>
    </section>
  );
};

export default PrivacyPolicy;
