import React from "react";
import ContactForm from "./ContactForm";

interface contactProps {
  className: string;
  textColor: string;
  bgInputs: string;
  textPrivacy: string;
}

const FullContactForm: React.FC<contactProps> = ({
  className,
  textColor,
  bgInputs,
  textPrivacy,
}) => {
  return (
    <div className={` ${className} `}>
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className=" left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2
          className={`text-3xl font-bold tracking-tight ${textColor} sm:text-4xl`}
        >
          KONTAKT MEG
        </h2>
        <p className={`mt-2 text-lg leading-8 ${textColor}`}>
          Fyll ut skjemaet, så tar jeg kontakt med deg ved første anledning.
        </p>
      </div>

      <ContactForm
        textColor={textColor}
        bgInputs={bgInputs}
        textPrivacy={textPrivacy}
      />
    </div>
  );
};

export default FullContactForm;
