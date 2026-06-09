import konsultationRum from "@/assets/konsultation-rum.jpeg";
import seminarImg from "@/assets/seminar-spirituel.jpg";
import clairvoyantImg from "@/assets/clairvoyant-vejledning.jpg";
import foraeldreBarnImg from "@/assets/foraeldre-barn.jpg";
import orakelImg from "@/assets/orakel-englekort.jpg";
import gruppeImg from "@/assets/gruppe-veninder.jpg";
import drommeImg from "@/assets/drommerejse.jpg";
import intuitivImg from "@/assets/intuitiv-tegning.jpg";

const featured = {
  title: "Seminar om den spirituelle verden",
  desc: "Et foredrag om den spirituelle verden, dens historie og symboler – og hvorfor der fx bruges krystalkugler, tarotkort m.m. i den clairvoyante verden. Velegnet til mindre grupper, der er nysgerrige på den spirituelle verden, og hvordan den fungerer. I får lov til at se, mærke, dufte og stille alle de spørgsmål, der måtte dukke op undervejs.\n\nDu får mulighed for at komme tættere på din egen spirituelle vej, og undervejs deler jeg tips og tricks til, hvordan du kan invitere mere spiritualitet ind i hverdagen.\n\nDet foregår i hyggelige omgivelser med nærvær og dybdegående samtaler, hvor alle sanser bruges, og hver gæst får en lille gave med sig hjem. Afsæt gerne et par timer til en hyggelig sammenkomst.",
  duration: "Pris for 2-7 personer · drikke og lidt snacks inkluderet",
  price: "1200 kr.",
  icon: "✶",
  image: seminarImg,
  imageAlt: "Krystalkugle, tarotkort og levende lys i bløde varme toner",
};

const services = [
  {
    title: "Clairvoyant vejledning",
    desc: "Hos mig får du en tryg og nærværende clairvoyant vejledning. Jeg ser dig – din fortid, din nutid og de muligheder, der venter dig. Sammen kigger vi på det, du tumler med lige nu, og du går herfra med konkrete redskaber, du kan bruge i din hverdag.\n\nDu er meget velkommen til at medbringe dine egne spørgsmål, så du får svar på netop det, der fylder hos dig, og kan gå videre med større klarhed og ro.\n\nDet er en meget ærlig og dybdegående oplevelse, der kan sætte stærke følelser i gang – men du går ikke alene igennem det.\n\nKonsultationen foregår i rolige omgivelser ved personligt fremmøde i København Sv. – eller online via Messenger, hvis du bor længere væk.",
    duration: "45 min",
    price: "899 kr.",
    icon: "✦",
    image: clairvoyantImg,
    imageAlt: "Hånd med klar krystal, lavendel og stearinlys i varme cremetoner",
  },
  {
    title: "Forældre-barn relation",
    desc: "Jeg stiller ind på dig og din relation til dit barn. Jeg kan se dit og dit barns unikke personlighed og derudfra kan jeg give dig helt specifikke redskaber til, at i kan komme omsorgsfuldt videre.\n\n\nEn clairvoyant vejledning med særligt fokus på forældre-barn-relationen og familiens dynamik. Clairvoyancen kombineres med tips og erfaringer fra mange års arbejde med børnefamilier. Ofte er det de små, enkle justeringer, der skaber de største forandringer og en lettere hverdag for hele familien.\n\nDu medbringer det tema eller den udfordring, der fylder, og vi kigger på det sammen med ét mål: at støtte jer bedst muligt.",
    duration: "45 min",
    price: "899 kr.",
    icon: "❋",
    image: foraeldreBarnImg,
    imageAlt: "Rose og hjerteformet sten på blødt cremestof – symbol på forældre-barn relation",
  },
  {
    title: "Orakel- / englekort",
    desc: "I får en blid introduktion til tarot- og orakelkort.\n\n\nJeg guider jer igennem en lille kropsafslapningsøvelse, hvor I derefter trækker et englekort. Jeg kan også stille clairvoyant ind på hver enkelt af jer, så I får et budskab med jer hjem. Der vil også være mulighed for at stille spørgsmål til det spirituelle, hvis du har brug for det.\n\n\nEn hyggelig og nænsom måde at lære den spirituelle verden at kende på – sammen med veninder.",
    duration: "Pris for 2-7 personer · drikke og lidt snacks inkluderet",
    price: "1200 kr.",
    icon: "✺",
    image: orakelImg,
    imageAlt: "Englekort lagt ud i vifte med fjer og tørrede blomster",
  },
  {
    title: "Clairvoyance for mindre gruppe veninder",
    desc: "En kortere, personlig clairvoyance til hver deltager i en mindre gruppe.\n\n\nHer bliver I hver især set, og I får jeres helt eget clairvoyante budskab med hjem.\n\nEn tryg og nærværende oplevelse – perfekt til venindeaften eller polterabend, hvor I sammen og hver for sig får helt personlige og specifikke beskeder med jer videre i livet.",
    duration: "Pris for 2-7 personer · drikke og lidt snacks inkluderet",
    price: "1200 kr.",
    icon: "✦",
    image: gruppeImg,
    imageAlt: "Hyggeligt bord med tekopper, tørrede blomster og levende lys til venindeaften",
  },
  {
    title: "Drømmerejse",
    desc: "En guidet drømmerejse for dig og dine veninder, der har brug for at finde ind i din ro. Her er fokus på indre ro, fantasi og din egen spirituelle rejse indadtil. Først guides i ind i en kropsafslapning, så i roligt kan gå ind i jer selv.\n\n\nEn drømmerejse er en smuk fortælling/meditation, der forbinder dig med dit indre. Bagefter tilbyder jeg gerne et clairvoyant budskab, hvis du/i ønsker det.",
    duration: "Pris for 2-7 personer · drikke og lidt snacks inkluderet",
    price: "1200 kr.",
    icon: "❋",
    image: drommeImg,
    imageAlt: "Ametystkrystal og stearinlys på blødt cremetæppe – rolig drømmerejse stemning",
  },
  {
    title: "Intuitiv tegning / maling",
    desc: "Et kreativt forløb med intuitiv tegning eller maling, hvor du får lov at udtrykke dig frit. Vi går i dybden med det intuitive og giver det indre udtryk gennem farver og former. Der er mulighed for et efterfølgende clairvoyant budskab, hvis I ønsker det.\n\nHvis du vælger clairvoyance-delen, er den meget ærlig og dybdegående, og den kan sætte stærke følelser i gang.",
    duration: "Pris for 2-7 personer · drikke og lidt snacks inkluderet",
    price: "1200 kr.",
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
                      {s.title !== "Clairvoyant vejledning" && s.title !== "Forældre-barn relation" && (
                        <p className="font-body text-[10px] text-muted-foreground italic mb-1">
                          Hver deltager får en lille spirituel gave med sig hjem
                        </p>
                      )}
                      {s.price && (
                        <span className="font-heading text-lg font-semibold text-accent">
                          {s.price}
                        </span>
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
