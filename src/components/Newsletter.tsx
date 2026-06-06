import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = "Tilmelding til nyhedsbrev";
    const body = `Hej Jane,\n\nJeg vil gerne tilmelde mig dit nyhedsbrev.\n\nE-mail: ${email}\n\nKærlig hilsen`;
    window.location.href = `mailto:mail@janejaque.dk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <section id="nyhedsbrev" className="py-24 bg-background scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-3">
            Nyhedsbrev
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">
            Bliv en del af kredsen
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mb-6" />
          <p className="font-body text-muted-foreground mb-8 max-w-xl mx-auto">
            <span className="text-accent text-lg mr-2" aria-hidden="true">✧</span>
            Modtag inspiration, små øvelser og nyt om kommende tilbud direkte i din indbakke. Ingen spam – kun nærvær og hverdagsnær spiritualitet.
          </p>

          {submitted ? (
            <div className="bg-card border border-border rounded-lg p-6 font-body text-foreground">
              Tak! Din e-mail-klient er åbnet – send blot mailen, så er du tilmeldt. 🌿
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <label className="sr-only" htmlFor="newsletter-email">E-mail</label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Din e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                maxLength={255}
                className="flex-1 bg-card border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
              />
              <button
                type="submit"
                className="font-body text-sm font-medium bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-navy-light transition-colors duration-300 tracking-wide uppercase whitespace-nowrap"
              >
                Tilmeld
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
