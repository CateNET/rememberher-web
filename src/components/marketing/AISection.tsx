import { Section } from "@/components/ui/Section";
import { FeatureCard } from "@/components/ui/FeatureCard";

const aiHighlights = [
  {
    icon: "💬",
    title: "LoveAI Chat Assistant",
    description:
      "Ask questions about your partner, get relationship advice, analyze images, and craft perfect messages—all through an intuitive chat interface.",
  },
  {
    icon: "📸",
    title: "Image Analysis & Recognition",
    description:
      "Upload photos and screenshots to get instant insights. AI recognizes outfits, locations, moods, and helps you respond thoughtfully.",
  },
  {
    icon: "✨",
    title: "Responsible AI",
    description:
      "All AI features use only the information you choose to store. Nothing is sold, shared, or used for training. Your relationship stays private.",
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
      "Data is encrypted in transit and at rest. You control what's saved, and you can export or delete it anytime.",
  },
  {
    icon: "🛡️",
    title: "Privacy First",
    description:
      "Your relationship data never leaves your control. We use industry-standard encryption and never share your information with third parties.",
  },
];

export function AISection() {
  return (
    <Section
      eyebrow="AI & Security"
      title="Your intelligent relationship assistant"
      description="LoveAI Assistant helps you understand, respond, and connect better through chat, image analysis, and personalized guidance—all while keeping your relationship data private and secure."
      align="center"
      className="bg-gradient-to-b from-[#0a0f1f] to-[#050814]"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {aiHighlights.map((highlight) => (
          <FeatureCard key={highlight.title} {...highlight} />
        ))}
      </div>
    </Section>
  );
}
