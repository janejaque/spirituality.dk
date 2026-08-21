import janePortrait1 from "@/assets/jane-portrait1.jpg";
import janePortrait2 from "@/assets/jane-portrait2.jpg";

const About = () => {
  return (
    <section id="om-mig" className="py-24 bg-gradient-rose-warm">
      <div className="container mx-auto px-4 max-w-4xl">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-3">
          Om mig
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight">
          Jane Jaqué
        </h2>
        <div className="w-16 h-0.5 bg-accent mb-8" />

        <div className="font-body text-muted-foreground leading-relaxed">
          <div className="float-right ml-8 mb-6 w-64 md:w-80">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={janePortrait2}
                alt="Jane Jaqué"
                className="w-full h-auto object-cover brightness-110 contrast-105"
                loading="lazy"
              />
            </div>
          </div>

          <p className="mb-6 whitespace-pre-line">
            Jeg er over 50 år og har gennem mere end tre årtier vejledt, støttet og rådgivet børn, unge og deres forældre. I mit arbejdsliv har jeg været pædagog, rådgiver og leder, og jeg har arbejdet med forskning. Det, der altid har drevet mig, er en dyb nysgerrighed på de menneskelige relationer – og det har ført mig både gennem praksis, den akademiske verden og ind i den clairvoyante og intuitive verden.

Mine clairvoyante evner har jeg haft hele livet, og min akademiske baggrund har givet mig et kritisk og analytisk blik. Tidligere troede jeg, at min evne til at se det unikke i hvert menneske udelukkende kom fra mange års erfaring. I dag kan jeg klart skelne mellem erfaring, faglig viden og mine clairvoyante evner – og det giver dig en vejledning, der er både jordnær og dyb.

Jeg er uddannet clairvoyant ved Tove Lucka Kofoed på Center for Indre Respons.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
