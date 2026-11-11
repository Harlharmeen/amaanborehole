import React from "react";
import Button from "@/ui/Button";
import { siteConfig } from "@/config/site";
import { Phone } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="section-padding bg-gradient-to-b from-[#F2F6F8] to-white border-b border-border/40">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0B3F5D] tracking-tight leading-tight">
            Let’s get your site groundwork working for you.
          </h2>
          <p className="text-base sm:text-lg text-[#5B6B75] max-w-2xl mx-auto leading-relaxed">
            Speak with our engineering team to discuss your project specifications, ground conditions, and schedule an on-site inspection.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/contact#enquiry"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto min-w-[200px]"
            >
              Request Inspection
            </Button>

            <a
              href={`tel:${siteConfig.contact.primaryPhone.replace(/\s+/g, "")}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-btn border border-[#0B3F5D]/30 bg-white text-[#0B3F5D] hover:bg-[#E8F0F4] font-semibold text-[15px] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#B88A2E]" />
              <span>{siteConfig.contact.primaryPhone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
