const whyItems = [
  {
    title: "Personlig opmærksomhed",
    text: "I mit lille, rolige klienthjørne i Københavns Sydhavn kan du sætte dig godt til rette. Sammen sætter vi fokus på det, du har på hjerte.",
  },
  {
    title: "Tillid i et fortroligt rum",
    text: "Konsultationen kan foregå ved fysisk fremmøde i København Sv. eller online – altid i trygge rammer, hvor du får råd og redskaber med videre.",
  },
  {
    title: "Etik under clairvoyancen",
    text: "Jeg forudser ikke død eller sygdom – fokus er på konstruktive budskaber. Jeg har tavshedspligt og værner om fortroligheden i samtalen.",
  },
];

import janePortrait from "@/assets/why-me-jane.jpeg";

const WhyMe = () => {
  return (
    <section id="hvorfor-vaelge-mig" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-3">
            Værd at vide
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">
            Hvorfor vælge mig?
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mb-8" />
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
            <img
              src={janePortrait}
              alt="Portræt af Jane Jaqué"
              loading="lazy"
              className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-lg flex-shrink-0"
            />
            <div className="font-body text-muted-foreground leading-relaxed text-center md:text-left space-y-4">
              <p>
                Jeg har meget stærke clairvoyante evner og mere end 30 års erfaring med menneskelige relationer. Min tilgang til den spirituelle verden er lavpraktisk og jordnær – jeg tror på, at man skal nyde og leve et godt liv.
              </p>
              <p>
                Et godt liv hænger sammen med din sjæls behov. Det er de indre behov, der giver din hverdag mening. Det handler om at arbejde med sig selv og sine relationer, kigge på gamle handlemønstre og skabe plads til dit autentiske selv.
              </p>
              <p>
                Mine klienter kommer fra hele Sjælland og øerne. De er fra ca. 18 år og opefter – hovedsageligt kvinder, men alle er velkomne. De søger vejledning og retning på livets store temaer.
              </p>
              <p>
                De kører gerne langt for et personligt møde, hvor nærvær, ro og dialog er i fokus. Det er ‘dig-tid’ med fokus på dit indre liv.
              </p>
              <p className="text-center">
                Hvornår giver du dig tid til at lytte til dine egne behov?
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {whyItems.map((item) => (
            <div
              key={item.title}
              className="text-center bg-card/60 border border-accent/20 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <div className="w-2 h-2 rounded-full bg-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                {item.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
