const personas = [
  {
    title: "Busy professionals",
    description:
      "Keep career sprints and relationship milestones in sync so nothing slips because of a packed calendar.",
  },
  {
    title: "Long-term partners",
    description:
      "Transform everyday life into thoughtful rituals with reminders for traditions, getaway planning, and annual surprises.",
  },
  {
    title: "Long-distance couples",
    description:
      "Coordinate across time zones with synced reminders, gift delivery tracking, and shared date ideas.",
  },
  {
    title: "Newly engaged duos",
    description:
      "Capture wedding prep, registry details, and early marriage moments without another spreadsheet.",
  },
];

export function Audience() {
  return (
    <section className="relative px-6 py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(169,131,255,0.08),_transparent_70%)]" />
      
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pink-200/80">
          Who it's for
        </p>
        <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
          A calm co-pilot for anyone serious about love
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-white/70">
          If you've ever wished for a personal assistant devoted to your
          relationship, RememberHer is for you.
        </p>
      </div>
      <div className="relative mx-auto mt-16 grid gap-6 md:grid-cols-2">
        {personas.map((persona) => (
          <div
            key={persona.title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 text-left backdrop-blur-sm transition-all duration-300 hover:border-pink-500/30 hover:bg-gradient-to-br hover:from-pink-500/10 hover:to-purple-500/10 hover:shadow-xl hover:shadow-pink-500/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative">
              <h3 className="text-2xl font-bold text-white">{persona.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-white/70">{persona.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

