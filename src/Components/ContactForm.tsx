import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xjvnnrlb");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form className="flex flex-col mx-28" onSubmit={handleSubmit}>
      <div className="flex justify-between gap-10 w-full">
        <div className="flex-grow-0 basis-5/12">
          <label
            htmlFor="first-name"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Fornavn
          </label>
          <div className="mb-2.5">
            <input
              type="text"
              name="fName"
              id="first-name"
              autoComplete="given-name"
              className="w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
        </div>
        <div className="flex-grow-0 basis-5/12">
          <label
            htmlFor="last-name"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Etternavn
          </label>
          <div className="mb-2.5">
            <input
              type="text"
              name="lName"
              id="last-name"
              autoComplete="family-name"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>

      <label
        htmlFor="email"
        className="block text-sm font-semibold leading-6 text-gray-900"
      >
        Email
      </label>
      <div className="mb-2.5">
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

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
              className="block h-full w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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

      <label
        htmlFor="company"
        className="block text-sm font-semibold leading-6 text-gray-900"
      >
        Firma
      </label>
      <div className="mb-2.5">
        <input
          type="text"
          name="company"
          id="company"
          autoComplete="organization"
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <ValidationError
          prefix="Company"
          field="company"
          errors={state.errors}
        />
      </div>

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

      <button
        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        type="submit"
        disabled={state.submitting}
      >
        Submit
      </button>
    </form>
  );
}
{
  /* 
  
 
  
  <div className="sm:col-span-2">
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
        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  </div>
</div>

*/
}
