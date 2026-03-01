const pillars = [
  {
    title: "Joy",
    text: "Cultivate inner peace and celebrate life's moments.",
  },
  {
    title: "Awareness",
    text: "Awaken to your true self and limitless potential.",
  },
  {
    title: "Transformation",
    text: "Step into the life you were meant to live.",
  },
];

export function MissionBlock() {
  return (
    <section id="mission" className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center mb-14">
          <p className="font-accent text-[10px] uppercase tracking-[0.4em] text-golden mb-4">
            Our Mission
          </p>
          <h2 className="font-display text-display-md font-semibold text-black">
            Empowering you to cultivate a life of boundless possibilities
          </h2>
          <div className="mt-4 h-px w-16 bg-golden mx-auto" aria-hidden />
        </div>
        <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="text-center p-8 border border-black/10 rounded-sm bg-[#fafaf9]/50 hover:border-golden/40 transition-colors duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-golden text-golden font-display text-xl font-semibold mb-5">
                {p.title.charAt(0)}
              </div>
              <h3 className="font-display text-xl font-semibold text-black mb-3">
                {p.title}
              </h3>
              <p className="font-body text-black/70 text-sm leading-relaxed">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
