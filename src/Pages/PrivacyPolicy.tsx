import React from "react";
import Navbar from "../Components/Navbar";

const PrivacyPolicy = () => {
  return (
    <section>
      <Navbar
        bgColor="bg-new-dark-green sm:bg-new-dark-green/90 text-white dark:bg-nav-dark"
        logoColor="bg-skog"
      />
      <div className="flex mt-24">Cookies</div>
    </section>
  );
};

export default PrivacyPolicy;
