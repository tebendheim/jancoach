import React from "react";
import MyButton from "./MyButton"; // Importer din MyButton komponent
import HomeComponents from "./HomeComponents"; // Importer din HomeComponents komponent
import image from "../../Bilder/Blomst.jpg"; // Importer bildet ditt

const Veiledningstime: React.FC = () => {
  return (
    <HomeComponents
      bgColor="bg-skog dark:bg-section-green"
      darkBgColor="bg-section-green"
      section="flex-row items-center md:justify-center lg:flex-row py-10"
      wrapper=""
      myButton={
        <MyButton
          className="w-fit items-center inline-flex bg-gradient-to-terracotta-red dark:bg-gradient-button-dark-mode"
          buttonText="Book veiledningstime"
          to="/kontakt"
          textColor="text-white"
        />
      }
      children={
        <>
          <div className="relative h-fit">
            <h1 className="relative p-2 sm:left-0 w-full xs:w-auto mb-10 text-white bg-new-dark-green dark:bg-section-green rounded-md font-extrabold text-md xs:text-xl md:text-3xl">
              Gratis Veiledningstime i Coaching - Din Mulighet til Forandring
            </h1>
          </div>
          <div className="text-white">
            <p className="mb-4">
              Er du klar for å ta det neste steget mot et bedre liv? Som en
              erfaren coach tilbyr jeg en gratis veiledningstime for å hjelpe
              deg med å oppdage ditt fulle potensial. Denne eksklusive timen er
              din sjanse til å få en smakebit på hvordan coaching kan
              transformere ditt liv.
            </p>
            <h2 className="font-bold text-lg mb-2">
              Hvorfor Bør Du Booke en Gratis Veiledningstime i Dag?
            </h2>
            <ul className="list-disc ml-5 mb-4">
              <li>
                <strong>Personlig Vekst:</strong> Oppdag dine styrker, utfordre
                dine begrensninger, og sett klare mål for fremtiden. Coaching
                gir deg verktøyene du trenger for å vokse både personlig og
                profesjonelt.
              </li>
              <li>
                <strong>Klarhet og Fokus:</strong> Få klarhet i dine mål og
                drømmer. En veiledningstime hjelper deg å identifisere hva som
                virkelig betyr noe for deg, og hvordan du kan oppnå det.
              </li>
              <li>
                <strong>Stressmestring:</strong> Lær effektive teknikker for å
                håndtere stress og øke din mentale robusthet. Dette kan forbedre
                både din personlige og profesjonelle livskvalitet.
              </li>
              <li>
                <strong>Bedre Relasjoner:</strong> Forbedre dine
                kommunikasjonsferdigheter og bygg sterkere, mer meningsfulle
                relasjoner med de rundt deg.
              </li>
              <li>
                <strong>Økt Selvtillit:</strong> Bygg selvtillit ved å forstå og
                utnytte dine unike evner og talenter. Coaching gir deg
                selvtilliten til å ta modige skritt mot dine mål.
              </li>
            </ul>
            <h2 className="font-bold text-lg mb-2">
              Hva Kan Du Forvente Under Den Gratis Veiledningstimen?
            </h2>
            <ul className="list-disc ml-5 mb-4">
              <li>
                <strong>Introduksjon til Coaching:</strong> Forstå hva coaching
                er og hvordan det kan hjelpe deg med å nå dine mål.
              </li>
              <li>
                <strong>Målsetting:</strong> Identifiser dine primære mål og hva
                du ønsker å oppnå gjennom coaching.
              </li>
              <li>
                <strong>Handlingsplan:</strong> Begynn å lage en handlingsplan
                som tar deg fra hvor du er nå til hvor du ønsker å være.
              </li>
              <li>
                <strong>Spørsmål og Svar:</strong> Få svar på dine spørsmål om
                coaching og hvordan det fungerer.
              </li>
            </ul>
            <p className="mb-4">
              Ikke vent med å ta grep om ditt liv. Denne gratis veiledningstimen
              er din første skritt mot en lysere fremtid. Klikk på knappen
              nedenfor for å booke din gratis veiledningstime i dag.
            </p>
          </div>
        </>
      }
      image={image}
    />
  );
};

export default Veiledningstime;
