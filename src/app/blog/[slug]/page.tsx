import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/ui/Breadcrumbs";
import Button from "@/ui/Button";
import { articlesData } from "@/content/articles";
import { Clock, Calendar, ArrowLeft, ArrowUpRight } from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return articlesData.map((a) => ({
    slug: a.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = articlesData.find((a) => a.slug === params.slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: article.seoTitle,
    description: article.seoDescription,
  };
}

export default function ArticleDetailPage({ params }: Props) {
  const article = articlesData.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articlesData
    .filter((a) => a.slug !== article.slug)
    .slice(0, 2);

  return (
    <main id="main-content" className="bg-background">
      {/* Article Header */}
      <div className="bg-[#F2F6F8] border-b border-border/40 pt-8 pb-14">
        <div className="container-custom">
          <Breadcrumbs
            items={[
              { label: "Blog & Insights", href: "/blog" },
              { label: article.title },
            ]}
          />
          <div className="mt-4 max-w-3xl">
            <div className="flex items-center gap-4 text-xs mb-3">
              <span className="px-3 py-1 rounded bg-[#E6EEF2] text-[#0B3F5D] font-bold tracking-widest uppercase">
                {article.category}
              </span>
              {article.publishedDate && (
                <span className="flex items-center gap-1 text-muted">
                  <Calendar className="w-3.5 h-3.5" />
                  {article.publishedDate}
                </span>
              )}
              <span className="flex items-center gap-1 text-muted">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0B3F5D] tracking-tight leading-tight">
              {article.title}
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[#5B6B75] leading-relaxed">
              {article.excerpt}
            </p>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <section className="section-padding bg-white border-b border-border/40">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-6 text-base sm:text-[17px] text-[#354750] leading-relaxed">
            {article.content.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* In-article Reassurance Callout */}
            <div className="my-10 p-6 rounded-card bg-[#F2F6F8] border-l-4 border-[#0B3F5D] space-y-2">
              <h4 className="text-base font-bold text-[#0B3F5D]">
                Planning a project involving this service?
              </h4>
              <p className="text-sm text-[#5B6B75]">
                Amaan provides on-site hydrogeological and geotechnical investigations throughout Osun State and South-West Nigeria. Speak with our field engineers before making final site commitments.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact#enquiry"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B3F5D] hover:underline"
                >
                  <span>Request a Site Inspection</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Back to Blog */}
            <div className="pt-8 border-t border-border flex items-center justify-between">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B3F5D] hover:underline"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to all insights</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="section-padding bg-[#F2F6F8] border-b border-border/40">
          <div className="container-custom">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold tracking-widest text-[#B88A2E] uppercase block mb-1">
                FURTHER READING
              </span>
              <h3 className="text-2xl font-bold text-[#0B3F5D]">
                Related technical insights
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.map((rel) => (
                <div
                  key={rel.slug}
                  className="p-6 rounded-card bg-white border border-border shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-[#B88A2E] uppercase block mb-2">
                      {rel.category}
                    </span>
                    <h4 className="text-lg font-bold text-[#0B3F5D] mb-2">
                      <Link href={`/blog/${rel.slug}`} className="hover:underline">
                        {rel.title}
                      </Link>
                    </h4>
                    <p className="text-xs sm:text-sm text-[#5B6B75] line-clamp-2">
                      {rel.excerpt}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border">
                    <Link
                      href={`/blog/${rel.slug}`}
                      className="text-xs font-semibold text-primary flex items-center gap-1"
                    >
                      <span>Read article</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="section-padding bg-[#0B3F5D] text-white">
        <div className="container-custom text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ready to inspect your site?
          </h2>
          <p className="text-base text-[#D1E0E7]">
            Schedule an on-site consultation with Amaan&apos;s technical drilling and geotechnical team.
          </p>
          <div className="pt-2">
            <Button href="/contact#enquiry" variant="gold" size="lg">
              Request a Service Inspection
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
