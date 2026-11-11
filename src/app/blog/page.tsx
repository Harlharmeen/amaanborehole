import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/ui/Breadcrumbs";
import Button from "@/ui/Button";
import { articlesData } from "@/content/articles";
import { ArrowUpRight, BookOpen, Clock, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Fieldwork Insights & Articles | Amaan Engineering",
  description:
    "Practical engineering guides on borehole drilling, geotechnical soil testing, water treatment, and pre-construction site investigations.",
};

export default function BlogListingPage() {
  return (
    <main id="main-content" className="bg-background">
      {/* Page Header */}
      <div className="bg-[#F2F6F8] border-b border-border/40 pt-8 pb-14">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: "Blog & Insights" }]} />
          <div className="mt-4 max-w-3xl">
            <span className="text-xs font-bold tracking-widest text-[#B88A2E] uppercase block mb-2">
              FIELDWORK INSIGHTS &amp; GUIDES
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B3F5D] tracking-tight leading-tight">
              Better decisions start with better technical information.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[#5B6B75] leading-relaxed">
              Read practical articles written to help property owners, architects, and civil contractors make informed ground and water decisions before building.
            </p>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <section className="section-padding bg-white border-b border-border/40">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articlesData.map((article) => (
              <article
                key={article.slug}
                className="group bg-white rounded-card border border-border hover:border-primary/40 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden"
              >
                {/* Visual Header */}
                <div className="aspect-[16/9] w-full bg-gradient-to-br from-[#E6EEF2] to-[#DCE7ED] border-b border-border p-6 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-widest text-[#B88A2E] uppercase">
                      {article.category}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-white text-primary flex items-center justify-center shadow-2xs">
                      <BookOpen className="w-4 h-4 text-[#0B3F5D]" />
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-[#5B6B75]">
                    {article.publishedDate && (
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-muted" />
                        {article.publishedDate}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-muted" />
                      {article.readTime}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-[#0B3F5D] mb-3 group-hover:text-primary-dark transition-colors line-clamp-2">
                      <Link href={`/blog/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h2>
                    <p className="text-xs sm:text-sm text-[#5B6B75] leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                    <Link
                      href={`/blog/${article.slug}`}
                      className="text-xs font-semibold text-[#0B3F5D] group-hover:text-[#B88A2E] flex items-center gap-1 transition-colors"
                    >
                      <span>Read full guide</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / Enquiry CTA */}
      <section className="section-padding bg-[#0B3F5D] text-white">
        <div className="container-custom text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Have a technical question about your site?
          </h2>
          <p className="text-base text-[#D1E0E7]">
            Reach out to our engineering specialists to discuss ground conditions, water tables, or foundation guidelines.
          </p>
          <div className="pt-2">
            <Button href="/contact#enquiry" variant="gold" size="lg">
              Contact an Engineer
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
