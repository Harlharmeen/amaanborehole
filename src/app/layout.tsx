import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amaandrilling.com"),
  title: {
    default: `${siteConfig.name} | Borehole Drilling & Geotechnical Services`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.subTagline,
  keywords: [
    "Borehole drilling",
    "Geotechnical investigation",
    "Site investigation",
    "Soil testing",
    "Water treatment solutions",
    "Osun State",
    "Nigeria drilling engineers",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://amaandrilling.com",
    title: `${siteConfig.name} | Groundwork You Can Trust`,
    description: siteConfig.subTagline,
    siteName: siteConfig.name,
    images: [
      {
        url: "/assets/borehole-hero-image.png",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.subTagline,
    images: ["/assets/borehole-hero-image.png"],
  },
  icons: {
    icon: "/assets/logo-mark.png",
    apple: "/assets/logo-mark.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-background text-text antialiased">
        {/* Accessible skip link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-primary focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>

        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
