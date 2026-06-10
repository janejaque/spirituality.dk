import logo from "@/assets/spirituality-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-primary py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <img src={logo} alt="spirituality.dk – Jane Jaqué" className="w-40 h-40 md:w-48 md:h-48 mb-6 object-contain rounded-2xl" loading="lazy" />
          <h3 className="font-heading text-2xl text-primary-foreground mb-6">
            Jane Jaqué
          </h3>

          <div className="flex flex-col md:flex-row gap-6 mb-8 text-sm font-body text-primary-foreground/60">
            <span>København Sv. eller online</span>
          </div>

          <div className="flex flex-col items-center gap-5 mb-10 max-w-2xl">
            <div id="some" className="flex flex-col sm:flex-row gap-4 scroll-mt-24">
              <a
                href="https://www.tiktok.com/@janej.clairvoyant"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-36 items-center justify-center rounded-md border border-gold-light/40 bg-primary-foreground/20 px-6 py-3 font-body text-sm text-primary-foreground transition-colors hover:border-gold-light/60 hover:bg-primary-foreground/30 hover:text-gold-light"
              >
                TikTok
              </a>
              <a
                href="https://www.instagram.com/jane_spirituality.dk?igsh=ZGl0amNqZDVvdXQ1&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-36 items-center justify-center rounded-md border border-gold-light/40 bg-primary-foreground/20 px-6 py-3 font-body text-sm text-primary-foreground transition-colors hover:border-gold-light/60 hover:bg-primary-foreground/30 hover:text-gold-light"
              >
                Instagram
              </a>
            </div>

            <p className="font-body text-lg md:text-xl font-medium leading-relaxed text-primary-foreground">
              Følg med på min <span className="text-gold-light font-semibold">TikTok</span>, hvor jeg deler inspiration til et liv med hverdagsnær spiritualitet, små giveaways og øvelser, der hjælper dig med at lytte til din egen sjæls behov.
            </p>
            <p className="font-body text-lg md:text-xl italic text-gold-light">
              Mange hilsner Jane
            </p>

            <div className="flex items-center gap-3 text-gold-light/80" aria-hidden="true">
              <span className="text-lg">☽</span>
              <span className="text-sm">✧</span>
              <span className="text-lg">☼</span>
            </div>
          </div>

          <div className="w-full max-w-xs h-px bg-primary-foreground/10 mb-8" />

          <div className="font-body text-xs text-primary-foreground/50 max-w-2xl mb-3 space-y-2">
            <p>
              <span className="font-semibold">Det med småt:</span> Ved afbud indenfor 12 timer eller udeblivelse, betales der fuld pris for konsultationen.
            </p>
            <p>
              Er du forsinket, afsluttes konsultationen på det i forvejen aftalte tidspunkt.
            </p>
            <p>
              Der er tre timers gratis parkering. Nærmeste S-togs station hedder Sydhavn, og nærmeste Metro station hedder Mozarts Plads.
            </p>
          </div>

          <p className="font-body text-xs text-primary-foreground/30">
            © {new Date().getFullYear()} Jane Jaqué. Alle rettigheder forbeholdes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
