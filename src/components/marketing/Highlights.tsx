import { FeatureCard } from "@/components/ui/FeatureCard";
import { Section } from "@/components/ui/Section";

const highlights = [
  {
    icon: "💬",
    title: "LoveAI Assistant",
    description:
      "Chat with AI about your partner, analyze images, get relationship advice, and craft perfect messages—all in one beautiful interface.",
  },
  {
    icon: "🤖",
    title: "AI Powered",
    description:
      "Intelligent summaries, gift suggestions, reminder recommendations, and date ideas that learn from your partner's preferences.",
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
      "Timely nudges through OneSignal so you can act before it's too late—not after.",
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
      className="bg-gradient-to-b from-[#050814] to-[#0a0f1f]"
    >
      <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:gap-6 xl:grid-cols-3">
        {highlights.map((highlight) => (
          <FeatureCard key={highlight.title} {...highlight} />
        ))}
      </div>
    </Section>
  );
}
