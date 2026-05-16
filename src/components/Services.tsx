import konsultationRum from "@/assets/konsultation-rum.jpeg";

const services = [
  {
    title: "Clairvoyant vejledning",
    desc: "Jeg tilbyder clairvoyant vejledning. Jeg ser dig – din fortid, din fremtid og det, du står i lige nu. Jeg kan stille ind på det du tumler med lige nu og du får redskaber med dig videre. \n\n\n\nDu er velkommen til at medbringe dine spørgsmål, så du kan få svar på det, du tumler med, og gå trygt videre med mere klarhed.\n\n\nKonsultationer foregår i rolige omgivelser ved personligt fremmøde i København Sv. eller online via Messenger, hvis du befinder dig længere væk.",
    duration: "45 min",
    price: "699 kr.",
    icon: "✦",
  },
  {
    title: "Forældre-barn relation",
    desc: "Clairvoyant vejledning med fokus på forældre-barn-relationen og familiens dynamik. Clairvoyancen kombineres med tips og tricks fra mange års erfaring med at vejlede børnefamilier. Med små, simple greb og justeringer kan man opleve store forandringer og en bedre hverdag for hele familien.\n\n\nDu medbringer dit tema eller din udfordring, og vi kigger på det sammen med henblik på at støtte jer bedst muligt.",
    duration: "45 min",
    price: "699 kr.",
    icon: "❋",
  },
  {
    title: "Orakel- / englekort",
    desc: "Træk af orakel- eller englekort med eller uden et efterfølgende clairvoyant budskab. En hyggelig og nænsom måde at blive introduceret til den spirituelle verden på – alene eller sammen med veninder.",
    duration: "5-7 personer, inkl. lidt sødt",
    price: "1900 kr.",
    icon: "✺",
  },
  {
    title: "Clairvoyance for mindre gruppe veninder",
    desc: "En kortere clairvoyance for hver deltager i en mindre gruppe (maks. 6 personer). Perfekt til venindeaften eller polterabend, hvor I sammen får et personligt budskab i trygge rammer.",
    duration: "5-7 personer, inkl. lidt sødt",
    price: "1900 kr.",
    icon: "✦",
  },
  {
    title: "Guidet meditation / drømmerejse",
    desc: "En guidet meditation eller drømmerejse for dig, der har brug for at finde ind i din ro. Der er mulighed for et efterfølgende clairvoyant budskab.",
    duration: "5-7 personer, inkl. lidt sødt",
    price: "1900 kr.",
    icon: "❋",
  },
  {
    title: "Intuitiv tegning / maling",
    desc: "Et kreativt forløb med intuitiv tegning eller maling, hvor du får lov at udtrykke dig frit. Der er mulighed for et efterfølgende clairvoyant budskab.",
    duration: "5-7 personer, inkl. lidt sødt",
    price: "1900 kr.",
    icon: "✧",
  },
  {
    title: "Foredrag om den spirituelle verden",
    desc: "Et foredrag om den spirituelle verden, dens historie og symboler – og hvorfor der fx bruges krystalkugler, tarotkort m.m. Velegnet til mindre grupper i København Sv.",
    duration: "5-7 personer, inkl. lidt sødt",
    price: "1900 kr.",
    icon: "✶",
  },
];

const groupNote =
  "Jeg afholder spirituelle arrangementer og foredrag for mindre grupper i København Sv. Afsæt gerne et par timer. Kontakt mig, så vi sammen kan sammensætte indhold og aftale pris.";

const Services = () => {
  return (
    <section id="konsultationer" className="py-24 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-3">
            Jeg tilbyder
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">
            Konsultationer
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-card rounded-xl p-8 border border-border hover:border-accent/40 transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl text-accent block">{s.icon}</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {s.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 whitespace-pre-line">
                {s.desc}
              </p>
              {(s.duration || s.price) && (
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  {s.duration ? (
                    <span className="font-body text-xs text-muted-foreground tracking-wide">
                      {s.duration}
                    </span>
                  ) : (
                    <span />
                  )}
                  {s.price && (
                    <span className="font-heading text-lg font-semibold text-accent">
                      {s.price}
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="max-w-2xl mx-auto mt-12 text-center font-body text-sm text-muted-foreground leading-relaxed">
          {groupNote}
        </p>

        <div className="max-w-3xl mx-auto mt-16">
          <div className="overflow-hidden rounded-xl shadow-lg border border-border">
            <img
              src={konsultationRum}
              alt="Roligt konsultationsrum med lænestol, levende lys og blomster"
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
