import React from "react";
import type { Metadata } from "next";
import Breadcrumbs from "@/ui/Breadcrumbs";
import Button from "@/ui/Button";
import ImagePlaceholder from "@/ui/ImagePlaceholder";
import { projectsData } from "@/content/projects";
import { MapPin, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Fieldwork & Projects | Amaan Borehole Drilling & Geotechnical",
  description:
    "Explore our completed borehole drilling, pumping test evaluations, and geotechnical soil investigation projects across Osun State and surrounding regions.",
};

export default function ProjectsPage() {
  return (
    <main id="main-content" className="bg-background">
      {/* Page Header */}
      <div className="bg-[#F2F6F8] border-b border-border/40 pt-8 pb-14">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: "Projects" }]} />
          <div className="mt-4 max-w-3xl">
            <span className="text-xs font-bold tracking-widest text-[#B88A2E] uppercase block mb-2">
              FIELDWORK &amp; CASE STUDIES
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B3F5D] tracking-tight leading-tight">
              Selected projects and field operations.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[#5B6B75] leading-relaxed">
              Visible proof of technical delivery. A review of completed borehole drilling, yield testing, and geotechnical ground assessments executed with engineering discipline.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Grid Section */}
      <section className="section-padding bg-white border-b border-border/40">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-card border border-border overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                {/* Visual Header */}
                <div className="relative aspect-[16/9] w-full bg-[#E8EFF3]">
                  <ImagePlaceholder
                    label={project.serviceCategory}
                    sublabel={project.location}
                    aspectRatio="video"
                    className="rounded-none border-0 h-full w-full"
                  />
                </div>

                {/* Details */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] font-bold tracking-widest text-[#B88A2E] uppercase">
                        {project.serviceCategory}
                      </span>
                      <span className="text-xs text-muted flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-muted/70" />
                        {project.location}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold text-[#0B3F5D] mb-3">
                      {project.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-[#5B6B75] leading-relaxed mb-6">
                      {project.summary}
                    </p>

                    {project.scopeSummary && (
                      <div className="border-t border-border/60 pt-4 mb-4">
                        <h4 className="text-[11px] font-bold tracking-wider text-[#0B3F5D] uppercase mb-2">
                          Project Highlights:
                        </h4>
                        <ul className="space-y-1.5 text-xs text-[#5B6B75]">
                          {project.scopeSummary.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#B88A2E] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <Button
                      href={`/contact?service=${project.serviceCategory.toLowerCase().replace(/\s+/g, "-")}#enquiry`}
                      variant="secondary"
                      size="sm"
                    >
                      Enquire About Similar Project
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Project Verification Policy Note */}
          <div className="mt-14 p-6 rounded-card bg-[#F2F6F8] border border-border text-xs sm:text-sm text-[#5B6B75] leading-relaxed max-w-3xl mx-auto text-center">
            <p className="font-semibold text-[#0B3F5D] mb-1">Our Portfolio Policy</p>
            <p>
              We publish only verified case studies and field photographic records where client confidentiality has been explicitly cleared. Additional industrial and residential drilling records are documented continuously.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#0B3F5D] text-white">
        <div className="container-custom text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Have a site requiring inspection or drilling?
          </h2>
          <p className="text-base text-[#D1E0E7]">
            Discuss your requirements with our field specialists and schedule an on-site reconnaissance.
          </p>
          <div className="pt-2">
            <Button
              href="/contact#enquiry"
              variant="gold"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Request a Project Quote
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
