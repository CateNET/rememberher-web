"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";

const testimonials = [
  {
    name: "James M.",
    source: "App Store",
    content: "RememberHer has transformed how I approach our relationship. Never missing an anniversary again.",
    initials: "JM",
  },
  {
    name: "Michael R.",
    source: "Google Play",
    content: "The AI insights help me surprise her with exactly what she wants. Game changer for busy professionals.",
    initials: "MR",
  },
  {
    name: "David K.",
    source: "App Store",
    content: "Finally, a tool that understands what thoughtful partners need. Beautiful design meets practical functionality.",
    initials: "DK",
  },
];

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow="Testimonials"
      title="Trusted by thoughtful gentlemen"
      description="See what early users are saying about RememberHer"
      align="center"
      className="bg-gradient-to-b from-[#050814] to-[#0a0f1f]"
    >
      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="group relative"
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#E5A855]/10 via-[#E5A855]/15 to-[#E5A855]/10 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
            
            {/* Dark glossy card */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#151928]/80 to-[#0c0f18]/80 p-5 sm:p-6 lg:p-8 backdrop-blur-sm shadow-2xl transition-all duration-300 hover:border-[#E5A855]/30 hover:shadow-[#E5A855]/20">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E5A855]/5 via-transparent to-[#E5A855]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                {/* Profile image with glow */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#E5A855]/30 to-[#E5A855]/10 blur-xl" />
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#151928] to-[#0c0f18] border-2 border-[#E5A855]/30 text-xl font-bold text-[#E5A855] shadow-lg">
                    {testimonial.initials}
                  </div>
                </div>
                
                <p className="mb-6 text-base leading-relaxed text-white/80 italic">
                  "{testimonial.content}"
                </p>
                
                <div>
                  <p className="text-sm font-bold text-white">{testimonial.name}</p>
                  <p className="mt-1 text-xs text-white/60">{testimonial.source}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

