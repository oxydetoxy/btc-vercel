import Link from "next/link";

export const metadata = {
  title: "One-on-One Coaching | Be The Change",
  description: "Step into the life you truly desire with personalized coaching.",
};

export default function CoachingPage() {
  return (
    <div className="pt-32 section-padding">
      <div className="container-narrow">
        <span className="font-accent text-xs uppercase tracking-[0.3em] text-black/60">
          Coaching
        </span>
        <h1 className="font-display text-display-lg font-semibold text-black mt-4">
          One-on-One Coaching
        </h1>
        <p className="font-display text-display-md text-black/90 mt-6">
          Step into the life you truly desire.
        </p>
        <div className="mt-10 space-y-6 font-body text-black/90 leading-relaxed">
          <p>
            Are you ready to break free from limitations and create the life you&apos;ve always dreamed of? One-on-one coaching is designed to guide you through profound personal growth and mastery in all areas of life—business, relationships, and self-development.
          </p>
          <p>
            With over 15 years of experience, Aradhana provides the tools, support, and intuitive insights to help you heal and step into your true potential with ease and joy.
          </p>
        </div>
        <Link href="/contact" className="inline-block mt-10 btn-primary">
          Take a leap today
        </Link>
      </div>
    </div>
  );
}
