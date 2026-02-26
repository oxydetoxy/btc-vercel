import Link from "next/link";

const gifts = [
  { title: "Read", href: "/gifts/read", description: "Books and written resources." },
  { title: "Listen", href: "/gifts/listen", description: "Podcasts and audio." },
  { title: "See", href: "/gifts/see", description: "Videos and visual content." },
  { title: "Experience", href: "/gifts/experience", description: "Live sessions and events." },
];

export const metadata = {
  title: "Gifts | Be The Change",
  description: "Read, listen, see, and experience—free resources and offerings.",
};

export default function GiftsPage() {
  return (
    <div className="pt-32 section-padding">
      <div className="container-wide">
        <span className="font-accent text-xs uppercase tracking-[0.3em] text-stone">
          Free Resources
        </span>
        <h1 className="font-display text-display-lg font-semibold text-ink mt-4">
          Gifts
        </h1>
        <p className="font-body text-stone mt-3 max-w-2xl">
          Explore our free resources: read, listen, see, and experience.
        </p>
        <div id="money-kit" className="mt-16 p-8 md:p-10 bg-bone/40 border border-bone">
          <h2 className="font-display text-xl font-semibold text-ink">
            Get Your Money Tool Kit
          </h2>
          <p className="font-body text-stone mt-2">
            Break free from financial barriers. Our free Money Tool Kit is the first step towards prosperity.
          </p>
          <button
            type="button"
            className="mt-6 btn-primary"
            onClick={() => alert("Connect this to your signup form or landing page.")}
          >
            Get My Free Kit
          </button>
        </div>
        <div className="mt-16 grid sm:grid-cols-2 gap-6">
          {gifts.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="block p-6 border border-bone hover:bg-bone/20 transition-colors"
            >
              <h3 className="font-display text-xl font-semibold text-ink">{g.title}</h3>
              <p className="font-body text-stone text-sm mt-2">{g.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
