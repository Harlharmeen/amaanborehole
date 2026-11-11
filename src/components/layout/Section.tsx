import React from "react";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: "default" | "surface" | "primary" | "soft";
}

export default function Section({
  children,
  id,
  className = "",
  background = "default",
}: SectionProps) {
  const bgStyles = {
    default: "bg-background",
    surface: "bg-white",
    primary: "bg-[#0B3F5D] text-white",
    soft: "bg-[#E8F0F4]",
  };

  return (
    <section id={id} className={`section-padding ${bgStyles[background]} ${className}`}>
      {children}
    </section>
  );
}
