const featureSections = [
  {
    id: "partner-management",
    label: "Partner Management",
    headline: "Sweet details organized",
    description:
      "Capture everything that makes them smile—flowers, ring size, dream trips, and inside jokes. AI summarizes so you can recall details instantly.",
    bullets: [
      "📝 Comprehensive partner information storage",
      "🖼️ Profile photos kept safe with Supabase Storage",
      "🤖 AI generated preference summaries",
      "✏️ Effortless editing across devices",
    ],
    preview: {
      title: "Sarah Mitchell",
      subtitle: "Long distance · 4 years",
      items: [
        { label: "Favorite colors", value: "Black, Pink, Dark Green" },
        { label: "Love languages", value: "Acts of Service · Quality Time" },
        { label: "Go-to brands", value: "Gucci · Prada · Aesop" },
      ],
    },
  },
  {
    id: "smart-reminders",
    label: "Smart Reminders",
    headline: "Reminders that feel like nudges",
    description:
      "Layered reminders keep you ahead of every milestone. Flexible repeats and categories make planning future memories painless.",
    bullets: [
      "📅 Flexible repeat intervals: none to yearly",
      "🏷️ Category organization with color-coded chips",
      "✨ AI suggested reminders based on context",
      "🔔 Push notifications powered by OneSignal",
    ],
    preview: {
      title: "Upcoming moments",
      items: [
        { label: "Anniversary dinner", value: "Feb 13 · Romantic" },
        { label: "Sushi date night", value: "Dec 15 · Food adventure" },
        { label: "Mother's day reminder", value: "May 11 · Family" },
      ],
    },
  },
  {
    id: "gift-center",
    label: "Gift Center",
    headline: "Gift inspiration from preferences",
    description:
      "Turn thoughtful hints into concrete plans with personalized gift ideas, price tracking, and brand history.",
    bullets: [
      "💡 AI gift ideas from partner preferences",
      "🔍 “More like this” to explore alternatives",
      "💰 Price range tracking plus budgets",
      "📚 Gift history with reactions and ratings",
    ],
    preview: {
      title: "Gift shortlist",
      items: [
        { label: "Emerald studs", value: "$220 · Loved last year" },
        { label: "Try Tunacado spot", value: "$80 · Date night" },
        { label: "Aire Spa day", value: "$320 · Anniversary" },
      ],
    },
  },
  {
    id: "date-ideas",
    label: "Date Ideas",
    headline: "Curated experiences by location",
    description:
      "Discover AI generated experiences based on category, location, and mood. Save favorites and launch directions instantly.",
    bullets: [
      "🗓️ AI generated dates curated by category",
      "📍 Location aware suggestions near you",
      "💰 Price range display and filters",
      "⭐ Ratings, reviews, and favorites",
    ],
    preview: {
      title: "This weekend",
      items: [
        { label: "Sunset rooftop picnic", value: "$60 · Outdoor · ★4.8" },
        { label: "Private pottery class", value: "$140 · Creative · ★4.6" },
        { label: "Hidden jazz lounge", value: "$90 · Nightlife · ★4.9" },
      ],
    },
  },
];

export function FeaturesGrid() {
  return (
    <section id="features" className="relative px-6 py-24">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,128,181,0.1),_transparent_70%)]" />
      
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pink-200/80">
          Features
        </p>
        <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
          Built for the memories you never want to miss again
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-white/70">
          Each workspace inside RememberHer combines practical logistics with AI
          guidance so you can act on what matters, not stress about what you
          forgot.
        </p>
      </div>
      <div className="relative mx-auto mt-20 flex max-w-7xl flex-col gap-24">
        {featureSections.map((section, index) => (
          <div
            key={section.id}
            className="grid items-stretch gap-12 lg:grid-cols-2"
          >
            <div
              className={`space-y-6 self-center ${index % 2 === 1 ? "lg:order-2" : ""}`}
            >
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-pink-300">
                  {section.label}
                </p>
                <h3 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                  {section.headline}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-white/70">{section.description}</p>
              </div>
              <ul className="space-y-3">
                {section.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm backdrop-blur-sm transition hover:border-pink-500/30 hover:bg-white/10"
                  >
                    <span className="text-white/90">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`${index % 2 === 1 ? "lg:order-1" : ""} h-full`}>
              <div className="relative h-full">
                {/* Glow effect */}
                <div className="absolute -inset-1 rounded-[36px] bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-pink-500/20 blur-xl opacity-50" />
                <div className="relative flex h-full flex-col justify-between rounded-[36px] border border-white/20 bg-gradient-to-br from-[#1a1b2e] via-[#0f1019] to-[#080910] p-8 shadow-2xl backdrop-blur-sm">
                  <div>
                    <p className="text-sm font-semibold text-pink-200/80">{section.preview.title}</p>
                    {section.preview.subtitle && (
                      <p className="mt-1 text-xs text-white/50">{section.preview.subtitle}</p>
                    )}
                  </div>
                  <div className="mt-6 space-y-3">
                    {section.preview.items.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm transition-all duration-300 hover:border-pink-500/30 hover:bg-white/10 hover:shadow-md"
                      >
                        <p className="text-xs font-medium text-white/60">{item.label}</p>
                        <p className="mt-1 text-base font-semibold text-white">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

