import React, { FormEventHandler } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";
import Navbar from "../../Components/Navbar";
import { fetchData } from "../../hjelpefunksjoner/ApiService";
import { useForm, ValidationError } from "@formspree/react";
import FullContactForm from "./FormComponents/FullContactForm";

interface states {
  email: string;
  phone: string;
  fName: string;
  lName: string;
  company: string;
  message: string;
}

const Kontakt: React.FC = () => {
  const [state, setState] = React.useState<states>({
    email: "",
    phone: "",
    fName: "",
    lName: "",
    company: "",
    message: "",
  });
  const [agreed, setAgreed] = React.useState(false);

  return (
    <section className="">
      <Navbar
        bgColor="bg-new-dark-green sm:bg-new-dark-green/90 text-white dark:bg-nav-dark"
        logoColor="bg-skog"
      />
      <FullContactForm
        className="z-0 bg-light-beige dark:bg-section-beige px-6 mt-20 sm:py-14 lg:px-8"
        textColor="text-grey-900 dark:text-white"
        bgInputs="dark:bg-section-green text-white"
        textPrivacy="text-indigo-800 dark:text-indigo-300"
      />
    </section>
  );
};

export default Kontakt;
