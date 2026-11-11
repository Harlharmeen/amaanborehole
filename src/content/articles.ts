export interface ArticleItem {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishedDate?: string;
  author?: string;
  excerpt: string;
  content: string[];
  seoTitle: string;
  seoDescription: string;
}

export const articlesData: ArticleItem[] = [
  {
    slug: "what-to-consider-before-drilling-a-borehole",
    title: "What to Consider Before Drilling a Borehole",
    category: "BOREHOLE PLANNING",
    readTime: "5 min read",
    publishedDate: "November 2026",
    author: "Technical Team",
    excerpt: "Essential factors every property owner, developer, and contractor must review prior to mobilising a drilling rig on site.",
    content: [
      "Securing an independent, reliable source of clean water through a borehole is one of the most rewarding investments for any residential or commercial property. However, drilling without adequate planning can lead to dry wells, collapsed casings, contaminated water, or unnecessary costs.",
      "1. Prior Hydrogeological & Geophysical Survey: Surface appearances give zero indication of underground geological formations. A professional geophysical survey measures electrical resistivity across the subsurface to map fractured bedrock, weathering thickness, and aquifer zones. Siting the borehole based on scientific measurements significantly increases the probability of a high-yielding, sustainable well.",
      "2. Safe Distance from Contamination Sources: Groundwater safety requires strict adherence to environmental separation buffers. Boreholes should maintain a safe minimum distance (typically at least 15 to 30 meters) from soakaways, septic absorption pits, fuel storage, and refuse dumps to prevent biological or chemical leachate from reaching the aquifer.",
      "3. Material Quality & Casing Standards: A borehole is only as durable as the casing lining its walls. In unbonded sedimentary formations and weathered rock, high-grade non-corrosive uPVC or heavy-duty steel casings prevent the borehole walls from caving in. Precision-slotted intake screens and graded silica gravel packing filter out fine sand before water enters the pump chamber.",
      "4. Yield Testing and Proper Pump Sizing: Installing an oversized submersible pump in a low-recovery borehole leads to rapid dry running and premature motor burn-out. A continuous pumping test measures dynamic drawdown and recharge rate, allowing engineers to install the correct horsepower pump and optimal depth setting."
    ],
    seoTitle: "What to Consider Before Drilling a Borehole | Amaan Insights",
    seoDescription: "Practical guide to borehole planning: hydrogeological survey, septic tank buffers, casing selection, and pump sizing."
  },
  {
    slug: "what-is-a-geotechnical-investigation",
    title: "What Is a Geotechnical Investigation and Why Is It Essential?",
    category: "GEOTECHNICAL",
    readTime: "4 min read",
    publishedDate: "November 2026",
    author: "Technical Team",
    excerpt: "An engineering breakdown of soil testing, Standard Penetration Tests, and safe bearing capacity for structural integrity.",
    content: [
      "Before a single cubic meter of concrete is poured for foundations, structural engineers must know the physical, mechanical, and chemical properties of the ground that will bear the building's permanent weight. This is the role of a geotechnical investigation.",
      "What Happens During a Geotechnical Soil Test: Specialist exploration teams advance boreholes to predetermined depths across the building footprint. At regular depth intervals (usually every 1.5 meters), standard penetration tests (SPT) are performed by dropping a standard hammer weight to count the blows required to drive a split-barrel sampler. This establishes the in-situ relative density of sands or consistency of clays.",
      "Laboratory Testing & Stratigraphic Classification: Retrieved soil cores and undisturbed tube samples are transferred to an accredited laboratory. Here, technicians measure moisture content, particle size distribution (sieve analysis), liquid and plastic limits (Atterberg limits), cohesion, and shear angles through triaxial or direct shear apparatus.",
      "Preventing Catastrophic Differential Settlement: Structural damage rarely occurs because soil fails entirely; it occurs because one section of a building settles 30mm while an adjacent corner settles only 5mm. Geotechnical analysis predicts both total and differential settlement, enabling the structural engineer to design safe pad footings, an engineered raft foundation, or ground-bearing piles."
    ],
    seoTitle: "What Is a Geotechnical Investigation? | Amaan Engineering",
    seoDescription: "Learn how geotechnical soil testing, borehole drilling, and bearing capacity analysis protect buildings from structural failure and settlement."
  },
  {
    slug: "why-site-investigation-matters-before-construction",
    title: "Why Site Investigation Matters Before Construction Begins",
    category: "SITE PREPARATION",
    readTime: "6 min read",
    publishedDate: "November 2026",
    author: "Technical Team",
    excerpt: "How pre-purchase site reconnaissance, trial pits, and drainage appraisals save significant project time and construction budgets.",
    content: [
      "Every construction project begins with assumptions. When those assumptions are made about underground conditions without on-site investigation, project budgets and construction schedules frequently spiral out of control.",
      "Uncovering Buried Ground Hazards: Land plots that appear flat and clean on the surface may conceal backfilled construction rubble, organic peat, uncompacted garbage, or high seasonal water tables. A preliminary site investigation utilizing test pits and visual stratigraphic logging reveals these subterranean conditions before contracts are finalized.",
      "Surface Drainage and Waterlogging Appraisal: Natural overland water pathways during torrential rainstorms can severely threaten foundation excavations and structural basements. Mapping surface elevation, soil percolation rates, and natural slope gradients informs civil drainage design, retention walls, and site earthworks.",
      "Minimizing Construction Variations: The single most common cause of contractual cost claims on civil construction sites is 'unforeseen ground conditions.' A well-documented site investigation report eliminates ambiguity, allows accurate earthwork cut-and-fill calculations, and provides clear bidding specifications for main contractors."
    ],
    seoTitle: "Why Site Investigation Matters Before Construction | Amaan",
    seoDescription: "Understand the importance of site investigation, trial pits, terrain profiling, and water table mapping before acquiring land or building."
  }
];
