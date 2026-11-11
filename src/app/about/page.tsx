import React from "react";
import type { Metadata } from "next";
import Breadcrumbs from "@/ui/Breadcrumbs";
import Button from "@/ui/Button";
import ImagePlaceholder from "@/ui/ImagePlaceholder";
import { siteConfig } from "@/config/site";
import { CheckCircle2, Shield, Wrench, FileText, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Amaan Borehole Drilling & Geotechnical Services",
  description:
    "Learn about Amaan Borehole Drilling & Geotechnical Services. Our engineering background, field capabilities, and commitment to accurate ground solutions.",
};

export default function AboutPage() {
  const principles = [
    {
      title: "Scientific Assessment First",
      desc: "We prioritize geophysical resistivity surveys and soil boring before committing client capital to drilling or foundation construction.",
      icon: <CheckCircle2 className="w-5 h-5 text-[#B88A2E]" />,
    },
    {
      title: "Strict Material Specifications",
      desc: "From factory-slotted non-corrosive uPVC casing to certified gravel packing and submersible pumps, we do not compromise on subterranean durability.",
      icon: <Shield className="w-5 h-5 text-[#B88A2E]" />,
    },
    {
      title: "Engineered Field Execution",
      desc: "Our field operators work under experienced technical supervision, maintaining rigorous drilling logs and safety protocols.",
      icon: <Wrench className="w-5 h-5 text-[#B88A2E]" />,
    },
    {
      title: "Transparent Technical Reporting",
      desc: "Clients receive thorough documentation: lithological logs, pumping test drawdown curves, water quality analyses, and geotechnical parameters.",
      icon: <FileText className="w-5 h-5 text-[#B88A2E]" />,
    },
  ];

  return (
    <main id="main-content" className="bg-background">
      {/* Page Header */}
      <div className="bg-[#F2F6F8] border-b border-border/40 pt-8 pb-14">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: "About Us" }]} />
          <div className="mt-4 max-w-3xl">
            <span className="text-xs font-bold tracking-widest text-[#B88A2E] uppercase block mb-2">
              ABOUT AMAAN
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B3F5D] tracking-tight leading-tight">
              Engineered ground solutions built on evidence, precision, and trust.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[#5B6B75] leading-relaxed">
              Amaan Borehole Drilling &amp; Geotechnical Services is a registered Nigerian enterprise dedicated to providing reliable borehole drilling, groundwater development, and comprehensive geotechnical site investigations.
            </p>
          </div>
        </div>
      </div>

      {/* Main Narrative & Philosophy */}
      <section className="section-padding bg-white border-b border-border/40">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] font-bold tracking-widest text-[#B88A2E] uppercase block">
                WHO WE ARE
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B3F5D] leading-tight">
                Practical expertise tailored to real site conditions.
              </h2>
              <p className="text-sm sm:text-base text-[#5B6B75] leading-relaxed">
                Headquartered in Gbongon, Osun State, Amaan serves property owners, private developers, civil contractors, and commercial establishments throughout the region. We recognise that no two parcels of land share identical geology. Whether navigating weathered overburden, crystalline bedrock, or complex groundwater tables, our work begins with careful technical assessment.
              </p>
              <p className="text-sm sm:text-base text-[#5B6B75] leading-relaxed">
                Rather than treating borehole drilling and soil testing as mere commodities, we treat them as civil engineering commitments. Our mission is straightforward: protect our clients&apos; buildings from foundation settlement and guarantee dependable, year-round access to clean water.
              </p>

              {/* Verified Enterprise Box */}
              {siteConfig.registrationNumber && (
                <div className="p-4 rounded-btn bg-[#F2F6F8] border border-border flex items-center justify-between text-xs sm:text-sm">
                  <div>
                    <span className="text-muted block text-[11px] uppercase tracking-wider">Corporate Registration</span>
                    <span className="font-bold text-[#0B3F5D]">{siteConfig.registrationNumber}</span>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#E8F0F4] text-[#0B3F5D] text-xs font-semibold">
                    Registered Enterprise
                  </span>
                </div>
              )}
            </div>

            <div className="lg:col-span-6">
              <ImagePlaceholder
                label="FIELD OPERATIONS &amp; DRILLING RIGS"
                sublabel="Technical site investigation and deep drilling equipment"
                aspectRatio="square"
                className="max-w-md mx-auto lg:ml-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Guiding Principles */}
      <section className="section-padding bg-[#0B3F5D] text-white">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold tracking-widest text-[#B88A2E] uppercase block mb-2">
              OUR MISSION &amp; COMMITMENT
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              To deliver dependable ground and water solutions through informed assessment and responsible execution.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {principles.map((p, idx) => (
              <div key={idx} className="p-6 rounded-card bg-[#124D70] border border-[#2D6680] space-y-3">
                <div className="mb-2">{p.icon}</div>
                <h3 className="text-base font-bold text-white">{p.title}</h3>
                <p className="text-xs sm:text-sm text-[#D1E0E7] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Approach Timeline */}
      <section className="section-padding bg-white border-b border-border/40">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-[#B88A2E] uppercase block mb-2">
              OUR FRAMEWORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B3F5D]">
              How we approach every assignment
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#5B6B75]">
              A consistent, three-phase engineering methodology applied across all service categories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-card bg-[#F2F6F8] border border-border text-center space-y-3">
              <span className="w-10 h-10 rounded-full bg-[#B88A2E] text-white font-bold flex items-center justify-center mx-auto text-sm">
                01
              </span>
              <h3 className="text-xl font-bold text-[#0B3F5D]">Assess</h3>
              <p className="text-xs sm:text-sm text-[#5B6B75] leading-relaxed">
                Review site topography, evaluate existing geotechnical databases, conduct on-site geophysical surveys, and inspect access constraints.
              </p>
            </div>

            <div className="p-8 rounded-card bg-[#F2F6F8] border border-border text-center space-y-3">
              <span className="w-10 h-10 rounded-full bg-[#0B3F5D] text-white font-bold flex items-center justify-center mx-auto text-sm">
                02
              </span>
              <h3 className="text-xl font-bold text-[#0B3F5D]">Plan</h3>
              <p className="text-xs sm:text-sm text-[#5B6B75] leading-relaxed">
                Design the borehole casing profile, determine required drilling depth, establish sampling intervals, and coordinate suitable equipment.
              </p>
            </div>

            <div className="p-8 rounded-card bg-[#F2F6F8] border border-border text-center space-y-3">
              <span className="w-10 h-10 rounded-full bg-[#0B3F5D] text-white font-bold flex items-center justify-center mx-auto text-sm">
                03
              </span>
              <h3 className="text-xl font-bold text-[#0B3F5D]">Execute</h3>
              <p className="text-xs sm:text-sm text-[#5B6B75] leading-relaxed">
                Deploy drilling rigs, install durable materials, conduct step-drawdown testing, and compile certified technical logs and reports.
              </p>
            </div>
          </div>

          <div className="mt-14 text-center">
            <Button
              href="/contact#enquiry"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Request a Technical Consultation
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
