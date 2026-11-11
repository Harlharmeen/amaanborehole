import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "accent" | "muted" | "pill";
  className?: string;
}

export default function Badge({
  children,
  variant = "pill",
  className = "",
}: BadgeProps) {
  const styles = {
    pill: "bg-[#E6EEF2] text-[#0B3F5D] px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase inline-flex items-center gap-1.5",
    primary: "bg-[#0B3F5D] text-white px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider",
    accent: "bg-[#F5EEDC] text-[#B88A2E] px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider",
    muted: "bg-surface border border-border text-muted px-2.5 py-0.5 rounded text-xs font-medium",
  };

  return (
    <span className={`${styles[variant]} ${className}`}>
      {children}
    </span>
  );
}
