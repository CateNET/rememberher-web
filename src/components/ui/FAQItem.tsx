"use client";

import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

type FAQItemProps = {
  question: string;
  answer: ReactNode;
  className?: string;
};

export function FAQItem({ question, answer, className }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("group relative", className)}
    >
      {/* Glow effect on hover/open */}
      <div
        className={cn(
          "absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#E5A855]/20 via-[#E5A855]/15 to-[#E5A855]/20 blur-xl transition-opacity duration-300",
          isOpen ? "opacity-50" : "opacity-0 group-hover:opacity-30",
        )}
      />
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#151928]/50 to-[#0c0f18]/50 backdrop-blur-sm shadow-lg transition-all duration-300",
          isOpen
            ? "border-[#E5A855]/40 bg-gradient-to-br from-[#E5A855]/10 to-[#E5A855]/5 shadow-xl shadow-[#E5A855]/20"
            : "hover:border-[#E5A855]/30 hover:bg-gradient-to-br hover:from-[#E5A855]/5 hover:to-transparent hover:shadow-xl",
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br from-[#E5A855]/5 via-transparent to-[#E5A855]/5 transition-opacity duration-300",
            isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-50",
          )}
        />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-full cursor-pointer px-5 py-5 text-left transition-colors sm:px-7 sm:py-6"
        >
          <div className="flex items-center justify-between gap-6">
            <span className="text-lg font-bold leading-snug text-white sm:text-xl">
              {question}
            </span>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className={cn(
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#151928] to-[#0c0f18] text-xl text-[#E5A855] shadow-md transition-all duration-300 border border-white/10",
                isOpen
                  ? "border-[#E5A855]/40 shadow-[#E5A855]/30"
                  : "group-hover:scale-110 group-hover:border-[#E5A855]/30 group-hover:shadow-[#E5A855]/20",
              )}
            >
              ⌄
            </motion.div>
          </div>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="border-t border-white/10 px-5 pb-5 pt-2 sm:px-7 sm:pb-6">
                <p className="text-base leading-relaxed text-white/80">{answer}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
