import React from "react";
import Badge from "./Badge";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={`max-w-3xl ${isCenter ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <div className="mb-3">
          <Badge variant={isDark ? "accent" : "pill"}>
            {eyebrow}
          </Badge>
        </div>
      )}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight ${
          isDark ? "text-white" : "text-[#0B3F5D]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDark ? "text-white/80" : "text-[#5B6B75]"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
