const LedigeTider = () => {
  return (
    <section id="ledige-tider" className="py-24 bg-gradient-warm scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-3">
              Blog
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">
              Ledige tider til clairvoyance
            </h2>
            <div className="w-16 h-0.5 bg-accent mx-auto mb-6" />
            <p className="font-body text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Her kan du altid se, hvor der er ledige tider – opdateret
              løbende, så du nemt kan finde en dag, der passer dig.
            </p>
          </div>

          <div className="bg-card rounded-2xl border border-accent/30 shadow-sm px-8 py-10">
            <p className="font-heading text-2xl font-light text-foreground mb-6 flex items-center gap-3">
              <span className="text-gold text-xl" aria-hidden="true">☾</span>
              November 2026
            </p>

            <div className="space-y-6 font-body text-foreground leading-relaxed">
              <p>
                Jeg er desværre <span className="font-semibold text-foreground">booket op i uge 43–45</span>,
                så der er ikke flere ledige tider i den periode.
              </p>
              <p>
                I <span className="font-semibold text-foreground">uge 45–47</span> er der
                kun <span className="font-semibold text-foreground">få ledige tider</span>,
                så vær hurtig, hvis du vil i gennem med en konsultation.
              </p>

              <div className="bg-accent/10 border border-accent/30 rounded-xl px-6 py-5">
                <p className="font-heading text-lg font-semibold text-foreground mb-2">
                  Ledige tider i november:
                </p>
                <ul className="space-y-2 font-body text-sm md:text-base text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-0.5" aria-hidden="true">✧</span>
                    <span>
                      <span className="font-semibold">Fredag den 13. november</span> – heldagsåbning med ledige tider
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-0.5" aria-hidden="true">✧</span>
                    <span>
                      <span className="font-semibold">Tirsdag aftener</span> i november
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-0.5" aria-hidden="true">✧</span>
                    <span>
                      <span className="font-semibold">Onsdage</span> i november
                    </span>
                  </li>
                </ul>
              </div>

              <p className="text-muted-foreground text-sm md:text-base">
                Book din tid ved at skrive til mig via kontaktformularen
                herunder, eller find mig på TikTok eller Instagram. Jeg glæder
                mig til at høre fra dig. Kærlig hilsen Jane.
              </p>
            </div>

            <div className="flex items-center gap-3 text-gold-light/80 mt-8" aria-hidden="true">
              <span className="text-lg">☽</span>
              <span className="text-sm">✧</span>
              <span className="text-lg">☼</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LedigeTider;
