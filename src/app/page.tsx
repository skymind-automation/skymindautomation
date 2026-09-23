import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services-section";
import { CaseStudiesSection } from "@/components/sections/case-studies-section";
import { SecuritySection } from "@/components/sections/security-section";
import { CTASection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ServicesSection />
        <CaseStudiesSection />
        <SecuritySection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
