import Link from "next/link";

export const metadata = {
  title: "See | Gifts — Be The Change",
  description: "Videos and visual content.",
};

export default function GiftsSeePage() {
  return (
    <div className="pt-32 section-padding">
      <div className="container-narrow">
        <Link href="/gifts" className="font-accent text-xs uppercase tracking-wider text-black/60 hover:text-black">← Gifts</Link>
        <h1 className="font-display text-display-lg font-semibold text-black mt-6">See</h1>
        <p className="font-body text-black/60 mt-4">Videos on YouTube. Empowerment and Access Consciousness insights.</p>
        <a href="https://www.youtube.com/@bethechangebyaradhana7436" target="_blank" rel="noopener noreferrer" className="inline-block mt-8 btn-primary">Subscribe on YouTube</a>
      </div>
    </div>
  );
}
