export interface ServiceItem {
  slug: string;
  title: string;
  badge: string;
  shortDescription: string;
  intro: string;
  overview: string;
  scope: string[];
  whenNeeded: string[];
  approach: {
    step: string;
    title: string;
    description: string;
  }[];
  deliverables: string[];
  faq: {
    question: string;
    answer: string;
  }[];
  seoTitle: string;
  seoDescription: string;
}

export const servicesData: ServiceItem[] = [
  {
    slug: "borehole-drilling",
    title: "Borehole Drilling",
    badge: "WATER ACCESS",
    shortDescription: "Professional drilling for residential, commercial, and agricultural water supply, planned around site geology.",
    intro: "A dependable, clean water source begins with understanding the subsurface conditions before the drill bit touches the ground.",
    overview: "Amaan delivers borehole drilling services built on hydrogeological assessment, proper borehole casing, gravel packing, and thorough well development. We ensure your borehole is drilled to optimal aquifer depth and completed with durable materials designed for long-term water yield.",
    scope: [
      "Geophysical survey & vertical electrical sounding (VES) to identify water-bearing strata",
      "Rotary and percussion drilling in soft formation and hard rock terrains",
      "High-grade uPVC / steel casing and precision screen installation",
      "Graded quartz gravel packing and sanitary seal to prevent surface contamination",
      "Air-lift borehole development and flushing",
      "Pumping test to determine sustainable discharge yield and drawdown",
      "Submersible pump sizing, electrical control panel installation, and surface plumbing",
    ],
    whenNeeded: [
      "When developing a residential home or estate requiring an independent, reliable water supply",
      "For commercial properties, hotels, and hospitals requiring continuous high-volume water",
      "For agricultural irrigation, poultry farms, and processing facilities",
      "When existing municipal or shallow wells fail during the dry season",
    ],
    approach: [
      {
        step: "01",
        title: "Hydrogeological Survey",
        description: "Geophysical assessment using resistivity meters to map subsurface strata and pinpoint the most promising drilling coordinate."
      },
      {
        step: "02",
        title: "Borehole Drilling",
        description: "Drilling using appropriate rotary or DTH hammer rigs down through overburden and fractured bedrock to the target aquifer."
      },
      {
        step: "03",
        title: "Casing & Screen Installation",
        description: "Inserting high-pressure factory-slotted screens and solid casings with gravel envelope to ensure silt-free water intake."
      },
      {
        step: "04",
        title: "Flushing & Development",
        description: "High-pressure air development to purge drilling mud, open geological fractures, and achieve crystal-clear water."
      },
      {
        step: "05",
        title: "Yield Testing & Pump Setup",
        description: "Discharge pumping test to measure recovery rate, followed by tailored submersible pump installation and commissioning."
      }
    ],
    deliverables: [
      "Completed, cased, and developed productive borehole",
      "Drilling log recording strata depth, casing schedule, and static water level",
      "Pumping test yield report with recommended pump discharge rate and operating head",
      "Installed and tested submersible pumping system (when contracted)"
    ],
    faq: [
      {
        question: "Why is a geophysical survey recommended before drilling?",
        answer: "A geophysical survey maps underground formations, rock fractures, and aquifer depth before drilling begins. This minimises the risk of drilling a dry well and ensures the borehole is sited at the most productive point on the parcel."
      },
      {
        question: "How long does borehole drilling typically take?",
        answer: "Most domestic and commercial drilling projects require between 2 to 4 days on-site, depending on geological formation (sedimentary vs crystalline basement rock) and total target depth."
      },
      {
        question: "What determines the cost of drilling a borehole?",
        answer: "Key cost factors include the geological terrain, expected drilling depth, casing material and wall thickness, geological complexity, and the pump horsepower required."
      }
    ],
    seoTitle: "Borehole Drilling Services | Amaan Borehole & Geotechnical",
    seoDescription: "Professional borehole drilling services for homes, estates, farms, and commercial facilities. Accurate hydrogeological survey, precise drilling, and durable pump installation."
  },
  {
    slug: "geotechnical-investigation",
    title: "Geotechnical Investigation",
    badge: "GROUND ANALYSIS",
    shortDescription: "Subsurface soil investigation and bearing capacity analysis to inform foundation design and prevent structural failures.",
    intro: "Every resilient structure relies on what lies beneath. We provide structural and civil engineers with accurate ground parameters.",
    overview: "Our geotechnical investigation services examine subsurface soil and rock strata through standard rotary boring, Dutch cone penetrometer testing (CPT), and Standard Penetration Tests (SPT). We provide quantified engineering recommendations on safe bearing capacity, anticipated settlement, and appropriate foundation types.",
    scope: [
      "Exploratory soil boring and core drilling in soil and rock formations",
      "Standard Penetration Testing (SPT) at regular depth intervals",
      "Dutch Cone Penetrometer Testing (CPT) for continuous resistance profiles",
      "Collection of disturbed and undisturbed tube samples (U4 / Shelby tubes)",
      "Laboratory testing: Atterberg limits, sieve analysis, triaxial shear, consolidation, and moisture content",
      "Groundwater table measurement and seasonal fluctuation appraisal",
      "Comprehensive geotechnical engineering report with allowable bearing capacity recommendations",
    ],
    whenNeeded: [
      "Before designing foundations for multi-storey residential and commercial buildings",
      "For industrial warehouses, factory slabs, and heavy machinery foundations",
      "When planning roads, bridges, culverts, and retaining structures",
      "When investigating signs of structural cracks, differential settlement, or foundation distress",
    ],
    approach: [
      {
        step: "01",
        title: "Desk Study & Layout Planning",
        description: "Reviewing site architectural layouts, proposed column loads, and local geological maps to position boreholes strategically."
      },
      {
        step: "02",
        title: "Field Exploration & In-Situ Tests",
        description: "Mobilising drilling rigs to advance boreholes, perform continuous SPT N-value measurements, and extract representative soil samples."
      },
      {
        step: "03",
        title: "Laboratory Testing",
        description: "Conducting classification, strength, and compressibility tests on retrieved soil specimens in an accredited geotechnical laboratory."
      },
      {
        step: "04",
        title: "Engineering Analysis",
        description: "Calculating ultimate and allowable bearing capacity across shallow (pad/strip/raft) and deep (piled) foundation options."
      },
      {
        step: "05",
        title: "Formal Geotechnical Report",
        description: "Delivering a certified technical report signed by geotechnical specialists for submission to structural engineers and regulatory approval authorities."
      }
    ],
    deliverables: [
      "Certified geotechnical engineering report",
      "Subsurface soil profile logs (borehole logs) with SPT N-values vs depth",
      "Summary tables of soil physical and mechanical index properties",
      "Allowable bearing capacity curves and foundation type recommendations",
      "Estimated total and differential settlement calculations"
    ],
    faq: [
      {
        question: "Why is a geotechnical soil test legally required for multi-storey buildings?",
        answer: "Building regulations and engineering codes require geotechnical data so structural engineers can calculate foundation dimensions safely, preventing catastrophic building collapse and uneven foundation settlement."
      },
      {
        question: "How deep do geotechnical boreholes need to go?",
        answer: "Borehole depths depend on the structure's anticipated load and ground conditions. For low-to-medium rise buildings, boreholes typically range from 10m to 20m; for heavy or high-rise structures on deep foundations, exploration may extend 25m to 40m."
      }
    ],
    seoTitle: "Geotechnical Investigation & Soil Testing | Amaan",
    seoDescription: "Accurate geotechnical site investigations, soil boring, SPT, CPT, and bearing capacity analysis for safe structural foundation design."
  },
  {
    slug: "site-investigation",
    title: "Site Investigation",
    badge: "SITE CLARITY",
    shortDescription: "Pre-construction field assessments to identify terrain, strata, drainage, and ground constraints before project commitment.",
    intro: "Clear ground intelligence reduces financial risk, construction delays, and unexpected site complications.",
    overview: "Amaan's site investigation services deliver structured, evidence-based assessments of raw land and development plots. By examining topographical features, surface drainage, trial pits, overburden thickness, and groundwater proximity, we help developers and property purchasers understand site challenges before construction commences.",
    scope: [
      "Visual terrain appraisal and pre-purchase ground due diligence",
      "Trial pit excavation and visual stratum logging",
      "Surface runoff patterns, natural drainage corridors, and waterlogging risks",
      "Identification of fill material, buried debris, or unconsolidated organic topsoils",
      "Assessment of slope stability and natural erosion hazards",
      "Ground accessibility for heavy construction equipment and transport routes",
    ],
    whenNeeded: [
      "Prior to land acquisition or commercial site purchase",
      "During early architectural master planning and feasibility phases",
      "For civil earthworks, grading, and cut-and-fill volume planning",
      "On sites with challenging slopes, nearby watercourses, or suspicious ground fill",
    ],
    approach: [
      {
        step: "01",
        title: "Site Walkover & Reconnaissance",
        description: "Physical inspection of the parcel, adjacent boundaries, visible rock outcrops, waterlogging indicators, and neighbouring structures."
      },
      {
        step: "02",
        title: "Trial Pit Excavation",
        description: "Excavating test pits up to 3m depth to inspect shallow strata in-situ, record soil horizons, and check for shallow groundwater."
      },
      {
        step: "03",
        title: "Soil Profiling & Infiltration",
        description: "Documenting subsoil consistency, organic content, and natural percolation rates for soakaway and drainage design."
      },
      {
        step: "04",
        title: "Synthesis & Risk Matrix",
        description: "Compiling findings into a clear, actionable summary identifying ground hazards and site preparation prerequisites."
      }
    ],
    deliverables: [
      "Site investigation summary report with photographic documentation",
      "Trial pit lithological logs and layer thicknesses",
      "Groundwater depth observations and seasonal drainage notes",
      "Risk assessment matrix highlighting site development constraints"
    ],
    faq: [
      {
        question: "How does site investigation differ from geotechnical investigation?",
        answer: "Site investigation focuses broadly on physical site conditions, topography, trial pits, surface drainage, and accessibility during early planning. Geotechnical investigation is a deeper technical study with drilling and laboratory tests specifically to calculate engineering foundation loads."
      }
    ],
    seoTitle: "Site Investigation & Pre-Construction Assessment | Amaan",
    seoDescription: "Comprehensive site investigation services. Identify ground constraints, trial pit strata, drainage hazards, and terrain suitability before building."
  },
  {
    slug: "water-solutions",
    title: "Water & Related Solutions",
    badge: "WATER SYSTEMS",
    shortDescription: "Complete water management systems, including treatment filtration, overhead storage, booster pumping, and reticulation.",
    intro: "Drilling the borehole is step one; delivering clean, pressurized water to your taps completes the solution.",
    overview: "Amaan designs and installs robust water management systems that integrate with new and existing boreholes. We ensure raw borehole water is properly analysed, treated to drinking standards, stored securely, and distributed reliably across your property.",
    scope: [
      "Physical, chemical, and microbiological water quality testing",
      "Iron removal systems, aeration units, and sediment multimedia filters",
      "Carbon filtration, water softening, and ultraviolet (UV) sterilisation",
      "Overhead water tank towers (steel stanchions) and surface reservoir installations",
      "Automatic booster pressure pumps and variable-frequency drive (VFD) controllers",
      "Plumbing reticulation, float switch automations, and distribution manifolds",
    ],
    whenNeeded: [
      "When borehole water contains iron staining, odour, hardness, or turbidity",
      "For residential compounds requiring continuous, balanced water pressure across multiple floors",
      "For commercial complexes, schools, and health facilities with high daily consumption",
      "When upgrading manual pumping systems to fully automated, protected operation",
    ],
    approach: [
      {
        step: "01",
        title: "Water Quality Sampling",
        description: "Collecting fresh water samples from the borehole for laboratory chemical and biological analysis."
      },
      {
        step: "02",
        title: "System Sizing & Specification",
        description: "Designing a tailored treatment train, storage capacity, and booster pumping system sized for your peak daily demand."
      },
      {
        step: "03",
        title: "Installation & Mechanical Setup",
        description: "Erecting storage tanks, plumbing filtration vessels, connecting automated controls, and testing pressure valves."
      },
      {
        step: "04",
        title: "Testing & Handover",
        description: "Flushing the system, verifying treated water quality, calibrating automation sensors, and training building maintenance personnel."
      }
    ],
    deliverables: [
      "Commissioned water treatment and distribution installation",
      "Laboratory water test certificate with parameter comparisons to WHO / NSDWQ standards",
      "System operation, backwash, and media maintenance guidelines",
      "Manufacturer warranties on pumps and filtration vessels"
    ],
    faq: [
      {
        question: "Is raw borehole water automatically safe for drinking?",
        answer: "While deep groundwater is often protected from surface contamination, it can still contain dissolved minerals like iron, manganese, high acidity, or microbial bacteria. A laboratory water test is always recommended before consumption."
      },
      {
        question: "Can an existing borehole with dirty or brown water be fixed?",
        answer: "Yes. In most cases, reddish-brown water is caused by dissolved iron oxidising upon contact with air. We install specialized iron-removal and multimedia filtration systems that produce crystal-clear, safe water."
      }
    ],
    seoTitle: "Water Treatment & Storage Solutions | Amaan",
    seoDescription: "Engineered water treatment, filtration, storage tanks, and automated booster pumping systems tailored to borehole installations."
  }
];
