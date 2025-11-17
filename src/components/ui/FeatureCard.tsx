import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
};

export function FeatureCard({
  icon,
  title,
  description,
  children,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 px-5 py-6 backdrop-blur-sm transition-all duration-300 hover:border-pink-500/30 hover:bg-white/10 hover:shadow-lg hover:shadow-pink-500/10",
        className,
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative">
        <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-pink-500/20 group-hover:to-purple-500/20">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/70">{description}</p>
        {children ? <div className="mt-4 space-y-2 text-sm">{children}</div> : null}
      </div>
    </div>
  );
}

