import { about, site } from "@/lib/content";

export const metadata = {
  title: "About | Be The Change",
  description: about.bio.slice(0, 160),
};

export default function AboutPage() {
  return (
    <div className="pt-32 section-padding">
      <div className="container-narrow">
        <span className="font-accent text-xs uppercase tracking-[0.3em] text-stone">
          About Us
        </span>
        <h1 className="font-display text-display-lg font-semibold text-ink mt-4">
          {about.name}
        </h1>
        <p className="font-body text-stone mt-2">{about.title}</p>
        <div className="mt-12 space-y-6 font-body text-charcoal/90 leading-relaxed">
          <p>{about.bio}</p>
          <p>
            {site.tagline}
          </p>
        </div>
      </div>
    </div>
  );
}
