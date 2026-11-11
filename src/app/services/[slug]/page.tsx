import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/ui/Breadcrumbs";
import Button from "@/ui/Button";
import ImagePlaceholder from "@/ui/ImagePlaceholder";
import { servicesData, ServiceItem } from "@/content/services";
import { CheckCircle2, HelpCircle, ArrowRight, Layers, FileCheck } from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return servicesData.map((s) => ({
    slug: s.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: service.seoTitle,
    description: service.seoDescription,
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <main id="main-content" className="bg-background">
      {/* Page Header */}
      <div className="bg-[#F2F6F8] border-b border-border/40 pt-8 pb-14">
        <div className="container-custom">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: service.title },
            ]}
          />
          <div className="mt-4 max-w-3xl">
            <span className="text-xs font-bold tracking-widest text-[#B88A2E] uppercase block mb-2">
              {service.badge}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B3F5D] tracking-tight leading-tight">
              {service.title}
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[#5B6B75] leading-relaxed">
              {service.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                href={`/contact?service=${service.slug}#enquiry`}
                variant="primary"
                size="md"
              >
                Request This Service
              </Button>
              <Button
                href="/services"
                variant="secondary"
                size="md"
              >
                All Services
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Service Overview & Field Visual */}
      <section className="section-padding bg-white border-b border-border/40">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B3F5D]">
                Detailed Technical Overview
              </h2>
              <p className="text-sm sm:text-base text-[#5B6B75] leading-relaxed">
                {service.overview}
              </p>

              {/* What the Service Involves / Scope */}
              <div className="pt-4 space-y-3">
                <h3 className="text-lg font-bold text-[#0B3F5D] flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[#B88A2E]" />
                  <span>Scope of Technical Operations</span>
                </h3>
                <ul className="space-y-2.5 pt-2">
                  {service.scope.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#5B6B75]">
                      <CheckCircle2 className="w-4 h-4 text-[#B88A2E] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ImagePlaceholder
                label={service.title.toUpperCase()}
                sublabel="Certified on-site engineering operations"
                aspectRatio="square"
                className="w-full shadow-xs"
              />

              {/* When Needed Box */}
              <div className="mt-6 p-6 rounded-card bg-[#F2F6F8] border border-border">
                <h4 className="text-xs font-bold tracking-wider text-[#0B3F5D] uppercase mb-3">
                  When You May Require This Service:
                </h4>
                <ul className="space-y-2 text-xs text-[#5B6B75]">
                  {service.whenNeeded.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#B88A2E] font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Engineering Approach */}
      <section className="section-padding bg-[#F2F6F8] border-b border-border/40">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold tracking-widest text-[#B88A2E] uppercase block mb-2">
              METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B3F5D]">
              Our approach to {service.title.toLowerCase()}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#5B6B75]">
              Every project stage is executed with strict quality controls and documented field observations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.approach.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-card bg-white border border-border shadow-xs space-y-2.5"
              >
                <span className="w-8 h-8 rounded-full bg-[#E8F0F4] text-[#0B3F5D] text-xs font-bold flex items-center justify-center">
                  {step.step}
                </span>
                <h3 className="text-base font-bold text-[#0B3F5D]">{step.title}</h3>
                <p className="text-xs sm:text-sm text-[#5B6B75] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Deliverables Section */}
          <div className="mt-12 p-6 sm:p-8 rounded-card bg-white border border-border">
            <h3 className="text-lg font-bold text-[#0B3F5D] flex items-center gap-2 mb-4">
              <FileCheck className="w-5 h-5 text-[#B88A2E]" />
              <span>Standard Deliverables &amp; Documentation</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#5B6B75]">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#287A53] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      {service.faq.length > 0 && (
        <section className="section-padding bg-white border-b border-border/40">
          <div className="container-custom max-w-4xl">
            <div className="text-center mb-10">
              <span className="text-xs font-bold tracking-widest text-[#B88A2E] uppercase block mb-2">
                FREQUENT QUESTIONS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B3F5D]">
                Common questions about {service.title.toLowerCase()}
              </h2>
            </div>

            <div className="space-y-4">
              {service.faq.map((item, idx) => (
                <div key={idx} className="p-6 rounded-card bg-[#F2F6F8] border border-border space-y-2">
                  <h4 className="text-sm sm:text-base font-bold text-[#0B3F5D] flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#B88A2E] shrink-0" />
                    <span>{item.question}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5B6B75] leading-relaxed pl-6">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service CTA Bottom Banner */}
      <section className="section-padding bg-[#0B3F5D] text-white">
        <div className="container-custom text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Schedule a site inspection for {service.title.toLowerCase()}
          </h2>
          <p className="text-base text-[#D1E0E7] leading-relaxed">
            Discuss your requirements with our team and receive an engineering proposal tailored to your site coordinates.
          </p>
          <div className="pt-2">
            <Button
              href={`/contact?service=${service.slug}#enquiry`}
              variant="gold"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Request {service.title}
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
