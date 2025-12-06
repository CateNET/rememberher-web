"use client";

import { FAQJsonLd, OrganizationJsonLd, ProductJsonLd } from "next-seo";

const faqEntries = [
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
];

export function StructuredData() {
  return (
    <>
      <OrganizationJsonLd
        name="RememberHer"
        url="https://rememberher.app"
        logo="https://rememberher.app/og-image.png"
        contactPoint={{
          contactType: "Customer Support",
          email: "hello@rememberher.app",
        }}
        sameAs={["https://www.instagram.com/rememberherapp"]}
      />
      <ProductJsonLd
        productName="RememberHer"
        description="AI relationship assistant with LoveAI chat, image analysis, and smart reminders. Never forget anniversaries, gift ideas, or partner preferences."
        brand="RememberHer"
        images={["https://rememberher.app/og-image.png"]}
        offers={{
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: "https://apps.apple.com/us/app/rememberher-relationship-ai/id6755442535",
          seller: {
            name: "RememberHer",
          },
        }}
        aggregateRating={{
          ratingValue: "4.8",
          reviewCount: "127",
        }}
      />
      <FAQJsonLd
        questions={faqEntries.map((entry) => ({
          name: entry.question,
          acceptedAnswer: {
            text: entry.answer,
          },
        }))}
      />
    </>
  );
}

