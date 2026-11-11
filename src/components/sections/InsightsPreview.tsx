import React from "react";
import Link from "next/link";
import SectionHeading from "@/ui/SectionHeading";
import Button from "@/ui/Button";
import { articlesData } from "@/content/articles";
import { ArrowUpRight, BookOpen } from "lucide-react";

export default function InsightsPreview() {
  const articles = articlesData.slice(0, 3);

  return (
    <section className="section-padding bg-[#F2F6F8] border-b border-border/40">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="FROM THE FIELD"
            title="Better decisions start with better information."
            subtitle="Practical engineering guides on water access, subsurface ground conditions, and planning before construction begins."
          />
          <div className="shrink-0">
            <Button href="/blog" variant="secondary" size="md">
              Explore All Insights
            </Button>
          </div>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((item) => (
            <article
              key={item.slug}
              className="group bg-white rounded-card border border-border hover:border-primary/40 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden"
            >
              {/* Visual Card Header */}
              <div className="relative aspect-[16/8] w-full bg-gradient-to-br from-[#E6EEF2] to-[#DCE7ED] border-b border-border p-6 flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-widest text-[#B88A2E] uppercase">
                  {item.category}
                </span>
                <span className="w-8 h-8 rounded-full bg-white text-primary flex items-center justify-center shadow-2xs">
                  <BookOpen className="w-4 h-4 text-[#0B3F5D]" />
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#0B3F5D] mb-3 group-hover:text-primary-dark transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5B6B75] leading-relaxed line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs">
                  <span className="font-semibold text-muted uppercase tracking-wider">
                    {item.readTime}
                  </span>
                  <Link
                    href={`/blog/${item.slug}`}
                    className="font-semibold text-[#0B3F5D] group-hover:text-[#B88A2E] flex items-center gap-1 transition-colors"
                  >
                    <span>Read article</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#5B6B75] border-t border-[#D9E1E6] pt-6">
          <p>Useful, search-friendly educational articles can expand this technical library over time.</p>
          <Link href="/blog" className="font-semibold text-[#0B3F5D] hover:underline flex items-center gap-1">
            <span>Explore all insights</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
