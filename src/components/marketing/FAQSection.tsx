import { Section } from "@/components/ui/Section";
import { FAQItem } from "@/components/ui/FAQItem";

const faqs = [
  {
    question: "Is my data private?",
    answer:
      "Absolutely. Your entries stay encrypted with Supabase. We never sell data, and you control what is stored or deleted.",
  },
  {
    question: "Do I need a subscription to use it?",
    answer:
      "Core partner management and reminders are free. Premium tiers unlock deeper AI insights, historical analytics, and upcoming integrations via RevenueCat.",
  },
  {
    question: "Will this spam my partner?",
    answer:
      "Never. Notifications only go to you. Your partner simply enjoys the thoughtful gestures that follow.",
  },
  {
    question: "Does it work worldwide?",
    answer:
      "Yes. Reminders, AI suggestions, and waitlist access function globally. Location-based date ideas adapt to the city you set.",
  },
  {
    question: "How do AI suggestions learn?",
    answer:
      "They use the preferences you save—favorite colors, cuisines, hobbies—and combine them with seasonal inspiration. You can edit or reset insights anytime.",
  },
  {
    question: "What happens if I switch phones?",
    answer:
      "Sign in with Supabase Auth, Google, or Apple and everything syncs instantly. SecureStore keeps sensitive tokens protected.",
  },
  {
    question: "Can I track multiple partners?",
    answer:
      "RememberHer focuses on one relationship per workspace to keep boundaries healthy. You can create separate spaces if needed.",
  },
  {
    question: "How soon will the mobile apps launch?",
    answer:
      "We’re finalizing the App Store and Google Play builds now. Join the waitlist to be first in line when downloads go live.",
  },
];

export function FAQSection() {
  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title="Questions we hear from thoughtful partners"
      description="If you’re planning ahead for anniversaries, engagements, or just everyday delight, we’ve got you."
      align="center"
    >
      <div className="mx-auto grid max-w-4xl gap-4">
        {faqs.map((faq) => (
          <FAQItem key={faq.question} {...faq} />
        ))}
      </div>
    </Section>
  );
}

