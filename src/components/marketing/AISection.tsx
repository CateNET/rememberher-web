import { Section } from "@/components/ui/Section";
import { FeatureCard } from "@/components/ui/FeatureCard";

const aiHighlights = [
  {
    icon: "✨",
    title: "Responsible AI",
    description:
      "Summaries, reminders, and gift inspiration are generated from the details you choose to store. Nothing is sold or shared.",
  },
  {
    icon: "🔐",
    title: "Authentication & Security",
    description:
      "Supabase Auth with email/password plus Google and Apple Sign In. Sensitive data is secured with Expo SecureStore.",
  },
  {
    icon: "🔒",
    title: "Encrypted & Respectful",
    description:
      "Data is encrypted in transit and at rest. You control what’s saved, and you can export or delete it anytime.",
  },
];

export function AISection() {
  return (
    <Section
      eyebrow="AI & Security"
      title="Thoughtful AI that protects what matters most"
      description="RememberHer uses AI to help you act with confidence, not to mine your relationship. Every feature is designed with privacy, transparency, and consent in mind."
      align="center"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {aiHighlights.map((highlight) => (
          <FeatureCard key={highlight.title} {...highlight} />
        ))}
      </div>
      <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 text-base leading-relaxed text-white/70 backdrop-blur-sm">
        <p>
          🔄 Forgot password or switching devices? Deep linked password reset
          flows bring you back into the app securely, while OAuth keeps logins
          effortless. RememberHer will never spam your partner—we only notify
          you, the person doing the loving.
        </p>
      </div>
    </Section>
  );
}

