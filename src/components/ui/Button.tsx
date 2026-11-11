import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "gold" | "outline-light" | "text";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

export default function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  icon,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-btn transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm md:text-[15px]",
    lg: "px-8 py-3.5 text-base",
  };

  const variantStyles = {
    primary: "bg-[#0B3F5D] hover:bg-[#082F46] text-white shadow-sm",
    secondary: "bg-transparent border border-[#0B3F5D] text-[#0B3F5D] hover:bg-[#E8F0F4]",
    gold: "bg-[#B88A2E] hover:bg-[#9E7422] text-[#0B3F5D] shadow-sm font-bold",
    "outline-light": "bg-transparent border border-white/40 text-white hover:bg-white/10",
    text: "p-0 text-primary hover:text-primary-dark underline-offset-4 hover:underline",
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        <span>{children}</span>
        {icon && <span className="ml-2 inline-flex">{icon}</span>}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      <span>{children}</span>
      {icon && <span className="ml-2 inline-flex">{icon}</span>}
    </button>
  );
}
