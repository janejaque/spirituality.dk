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
            Jeg har passeret de 50 år og har opbygget årtiers erfaring i at vejlede, støtte og rådgive børn, unge samt deres forældre. I mit arbejdsliv har jeg været pædagog, rådgiver, leder og jeg har arbejdet med forskning.

Jeg har altid været drevet af at forstå de menneskelige relationer. Derfor har jeg bevæget mig både i praksis, i den akademisk analytiske verden og nu også den clairvoyante og intuitive verden. 
          </p>
          <p className="mb-6">
            Jeg har et kritisk analytisk blik qua min akademiske uddannelse. Mine clairvoyante evner har jeg altid haft. Oprindeligt troede jeg, at jeg bare var i stand til at se det unikke i hvert menneske pga. min lange erfaring i at arbejde med mennesker. Nu kan jeg skelne mellem erfaring, viden og mine clairvoyante evner.
          </p>
          <p className="mb-8">
            Jeg møder dig med åbenhed, ærlighed og omsorg. Efter en konsultation er det vigtigt for mig, at du går ud af døren med håb for fremtiden og gode lavpraktiske redskaber.
          </p>

          <p className="mt-6">
            Jeg afslutter min uddannelse som clairvoyant i maj 2026. Herefter stiger prisen for en konsultation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
