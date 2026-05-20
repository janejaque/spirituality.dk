import konsultationRum from "@/assets/konsultation-rum.jpeg";

const services = [
  {
    title: "Clairvoyant vejledning",
    desc: "Hos mig får du en tryg og nærværende clairvoyant vejledning. Jeg ser dig – din fortid, din nutid og de muligheder, der venter dig. Sammen kigger vi på det, du tumler med lige nu, og du går herfra med konkrete redskaber, du kan bruge i din hverdag.\n\nDu er meget velkommen til at medbringe dine egne spørgsmål, så du får svar på netop det, der fylder hos dig, og kan gå videre med større klarhed og ro.\n\nDet er en meget ærlig og dybdegående oplevelse, der kan sætte stærke følelser i gang – men du går ikke alene igennem det.\n\nKonsultationen foregår i rolige omgivelser ved personligt fremmøde i København Sv. – eller online via Messenger, hvis du bor længere væk.",
    duration: "45 min",
    price: "699 kr.",
    icon: "✦",
  },
  {
    title: "Forældre-barn relation",
    desc: "Jeg stiller ind på dig og din relation til dit barn. Jeg kan se dit og dit barns unikke personlighed og derudfra kan jeg give dig helt specifikke redskaber til, at i kan komme omsorgsfuldt videre.\n\n\nEn clairvoyant vejledning med særligt fokus på forældre-barn-relationen og familiens dynamik. Clairvoyancen kombineres med tips og erfaringer fra mange års arbejde med børnefamilier. Ofte er det de små, enkle justeringer, der skaber de største forandringer og en lettere hverdag for hele familien.\n\nDu medbringer det tema eller den udfordring, der fylder, og vi kigger på det sammen med ét mål: at støtte jer bedst muligt.",
    duration: "45 min",
    price: "699 kr.",
    icon: "❋",
  },
  {
    title: "Orakel- / englekort",
    desc: "I får en blid introduktion til tarot- og orakelkort.\n\n\nJeg guider jer gennem en lille øvelse, hvor I hver især trækker jeres eget englekort. Hvis I ønsker det, deler jeg bagefter et clairvoyant budskab til hver af jer med afsæt i de kort, der er trukket.\n\n\nEn hyggelig og nænsom måde at lære den spirituelle verden at kende på – sammen med veninder.",
    duration: "Pris for 2-7 personer · drikke og lidt snacks inkluderet",
    price: "1200 kr.",
    icon: "✺",
  },
  {
    title: "Clairvoyance for mindre gruppe veninder",
    desc: "En kortere, personlig clairvoyance til hver deltager i en mindre gruppe.\n\n\nHer bliver I hver især set, og I får jeres helt eget clairvoyante budskab med hjem.\n\nEn tryg og nærværende oplevelse – perfekt til venindeaften eller polterabend, hvor I sammen og hver for sig får helt personlige og specifikke beskeder med jer videre i livet.",
    duration: "Pris for 2-7 personer · drikke og lidt snacks inkluderet",
    price: "1200 kr.",
    icon: "✦",
  },
  {
    title: "Drømmerejse",
    desc: "En guidet drømmerejse for dig og dine veninder, der har brug for at finde ind i din ro. Her er fokus på indre ro, fantasi og din egen spirituelle rejse indadtil. Først guides i ind i en kropsafslapning, så i roligt kan gå ind i jer selv.\n\n\nEn drømmerejse er en smuk fortælling/meditation, der forbinder dig med dit indre. Bagefter tilbyder jeg gerne et clairvoyant budskab, hvis du/i ønsker det.",
    duration: "Pris for 2-7 personer · drikke og lidt snacks inkluderet",
    price: "1200 kr.",
    icon: "❋",
  },
  {
    title: "Intuitiv tegning / maling",
    desc: "Et kreativt forløb med intuitiv tegning eller maling, hvor du får lov at udtrykke dig frit. Vi går i dybden med det intuitive og giver det indre udtryk gennem farver og former. Der er mulighed for et efterfølgende clairvoyant budskab, hvis I ønsker det.\n\nHvis du vælger clairvoyance-delen, er den meget ærlig og dybdegående, og den kan sætte stærke følelser i gang.",
    duration: "Pris for 2-7 personer · drikke og lidt snacks inkluderet",
    price: "1200 kr.",
    icon: "✧",
  },
  {
    title: "Foredrag om den spirituelle verden",
    desc: "Et foredrag om den spirituelle verden, dens historie og symboler – og hvorfor der fx bruges krystalkugler, tarotkort m.m. i den clairvoyante verden. Velegnet til mindre grupper, der er nysgerrige på den spirituelle verden, og hvordan den fungerer. I får lov til at se, mærke, dufte og stille alle de spørgsmål, der måtte dukke op undervejs.",
    duration: "Pris for 2-7 personer · drikke og lidt snacks inkluderet",
    price: "1000 kr.",
    icon: "✶",
  },
];

const groupNote =
  "Jeg holder spirituelle arrangementer og foredrag for mindre grupper i København Sv. Afsæt gerne et par timer, så vi får god tid sammen. Priserne er vejledende – skriv til mig, så aftaler vi indhold og det nærmere, så det passer til jer.";

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
