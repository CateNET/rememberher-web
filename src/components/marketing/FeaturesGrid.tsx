"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";

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
        { label: "Dream destination", value: "Santorini, Greece" },
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
        { label: "Birthday surprise", value: "Mar 22 · Celebration" },
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
      "🔍 More like this: find similar alternatives",
      "💰 Price range tracking and budget monitoring",
      "📚 Gift history with occasions and reactions",
    ],
    preview: {
      title: "Gift shortlist",
      items: [
        { label: "Emerald studs", value: "$220 · Loved last year" },
        { label: "Try Tunacado spot", value: "$80 · Date night" },
        { label: "Aire Spa day", value: "$320 · Anniversary" },
        { label: "Custom perfume", value: "$180 · Special occasion" },
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
      "🗓️ AI generated date ideas by category",
      "📍 Location-based suggestions near you",
      "💰 Price range display for each idea",
      "🗺️ Maps integration with Google Maps",
    ],
    preview: {
      title: "This weekend",
      items: [
        { label: "Sunset rooftop picnic", value: "$60 · Outdoor · ★4.8" },
        { label: "Private pottery class", value: "$140 · Creative · ★4.6" },
        { label: "Hidden jazz lounge", value: "$90 · Nightlife · ★4.9" },
        { label: "Wine tasting tour", value: "$120 · Experience · ★4.7" },
      ],
    },
  },
  {
    id: "loveai-assistant",
    label: "LoveAI Assistant",
    headline: "Your assistant, always ready",
    description:
      "Chat with AI about your partner, analyze images, get advice, and craft messages. All powered by understanding of your relationship context.",
    bullets: [
      "💬 AI chat interface for personalized advice",
      "📸 Image analysis with smart recognition",
      "💝 Compliment crafting assistance",
      "🎁 Gift suggestions from images",
    ],
    preview: {
      title: "LoveAI Chat",
      subtitle: "Ask anything about your partner",
      items: [
        { label: "You", value: "What should I get her for Valentine's?" },
        { label: "LoveAI", value: "Based on her preferences, consider..." },
        { label: "You", value: "[Uploaded image]" },
        { label: "LoveAI", value: "This looks like a perfect date spot! Here's why..." },
      ],
    },
  },
];

export function FeaturesGrid() {
  return (
    <Section
      id="features"
      eyebrow="Features"
      title="Built for the memories you never want to miss again"
      description="Each workspace inside RememberHer combines practical logistics with AI guidance so you can act on what matters, not stress about what you forgot."
      align="center"
      className="bg-gradient-to-b from-[#050814] via-[#0a0f1f] to-[#050814]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(229,168,85,0.06),_transparent_70%)]" />
      
      <div className="relative mx-auto mt-10 sm:mt-12 lg:mt-16 flex max-w-7xl flex-col gap-12 sm:gap-16 lg:gap-20 xl:gap-24">
        {featureSections.map((section, index) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="grid min-h-0 items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12"
          >
            <div
              className={`flex flex-col justify-center space-y-4 sm:space-y-5 ${index % 2 === 1 ? "lg:order-2" : ""}`}
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#E5A855] sm:text-sm">
                  {section.label}
                </p>
                <h3 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl" style={{ letterSpacing: "-0.01em" }}>
                  {section.headline}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-white/70 sm:text-lg">{section.description}</p>
              </div>
              <ul className="grid grid-cols-1 gap-2.5 sm:gap-3">
                {section.bullets.map((bullet, bulletIndex) => (
                  <motion.li
                    key={bullet}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: bulletIndex * 0.05 }}
                    whileHover={{ x: 4 }}
                    className="group relative flex items-center gap-3 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#151928]/50 to-[#0c0f18]/50 px-4 py-3 text-sm backdrop-blur-sm shadow-md transition-all duration-300 hover:border-[#E5A855]/30 hover:bg-gradient-to-br hover:from-[#E5A855]/10 hover:to-[#E5A855]/5 hover:shadow-lg hover:shadow-[#E5A855]/10 sm:px-5 sm:py-4"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#E5A855]/5 via-transparent to-[#E5A855]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="relative text-white/90">{bullet}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${index % 2 === 1 ? "lg:order-1" : ""} flex items-center`}
            >
              <div className="relative w-full">
                {/* Glow effect */}
                <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-[#E5A855]/10 via-[#E5A855]/15 to-[#E5A855]/10 blur-xl opacity-50 sm:rounded-[36px]" />
                <div className="relative flex flex-col rounded-[32px] border border-white/10 bg-gradient-to-br from-[#151928] via-[#0c0f18] to-[#050814] p-5 shadow-2xl backdrop-blur-sm sm:rounded-[36px] sm:p-6 lg:p-8">
                  <div>
                    <p className="text-sm font-semibold text-[#E5A855]/80">{section.preview.title}</p>
                    {section.preview.subtitle && (
                      <p className="mt-1 text-xs text-white/50">{section.preview.subtitle}</p>
                    )}
                  </div>
                  <div className="mt-4 grid grid-cols-1 gap-2.5 sm:gap-3 lg:mt-5">
                    {section.preview.items.map((item, itemIndex) => (
                      <motion.div
                        key={`${section.id}-preview-${itemIndex}`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:border-[#E5A855]/30 hover:bg-white/10 hover:shadow-md sm:px-5 sm:py-4"
                      >
                        <p className="text-xs font-medium text-white/60">{item.label}</p>
                        <p className="mt-1 text-sm font-semibold text-white sm:text-base">{item.value}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
