"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";

const personas = [
  {
    icon: "💼",
    title: "Busy professionals",
    description:
      "Never miss important moments, even when your calendar is packed. Stay ahead of birthdays, anniversaries, and special dates.",
  },
  {
    icon: "👫",
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
    <Section
      eyebrow="Who it's for"
      title="A calm co-pilot for anyone serious about love"
      description="If you've ever wished for a personal assistant devoted to your relationship, RememberHer is for you."
      align="center"
      className="bg-gradient-to-b from-[#0a0f1f] to-[#050814]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(229,168,85,0.06),_transparent_70%)]" />
      
      <div className="relative mx-auto mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:gap-6">
        {personas.map((persona, index) => (
          <motion.div
            key={persona.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="group relative"
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#E5A855]/10 via-[#E5A855]/15 to-[#E5A855]/10 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-50" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#151928]/50 via-[#0c0f18]/50 to-[#050814] p-5 sm:p-6 lg:p-7 text-left backdrop-blur-sm shadow-2xl transition-all duration-300 hover:border-[#E5A855]/40 hover:shadow-[#E5A855]/20">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E5A855]/5 via-transparent to-[#E5A855]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative flex items-start gap-4 sm:gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#151928] to-[#0c0f18] text-2xl border border-white/10 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:border-[#E5A855]/30 group-hover:bg-gradient-to-br group-hover:from-[#E5A855]/20 group-hover:to-[#E5A855]/10 group-hover:shadow-[#E5A855]/30 sm:h-14 sm:w-14 sm:text-3xl">
                  {persona.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white sm:text-xl">{persona.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70 sm:mt-3 sm:text-base">{persona.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
