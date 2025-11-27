/**
 * Copyright (c) 2024 RememberHer. All rights reserved.
 * Proprietary code - unauthorized use prohibited.
 */

import { Hero } from "@/components/marketing/Hero";
import { Highlights } from "@/components/marketing/Highlights";
import { FeaturesGrid } from "@/components/marketing/FeaturesGrid";
import { AISection } from "@/components/marketing/AISection";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { Screenshots } from "@/components/marketing/Screenshots";
import { Testimonials } from "@/components/marketing/Testimonials";
import { Audience } from "@/components/marketing/Audience";
import { FAQSection } from "@/components/marketing/FAQSection";
import { StructuredData } from "@/components/seo/StructuredData";

export default function Home() {
  return (
    <main className="scroll-smooth">
      <StructuredData />
      <Hero />
      <div id="highlights">
        <Highlights />
      </div>
      <div id="features">
        <FeaturesGrid />
      </div>
      <AISection />
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <Screenshots />
      <Testimonials />
      <Audience />
      <div id="faq">
        <FAQSection />
      </div>
    </main>
  );
}
