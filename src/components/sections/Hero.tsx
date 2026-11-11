import React from "react";
import Image from "next/image";
import Button from "@/ui/Button";

export default function Hero() {
  return (
    <section className="w-full bg-[#F2F6F8] pt-12 pb-16 md:pt-20 md:pb-24 border-b border-border/40">
      <div className="container-custom flex flex-col items-center text-center">
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold text-[#202326] tracking-tight leading-[1.08] max-w-4xl">
          Groundwork you can trust. <br className="hidden sm:inline" />
          Results built to last
        </h1>

        {/* Supporting Copy */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-[#4F606A] max-w-2xl font-normal leading-relaxed">
          Borehole drilling and geotechnical services for property owners,
          developers and contractors who need clear answers before they build.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Button
            href="/contact#enquiry"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto min-w-[190px]"
          >
            Request a Service
          </Button>
          <Button
            href="/projects"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto min-w-[180px]"
          >
            Explore Projects
          </Button>
        </div>

        {/* Wide Hero Image Frame */}
        <div className="mt-12 md:mt-16 w-full max-w-[1312px]">
          <div className="relative w-full aspect-[16/9] md:aspect-[21/10] max-h-[640px] rounded-[18px] md:rounded-[22px] overflow-hidden shadow-sm border border-border/80">
            <Image
              src="/assets/borehole-hero-image.png"
              alt="Amaan Borehole Drilling Rig operating in the field"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1440px) 1312px, 1312px"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
