import Link from "next/link";

export const metadata = {
  title: "Experience | Gifts — Be The Change",
  description: "Live sessions and events.",
};

export default function GiftsExperiencePage() {
  return (
    <div className="pt-32 section-padding">
      <div className="container-narrow">
        <Link href="/gifts" className="font-accent text-xs uppercase tracking-wider text-black/60 hover:text-black">← Gifts</Link>
        <h1 className="font-display text-display-lg font-semibold text-black mt-6">Experience</h1>
        <p className="font-body text-black/60 mt-4">Live sessions and events. Join Conscious Mornings or book a session.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/conscious-mornings" className="btn-primary">Conscious Mornings</Link>
          <Link href="/contact" className="btn-outline">Contact</Link>
        </div>
      </div>
    </div>
  );
}
