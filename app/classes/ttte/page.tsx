import Link from "next/link";
import { classes } from "@/lib/content";

export const metadata = {
  title: "Talk To The Entities | Be The Change",
  description: "TTTE Beginning, Intermediate, and Specialty classes.",
};

export default function TTTEPage() {
  return (
    <div className="pt-32 section-padding">
      <div className="container-wide">
        <span className="font-accent text-xs uppercase tracking-[0.3em] text-stone">
          Classes
        </span>
        <h1 className="font-display text-display-lg font-semibold text-ink mt-4">
          Talk To The Entities
        </h1>
        <p className="font-body text-stone mt-3 max-w-2xl">
          Learn to communicate with the entities and expand your consciousness.
        </p>
        <ul className="mt-12 space-y-4">
          {classes.ttte.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/classes/ttte/${c.slug}`}
                className="block font-display text-xl text-ink hover:text-charcoal border-b border-bone py-4 group"
              >
                <span className="group-hover:underline">{c.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
