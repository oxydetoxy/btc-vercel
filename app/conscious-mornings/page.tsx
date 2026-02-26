import Link from "next/link";

export const metadata = {
  title: "Conscious Mornings | Be The Change",
  description: "A 30-minute daily practice for alignment and abundance.",
};

export default function ConsciousMorningsPage() {
  return (
    <div className="pt-32 section-padding">
      <div className="container-narrow">
        <span className="font-accent text-xs uppercase tracking-[0.3em] text-stone">
          Daily Practice
        </span>
        <h1 className="font-display text-display-lg font-semibold text-ink mt-4">
          Conscious Mornings
        </h1>
        <p className="font-display text-display-md text-charcoal/90 mt-6">
          Create a powerful morning ritual for your well-being.
        </p>
        <div className="mt-10 space-y-6 font-body text-charcoal/90 leading-relaxed">
          <p>
            A 30-minute daily practice combining mantras, clearings, affirmations, energy exercises, and silent satsangs to help you cultivate alignment with your inner self and invite abundance into your life.
          </p>
          <p>
            Let&apos;s empower each other to navigate through daily challenges and create a life of ease. Begin your day with purpose.
          </p>
        </div>
        <Link href="/contact" className="inline-block mt-10 btn-primary">
          Join Conscious Mornings
        </Link>
      </div>
    </div>
  );
}
