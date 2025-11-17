import { FeatureCard } from "@/components/ui/FeatureCard";
import { Section } from "@/components/ui/Section";

const highlights = [
  {
    icon: "🤖",
    title: "AI Powered",
    description:
      "Summaries, gift suggestions, and date ideas that learn from the details you save about your partner.",
  },
  {
    icon: "📅",
    title: "Smart Reminders",
    description:
      "Birthdays, anniversaries, half-birthdays—whatever matters to the two of you, RememberHer keeps it top of mind.",
  },
  {
    icon: "🎁",
    title: "Gift Concierge",
    description:
      "Discover new ideas tailored to favorite brands, colors, and budgets. Save favorites and track what worked.",
  },
  {
    icon: "📸",
    title: "Photo Vault",
    description:
      "Secure cloud storage powered by Supabase keeps important photos and notes in one organized place.",
  },
  {
    icon: "🔔",
    title: "Push Notifications",
    description:
      "Timely nudges through OneSignal so you can act before it’s too late—not after.",
  },
  {
    icon: "💳",
    title: "Premium Ready",
    description:
      "RevenueCat and Superwall integrations for seamless upgrades when you’re ready for more magic.",
  },
];

export function Highlights() {
  return (
    <Section
      id="highlights"
      eyebrow="Why RememberHer"
      title="Quiet assistant for every thoughtful partner"
      description="We blend AI insights with a beautiful reminder system so you always know what to do next."
      align="center"
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {highlights.map((highlight) => (
          <FeatureCard key={highlight.title} {...highlight} />
        ))}
      </div>
    </Section>
  );
}

