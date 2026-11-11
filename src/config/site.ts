export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  subTagline: string;
  registrationNumber?: string;
  representative?: string;
  contact: {
    phones: string[];
    primaryPhone: string;
    whatsapp: string;
    email: string;
    address: string;
    locationNote?: string;
    mapQuery?: string;
    serviceAreas: string[];
  };
  socials: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
  navigation: {
    label: string;
    href: string;
  }[];
  formEndpoint?: string;
}

export const siteConfig: SiteConfig = {
  name: "Amaan Borehole Drilling & Geotechnical Services",
  shortName: "Amaan",
  tagline: "Groundwork you can trust. Results built to last.",
  subTagline: "Borehole drilling and geotechnical services for property owners, developers and contractors who need clear answers before they build.",
  registrationNumber: "BN: 7884773",
  representative: "Odemakin Sodiq",
  contact: {
    phones: ["+234 810 325 2573", "+234 808 286 5657"],
    primaryPhone: "+234 810 325 2573",
    whatsapp: "+234 808 286 5657",
    email: "amaandrilling@gmail.com",
    address: "Alubarika Shopping Complex, Oke-Ola, Gbongon, Osun State, Nigeria",
    locationNote: "Gbongon, Osun State",
    mapQuery: "Alubarika+Shopping+Complex+Oke-Ola+Gbongon+Osun+State",
    serviceAreas: ["Gbongon", "Osun State", "South-West Nigeria"],
  },
  socials: {
    twitter: "https://x.com/AmaanDrilling",
    facebook: "https://facebook.com/AmaanDrilling",
    instagram: "https://instagram.com/AmaanDrilling",
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT || "",
};
