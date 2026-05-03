import konsultationRum from "@/assets/konsultation-rum.jpeg";

const services = [
  {
    title: "Clairvoyant vejledning",
    desc: "Jeg tilbyder clairvoyant vejledning. Jeg ser dig – din fortid, din fremtid og det, du står i lige nu.\n\n\nDu er velkommen til at medbringe dine spørgsmål, så du kan få svar på det, du tumler med, og gå trygt videre med mere klarhed.\n\n\nKonsultationer foregår i rolige omgivelser ved personligt fremmøde i København Sv. eller online via Messenger, hvis du befinder dig længere væk.",
    duration: "45 min",
    price: "499 kr.",
    icon: "✦",
  },
  {
    title: "Forældre-barn relation",
    desc: "Clairvoyant vejledning med fokus på forældre-barn-relationen og familiens dynamik. Clairvoyancen kombineres med tips og tricks fra mange års erfaring med at vejlede børnefamilier. Med små, simple greb og justeringer kan man opleve store forandringer og en bedre hverdag for hele familien.\n\n\nDu medbringer dit tema eller din udfordring, og vi kigger på det sammen med henblik på at støtte jer bedst muligt.",
    duration: "45 min",
    price: "499 kr.",
    icon: "❋",
  },
  {
    title: "Afdødekontakt",
    desc: "Som clairvoyant stiller jeg ind på den afdøde, du ønsker at komme i kontakt med. Jeg skaber et trygt og respektfuldt rum for mødet og dialogen.\n\n\nDu er meget velkommen til at medbringe dine egne spørgsmål. Medbring desuden en genstand og et foto (i en kuvert), som jeg må holde for at skabe kontakt. Jeg videreformidler afdødes budskab til dig.\n\n\nDet er vigtigt at sige, at det ikke altid er sådan, at afdøde vælger at komme igennem – og når de kommer igennem, er det ikke nødvendigvis som det menneske, de var i deres levede liv.",
    duration: "",
    price: "499 kr.",
    icon: "☽",
  },
  {
    title: "Chakra-clairvoyance",
    desc: "Ved en chakra-clairvoyance stiller jeg ind på dine chakraer i kroppen.\n\n\nJeg ser på, hvordan der kan arbejdes med at skabe mere balance i krop og sjæl, med særligt fokus på både psykisk og fysisk velvære.\n\n\nLettere healing, aromaterapi og vejrtrækningsøvelser kan forekomme.",
    duration: "45 min",
    price: "499 kr.",
    icon: "◎",
  },
  {
    title: "Karmasitting",
    desc: "Ved en karmasitting stiller jeg clairvoyant ind på episoder fra dine tidligere liv. Du kan få flashbacks til oplevelser, der har defineret dit liv, og som stadig påvirker dig i dag. Det kan være en meget dybdegående og indsigtsfuld oplevelse.\n\n\nDette er særligt for dig, der føler, at du sidder fast i bestemte handlemønstre. En karmasitting kan give dybere indsigt i, hvem du er, og hvad du bærer med dig.\n\n\nDet er også en tilgang, der kan skabe en dybere forståelse for det spirituelle menneske, du er – fordi mange liv har formet dig til den, du er i dag.",
    duration: "45 min",
    price: "499 kr.",
    icon: "∞",
  },
  {
    title: "Venindeaften / polterabend / foredrag",
    desc: "Måske ved du ikke, hvordan du skal gribe din spiritualitet an? Det kan være både rart og hyggeligt at blive introduceret til den spirituelle verden sammen med gode veninder.\n\nEt arrangement kan indeholde:\n\n– Orakel-/englekort med eller uden clairvoyant budskab\n\n\n– En kortere clairvoyance for hver deltager (maks. 6 personer)\n\n\n– En guidet meditation eller drømmerejse for dig, der har brug for at finde ind i din ro, med mulighed for et efterfølgende clairvoyant budskab\n\n\n– Et forløb med intuitiv maling/tegning med mulighed for et efterfølgende clairvoyant budskab\n\n\n– Et foredrag om den spirituelle verden, dens historie og symboler – og hvorfor der fx bruges krystalkugler, tarotkort m.m.\n\nJeg afholder spirituelle arrangementer og foredrag for mindre grupper i København Sv. Afsæt gerne et par timer.\n\n\nKontakt mig gerne, så vi kan aftale indhold og pris.",
    duration: "ca. 2 timer, 5-7 personer (inkl. vand og lidt sødt)",
    price: "ca. 2000 kr.",
    icon: "✺",
  },
];

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
              <div className="flex items-center justify-between pt-4 border-t border-border">
                {s.duration ? (
                  <span className="font-body text-xs text-muted-foreground tracking-wide">
                    {s.duration}
                  </span>
                ) : (
                  <span />
                )}
                <span className="font-heading text-lg font-semibold text-accent">
                  {s.price}
                </span>
              </div>
            </div>
          ))}
        </div>

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
