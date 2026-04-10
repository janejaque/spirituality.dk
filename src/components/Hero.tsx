import heroBg from "@/assets/hero-bg.jpg";
import janeLogo from "@/assets/jane-logo.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-mystical opacity-75" />
        <div className="absolute inset-0 bg-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 max-w-4xl mx-auto w-full">
        <div className="text-center mb-10">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-light text-primary-foreground leading-tight mb-4 animate-fade-in opacity-0">
            Clairvoyant vejledning
          </h1>
          <p className="font-heading text-xl md:text-2xl text-gold-light italic mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.2s" }}>
            Jeg ser dig
          </p>
          <p className="font-body text-primary-foreground/80 text-base md:text-lg max-w-xl mx-auto mb-10 animate-fade-up opacity-0 leading-relaxed" style={{ animationDelay: "0.4s" }}>
            Mit navn er Jane Jaqué og jeg er clairvoyant. Jeg giver dig redskaber til at komme trygt videre i dit liv med omsorgsfuld vejledning og støtte.
          </p>
          <div className="animate-fade-up opacity-0" style={{ animationDelay: "0.6s" }}>
            <a
              href="#kontakt"
              className="inline-block font-body text-sm font-medium bg-accent text-accent-foreground px-8 py-4 rounded-lg hover:bg-gold-dark transition-colors duration-300 tracking-wide uppercase"
            >
              Book en konsultation
            </a>
          </div>
        </div>

        {/* Logo - bottom left */}
        <div className="flex justify-start animate-fade-in opacity-0" style={{ animationDelay: "0.8s" }}>
          <img
            src={janeLogo}
            alt="Jane Jaqué Clairvoyance"
            className="w-24 h-24 md:w-32 md:h-32 rounded-2xl shadow-lg shadow-accent/20 border-2 border-accent/30 object-cover"
          />
        </div>
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
