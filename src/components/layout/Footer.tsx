import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#082F46] text-white border-t border-[#134563]">
      <div className="container-custom pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md" aria-label="Amaan Homepage">
              <div className="relative h-12 w-44 sm:h-14 sm:w-52 md:h-16 md:w-56">
                <Image
                  src="/assets/logo-white.png"
                  alt="Amaan Borehole Drilling & Geotechnical Services"
                  fill
                  sizes="(max-width: 640px) 176px, 224px"
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-white/75 text-sm leading-relaxed max-w-sm pt-2">
              We deliver safe, precise, and regulation-compliant borehole drilling and geotechnical soil investigation services across residential, commercial, and industrial projects.
            </p>
            {siteConfig.registrationNumber && (
              <p className="text-xs text-[#B88A2E] font-medium tracking-wide">
                Registered Enterprise: {siteConfig.registrationNumber}
              </p>
            )}
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-white/75">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Amaan
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Projects &amp; Fieldwork
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Technical Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-white/75">
              <li>
                <Link href="/services/borehole-drilling" className="hover:text-white transition-colors">
                  Borehole Drilling
                </Link>
              </li>
              <li>
                <Link href="/services/geotechnical-investigation" className="hover:text-white transition-colors">
                  Geotechnical Investigation
                </Link>
              </li>
              <li>
                <Link href="/services/site-investigation" className="hover:text-white transition-colors">
                  Site Investigation
                </Link>
              </li>
              <li>
                <Link href="/services/water-solutions" className="hover:text-white transition-colors">
                  Water &amp; Related Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase">
              Contact Info
            </h4>
            <ul className="space-y-3 text-sm text-white/75">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B88A2E] shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B88A2E] shrink-0" />
                <div className="flex flex-col">
                  {siteConfig.contact.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s+/g, "")}`}
                      className="hover:text-white transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#B88A2E] shrink-0" />
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: {siteConfig.contact.whatsapp}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B88A2E] shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-12 pt-8 border-t border-[#134563] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-white transition-colors">
              Request Inspection
            </Link>
            <span className="text-white/30">•</span>
            <span>Operating in {siteConfig.contact.serviceAreas.join(", ")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
