import Link from "next/link";

export function CtaStrip() {
  return (
    <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 md:py-16 bg-[#fafaf9] text-black">
      <div className="container-narrow text-center">
        <p className="font-accent text-[10px] uppercase tracking-[0.4em] text-golden mb-3">
          Begin Your Journey
        </p>
        <h2 className="font-display text-display-md font-semibold text-black">
          Ready to step into your true potential?
        </h2>
        <div className="mt-3 h-px w-16 bg-golden mx-auto" aria-hidden />
        <p className="font-body text-black/70 mt-4 max-w-md mx-auto">
          Join Conscious Mornings, book a session, or start with one-on-one coaching.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-golden text-white font-accent uppercase tracking-[0.2em] text-sm px-10 py-4 hover:bg-golden/90 transition-colors"
          >
            Contact Us
          </Link>
          <Link
            href="/events"
            className="inline-flex items-center gap-2 border border-black/40 text-black font-accent uppercase tracking-[0.2em] text-sm px-10 py-4 hover:bg-black hover:text-white transition-all duration-300"
          >
            Upcoming Events
          </Link>
        </div>
      </div>
    </section>
  );
}
