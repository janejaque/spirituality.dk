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
            Jeg har passeret de 50 år og har opbygget årtiers erfaring med at vejlede, støtte og rådgive børn, unge og deres forældre. I mit arbejdsliv har jeg været pædagog, rådgiver og leder, og jeg har arbejdet med forskning.

Jeg har altid været drevet af at forstå de menneskelige relationer. Derfor har jeg bevæget mig både i praksis, i den akademisk-analytiske verden og nu også i den clairvoyante og intuitive verden.
          </p>
          <p className="mb-6">
            Mine clairvoyante evner har jeg altid haft, og min akademiske uddannelse har givet mig et kritisk analytisk blik. Oprindeligt troede jeg, at min evne til at se det unikke i hvert menneske udelukkende kom fra mange års erfaring med mennesker. I dag kan jeg skelne mellem erfaring, viden og mine clairvoyante evner.
          </p>
          <p className="mb-8">
            Jeg møder dig med åbenhed, ærlighed og omsorg. Efter en konsultation er det vigtigt for mig, at du går ud af døren med håb for fremtiden og gode, lavpraktiske redskaber i hånden.
          </p>

          <p className="mt-6">
            Jeg har netop afsluttet min uddannelse som clairvoyant ved Tove Lucka i Center for indre respons i København.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
