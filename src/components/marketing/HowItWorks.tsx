"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";

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
      "You'll show up on time, with the right gift, and plenty of time to plan the next surprise.",
  },
];

export function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      eyebrow="How it works"
      title={`From "I forgot" to "I planned it"`}
      description="RememberHer guides you with a clear timeline so you can move from collecting details to creating gestures that matter."
      align="center"
      className="bg-gradient-to-b from-[#050814] via-[#0a0f1f] to-[#050814]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(229,168,85,0.06),_transparent_70%)]" />
      
      <div className="relative mx-auto mt-8 max-w-4xl sm:mt-12 lg:mt-16">
        <ol className="relative space-y-4 sm:space-y-5 lg:space-y-6">
          {steps.map((step, index) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative flex gap-4 sm:gap-6"
            >
              {/* Timeline line */}
              {index < steps.length - 1 && (
                <div className="absolute left-5 top-14 h-full w-0.5 bg-gradient-to-b from-[#E5A855]/30 to-[#E5A855]/10 sm:left-6 sm:top-16" />
              )}
              
              {/* Step number */}
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#E5A855] to-[#C9A961] text-sm font-bold text-white shadow-lg shadow-[#E5A855]/30 border-2 border-[#E5A855]/50 sm:h-12 sm:w-12 sm:text-base">
                {index + 1}
              </div>
              
              {/* Step content */}
              <motion.div
                whileHover={{ x: 4 }}
                className="group relative flex-1 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#151928]/50 to-[#0c0f18]/50 p-5 sm:p-6 lg:p-8 backdrop-blur-sm shadow-lg transition-all duration-300 hover:border-[#E5A855]/30 hover:bg-gradient-to-br hover:from-[#E5A855]/10 hover:to-[#E5A855]/5 hover:shadow-xl hover:shadow-[#E5A855]/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#E5A855]/5 via-transparent to-[#E5A855]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <h3 className="text-xl font-bold text-white sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70 sm:mt-3 sm:text-base">{step.description}</p>
                </div>
              </motion.div>
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
