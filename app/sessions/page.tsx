import { sessions } from "@/lib/content";

export const metadata = {
  title: "Sessions | Be The Change",
  description: "Access Bars, Body Whispering, Entity Clearing, Family Constellation, and more.",
};

export default function SessionsPage() {
  return (
    <div className="pt-32 section-padding">
      <div className="container-wide">
        <span className="font-accent text-xs uppercase tracking-[0.3em] text-black/60">
          One-on-One & Group
        </span>
        <h1 className="font-display text-display-lg font-semibold text-black mt-4">
          Sessions
        </h1>
        <p className="font-body text-black/60 mt-3 max-w-2xl">
          Book individual sessions for body, business, entity clearing, family constellation, and more.
        </p>
        <ul className="mt-12 grid sm:grid-cols-2 gap-px bg-white/10">
          {sessions.map((name) => (
            <li
              key={name}
              className="bg-white px-6 py-5 font-body text-black hover:bg-white/20 transition-colors"
            >
              {name}
            </li>
          ))}
        </ul>
        <p className="mt-12 font-body text-black/60">
          <a href="/contact" className="text-black underline hover:no-underline">
            Contact us
          </a>{" "}
          to book a session.
        </p>
      </div>
    </div>
  );
}
