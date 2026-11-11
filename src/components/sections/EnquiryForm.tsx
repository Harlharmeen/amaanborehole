"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { siteConfig } from "@/config/site";
import { servicesData } from "@/content/services";
import { Phone, MessageSquare, AlertCircle, CheckCircle2, Send, Info } from "lucide-react";

interface FormState {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  location: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  service?: string;
  message?: string;
}

export default function EnquiryForm() {
  const searchParams = useSearchParams();
  const initialServiceSlug = searchParams?.get("service") || "";

  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    location: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error" | "unconfigured">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  // Sync service preselection from query param
  useEffect(() => {
    if (initialServiceSlug) {
      const match = servicesData.find((s) => s.slug === initialServiceSlug);
      if (match) {
        setFormData((prev) => ({ ...prev, service: match.slug }));
      }
    }
  }, [initialServiceSlug]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please provide your full name.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "A valid phone number is required so our team can reach you.";
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.service) {
      newErrors.service = "Please choose the service required.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please provide a brief description of your project or requirements.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Check if form destination endpoint is configured
    if (!siteConfig.formEndpoint) {
      setSubmitStatus("unconfigured");
      setStatusMessage(
        "Form delivery endpoint is awaiting configuration by the business owner. Please use our direct Phone or WhatsApp channels below for immediate service."
      );
      return;
    }

    setSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch(siteConfig.formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setStatusMessage("Thank you. Your request has been received. Our engineering team will contact you shortly.");
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          service: "",
          location: "",
          message: "",
        });
        setErrors({});
      } else {
        setSubmitStatus("error");
        setStatusMessage("We could not process your submission at this time. Please contact us directly by phone or WhatsApp.");
      }
    } catch {
      setSubmitStatus("error");
      setStatusMessage("A network error occurred. Please contact us directly by phone or WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div id="enquiry" className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column: Direct channels and reassurance */}
        <div className="lg:col-span-5 space-y-6">
          <span className="text-[11px] font-bold tracking-widest text-[#B88A2E] uppercase block">
            SERVICE ENQUIRY
          </span>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0B3F5D] leading-tight">
            Tell us what your site needs.
          </h3>
          <p className="text-base text-[#5B6B75] leading-relaxed">
            Fill in the form to discuss your project requirements, schedule a site assessment, or request a tailored estimate. You can also reach our team directly via phone or WhatsApp.
          </p>

          <div className="pt-4 space-y-4">
            <a
              href={`tel:${siteConfig.contact.primaryPhone.replace(/\s+/g, "")}`}
              className="flex items-center gap-4 p-4 rounded-card bg-white border border-border hover:border-primary/40 shadow-xs transition-colors group"
            >
              <div className="w-11 h-11 rounded-full bg-[#E8F0F4] text-[#0B3F5D] flex items-center justify-center shrink-0 group-hover:bg-[#0B3F5D] group-hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-wider text-[#B88A2E] uppercase block">
                  CALL DIRECTLY
                </span>
                <span className="text-sm sm:text-base font-bold text-[#0B3F5D]">
                  {siteConfig.contact.primaryPhone}
                </span>
              </div>
            </a>

            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                "Hello Amaan Borehole & Geotechnical Services, I would like to enquire about your services."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-card bg-white border border-border hover:border-primary/40 shadow-xs transition-colors group"
            >
              <div className="w-11 h-11 rounded-full bg-[#E8F0F4] text-[#0B3F5D] flex items-center justify-center shrink-0 group-hover:bg-[#0B3F5D] group-hover:text-white transition-colors">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-wider text-[#B88A2E] uppercase block">
                  CHAT ON WHATSAPP
                </span>
                <span className="text-sm sm:text-base font-bold text-[#0B3F5D]">
                  {siteConfig.contact.whatsapp}
                </span>
              </div>
            </a>
          </div>

          <div className="p-4 rounded-card bg-[#F2F6F8] border border-border text-xs text-[#5B6B75] leading-relaxed">
            <p className="font-semibold text-[#0B3F5D] mb-1">Office Location</p>
            <p>{siteConfig.contact.address}</p>
          </div>
        </div>

        {/* Right Column: Form Panel */}
        <div className="lg:col-span-7 bg-[#0B3F5D] text-white p-6 sm:p-8 md:p-10 rounded-[18px] shadow-md border border-[#164D6C]">
          <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Request an Assessment or Quote
          </h4>
          <p className="text-xs sm:text-sm text-[#D1E0E7] mb-8">
            Complete the details below and an engineer will review your project parameters.
          </p>

          {/* Status Notifications */}
          {submitStatus === "success" && (
            <div className="mb-6 p-4 rounded-btn bg-[#287A53]/20 border border-[#287A53] text-white flex items-start gap-3 text-sm">
              <CheckCircle2 className="w-5 h-5 text-[#4ade80] shrink-0 mt-0.5" />
              <span>{statusMessage}</span>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mb-6 p-4 rounded-btn bg-[#B42318]/20 border border-[#B42318] text-white flex items-start gap-3 text-sm">
              <AlertCircle className="w-5 h-5 text-[#f87171] shrink-0 mt-0.5" />
              <span>{statusMessage}</span>
            </div>
          )}

          {submitStatus === "unconfigured" && (
            <div className="mb-6 p-4 rounded-btn bg-[#B88A2E]/20 border border-[#B88A2E] text-white flex items-start gap-3 text-xs sm:text-sm">
              <Info className="w-5 h-5 text-[#F5EEDC] shrink-0 mt-0.5" />
              <div className="space-y-2">
                <p className="font-semibold text-[#F5EEDC]">Form Delivery Configuration Pending</p>
                <p>{statusMessage}</p>
                <div className="flex flex-wrap gap-3 pt-1">
                  <a
                    href={`tel:${siteConfig.contact.primaryPhone.replace(/\s+/g, "")}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white text-[#0B3F5D] text-xs font-bold"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Call {siteConfig.contact.primaryPhone}
                  </a>
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#25D366] text-white text-xs font-bold"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {/* Full Name & Phone Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullName" className="block text-xs font-semibold text-[#D1E0E7] mb-1.5">
                  Full Name <span className="text-[#B88A2E]">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Al-ameen Adeola"
                  className={`w-full px-4 py-3 rounded-btn bg-[#082F46] border text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#B88A2E] transition-all ${
                    errors.fullName ? "border-red-400" : "border-[#1E5273]"
                  }`}
                  aria-invalid={!!errors.fullName}
                  aria-describedby={errors.fullName ? "fullName-error" : undefined}
                />
                {errors.fullName && (
                  <p id="fullName-error" className="text-xs text-red-300 mt-1">
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-semibold text-[#D1E0E7] mb-1.5">
                  Phone Number <span className="text-[#B88A2E]">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 0808 286 5657"
                  className={`w-full px-4 py-3 rounded-btn bg-[#082F46] border text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#B88A2E] transition-all ${
                    errors.phone ? "border-red-400" : "border-[#1E5273]"
                  }`}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="text-xs text-red-300 mt-1">
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            {/* Email & Service Required Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-[#D1E0E7] mb-1.5">
                  Email Address <span className="text-white/40 text-[10px]">(Optional)</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@domain.com"
                  className="w-full px-4 py-3 rounded-btn bg-[#082F46] border border-[#1E5273] text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#B88A2E] transition-all"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-xs font-semibold text-[#D1E0E7] mb-1.5">
                  Service Needed <span className="text-[#B88A2E]">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className={`w-full px-4 py-3 rounded-btn bg-[#082F46] border text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#B88A2E] transition-all ${
                    errors.service ? "border-red-400" : "border-[#1E5273]"
                  }`}
                  aria-invalid={!!errors.service}
                  aria-describedby={errors.service ? "service-error" : undefined}
                >
                  <option value="" className="bg-[#082F46] text-white">Select a service...</option>
                  <option value="borehole-drilling" className="bg-[#082F46] text-white">Borehole Drilling</option>
                  <option value="geotechnical-investigation" className="bg-[#082F46] text-white">Geotechnical Investigation</option>
                  <option value="site-investigation" className="bg-[#082F46] text-white">Site Investigation</option>
                  <option value="water-solutions" className="bg-[#082F46] text-white">Water &amp; Related Solutions</option>
                  <option value="not-sure" className="bg-[#082F46] text-white">Not Sure Yet / Consultation</option>
                </select>
                {errors.service && (
                  <p id="service-error" className="text-xs text-red-300 mt-1">
                    {errors.service}
                  </p>
                )}
              </div>
            </div>

            {/* Location */}
            <div>
              <label htmlFor="location" className="block text-xs font-semibold text-[#D1E0E7] mb-1.5">
                Project Site Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="e.g. Oke-Ola, Gbongon, Osun State"
                className="w-full px-4 py-3 rounded-btn bg-[#082F46] border border-[#1E5273] text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#B88A2E] transition-all"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-[#D1E0E7] mb-1.5">
                Project Details / Site Description <span className="text-[#B88A2E]">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about the property, depth expectations, proposed building, or any known water/ground challenges..."
                className={`w-full px-4 py-3 rounded-btn bg-[#082F46] border text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#B88A2E] transition-all ${
                  errors.message ? "border-red-400" : "border-[#1E5273]"
                }`}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className="text-xs text-red-300 mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-btn bg-[#B88A2E] hover:bg-[#9E7422] text-[#0B3F5D] text-base font-bold transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span>{submitting ? "Sending Request..." : "Submit Your Request"}</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
