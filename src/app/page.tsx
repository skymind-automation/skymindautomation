import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services-section";
import { WhatWeBuildSection } from "@/components/sections/what-we-build-section";
import { ProcessSection } from "@/components/sections/process-section";
import { SecuritySection } from "@/components/sections/security-section";
import { BuiltWithAISection } from "@/components/sections/builtwith-ai-section";
import { CaseStudiesSection } from "@/components/sections/case-studies-section";
import { IndustriesSection } from "@/components/sections/industries-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { CTASection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ServicesSection />
        <WhatWeBuildSection />
        <ProcessSection />
        <SecuritySection />
        <BuiltWithAISection />
        <CaseStudiesSection />
        <IndustriesSection />
        <TechStackSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
