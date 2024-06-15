import React, { FormEvent, FormEventHandler, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import InputComponent from "./FormComponents.tsx/InputComponent";
import ReCAPTCHA, {
  useGoogleReCaptcha,
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3";
// import dotenv, { config } from "dotenv";

const ContactFormDetails = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const formCode = import.meta.env.VITE_FORM_CODE || "";
  const siteKey = import.meta.env.VITE_CAPTCHA_SITE_KEY || "";
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [state, handleSubmit] = useForm(formCode, {
    data: { "g-recaptcha-response": executeRecaptcha },
  });

  const [privacy, setPrivacy] = useState(false);
  const [showAlert, setShowAlert] = useState<boolean>(false); // State to track if alert should be shown

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add logic to check if privacy consent is given before submitting
    if (!privacy) {
      alert("Dette er advarselen");
      //   setShowAlert(true); // Set showAlert to true to display the alert
      return;
    }

    await handleSubmit(e);
  };

  const handleVerify = (token: string) => {
    setRecaptchaToken(token);
  };

  return (
    <form
      className="flex flex-col mx-10 sm:mx-28 md:mx-32 lg:mx-44 "
      onSubmit={onSubmit}
    >
      <GoogleReCaptcha onVerify={handleVerify} />
      <div className="flex flex-col md:flex-row justify-between md:gap-10 w-full">
        <div className="flex-grow-0 basis-5/12">
          <InputComponent
            type="text"
            width={"full"}
            name="given-name"
            label="Fornavn"
            formCode={formCode}
            state={state}
          />
        </div>
        <div className="flex-grow-0 basis-5/12">
          <InputComponent
            type="text"
            width={"full"}
            name="family-name"
            label="Etternavn"
            formCode={formCode}
            state={state}
          />
        </div>
      </div>

      <InputComponent
        type="email"
        width={"full"}
        name="email"
        label="email"
        formCode={formCode}
        state={state}
      />

      <div className="flex flex-col w-full">
        <label
          htmlFor="phone-number"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Telefonnummer
        </label>
        <div className="flex w-full">
          <label htmlFor="country" className="sr-only">
            Land
          </label>
          <div className="relative mb-2.5 w-3/12 ">
            <select
              id="country"
              name="country"
              className="h-full w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option>US</option>
              <option>CA</option>
              <option>EU</option>
              <option>NO</option>
            </select>
          </div>

          <div className="relative mb-2.5 w-full">
            <input
              type="tel"
              name="phone"
              id="phone-number"
              autoComplete="tel"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>

      <InputComponent
        type="text"
        width={"full"}
        name="company"
        label="Firma"
        formCode={formCode}
        state={state}
      />

      <label
        htmlFor="message"
        className="block text-sm font-semibold leading-6 text-gray-900"
      >
        Message
      </label>
      <div className="mb-2.5">
        <textarea
          name="message"
          id="message"
          rows={6}
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      {/* <PrivacySwitch state={state} /> */}

      <div className="flex items-center gap-4 sm:col-span-2">
        <input
          type="checkbox"
          name="privacy consent"
          id="privacy consent"
          onChange={(e) => setPrivacy(!privacy)}
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        />
        <ValidationError
          prefix="privacy consent"
          field="privacy consent"
          errors={state.errors}
        />
        <label
          htmlFor="privacy consent"
          className="text-sm leading-6 text-gray-600"
        >
          By selecting this, you agree to our{" "}
          <a href="#" className="font-semibold text-indigo-600">
            privacy&nbsp;policy
          </a>
        </label>
      </div>

      <button
        className={`${
          privacy
            ? "bg-indigo-600 text-white focus-visible:outline-indigo-600 hover:bg-indigo-500 "
            : "border-indigo-600 text-black"
        }block w-full rounded-md border-2  px-3.5 py-2.5 text-center text-sm font-semibold  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 `}
        type="submit"
        disabled={state.submitting}
      >
        Submit
      </button>
      {/* Conditional message when privacy is not checked and submit button is hovered */}
      {/* Conditional message when privacy is not checked */}
      {!privacy && showAlert && (
        <div className="text-red-500 text-sm mt-1 mb-2">
          Please agree to the privacy policy.
        </div>
      )}
    </form>
  );
};

const ContactForm = () => {
  const siteKey = import.meta.env.VITE_CAPTCHA_SITE_KEY || "";
  return (
    <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
      <ContactFormDetails />
    </GoogleReCaptchaProvider>
  );
};

export default ContactForm;

// 6LfbKfkpAAAAAKPbpOLd19vuZ314LkTqw3hucW6t
// curl -X POST -d 'secret=AIzaSyDYoTFLJeZTBuz7ikVgCPbC-eHuQdCaxaE&response=6LfbKfkpAAAAAKPbpOLd19vuZ314LkTqw3hucW6t' https://www.google.com/recaptcha/api/siteverify
