import Link from "next/link";

export const metadata = {
  title: "Read | Gifts — Be The Change",
  description: "Books and written resources.",
};

export default function GiftsReadPage() {
  return (
    <div className="pt-32 section-padding">
      <div className="container-narrow">
        <Link href="/gifts" className="font-accent text-xs uppercase tracking-wider text-stone hover:text-ink">← Gifts</Link>
        <h1 className="font-display text-display-lg font-semibold text-ink mt-6">Read</h1>
        <p className="font-body text-stone mt-4">Books and written resources. Explore the Be The Change book and more.</p>
        <Link href="https://www.amazon.in/BE-CHANGE-ARADHANA-TEWARI-ebook/dp/B08PG49DPT" target="_blank" rel="noopener noreferrer" className="inline-block mt-8 btn-primary">Order the book</Link>
      </div>
    </div>
  );
}
