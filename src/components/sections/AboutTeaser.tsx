import React from "react";
import Link from "next/link";
import Button from "@/ui/Button";
import ImagePlaceholder from "@/ui/ImagePlaceholder";
import { ArrowRight } from "lucide-react";

export default function AboutTeaser() {
  return (
    <section className="section-padding bg-[#F2F6F8] border-b border-border/40">
      <div className="container-custom">
        {/* Section Marker */}
        <div className="flex items-center justify-between pb-8 md:pb-12 border-b border-[#CFDCE3]">
          <span className="text-xs sm:text-sm font-bold tracking-[0.16em] text-[#0D3F5C] uppercase">
            ABOUT AMAAN
          </span>
          <span className="text-[11px] font-semibold tracking-wider text-[#758894] uppercase">
            WHO WE ARE
          </span>
        </div>

        {/* Main 2-Column Content */}
        <div className="mt-10 lg:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#202326] leading-[1.12] tracking-tight">
              Practical expertise. <br />
              Engineering-led <br className="hidden sm:inline" />
              solutions.
            </h2>

            <p className="text-base sm:text-lg text-[#4F606A] leading-relaxed pt-2">
              Amaan Borehole Drilling &amp; Geotechnical Services supports
              property owners, developers and contractors with dependable
              drilling and ground investigation services.
            </p>

            {/* Mission Statement Callout */}
            <div className="relative pl-5 py-2 border-l-[3px] border-[#B88A2E] bg-white/40 rounded-r-lg my-6">
              <span className="text-[11px] font-bold tracking-widest text-[#0D3F5C] uppercase block mb-1">
                OUR MISSION
              </span>
              <p className="text-sm sm:text-base text-[#354750] font-medium leading-normal">
                To deliver dependable ground and water solutions through
                informed assessment and responsible execution.
              </p>
            </div>

            <div className="pt-2">
              <Button
                href="/about"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4 ml-1" />}
              >
                Learn More About Amaan
              </Button>
            </div>
          </div>

          {/* Right Column: Square Image Placeholder & Engineering Approach Panel */}
          <div className="lg:col-span-6 relative">
            <div className="relative max-w-lg mx-auto lg:ml-auto">
              <ImagePlaceholder
                label="FIELD &amp; DRILLING OPERATIONS"
                sublabel="Geological field assessment and drill site setup"
                aspectRatio="square"
                className="w-full shadow-xs"
              />

              {/* Overlapping Engineering Approach Panel */}
              <div className="mt-4 sm:-mt-10 sm:relative sm:z-20 bg-[#0D3F5C] text-white p-5 sm:p-6 rounded-card shadow-md">
                <span className="text-[10px] font-bold tracking-widest text-[#BFD1DB] uppercase block mb-3">
                  OUR ENGINEERING-LED APPROACH
                </span>
                <div className="flex items-center justify-between text-sm sm:text-base font-semibold">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D2A44E]" />
                    <span>Assess</span>
                  </div>
                  <span className="text-[#91AEBE] font-light">→</span>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D2A44E]" />
                    <span>Plan</span>
                  </div>
                  <span className="text-[#91AEBE] font-light">→</span>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D2A44E]" />
                    <span>Execute</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Guiding Principles Row */}
        <div className="mt-16 pt-10 border-t border-[#CFDCE3]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
            <div>
              <span className="text-[11px] font-bold tracking-widest text-[#0D3F5C] uppercase block mb-1">
                WHAT GUIDES US
              </span>
              <p className="text-xs text-[#758894]">The principles behind our work.</p>
            </div>

            <div className="space-y-1 md:border-l md:border-[#D5E0E5] md:pl-6">
              <span className="text-xs font-bold text-[#B88A2E] tracking-wider block">01</span>
              <h3 className="text-base font-semibold text-[#202326]">Technical understanding</h3>
              <p className="text-xs text-[#687B85] leading-relaxed">
                Decisions informed by the actual conditions on site.
              </p>
            </div>

            <div className="space-y-1 md:border-l md:border-[#D5E0E5] md:pl-6">
              <span className="text-xs font-bold text-[#B88A2E] tracking-wider block">02</span>
              <h3 className="text-base font-semibold text-[#202326]">Professional practice</h3>
              <p className="text-xs text-[#687B85] leading-relaxed">
                A considered process at every project stage.
              </p>
            </div>

            <div className="space-y-1 md:border-l md:border-[#D5E0E5] md:pl-6">
              <span className="text-xs font-bold text-[#B88A2E] tracking-wider block">03</span>
              <h3 className="text-base font-semibold text-[#202326]">Reliable delivery</h3>
              <p className="text-xs text-[#687B85] leading-relaxed">
                Clear communication and purposeful execution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
