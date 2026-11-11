import React from "react";
import Hero from "@/components/sections/Hero";
import AboutTeaser from "@/components/sections/AboutTeaser";
import ServicesOverview from "@/components/sections/ServicesOverview";
import ProcessSteps from "@/components/sections/ProcessSteps";
import SelectedProjects from "@/components/sections/SelectedProjects";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import InsightsPreview from "@/components/sections/InsightsPreview";
import ContactCTA from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <main id="main-content">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About Section Teaser */}
      <AboutTeaser />

      {/* 3. Services Overview */}
      <ServicesOverview />

      {/* 4. How We Work (5-Step Procedure) */}
      <ProcessSteps />

      {/* 5. Selected Projects / Field Work */}
      <SelectedProjects />

      {/* 6. Why Choose Amaan */}
      <WhyChooseUs />

      {/* 7. Technical Insights / Blog Preview */}
      <InsightsPreview />

      {/* 8. Conversion CTA */}
      <ContactCTA />
    </main>
  );
}
