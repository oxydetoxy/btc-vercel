import Link from "next/link";

export const metadata = {
  title: "Listen | Gifts — Be The Change",
  description: "Podcasts and audio.",
};

export default function GiftsListenPage() {
  return (
    <div className="pt-32 section-padding">
      <div className="container-narrow">
        <Link href="/gifts" className="font-accent text-xs uppercase tracking-wider text-black/60 hover:text-black">← Gifts</Link>
        <h1 className="font-display text-display-lg font-semibold text-black mt-6">Listen</h1>
        <p className="font-body text-black/60 mt-4">Podcasts and audio. Conscious Conversations on Spotify and more.</p>
        <a href="https://open.spotify.com/show/1ITT3fvGx1zqXyPRnUmuU5" target="_blank" rel="noopener noreferrer" className="inline-block mt-8 btn-primary">Listen on Spotify</a>
      </div>
    </div>
  );
}
