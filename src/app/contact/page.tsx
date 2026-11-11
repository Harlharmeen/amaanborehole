import React, { Suspense } from "react";
import type { Metadata } from "next";
import Breadcrumbs from "@/ui/Breadcrumbs";
import EnquiryForm from "@/components/sections/EnquiryForm";
import { siteConfig } from "@/config/site";
import { Phone, Mail, MapPin, MessageSquare, Clock, Map } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us & Request a Service | Amaan",
  description:
    "Contact Amaan Borehole Drilling & Geotechnical Services. Call, message on WhatsApp, or submit your project details for an inspection quote.",
};

export default function ContactPage() {
  return (
    <main id="main-content" className="bg-background">
      {/* Page Header */}
      <div className="bg-[#F2F6F8] border-b border-border/40 pt-8 pb-14">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: "Contact Us" }]} />
          <div className="mt-4 max-w-3xl">
            <span className="text-xs font-bold tracking-widest text-[#B88A2E] uppercase block mb-2">
              CONTACT &amp; ENQUIRIES
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B3F5D] tracking-tight leading-tight">
              Get in touch with our engineering team.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[#5B6B75] leading-relaxed">
              Whether planning a new borehole, requiring foundation soil testing, or seeking site investigation advice, we are ready to discuss your project.
            </p>
          </div>
        </div>
      </div>

      {/* Main Section: Form + Contact Channels */}
      <section className="section-padding bg-white border-b border-border/40">
        <div className="container-custom">
          <Suspense fallback={<div className="p-12 text-center text-muted">Loading enquiry form...</div>}>
            <EnquiryForm />
          </Suspense>
        </div>
      </section>

      {/* Location & Map Block */}
      <section className="section-padding bg-[#F2F6F8] border-b border-border/40">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold tracking-widest text-[#B88A2E] uppercase block">
                OFFICE LOCATION &amp; COVERAGE
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B3F5D]">
                Visit or locate our base in Gbongon, Osun State.
              </h2>
              <div className="space-y-3 pt-2 text-sm text-[#5B6B75]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#B88A2E] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#0B3F5D] block">Address:</span>
                    <span>{siteConfig.contact.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#B88A2E] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#0B3F5D] block">Operational Hours:</span>
                    <span>Monday – Saturday: 8:00 AM – 6:00 PM</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Map className="w-5 h-5 text-[#B88A2E] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#0B3F5D] block">Primary Service Region:</span>
                    <span>{siteConfig.contact.serviceAreas.join(", ")}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href={`https://maps.google.com/?q=${siteConfig.contact.mapQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-btn bg-[#0B3F5D] hover:bg-[#082F46] text-white font-semibold text-sm transition-colors shadow-xs"
                >
                  <Map className="w-4 h-4 text-[#B88A2E]" />
                  <span>Open Directions in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Visual Location Frame */}
            <div className="lg:col-span-7">
              <div className="aspect-[16/10] w-full rounded-card bg-gradient-to-br from-[#E6EEF2] to-[#DCE7ED] border border-border p-8 flex flex-col justify-between shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded bg-white text-[#0B3F5D] text-xs font-bold uppercase tracking-wider">
                    OSUN STATE, NIGERIA
                  </span>
                  <span className="text-xs font-medium text-[#758894]">
                    Gbongon Operational Base
                  </span>
                </div>

                <div className="text-center my-auto py-6">
                  <div className="w-12 h-12 rounded-full bg-[#0B3F5D] text-[#B88A2E] flex items-center justify-center mx-auto mb-3 shadow-sm">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0B3F5D]">
                    Alubarika Shopping Complex
                  </h3>
                  <p className="text-xs text-[#5B6B75] mt-1 max-w-sm mx-auto">
                    Oke-Ola, Gbongon, Osun State. Mobilising field rigs and engineering survey crews across South-West Nigeria.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#CFDCE3] flex items-center justify-between text-xs text-[#0B3F5D] font-semibold">
                  <span>Site Visits &amp; Rig Mobilisation</span>
                  <a
                    href={`tel:${siteConfig.contact.primaryPhone.replace(/\s+/g, "")}`}
                    className="hover:underline flex items-center gap-1"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#B88A2E]" />
                    <span>Call Base Office</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
