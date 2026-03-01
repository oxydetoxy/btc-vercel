import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <p className="font-accent text-[10px] uppercase tracking-[0.4em] text-golden mb-4">
          Testimonials
        </p>
        <h2 className="font-display text-display-lg font-semibold text-black">
          What People Say
        </h2>
        <div className="mt-4 h-px w-16 bg-golden" aria-hidden />
        <div className="mt-16 grid sm:grid-cols-2 gap-10 lg:gap-14">
          {testimonials.map((t) => (
            <blockquote
              key={t.author}
              className="group relative pl-8 border-l-2 border-golden/50 hover:border-golden transition-colors duration-300 py-2"
            >
              <p className="font-body text-black/80 text-base leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-6">
                <cite className="font-accent text-xs uppercase tracking-wider not-italic text-black font-medium">
                  {t.author}
                </cite>
                <span className="font-body text-xs text-black/50 block mt-1">
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
