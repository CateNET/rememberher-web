const personas = [
  {
    icon: "💼",
    title: "Busy professionals",
    description:
      "Never miss important moments, even when your calendar is packed. Stay ahead of birthdays, anniversaries, and special dates.",
  },
  {
    icon: "💑",
    title: "Long-term partners",
    description:
      "Turn everyday life into thoughtful rituals. Plan traditions, getaways, and annual surprises that keep the spark alive.",
  },
  {
    icon: "🌍",
    title: "Long-distance couples",
    description:
      "Coordinate across time zones with synced reminders, gift tracking, and shared date ideas that bridge the distance.",
  },
  {
    icon: "💍",
    title: "Newly engaged",
    description:
      "Capture wedding prep, registry details, and early marriage moments all in one organized place.",
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
          <div key={persona.title} className="group relative">
            {/* Glow effect */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-pink-500/20 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-50" />
            <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-[#1a1b2e] via-[#0f1019] to-[#080910] p-7 text-left backdrop-blur-sm shadow-2xl transition-all duration-300 hover:border-pink-500/40 hover:shadow-pink-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/5 text-3xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-pink-500/30 group-hover:to-purple-500/30 group-hover:shadow-pink-500/30">
                  {persona.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white">{persona.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-white/70">{persona.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

