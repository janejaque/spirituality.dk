import konsultationRum from "@/assets/konsultation-rum.jpeg";
import seminarImg from "@/assets/seminar-spirituel.jpg";
import clairvoyantImg from "@/assets/clairvoyant-vejledning.jpg";
import foraeldreBarnImg from "@/assets/foraeldre-barn.jpg";
import tarotTraekningImg from "@/assets/tarot-traekning.jpg";
import orakelImg from "@/assets/orakel-englekort.jpg";
import gruppeImg from "@/assets/gruppe-veninder.jpg";
import drommeImg from "@/assets/drommerejse.jpg";
import intuitivImg from "@/assets/intuitiv-tegning.jpg";

const featured = {
  title: "Find ind til din egen spiritualitet",
  desc: "Et arrangement for dig, der gerne vil forstå den spirituelle verden bedre.\n\nJeg taler om sammenhænge og redskaber, der bruges til at komme i kontakt med det spirituelle, og hvor de forskellige elementer historisk trækker deres inspiration fra. Den spirituelle og alternative verden væver nemlig tråde ud i mange forskellige religioner og traditioner, og der findes ikke én enkelt vej – hvert menneske finder sin egen.\n\nDu kan stille alle de spørgsmål, du har på hjertet, og vi slutter af med en lille øvelse i, hvordan du skaber ro i dig selv, så du kan mærke din egen spiritualitet. Mærk roen og glæden indeni dig selv. Hvert menneskes vej ind i det er unik.\n\nDer vil være inspiration til alle sanser og der vil være mulighed for at dufte, smage, se og føle.\n\nAftenen foregår i trygge og hyggelige rammer, hvor alle sanser bruges, og hver gæst får en lille gave med sig hjem – samt en hyggelig aften i selskab med venner. Afsæt gerne et par timer til en varm sammenkomst.",
  duration: "Drikke og lidt snacks inkluderet",
  price: "1500 kr.",
  icon: "✶",
  image: seminarImg,
  imageAlt: "Krystalkugle, tarotkort og levende lys i bløde varme toner",
};

const services = [
  {
    title: "Clairvoyant vejledning",
    desc: "Hos mig får du en tryg og nærværende clairvoyant vejledning. Jeg ser dig – din fortid, din nutid og de muligheder, der venter dig. Sammen kigger vi på det, du tumler med lige nu, og du går herfra med konkrete redskaber, du kan bruge i din hverdag.\n\nDu er meget velkommen til at medbringe dine egne spørgsmål, så du får svar på netop det, der fylder hos dig, og kan gå videre med større klarhed og ro.\n\nClairvoyance kan foregå på flere måder – hvad enten det er som clairvoyant vejledning, afdødekontakt eller spørgsmål om 'spøgelser'. Det taler vi også om, hvis det er det, du har brug for.\n\nDet er en meget ærlig og dybdegående oplevelse, der kan sætte stærke følelser i gang – men du går ikke alene igennem det.\n\nKonsultationen foregår i rolige omgivelser ved personligt fremmøde i København Sv. – eller online via Messenger, hvis du bor længere væk.",
    duration: "45 minutter eller 20 minutter",
    price: "899 kr. / 450 kr.",
    group: false,
    icon: "✦",
    image: clairvoyantImg,
    imageAlt: "Hånd med klar krystal, lavendel og stearinlys i varme cremetoner",
  },
  {
    title: "Forældre-barn relation",
    desc: "Jeg stiller ind på dig og din relation til dit barn. Jeg kan se dit og dit barns unikke personlighed og derudfra kan jeg give dig helt specifikke redskaber til, at i kan komme omsorgsfuldt videre.\n\n\nEn clairvoyant vejledning med særligt fokus på forældre-barn-relationen og familiens dynamik. Clairvoyancen kombineres med tips og erfaringer fra mange års arbejde med børnefamilier. Ofte er det de små, enkle justeringer, der skaber de største forandringer og en lettere hverdag for hele familien.\n\nDu medbringer det tema eller den udfordring, der fylder, og vi kigger på det sammen med ét mål: at støtte jer bedst muligt.",
    duration: "45 min",
    price: "899 kr.",
    group: false,
    icon: "❋",
    image: foraeldreBarnImg,
    imageAlt: "Rose og hjerteformet sten på blødt cremestof – symbol på forældre-barn relation",
  },
  {
    title: "Tarotkort trækning",
    desc: "Jeg trækker et enkelt tarotkort for dig og sender et foto af kortet sammen med en varm tolkning af det budskab, der følger med.\n\nJeg kan stille ind på dig lige nu, eller du kan søge svar om noget helt specifikt i dit liv, som du står og mangler klarhed om. Du bestemmer selv, hvad der føles rigtigt for dig.\n\nBesked og foto mailer jeg til dig, så du har det tæt ved hånden og kan vende tilbage, når du har brug for det.\n\nJeg bruger Rider Waite tarotkort fra serien 'Japanese Art Nouveau' – smukke, poetiske kort med dybe symboler, der inviterer til refleksion og indsigt.",
    duration: "Foto og tolkning sendes pr. mail",
    price: "149 kr.",
    group: false,
    icon: "✶",
    image: tarotTraekningImg,
    imageAlt: "Elegant tarotkort med art nouveau detaljer, lavendel og stearinlys i varme toner",
  },
  {
    title: "Tarot/orakel og englekort - en venindeaften",
    desc: "En hyggelig venindeaften med fokus på tarot-, orakel- og englekort.\n\n\nI får en introduktion til kortene og de måder, de kan bruges på, så I trygt kan lære den spirituelle verden at kende. Bagefter inviterer jeg jer til en let kropsafslapning, hvor I kan lade skuldrene falde og finde jeres indre ro. Når I er landet, trækker I hver især et englekort, og hvis det føles rigtigt, tuner jeg ind på hver enkelt af jer – så I får et varmt, personligt budskab med jer hjem.\n\n\nDer vil også være tid til, at jeg besvarer spørgsmål om den spirituelle verden.\n\n\nEn nænsom og samhørig måde at dele oplevelsen på – sammen med veninder.",
    duration: "Drikke og lidt snacks inkluderet",
    price: "1200 kr.",
    group: true,
    icon: "✺",
    image: orakelImg,
    imageAlt: "Englekort lagt ud i vifte med fjer og tørrede blomster",
  },
  {
    title: "Clairvoyance for venindegruppe/polterabend",
    desc: "En nærværende og varm clairvoyance for dig og dine veninder, hvor I hver især bliver set og mødt, præcis der hvor I er.\n\n\nVi samles i trygge og hyggelige rammer, og I får alle jeres helt egne, personlige budskaber med hjem – små kærlige vink fra universet, der kan lyse jeres vej videre.\n\n\nEn samhørig oplevelse, der passer smukt til en venindeaften eller polterabend, hvor I både er sammen og hver for sig får noget helt unikt med jer i hjertet.",
    duration: "Drikke og lidt snacks inkluderet",
    price: "1200 kr.",
    group: true,
    icon: "✦",
    image: gruppeImg,
    imageAlt: "Hyggeligt bord med tekopper, tørrede blomster og levende lys til venindeaften",
  },
  {
    title: "Guidet meditation for begyndere",
    desc: "En nærværende guidet meditation for dig og dine veninder, der ønsker at finde ind til roen og lære grundteknikkerne i meditation. Vi starter med en let kropsafslapning, så I roligt kan lande i nuet og mærke jer selv.\n\n\nMeditationen er særligt velegnet til begyndere og fokuserer på åndedrættet, indre ro og nærvær. Bagefter tilbyder jeg gerne et clairvoyant budskab, hvis du/i ønsker det.\n\n\nDer er også tid til spørgsmål om den spirituelle verden efter meditation og clairvoyance.\n\n\nDer skal mindst være 2 deltagere og max 7.",
    duration: "Drikke og lidt snacks inkluderet",
    price: "150 kr. pr. person",
    group: false,
    icon: "❋",
    image: drommeImg,
    imageAlt: "Ametystkrystal og stearinlys på blødt cremetæppe – rolig meditationsstemning",
  },
  {
    title: "Intuitiv tegning / maling",
    desc: "Et kreativt forløb med intuitiv tegning eller maling, hvor du får lov at udtrykke dig frit. Vi går i dybden med det intuitive og giver det indre udtryk gennem farver og former. Der er mulighed for et efterfølgende clairvoyant budskab, hvis I ønsker det.\n\nHvis du vælger clairvoyance-delen, er den meget ærlig og dybdegående, og den kan sætte stærke følelser i gang.",
    duration: "Drikke og lidt snacks inkluderet",
    price: "1200 kr.",
    group: true,
    icon: "✧",
    image: intuitivImg,
    imageAlt: "Akvarelpensler, palet og blødt farvet papir i varme jordtoner",
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
            Konsultationer &amp; Seminar
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto mb-6">
          <div className="group bg-card rounded-xl overflow-hidden border border-accent/30 hover:border-accent/50 transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={featured.image}
                alt={featured.imageAlt}
                loading="lazy"
                width={1024}
                height={576}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-8 md:p-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl text-accent block">{featured.icon}</span>
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-3">
                {featured.title}
              </h3>
              <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed mb-6 whitespace-pre-line">
                {featured.desc}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="font-body text-xs text-muted-foreground tracking-wide">
                  {featured.duration}
                </span>
                <div className="text-right">
                  <p className="font-body text-[10px] text-muted-foreground italic mb-1">
                    Hver deltager får en lille spirituel gave med sig hjem
                  </p>
                  <span className="font-heading text-lg font-semibold text-accent">
                    {featured.price}
                  </span>
                  <p className="font-body text-[10px] text-muted-foreground mt-1">
                    Prisen er for hele gruppen på 2-7 personer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">

          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:border-accent/40 transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.imageAlt}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
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
                    <div className="text-right">
                      {s.group && (
                        <p className="font-body text-[10px] text-muted-foreground italic mb-1">
                          Hver deltager får en lille spirituel gave med sig hjem
                        </p>
                      )}
                      {s.price && (
                        <span className="font-heading text-lg font-semibold text-accent">
                          {s.price}
                        </span>
                      )}
                      {s.group && s.price && (
                        <p className="font-body text-[10px] text-muted-foreground mt-1">
                          Prisen er for hele gruppen på 2-7 personer
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
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
