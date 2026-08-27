const priceRows = [
  {
    name: "Clairvoyant vejledning – 45 min",
    detail: "Personligt fremmøde i København Sv. eller online via Messenger",
    price: "945 kr.",
  },
  {
    name: "Clairvoyant vejledning – 20 min",
    detail: "Kortere konsultation, samme nærvær",
    price: "600 kr.",
  },
  {
    name: "Klippekort – 3 konsultationer",
    detail: "Spar ved at booke flere clairvoyance konsultationer",
    price: "2500 kr.",
  },
  {
    name: "Forældre-barn relation – 45 min",
    detail: "Clairvoyant vejledning med fokus på familiens dynamik",
    price: "950 kr.",
  },
  {
    name: "Tarotkort trækning",
    detail: "Foto og personlig tolkning sendes pr. mail",
    price: "149 kr.",
  },
  {
    name: "Find ind til din egen spiritualitet",
    detail: "Event for gruppe, 2-7 personer · drikke og snacks inkl.",
    price: "1500 kr.",
  },
  {
    name: "Tarot/orakel og englekort – venindeaften",
    detail: "Gruppe, 2-7 personer · drikke og snacks inkl.",
    price: "1200 kr.",
  },
  {
    name: "Clairvoyance for venindegruppe/polterabend",
    detail: "Gruppe, 5-10 personer · drikke og snacks inkl.",
    price: "1700 kr.",
  },
  {
    name: "Guidet meditation for begyndere",
    detail: "2-7 deltagere · pr. person",
    price: "150 kr.",
  },
  {
    name: "Intuitiv tegning / maling",
    detail: "Gruppe, 2-7 personer · drikke og snacks inkl.",
    price: "1200 kr.",
  },
  {
    name: "Gavekort",
    detail: "Tilpasses efter aftale",
    price: "Efter aftale",
  },
];

const PriceList = () => {
  return (
    <section id="priser" className="py-24 bg-gradient-warm scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-3">
              Overskuelighed
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">
              Prisliste
            </h2>
            <div className="w-16 h-0.5 bg-accent mx-auto mb-6" />
            <p className="font-body text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Alle priser er vejledende. For arrangementer tilpasser jeg indhold
              og pris, så det passer til jer – skriv til mig, og vi finder det
              rette sammen.
            </p>
          </div>

          <div className="bg-card rounded-2xl border border-accent/30 overflow-hidden shadow-sm">
            <ul className="divide-y divide-border">
              {priceRows.map((row) => (
                <li
                  key={row.name}
                  className="flex items-start justify-between gap-4 px-6 py-5 transition-colors duration-300 hover:bg-accent/5"
                >
                  <div className="min-w-0">
                    <p className="font-heading text-base font-semibold text-foreground">
                      {row.name}
                    </p>
                    <p className="font-body text-xs text-muted-foreground mt-1 leading-relaxed">
                      {row.detail}
                    </p>
                  </div>
                  <span className="font-heading text-lg font-semibold text-accent whitespace-nowrap pt-0.5">
                    {row.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <p className="font-body text-xs text-muted-foreground text-center mt-6 leading-relaxed">
            Det med småt: Ved afbud inden for 12 timer eller udeblivelse,
            betales fuld pris for konsultationen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PriceList;
