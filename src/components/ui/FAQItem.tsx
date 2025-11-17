"use client";

import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";

type FAQItemProps = {
  question: string;
  answer: ReactNode;
  className?: string;
};

export function FAQItem({ question, answer, className }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn("group relative", className)}>
      {/* Glow effect on hover/open */}
      <div
        className={cn(
          "absolute -inset-1 rounded-2xl bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-pink-500/20 blur-xl transition-opacity duration-300",
          isOpen ? "opacity-50" : "opacity-0 group-hover:opacity-50",
        )}
      />
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm shadow-lg transition-all duration-300",
          isOpen
            ? "border-pink-500/40 bg-gradient-to-br from-pink-500/10 to-purple-500/10 shadow-xl shadow-pink-500/20"
            : "hover:border-pink-500/30 hover:bg-gradient-to-br hover:from-pink-500/5 hover:to-purple-500/5 hover:shadow-xl",
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-purple-500/5 transition-opacity duration-300",
            isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-50",
          )}
        />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-full cursor-pointer px-7 py-6 text-left transition-colors"
        >
          <div className="flex items-center justify-between gap-6">
            <span className="text-lg font-bold leading-snug text-white sm:text-xl">
              {question}
            </span>
            <div
              className={cn(
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/5 text-xl text-pink-200 shadow-md transition-all duration-300",
                isOpen
                  ? "rotate-180 bg-gradient-to-br from-pink-500/30 to-purple-500/30 shadow-pink-500/30"
                  : "group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-pink-500/20 group-hover:to-purple-500/20 group-hover:shadow-pink-500/20",
              )}
            >
              ⌄
            </div>
          </div>
        </button>
        {isOpen && (
          <div className="relative border-t border-white/10 px-7 pb-6 pt-2">
            <p className="text-base leading-relaxed text-white/80">{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
}

