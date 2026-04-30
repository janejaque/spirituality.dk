import konsultationRum from "@/assets/konsultation-rum.jpeg";

const services = [
  {
    title: "Clairvoyantvejledning",
    desc: "Jeg tilbyder clairvoyant vejledning. Jeg ser dig og det du står i lige nu. Du er velkommen til at medbringe dine spørgsmål, så du kan få svar på det, du tumler med lige nu. Så du kan gå trygt ud i livet igen med mere klarhed. Konsultationer tilbydes i rolige omgivelser ved personligt fremmøde i København Sv. eller online via messenger, hvis du befinder dig længere væk.",
    duration: "45 min",
    price: "499 kr.",
    icon: "✦",
  },
  {
    title: "Forældre-barn relation",
    desc: "Clairvoyant vejledning med fokus på forældre-barn relationen og familiens dynamik. Clairvoyancen kombineres med tips og tricks fra mange års erfaring i at vejlede børnefamilier. Du medbringer dit tema, og vi kigger på det sammen med henblik på at støtte jer bedst muligt.",
    duration: "45 min",
    price: "499 kr.",
    icon: "❋",
  },
  {
    title: "Afdødekontakt",
    desc: "Som clairvoyant stiller jeg ind på den afdøde, du ønsker at komme i kontakt med. Jeg skaber et trygt og respektfuldt rum for mødet og dialog. Du er meget velkommen til at medbringe dine egne spørgsmål. Du bedes medbringe en genstand og et foto (i en kuvert), som jeg må holde for at skabe kontakt til vedkommende. Jeg videreformidler afdødes budskab til dig.\n\n\nDet er vigtigt at fortælle dig, det er ikke altid afdøde vælger at komme igennem og af døde kommer igennem som det menneske, det var i sit levede liv. ",
    duration: "",
    price: "499 kr.",
    icon: "☽",
  },
  {
    title: "Chakra-clairvoyance",
    desc: "Ved en chakra-clairvoyance stilles der ind på dine chakraer i kroppen. Jeg stiller ind på hvordan der kan arbejdes med at skabe mere balance i krop og sjæl. Lettere healing og vejrtrækningsøvelser kan forekomme.",
    duration: "45 min",
    price: "499 kr.",
    icon: "◎",
  },
  {
    title: "Karmasitting",
    desc: "Ved en karmasitting stiller jeg clairvoyant ind på episoder i dine tidligere liv. Med en karmasitting kan du få flashbask til episoder, der tidligere har defineret dit liv og som påvirker dig i dag. Det kan være en meget dybegående og indsigtsfuld oplevelse. \n\n\nDette er særligt til dig, der føler du sidder fast i bestemte handlemønstre. Her kan karmasitting give en dybere indsigt i hvem du er og hvad du bærer med dig. \n\n\nKarmasitting er også et tilgang, der kan skabe en dybere forståelse for det spirituelle menneske du er, fordi mange liv har formet dig til den du er i dag. ",
    duration: "45 min",
    price: "499 kr.",
    icon: "∞",
  },
  {
    title: "Venindeaften / polterabend / foredrag",
    desc: "Måske ved du ikke hvordan du skal gribe din spiritualitet an?\n\n\nDet kan være rart og hyggeligt, at blive introduceret til den spirituelle verden sammen med gode veninder. \nEt arrangement kan indeholde orakel/englekort med/uden clairvoyant budskab, En kortere clairvoyance for hver deltager (maks. 6 personer), en guidet meditation eller drømmerejse, et forløb med intuitiv maling/tegning eller et foredrag om den spirituelle verden og/eller den symboler. \n\n\nJeg holder afholder spirituelle arrangementer og foredrag for mindre grupper. Kontakt mig gerne, så vi kan aftale indhold og pris.\n\n",
    duration: "",
    price: "Kontakt",
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
              <span className="text-3xl text-accent mb-4 block">{s.icon}</span>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {s.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
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
