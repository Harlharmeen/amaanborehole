export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  serviceCategory: string;
  location: string;
  summary: string;
  scopeSummary?: string[];
  featured: boolean;
  statusNote?: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "proj-1",
    slug: "iwo-road-pumping-test",
    title: "Iwo Road Pumping Test & Yield Assessment",
    serviceCategory: "Borehole Drilling",
    location: "Iwo Road, Osun State",
    summary: "Comprehensive multi-stage pumping test and drawdown recovery analysis to establish sustainable daily water discharge capacity.",
    scopeSummary: [
      "Continuous step-drawdown test over 8-hour monitoring cycle",
      "Dynamic water level measurement and recovery curve calculation",
      "Optimal submersible pump sizing recommendations"
    ],
    featured: true,
  },
  {
    id: "proj-2",
    slug: "iwo-road-borehole-drilling",
    title: "Iwo Road Deep Borehole Drilling",
    serviceCategory: "Borehole Drilling",
    location: "Iwo Road, Osun State",
    summary: "Deep rotary percussion drilling through crystalline basement rock, complete with heavy-duty casing, gravel envelope, and airlift development.",
    scopeSummary: [
      "Prior hydrogeological survey coordinate verification",
      "Rotary air-hammer drilling through weathered and fractured bedrock",
      "Precision screen placement and sanitary cement apron seal"
    ],
    featured: true,
  },
  {
    id: "proj-3",
    slug: "oke-ofa-borehole-drilling",
    title: "Oke Ofa Residential Borehole Installation",
    serviceCategory: "Borehole Drilling",
    location: "Oke Ofa, Gbongon, Osun State",
    summary: "End-to-end residential borehole drilling and pump installation providing year-round independent clean water supply for a residential compound.",
    scopeSummary: [
      "Vertical electrical sounding resistivity survey",
      "Deep well drilling with high-pressure uPVC casing",
      "Airlift well development and pump automation setup"
    ],
    featured: true,
  },
  {
    id: "proj-4",
    slug: "gbongon-geotechnical-site-investigation",
    title: "Gbongon Commercial Site Investigation & Soil Boring",
    serviceCategory: "Geotechnical Investigation",
    location: "Gbongon, Osun State",
    summary: "Subsurface exploratory boring and Standard Penetration Tests (SPT) to evaluate soil stratigraphy and bearing capacity for commercial construction.",
    scopeSummary: [
      "Rotary borehole advancement with continuous soil sampling",
      "Standard Penetration Testing at 1.5m intervals",
      "Geotechnical laboratory classification and foundation report"
    ],
    featured: false,
  }
];
