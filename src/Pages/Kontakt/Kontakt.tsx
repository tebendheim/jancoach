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

// const Kontakt: React.FC = () => {
//   const [state, setState] = React.useState<states>({
//     email: "",
//     phone: "",
//     fName: "",
//     lName: "",
//     company: "",
//     message: "",
//   });
//   const [agreed, setAgreed] = React.useState(false);

//   const handleSubmit = async (event: any) => {
//     event.preventDefault(); // Prevent the default form submission behavior
//     const response = await fetchData(
//       "https://jsonplaceholder.typicode.com/posts"
//     );
//     console.log(response); // Log the actual response data
//   };

//   const handleChange = (event: any) => {
//     setState({
//       ...state,
//       [event.target.name]: event.target.value,
//     });
//   };
//   return (
//     <section className="row-start-2 col-start-1 col-span-full">
//       <Navbar />

//       <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
//         <div
//           className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
//           aria-hidden="true"
//         >
//           <div
//             className=" left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
//             style={{
//               clipPath:
//                 "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
//             }}
//           />
//         </div>
//         <div className="mx-auto max-w-2xl text-center">
//           <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//             Kontakt meg
//           </h2>
//           <p className="mt-2 text-lg leading-8 text-gray-600">
//             Aute magna irure deserunt veniam aliqua magna enim voluptate.
//           </p>
//         </div>
//         <form
//           onSubmit={handleSubmit}
//           className="mx-auto mt-16 max-w-xl sm:mt-20"
//         >
//           <div className="flex flex-col justify-around">
//             <div className="flex justify-between gap-10 w-full">
//               <div className="flex-grow-0 basis-5/12">
//                 <label
//                   htmlFor="first-name"
//                   className="text-sm font-semibold leading-6 text-gray-900"
//                 >
//                   Fornavn
//                 </label>
//                 <div className="mb-2.5">
//                   <input
//                     type="text"
//                     name="fName"
//                     id="first-name"
//                     autoComplete="given-name"
//                     onChange={handleChange}
//                     className="w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>
//               <div className="flex-grow-0 basis-5/12">
//                 <label
//                   htmlFor="last-name"
//                   className="block text-sm font-semibold leading-6 text-gray-900"
//                 >
//                   Etternavn
//                 </label>
//                 <div className="mb-2.5">
//                   <input
//                     type="text"
//                     name="lName"
//                     id="last-name"
//                     onChange={handleChange}
//                     autoComplete="family-name"
//                     className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="sm:col-span-2">
//               <label
//                 htmlFor="company"
//                 className="block text-sm font-semibold leading-6 text-gray-900"
//               >
//                 Firma
//               </label>
//               <div className="mb-2.5">
//                 <input
//                   type="text"
//                   name="company"
//                   id="company"
//                   onChange={handleChange}
//                   autoComplete="organization"
//                   className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>
//             <div className="sm:col-span-2">
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-semibold leading-6 text-gray-900"
//               >
//                 Email
//               </label>
//               <div className="mb-2.5">
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   autoComplete="email"
//                   onChange={handleChange}
//                   className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>
//             <div className="sm:col-span-2">
//               <label
//                 htmlFor="phone-number"
//                 className="block text-sm font-semibold leading-6 text-gray-900"
//               >
//                 Telefonnummer
//               </label>
//               <div className="relative mb-2.5">
//                 <div className="absolute inset-y-0 left-0 flex items-center">
//                   <label htmlFor="country" className="sr-only">
//                     Land
//                   </label>
//                   <select
//                     id="country"
//                     name="country"
//                     className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
//                   >
//                     <option>US</option>
//                     <option>CA</option>
//                     <option>EU</option>
//                   </select>
//                   <ChevronDownIcon
//                     className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
//                     aria-hidden="true"
//                   />
//                 </div>
//                 <input
//                   type="tel"
//                   name="phone"
//                   id="phone-number"
//                   onChange={handleChange}
//                   autoComplete="tel"
//                   className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>
//             <div className="sm:col-span-2">
//               <label
//                 htmlFor="message"
//                 className="block text-sm font-semibold leading-6 text-gray-900"
//               >
//                 Message
//               </label>
//               <div className="mb-2.5">
//                 <textarea
//                   name="message"
//                   id="message"
//                   onChange={handleChange}
//                   rows={4}
//                   className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   defaultValue={""}
//                 />
//               </div>
//             </div>
//           </div>
//           <PrivacySwitch agreed={agreed} setAgreed={setAgreed} />
//           <div className="mt-10">
//             <button
//               type="submit"
//               onSubmit={handleSubmit}
//               className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             >
//               Send
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };
