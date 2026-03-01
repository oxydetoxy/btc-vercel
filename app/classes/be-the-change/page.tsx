import Link from "next/link";
import { classes } from "@/lib/content";

export const metadata = {
  title: "Be The Change Classes | Be The Change",
  description: "Who Am I, Be The Rich Wolves, Money Magnet, Conscious Mornings, and more.",
};

export default function BeTheChangeClassesPage() {
  return (
    <div className="pt-32 section-padding">
      <div className="container-wide">
        <span className="font-accent text-xs uppercase tracking-[0.3em] text-black/60">
          Classes
        </span>
        <h1 className="font-display text-display-lg font-semibold text-black mt-4">
          Be The Change
        </h1>
        <p className="font-body text-black/60 mt-3 max-w-2xl">
          Transformative programs for money, identity, mornings, and living fully.
        </p>
        <ul className="mt-12 space-y-4">
          {classes.beTheChange.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/classes/be-the-change/${c.slug}`}
                className="block font-display text-xl text-black hover:text-golden border-b border-white/20 py-4 group"
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
