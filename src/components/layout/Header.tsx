"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="w-full bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b border-border transition-colors">
      <div className="container-custom h-20 md:h-24 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md py-1"
          aria-label="Amaan Homepage"
        >
          <div className="relative h-11 w-40 sm:h-12 sm:w-44 md:h-[50px] md:w-[174px]">
            <Image
              src="/assets/logo.png"
              alt="Amaan Borehole Drilling & Geotechnical Services"
              fill
              priority
              sizes="(max-width: 640px) 160px, 174px"
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium" aria-label="Main Navigation">
          {siteConfig.navigation.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-2 text-text/80 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1 ${
                  isActive ? "text-primary font-semibold" : ""
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1 right-1 h-[2.5px] bg-[#B88A2E] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/contact#enquiry"
            className="inline-flex items-center justify-center px-6 py-3 rounded-btn bg-[#0B3F5D] hover:bg-[#082F46] text-white text-[15px] font-semibold transition-all duration-200 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
          >
            Request a Service
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex lg:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-btn text-primary hover:bg-primary-soft transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-white px-6 py-6 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
            {siteConfig.navigation.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-base font-medium py-2 px-3 rounded-md transition-colors flex items-center justify-between ${
                    isActive
                      ? "bg-primary-soft text-primary font-semibold"
                      : "text-text hover:bg-background"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#B88A2E]" />}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-border">
              <Link
                href="/contact#enquiry"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-btn bg-[#0B3F5D] hover:bg-[#082F46] text-white font-semibold transition-colors text-center"
              >
                <span>Request a Service</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
