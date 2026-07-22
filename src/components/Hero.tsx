import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover brightness-110 contrast-110 saturate-105"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-mystical opacity-75" />
        <div className="absolute inset-0 bg-primary/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 max-w-4xl mx-auto w-full">
        <div className="text-center mb-10">
          <h1 className="font-heading text-4xl md:text-6xl font-light text-primary-foreground leading-tight mb-4 animate-fade-in opacity-0 lg:text-6xl">
            Clairvoyant i København
          </h1>
          <p className="font-heading text-xl md:text-3xl text-gold-light italic mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.2s" }}>
            Find ro og retning
          </p>
          <p className="font-body text-primary-foreground/80 text-base md:text-lg max-w-xl mx-auto mb-8 animate-fade-up opacity-0 leading-relaxed whitespace-pre-line" style={{ animationDelay: "0.4s" }}>
            Står du et sted i livet, hvor du søger klarhed og en ny retning? Uanset om det handler om kærlighed, parforhold, børn, arbejde, uddannelse eller din spirituelle vej, er du i trygge hænder hos mig.{"\n"}Med nærværende og omsorgsfuld clairvoyant vejledning giver jeg dig konkrete redskaber, så du kan gå trygt og afklaret videre.
          </p>
          <div className="max-w-md mx-auto mb-10 animate-fade-up opacity-0" style={{ animationDelay: "0.5s" }}>
            <p className="font-heading text-sm md:text-base italic text-gold-light/90">
              Clairvoyant vejledning – klarhed til dig og din vej frem
            </p>
          </div>

          {/* Featured testimonial */}
          <div className="max-w-2xl mx-auto mb-10 animate-fade-up opacity-0" style={{ animationDelay: "0.55s" }}>
            <div className="bg-background/20 backdrop-blur-sm border border-accent/20 rounded-2xl p-6 md:p-8 shadow-lg shadow-accent/10">
              <p className="font-body text-xs tracking-[0.2em] uppercase text-gold-light mb-4">
                Udtalelse juli, 2026
              </p>
              <span className="block font-heading text-4xl text-accent leading-none mb-3">
                “
              </span>
              <blockquote className="font-body text-base md:text-lg text-primary-foreground/90 leading-relaxed italic mb-5">
                Jeg kan varmt anbefale Jane Jaqué. Jeg følte mig mødt med nærvær, ro og stor empati fra første øjeblik. Clairvoyancen gav mig værdifulde perspektiver, og flere ting gav rigtig god mening for mig. Jane skaber et trygt rum, hvor man føler sig set og hørt. Jeg gik derfra med en god følelse og noget at tænke over. Det var en virkelig god oplevelse.
              </blockquote>
              <p className="font-body text-xs tracking-[0.18em] uppercase text-gold-light">
                Louise R. T <span className="text-primary-foreground/40">· Kastrup</span>
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center animate-fade-up opacity-0" style={{ animationDelay: "0.65s" }}>
          <a
            href="#kontakt"
            className="inline-flex items-center font-body text-sm font-medium bg-[hsl(40,60%,85%)] text-primary px-8 py-4 rounded-2xl shadow-lg shadow-accent/20 border-2 border-accent/30 hover:border-accent/50 hover:bg-[hsl(40,55%,75%)] transition-all duration-300 tracking-wide uppercase"
          >
            Book en konsultation
          </a>
        </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <svg className="w-6 h-6 text-gold-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
