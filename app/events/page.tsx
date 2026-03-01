export const metadata = {
  title: "Upcoming Events | Be The Change",
  description: "Workshops, classes, and live events.",
};

export default function EventsPage() {
  return (
    <div className="pt-32 section-padding">
      <div className="container-narrow">
        <span className="font-accent text-xs uppercase tracking-[0.3em] text-black/60">
          Live
        </span>
        <h1 className="font-display text-display-lg font-semibold text-black mt-4">
          Upcoming Events
        </h1>
        <p className="font-body text-black/60 mt-3">
          Workshops, classes, and live events. Check back soon or contact us for dates.
        </p>
        <div className="mt-12 p-8 bg-white/10 border border-white/20">
          <p className="font-body text-black/60">
            No upcoming events listed. Follow us on{" "}
            <a
              href="https://www.instagram.com/bethechangebyaradhana/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black underline hover:no-underline"
            >
              Instagram
            </a>{" "}
            for live &quot;Play of the Day&quot; at 11:11 AM IST, Monday–Friday.
          </p>
        </div>
      </div>
    </div>
  );
}
