import React from "react";

const services = [
  {
    title: "Coaching",
    description:
      "Som NLP practitioner coach kan jeg være den støtten du trenger i forhold til å skape endring i ditt liv. Jeg hjelper deg til å sette mål og har en rekke verktøy jeg kan bruke for å støtte deg på veien til å nå målene.",
  },
  {
    title: "Lederutvikling",
    description:
      "Jeg tar på meg oppdrag som mentor eller veileder for ledere på alle nivåer, som ønsker å utvikle seg selv og sitt lederskap.",
  },
  {
    title: "Foreldreutvikling",
    description:
      "Er du usikker på foreldrerollen eller papparollen? Hvordan skape sunne relasjoner til dine barn? Jeg kan bidra til at du får en bedre hverdag og periode i livet ditt.",
  },
  {
    title: "Foredrag",
    description: "Hel ved! Foredrag må lages",
  },
  {
    title: "Rådgivning",
    description:
      "Jeg tilbyr rådgivningstjenester for å hjelpe deg med å ta informerte beslutninger.",
  },
];

const ServicesList = () => {
  return (
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-slightly-darker-beige dark:bg-skog shadow-xl rounded-xl overflow-hidden p-6"
        >
          <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
            {service.title}
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ServicesList;
