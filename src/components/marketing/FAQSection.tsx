import { Section } from "@/components/ui/Section";
import { FAQItem } from "@/components/ui/FAQItem";

const faqs = [
  {
    question: "Is my data private?",
    answer:
      "Absolutely. Your entries are encrypted and secure. We never sell data, and you control what is stored or deleted.",
  },
  {
    question: "Do I need a subscription to use it?",
    answer:
      "Core partner management and reminders are free. Premium tiers unlock deeper AI insights, historical analytics, and exclusive features.",
  },
  {
    question: "Will this spam my partner?",
    answer:
      "Never. Notifications only go to you. Your partner simply enjoys the thoughtful gestures that follow.",
  },
  {
    question: "Does it work worldwide?",
    answer:
      "Yes. Reminders, AI suggestions, and all features function globally. Location-based date ideas adapt to the city you set.",
  },
  {
    question: "How do AI suggestions learn?",
    answer:
      "They use the preferences you save, like favorite colors, cuisines, and hobbies, and combine them with seasonal inspiration. You can edit or reset insights anytime.",
  },
  {
    question: "What happens if I switch phones?",
    answer:
      "Sign in with your email, Google, or Apple account and everything syncs instantly across all your devices. Your data stays secure and protected.",
  },
  {
    question: "Can I track multiple partners?",
    answer:
      "RememberHer focuses on one relationship per workspace to keep boundaries healthy. You can create separate spaces if needed.",
  },
  {
    question: "Where can I download the app?",
    answer:
      "RememberHer is now available on the App Store and Google Play. Download today and start organizing your relationship details with ease.",
  },
];

export function FAQSection() {
  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title="Questions we hear from thoughtful partners"
      description="If you're planning ahead for anniversaries, engagements, or just everyday delight, we've got you."
      align="center"
      className="bg-gradient-to-b from-[#050814] to-[#0a0f1f]"
    >
      <div className="mx-auto grid max-w-4xl gap-2.5 sm:gap-3 lg:gap-4">
        {faqs.map((faq) => (
          <FAQItem key={faq.question} {...faq} />
        ))}
      </div>
    </Section>
  );
}
