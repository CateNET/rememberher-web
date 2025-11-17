import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type FAQItemProps = {
  question: string;
  answer: ReactNode;
  className?: string;
};

export function FAQItem({ question, answer, className }: FAQItemProps) {
  return (
    <details
      className={cn(
        "group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 px-6 py-5 text-left backdrop-blur-sm transition-all duration-300 hover:border-pink-500/30 hover:bg-white/10 hover:shadow-lg",
        className,
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-purple-500/5 opacity-0 transition-opacity duration-300 group-open:opacity-100" />
      <summary className="relative cursor-pointer list-none text-lg font-semibold text-white">
        <div className="flex items-center justify-between gap-4">
          <span>{question}</span>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-lg text-pink-200 transition-all duration-300 group-open:rotate-180 group-hover:bg-pink-500/20">
            ⌄
          </span>
        </div>
      </summary>
      <p className="relative mt-4 text-base leading-relaxed text-white/70">{answer}</p>
    </details>
  );
}

