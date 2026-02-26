import Link from "next/link";

export function CtaStrip() {
  return (
    <section className="section-padding bg-cream border-t border-bone">
      <div className="container-narrow text-center">
        <h2 className="font-display text-display-md font-semibold text-ink">
          Ready to step into your true potential?
        </h2>
        <p className="font-body text-stone mt-4 max-w-md mx-auto">
          Join Conscious Mornings, book a session, or start with one-on-one coaching.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
          <Link href="/events" className="btn-outline">
            Upcoming Events
          </Link>
        </div>
      </div>
    </section>
  );
}
