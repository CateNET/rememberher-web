import { Hero } from "@/components/marketing/Hero";
import { Highlights } from "@/components/marketing/Highlights";
import { FeaturesGrid } from "@/components/marketing/FeaturesGrid";
import { AISection } from "@/components/marketing/AISection";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { Audience } from "@/components/marketing/Audience";
import { FAQSection } from "@/components/marketing/FAQSection";
import { WaitlistForm } from "@/components/marketing/WaitlistForm";
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
      <Audience />
      <div id="waitlist">
        <WaitlistForm />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
    </main>
  );
}
