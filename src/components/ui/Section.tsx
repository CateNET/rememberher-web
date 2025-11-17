import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  align?: "left" | "center";
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  align = "left",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative mx-auto w-full max-w-7xl px-6 py-16 sm:py-20",
        className,
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-3xl",
          align === "center" && "text-center",
          align === "left" && "text-left",
        )}
      >
        {eyebrow ? (
          <Badge variant="glow" className="mb-4 text-xs">
            {eyebrow}
          </Badge>
        ) : null}
        <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 text-base leading-relaxed text-white/70">
            {description}
          </p>
        ) : null}
      </div>
      <div className="mt-12">{children}</div>
    </section>
  );
}

