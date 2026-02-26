import Link from "next/link";
import { classes } from "@/lib/content";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return classes.beTheChange.map((c) => ({ slug: c.slug }));
}

export default async function BeTheChangeClassPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = classes.beTheChange.find((c) => c.slug === slug);
  if (!item) notFound();
  return (
    <div className="pt-32 section-padding">
      <div className="container-narrow">
        <Link href="/classes/be-the-change" className="font-accent text-xs uppercase tracking-wider text-stone hover:text-ink">
          ← Be The Change
        </Link>
        <h1 className="font-display text-display-lg font-semibold text-ink mt-6">
          {item.name}
        </h1>
        <p className="font-body text-stone mt-4">
          Contact us for dates and registration.
        </p>
        <Link href="/contact" className="inline-block mt-8 btn-primary">
          Enquire
        </Link>
      </div>
    </div>
  );
}
