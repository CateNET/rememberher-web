"use client";

import { FAQJsonLd, OrganizationJsonLd } from "next-seo";

const faqEntries = [
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
];

export function StructuredData() {
  return (
    <>
      <OrganizationJsonLd
        name="RememberHer"
        url="https://rememberher.app"
        logo="https://rememberher.app/og-image.png"
        sameAs={["https://www.instagram.com/rememberherapp"]}
      />
      <FAQJsonLd
        questions={faqEntries.map((entry) => ({
          name: entry.question,
          acceptedAnswer: entry.answer,
        }))}
      />
    </>
  );
}

