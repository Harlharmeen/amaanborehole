import React from "react";
import Link from "next/link";
import SectionHeading from "@/ui/SectionHeading";
import Button from "@/ui/Button";
import ImagePlaceholder from "@/ui/ImagePlaceholder";
import { projectsData } from "@/content/projects";
import { ArrowUpRight, MapPin } from "lucide-react";

export default function SelectedProjects() {
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="section-padding bg-white border-b border-border/40">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="SELECTED FIELDWORK"
            title="Work that starts with the ground."
            subtitle="A look at the types of projects Amaan delivers across borehole drilling, yield testing, and technical ground services."
          />
          <div className="shrink-0">
            <Button href="/projects" variant="secondary" size="md">
              View All Projects
            </Button>
          </div>
        </div>

        {/* 3 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-card border border-border hover:border-primary/40 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col"
            >
              {/* Project Image / Visual Placeholder */}
              <div className="relative aspect-[16/10] w-full bg-[#E8EFF3] overflow-hidden">
                <ImagePlaceholder
                  label={project.serviceCategory}
                  sublabel={project.location}
                  aspectRatio="video"
                  className="rounded-none border-0 h-full w-full"
                />
              </div>

              {/* Card Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-bold tracking-widest text-[#B88A2E] uppercase">
                      {project.serviceCategory}
                    </span>
                    <span className="text-xs text-muted flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-muted/70" />
                      {project.location}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0B3F5D] mb-2.5 group-hover:text-primary-dark transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5B6B75] leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                  <Link
                    href="/projects"
                    className="text-xs font-semibold text-[#0B3F5D] group-hover:text-[#B88A2E] flex items-center gap-1 transition-colors"
                  >
                    <span>View project summary</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#5B6B75] border-t border-border pt-6">
          <p>Verified project case studies and photographic field documentation can be added as completed works are formally approved.</p>
          <Link href="/projects" className="font-semibold text-primary hover:underline whitespace-nowrap">
            Explore complete portfolio →
          </Link>
        </div>
      </div>
    </section>
  );
}
