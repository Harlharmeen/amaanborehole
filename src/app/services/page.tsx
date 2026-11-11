import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/ui/Breadcrumbs";
import Button from "@/ui/Button";
import { servicesData } from "@/content/services";
import { ArrowUpRight, CheckCircle2, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Our Services | Borehole Drilling & Geotechnical Engineering",
  description:
    "Comprehensive borehole drilling, geotechnical soil testing, site investigation, and water treatment solutions for residential, commercial, and civil projects.",
};

export default function ServicesPage() {
  return (
    <main id="main-content" className="bg-background">
      {/* Page Header */}
      <div className="bg-[#F2F6F8] border-b border-border/40 pt-8 pb-14">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: "Services" }]} />
          <div className="mt-4 max-w-3xl">
            <span className="text-xs font-bold tracking-widest text-[#B88A2E] uppercase block mb-2">
              SERVICES OVERVIEW
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B3F5D] tracking-tight leading-tight">
              Specialized ground engineering and water access services.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[#5B6B75] leading-relaxed">
              We provide structured technical solutions designed to give property owners, structural engineers, and contractors clarity on subterranean conditions before and during construction.
            </p>
          </div>
        </div>
      </div>

      {/* Services List Section */}
      <section className="section-padding bg-white border-b border-border/40">
        <div className="container-custom">
          <div className="space-y-12">
            {servicesData.map((service, index) => {
              const stepNum = `0${index + 1}`;
              return (
                <div
                  key={service.slug}
                  id={service.slug}
                  className="p-8 sm:p-10 rounded-card bg-[#F2F6F8] border border-border hover:border-primary/40 transition-colors grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
                >
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-[#0B3F5D] text-white text-xs font-bold flex items-center justify-center">
                        {stepNum}
                      </span>
                      <span className="text-[11px] font-bold tracking-widest text-[#B88A2E] uppercase">
                        {service.badge}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-[#0B3F5D]">
                      {service.title}
                    </h2>

                    <p className="text-sm sm:text-base text-[#5B6B75] leading-relaxed">
                      {service.overview}
                    </p>

                    <div className="pt-2">
                      <h4 className="text-xs font-bold tracking-wider text-[#0B3F5D] uppercase mb-2">
                        Key Deliverables &amp; Scope:
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#5B6B75]">
                        {service.scope.slice(0, 4).map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#B88A2E] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-4 pt-4 lg:pt-0 lg:border-l lg:border-[#CFDCE3] lg:pl-8">
                    <div>
                      <span className="text-[11px] font-bold tracking-wider text-[#0B3F5D] uppercase block mb-1">
                        Best Suited For:
                      </span>
                      <p className="text-xs text-[#5B6B75] leading-relaxed">
                        {service.whenNeeded[0]}
                      </p>
                    </div>

                    <div className="space-y-3 pt-4">
                      <Button
                        href={`/services/${service.slug}`}
                        variant="primary"
                        size="md"
                        className="w-full justify-between"
                        icon={<ArrowUpRight className="w-4 h-4" />}
                      >
                        Detailed Specification
                      </Button>
                      <Button
                        href={`/contact?service=${service.slug}#enquiry`}
                        variant="secondary"
                        size="md"
                        className="w-full"
                      >
                        Request This Service
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="section-padding bg-[#0B3F5D] text-white">
        <div className="container-custom text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Not sure which technical service fits your parcel?
          </h2>
          <p className="text-base text-[#D1E0E7] leading-relaxed">
            Our team will review your location, intended building type, or water demand and recommend the appropriate geotechnical or hydrogeological approach.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button href="/contact#enquiry" variant="gold" size="lg">
              Speak with an Engineer
            </Button>
            <a
              href={`tel:${siteConfig.contact.primaryPhone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 text-white font-semibold hover:underline text-sm"
            >
              <Phone className="w-4 h-4 text-[#B88A2E]" />
              Call {siteConfig.contact.primaryPhone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
