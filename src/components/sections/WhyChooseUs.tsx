import React from "react";
import Button from "@/ui/Button";
import { CheckCircle2 } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      num: "01",
      title: "Technical Expertise",
      desc: "Engineering-led decisions backed by subsurface assessment rather than superficial guesswork.",
    },
    {
      num: "02",
      title: "Reliable Execution",
      desc: "Structured project timelines, proven drilling methods, and transparent on-site coordination.",
    },
    {
      num: "03",
      title: "Professional Reporting",
      desc: "Clear drilling logs, soil profiles, and certified geotechnical reports suitable for structural engineers.",
    },
    {
      num: "04",
      title: "Quality Equipment & Materials",
      desc: "Heavy-duty rigs, durable non-corrosive casing, and precision submersible pumps engineered to last.",
    },
  ];

  return (
    <section className="section-padding bg-[#0B3F5D] text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-5">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#124D70] border border-[#3E6C84] text-xs font-bold tracking-widest text-[#DCE8ED] uppercase">
              WHY AMAAN
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white leading-[1.15] tracking-tight">
              Technical depth. <br />
              Accountable delivery.
            </h2>

            <p className="text-base sm:text-lg text-[#D1E0E7] leading-relaxed pt-2">
              The right service is only part of the job. Amaan’s approach is
              built around understanding the site, communicating clearly, and
              carrying out field operations with meticulous care.
            </p>
          </div>

          {/* Right Column: 4 Strengths Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
            {points.map((pt) => (
              <div key={pt.num} className="border-t border-[#477087] pt-5 space-y-2">
                <span className="text-xs font-bold text-[#B88A2E] tracking-widest block">
                  {pt.num}
                </span>
                <h3 className="text-lg font-bold text-white">
                  {pt.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#D1E0E7] leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Panel within Dark Section */}
        <div className="mt-14 p-6 sm:p-8 rounded-card bg-[#164D6C] border border-[#2D6680] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#B88A2E] text-[#0B3F5D] flex items-center justify-center shrink-0 mt-1">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                A good project begins with the right conversation.
              </h4>
              <p className="text-xs sm:text-sm text-[#D1E0E7] mt-1">
                Tell us what you are planning and we will help you identify the practical next step.
              </p>
            </div>
          </div>
          <Button
            href="/contact#enquiry"
            variant="gold"
            size="md"
            className="shrink-0 whitespace-nowrap"
          >
            Talk to Our Team
          </Button>
        </div>
      </div>
    </section>
  );
}
