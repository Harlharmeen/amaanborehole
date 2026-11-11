import React from "react";

interface ImagePlaceholderProps {
  label?: string;
  sublabel?: string;
  aspectRatio?: "square" | "video" | "wide";
  className?: string;
}

export default function ImagePlaceholder({
  label = "IMAGE PLACEHOLDER",
  sublabel = "Square field / project photograph",
  aspectRatio = "square",
  className = "",
}: ImagePlaceholderProps) {
  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    wide: "aspect-[16/9] md:aspect-[21/9]",
  };

  return (
    <div
      className={`relative w-full ${aspectClasses[aspectRatio]} bg-gradient-to-br from-[#E8EFF3] to-[#DCE7ED] border border-[#C9D7DE] rounded-card overflow-hidden flex flex-col items-center justify-center p-6 text-center select-none ${className}`}
    >
      {/* Grid Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(#8FA6B4 1px, transparent 1px)`,
          backgroundSize: "20px 20px"
        }}
      />

      {/* Framing corners */}
      <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#8FA6B4]/60 pointer-events-none" />
      <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#8FA6B4]/60 pointer-events-none" />
      <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#8FA6B4]/60 pointer-events-none" />
      <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#8FA6B4]/60 pointer-events-none" />

      {/* Center crosshair icon */}
      <div className="relative z-10 w-12 h-12 rounded-xl bg-white/80 border border-[#A9BBC5] shadow-xs flex items-center justify-center mb-3">
        <svg className="w-6 h-6 text-[#0B3F5D]/75" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v16m8-8H4" />
        </svg>
      </div>

      {/* Labels */}
      <div className="relative z-10">
        <p className="text-[11px] font-bold tracking-widest text-[#456171] uppercase">
          {label}
        </p>
        {sublabel && (
          <p className="text-xs text-[#728894] mt-1 font-normal">
            {sublabel}
          </p>
        )}
      </div>
    </div>
  );
}
