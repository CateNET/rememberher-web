"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";

const screenshots = [
  { id: 1, alt: "App screenshot 1" },
  { id: 2, alt: "App screenshot 2" },
  { id: 3, alt: "App screenshot 3" },
  { id: 4, alt: "App screenshot 4" },
];

export function Screenshots() {
  return (
    <Section
      id="screenshots"
      eyebrow="App Preview"
      title="See RememberHer in action"
      description="Beautiful, intuitive design built for the modern gentleman who values both style and substance."
      align="center"
      className="bg-gradient-to-b from-[#0a0f1f] to-[#050814]"
    >
      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
        {screenshots.map((screenshot, index) => (
          <motion.div
            key={screenshot.id}
            initial={{ opacity: 0, y: 30, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8, rotate: 2 }}
            className="relative group"
          >
            {/* Soft glow behind phone */}
            <div className="absolute -inset-2 rounded-[48px] bg-gradient-to-r from-[#E5A855]/10 via-[#E5A855]/15 to-[#E5A855]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Black titanium style phone frame */}
            <div className="relative rounded-[40px] border-2 border-white/10 bg-gradient-to-b from-[#0a0f1f] to-[#050814] p-3 shadow-2xl backdrop-blur-sm">
              <div className="aspect-[9/19.5] rounded-[32px] bg-gradient-to-br from-[#151928] to-[#0c0f18] flex items-center justify-center overflow-hidden border border-white/5">
                {/* Placeholder for screenshot */}
                <div className="text-white/10 text-6xl">📱</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

