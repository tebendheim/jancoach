import React from "react";

const services = [
  {
    title: "Coaching",
    description:
      "Når du ønsker å få til endringer i livet ditt, kan jeg være den støtten du trenger. Jeg hjelper deg med å sette mål og følger deg opp gjennom prosessen. Jeg utfordrer deg og hjelper deg å implementere hensiktsmessige verktøy. Om framgangen stopper opp hjelper jeg deg med å finne nye veier videre.",
  },
  {
    title: "Lederutvikling",
    description:
      "Er du en leder som er ærlig nok til å innrømme at lederskap kan være utfordrende? \n \n Som tenker at det hadde vært fint å sparre med noen og bli utfordret på eget tankemønster? Jeg tar på meg oppdrag som mentor eller veileder for ledere på alle nivåer, som ønsker å utvikle seg selv og sitt lederskap.",
  },
  {
    title: "Foreldreutvikling",
    description:
      "Er du usikker på foreldrerollen eller papparollen? Hvordan skape sunne relasjoner til dine barn, og samtidig bidra til at dine barn utvikler seg til robuste individer med sunn selvfølelse? \n \n Med min kunnskap og erfaring kan jeg veilede deg så du får en bedre hverdag og periode i livet ditt.",
  },
  {
    title: "Leder og forelder",
    description:
      "Å være leder og forelder er krevende, og for mange forsterkes dette ved en opplevelse av å ikke lykkes på begge områdene. Ved å fokusere på likheter og synergier, kan du utvikle deg til få mye større grad av mestring på begge områder. Jeg kan hjelpe deg med dette.",
  },
  {
    title: "Foredrag",
    description:
      "«Leder og forelder - Hvordan utvikle deg og lykkes i begge rollene?» «Suksess med organisasjonsutvikling!»",
  },
  {
    title: "Rådgivning",
    description:
      "Jeg tilbyr rådgivningstjenester for å hjelpe deg med å ta informerte beslutninger.",
  },
];

interface props {
  gridCols: string;
}

const ServicesList: React.FC<props> = ({ gridCols }) => {
  return (
    <div className={`grid gap-10 ${gridCols}`}>
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-slightly-darker-beige dark:bg-skog shadow-xl rounded-xl overflow-hidden p-6"
        >
          <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
            {service.title}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ServicesList;
