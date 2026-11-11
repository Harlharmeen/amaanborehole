import React from "react";
import SectionHeading from "@/ui/SectionHeading";

export default function ProcessSteps() {
  const steps = [
    {
      step: "01",
      title: "Consultation",
      description: "Understand the project brief, site requirements, and overall goals.",
    },
    {
      step: "02",
      title: "Site Assessment",
      description: "Review physical location, accessibility, and known ground conditions.",
    },
    {
      step: "03",
      title: "Technical Evaluation",
      description: "Conduct hydrogeological survey or determine appropriate drilling/testing methodology.",
    },
    {
      step: "04",
      title: "Project Execution",
      description: "Mobilise rigs and field engineers to execute drilling, casing, or soil boring with precision.",
    },
    {
      step: "05",
      title: "Reporting & Delivery",
      description: "Deliver comprehensive logs, yield calculations, and certified engineering documentation.",
    },
  ];

  return (
    <section className="section-padding bg-[#F2F6F8] border-b border-border/40">
      <div className="container-custom">
        <SectionHeading
          eyebrow="HOW WE WORK"
          title="A clear process. From first call to delivery."
          subtitle="We maintain transparency at every stage, ensuring you always know what is happening on site and what comes next."
          className="mb-14"
        />

        {/* Process Timeline */}
        <div className="relative">
          {/* Desktop horizontal connector line */}
          <div className="hidden lg:block absolute top-[22px] left-[5%] right-[5%] h-[2px] bg-[#B8C8D0] z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
            {steps.map((item, idx) => (
              <div key={item.step} className="flex flex-col items-start group">
                {/* Step Circle Marker */}
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center text-xs font-bold shadow-xs mb-4 transition-transform group-hover:scale-105 ${
                    idx === 0
                      ? "bg-[#B88A2E] text-[#0B3F5D]"
                      : "bg-[#0B3F5D] text-white"
                  }`}
                >
                  {item.step}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#0B3F5D] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6B75] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-14 pt-6 border-t border-[#D9E1E6] flex items-center justify-between text-xs sm:text-sm text-[#0B3F5D] font-semibold">
          <span>Every project starts with the right questions and ends with clear, reliable results.</span>
        </div>
      </div>
    </section>
  );
}
