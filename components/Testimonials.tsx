import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="relative section-padding bg-ink text-cream overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-transparent to-ink/30 pointer-events-none" aria-hidden />
      <div className="container-wide relative">
        <span className="font-accent text-xs uppercase tracking-[0.3em] text-cream/60">
          Testimonials
        </span>
        <h2 className="font-display text-display-lg font-semibold text-cream mt-4 mb-16">
          What People Say
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <blockquote
              key={t.author}
              className="relative border-l-2 border-cream/30 pl-6 py-2 bg-cream/5 rounded-r-lg py-6 pr-6 -ml-2"
            >
              <p className="font-body text-cream/90 text-sm leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-4">
                <cite className="font-accent text-xs uppercase tracking-wider not-italic text-cream/80">
                  {t.author}
                </cite>
                <span className="font-body text-xs text-cream/50 block mt-0.5">
                  {t.session}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
