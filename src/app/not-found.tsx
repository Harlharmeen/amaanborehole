import React from "react";
import Link from "next/link";
import Button from "@/ui/Button";
import { ArrowLeft, Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main id="main-content" className="min-h-[70vh] flex items-center justify-center bg-background py-16">
      <div className="container-custom max-w-2xl text-center space-y-6">
        <span className="inline-block px-3.5 py-1 rounded-full bg-[#E8F0F4] text-[#0B3F5D] text-xs font-bold tracking-widest uppercase">
          ERROR 404
        </span>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B3F5D] tracking-tight">
          Page not found
        </h1>

        <p className="text-base sm:text-lg text-[#5B6B75] leading-relaxed max-w-md mx-auto">
          The requested page or technical resource does not exist or may have been relocated.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/" variant="primary" size="md" icon={<Home className="w-4 h-4" />}>
            Return to Homepage
          </Button>
          <Button href="/services" variant="secondary" size="md" icon={<Compass className="w-4 h-4" />}>
            Explore Services
          </Button>
        </div>
      </div>
    </main>
  );
}
