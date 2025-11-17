const steps = [
  {
    title: "Add your partner",
    description:
      "Start with the essentials—photos, favorites, and the small details that make them light up.",
  },
  {
    title: "Save key dates and preferences",
    description:
      "Log anniversaries, trips, and traditions. AI organizes everything into clear categories.",
  },
  {
    title: "Receive reminders and ideas",
    description:
      "Smart notifications, gift inspiration, and date ideas arrive when you actually need them.",
  },
  {
    title: "Relax and be present",
    description:
      "You’ll show up on time, with the right gift, and plenty of time to plan the next surprise.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative px-6 py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(169,131,255,0.1),_transparent_70%)]" />
      
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-pink-200/80">
          How it works
        </p>
        <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
          From "Oh no, I forgot" to "I already planned it"
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-white/70">
          RememberHer guides you with a clear timeline so you can move from
          collecting details to creating gestures that matter.
        </p>
      </div>
      <div className="relative mx-auto mt-16 max-w-5xl">
        <ol className="relative space-y-6">
          {steps.map((step, index) => (
            <li key={step.title} className="relative flex gap-6">
              {/* Timeline line */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-16 h-full w-0.5 bg-gradient-to-b from-pink-500/30 to-purple-500/30" />
              )}
              
              {/* Step number */}
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-pink-500 text-base font-bold text-white shadow-lg shadow-pink-500/30">
                {index + 1}
              </div>
              
              {/* Step content */}
              <div className="flex-1 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-sm transition hover:border-pink-500/30 hover:bg-gradient-to-br hover:from-pink-500/10 hover:to-purple-500/10">
                <h3 className="text-2xl font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-white/70">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

