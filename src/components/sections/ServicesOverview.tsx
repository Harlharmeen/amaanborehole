import React from "react";
import Link from "next/link";
import SectionHeading from "@/ui/SectionHeading";
import Button from "@/ui/Button";
import { servicesData } from "@/content/services";
import { ArrowUpRight } from "lucide-react";

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-white border-b border-border/40">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="OUR SERVICES"
            title="Solutions built around your project needs."
            subtitle="Focused technical services to help you plan confidently, access clean water, and understand subsurface ground conditions."
          />
          <div className="shrink-0">
            <Button href="/services" variant="secondary" size="md">
              Explore All Services
            </Button>
          </div>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => {
            const stepNum = `0${index + 1}`;
            return (
              <div
                key={service.slug}
                className="group bg-white rounded-card border border-border hover:border-primary/40 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Accent Strip */}
                <div
                  className={`h-1.5 w-full ${
                    index === 0 ? "bg-[#B88A2E]" : "bg-[#0B3F5D]"
                  }`}
                />

                <div className="p-6 sm:p-7 flex-1 flex flex-col">
                  {/* Number Badge & Category */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-full bg-[#E6EEF2] text-[#0B3F5D] text-xs font-bold flex items-center justify-center">
                      {stepNum}
                    </span>
                    <span className="text-[10px] font-bold tracking-widest text-[#B88A2E] uppercase">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-[#0B3F5D] mb-3 group-hover:text-primary-dark transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#5B6B75] leading-relaxed flex-1">
                    {service.shortDescription}
                  </p>

                  {/* Divider and Action Link */}
                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-xs font-semibold text-[#0B3F5D] group-hover:text-[#B88A2E] flex items-center gap-1 transition-colors"
                    >
                      <span>Explore service</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-card bg-[#F2F6F8] border border-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm sm:text-base text-[#5B6B75] font-medium text-center sm:text-left">
            Need help choosing the right service? Start with an initial conversation about your site and project goals.
          </p>
          <Button href="/contact" variant="primary" size="md" className="shrink-0 whitespace-nowrap">
            Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  );
}
