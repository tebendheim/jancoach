import React, { FormEvent, FormEventHandler, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { useForm, ValidationError } from "@formspree/react";
import InputComponent from "./InputComponent";
import ReCAPTCHA, {
  useGoogleReCaptcha,
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3";
import { bg } from "date-fns/locale";

interface DetailsProps {
  textColor: string;
  bgInputs: string;
  textPrivacy: string;
}

const ContactFormDetails: React.FC<DetailsProps> = ({
  textColor,
  bgInputs,
  textPrivacy,
}) => {
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
    return <p>Takk for at du tar kontakt!</p>;
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add logic to check if privacy consent is given before submitting
    if (!privacy) {
      alert("Dette er advarselen");
      //   setShowAlert(true); // Set showAlert to true to display the alert
      return;
    }

    const formData = new FormData(e.currentTarget);
    if (recaptchaToken) {
      formData.append("g-recaptcha-response", recaptchaToken);
    }
    await handleSubmit(e);
  };

  const handleVerify = (token: string) => {
    setRecaptchaToken(token);
  };

  return (
    <form
      className="flex flex-col sm:mx-28 md:mx-32 lg:mx-44 "
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
            textColor={textColor}
            bgInputs={bgInputs}
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
            textColor={textColor}
            bgInputs={bgInputs}
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
        textColor={textColor}
        bgInputs={bgInputs}
      />

      <div className="flex flex-col w-full">
        <label
          htmlFor="phone-number"
          className={`text-sm font-semibold leading-6 ${textColor}`}
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
              className={`${bgInputs} h-full w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              autoComplete="country"
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
              className={`${bgInputs} block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
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
        textColor={textColor}
        bgInputs={bgInputs}
      />

      <label
        htmlFor="message"
        className={`block text-sm font-semibold leading-6 ${textColor}`}
      >
        Message
      </label>
      <div className="mb-2.5">
        <textarea
          name="message"
          id="message"
          rows={6}
          className={`${bgInputs} block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <div className="flex items-center gap-4 sm:col-span-2">
        <input
          type="checkbox"
          name="privacy consent"
          id="privacy consent"
          onChange={(e) => setPrivacy(!privacy)}
          className={`h-4 w-4 rounded ${bgInputs} border-gray-300 text-indigo-600 focus:ring-indigo-500`}
        />
        <ValidationError
          prefix="privacy consent"
          field="privacy consent"
          errors={state.errors}
        />
        <label
          htmlFor="privacy consent"
          className={`text-sm leading-6 ${textColor}`}
        >
          By selecting this, you agree to our{" "}
          <Link
            to="/legal/privacypolicy"
            className={`font-semibold ${textPrivacy}`}
          >
            privacy&nbsp;policy
          </Link>
        </label>
      </div>

      <button
        className={`${
          privacy
            ? "bg-indigo-600 focus-visible:outline-indigo-600 hover:bg-indigo-500 "
            : "border-indigo-600 "
        } ${textColor} block w-full rounded-md border-2  px-3.5 py-2.5 text-center text-sm font-semibold  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 `}
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

const ContactForm: React.FC<DetailsProps> = ({
  textColor,
  bgInputs,
  textPrivacy,
}) => {
  const siteKey = import.meta.env.VITE_CAPTCHA_SITE_KEY || "";
  return (
    <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
      <ContactFormDetails
        textColor={textColor}
        bgInputs={bgInputs}
        textPrivacy={textPrivacy}
      />
    </GoogleReCaptchaProvider>
  );
};

export default ContactForm;

// 6LfbKfkpAAAAAKPbpOLd19vuZ314LkTqw3hucW6t
// curl -X POST -d 'secret=AIzaSyDYoTFLJeZTBuz7ikVgCPbC-eHuQdCaxaE&response=6LfbKfkpAAAAAKPbpOLd19vuZ314LkTqw3hucW6t' https://www.google.com/recaptcha/api/siteverify
