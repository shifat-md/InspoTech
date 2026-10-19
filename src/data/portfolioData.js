export const portfolioCategories = [
  "All",
  "Web Development",
  "E-commerce",
  "Web Applications",
  "UI/UX Implementation"
];

export const portfolioData = [
  {
    id: "nexus-analytics-platform",
    title: "Nexus Real-Time Analytics Platform",
    category: "Web Applications",
    shortDesc: "Enterprise telemetry dashboard processing millions of daily events with sub-second WebSocket visual updates.",
    image: "/images/portfolio/nexus.svg",
    client: "Sample Client: DataStream Global (Placeholder)",
    duration: "4 Months",
    year: "2024",
    technologies: ["React", "Node.js", "Redis", "WebSockets", "Chart.js", "Docker"],
    overview: "A mission-critical data observability portal built for distributed engineering teams to monitor microservice health and traffic spikes in real time.",
    goals: [
      "Streamline server metrics visualization into a responsive unified portal",
      "Achieve real-time data streaming without browser rendering stalls",
      "Provide custom drag-and-drop widget layouts for enterprise analysts"
    ],
    challenges: [
      "High frequency data payloads causing DOM re-rendering bottlenecks in React",
      "Complex permission levels across disparate operational units"
    ],
    solutions: [
      "Implemented canvas-based visual charts and throttled React state batching",
      "Engineered a Redis publish-subscribe backend layer that filters client-specific streams",
      "Designed an intuitive responsive dashboard layout with modular widgets"
    ],
    outcomes: [
      { metric: "68%", label: "Faster Query Execution" },
      { metric: "< 50ms", label: "WebSocket Push Latency" },
      { metric: "99.99%", label: "System Uptime in Testing" }
    ]
  },
  {
    id: "aurora-eco-store",
    title: "Aurora Sustainable E-Commerce",
    category: "E-commerce",
    shortDesc: "High-speed headless commerce platform featuring instant search, dynamic bundle discounts, and Stripe payments.",
    image: "/images/portfolio/aurora.svg",
    client: "Sample Client: Aurora Goods Inc. (Placeholder)",
    duration: "3 Months",
    year: "2024",
    technologies: ["React", "Stripe API", "Node.js", "PostgreSQL", "CSS Modules"],
    overview: "A direct-to-consumer sustainable apparel brand platform engineered for instantaneous page transitions and frictionless checkout on mobile devices.",
    goals: [
      "Eliminate high checkout cart abandonment rates on mobile viewports",
      "Provide real-time inventory synchronization across multi-warehouse locations",
      "Enable instant client-side filtering and faceted catalog discovery"
    ],
    challenges: [
      "Legacy platform suffered from 4.8 second mobile load times",
      "Third-party payment gateways caused drop-offs during localized payment attempts"
    ],
    solutions: [
      "Architected a lightweight React front-end powered by optimized Vite builds",
      "Constructed a multi-currency Stripe checkout integration with Apple Pay and Google Pay",
      "Integrated instant client-side memoized category filtering"
    ],
    outcomes: [
      { metric: "42%", label: "Increase in Mobile Conversions" },
      { metric: "1.1s", label: "Average First Contentful Paint" },
      { metric: "99/100", label: "Lighthouse Performance Score" }
    ]
  },
  {
    id: "strata-cloud-orchestrator",
    title: "Strata Cloud Infrastructure Manager",
    category: "Web Applications",
    shortDesc: "Cloud management interface allowing DevOps teams to provision multi-region clusters with automated rollback triggers.",
    image: "/images/portfolio/strata.svg",
    client: "Sample Client: Strata Systems (Placeholder)",
    duration: "5 Months",
    year: "2023",
    technologies: ["React", "Go API Gateway", "GraphQL", "Modern CSS", "Docker"],
    overview: "A developer-first administrative tool that simplifies container provisioning and provides interactive topological topology mapping.",
    goals: [
      "Visualize complex interconnected cloud server nodes simply",
      "Enable one-click blue/green deployment switching",
      "Meet strict WCAG 2.1 accessibility criteria for developer tooling"
    ],
    challenges: [
      "Rendering node graphs with over 500 active container instances without lag",
      "Managing complex token authorization lifecycles"
    ],
    solutions: [
      "Built custom SVG topology diagrams with zoom/pan virtualization",
      "Developed an automated token refresh interceptor in client requests",
      "Enforced accessible high-contrast themes and keyboard navigation shortcuts"
    ],
    outcomes: [
      { metric: "75%", label: "Reduction in Deployment Time" },
      { metric: "100%", label: "Keyboard Navigable Controls" },
      { metric: "Zero", label: "Unplanned Cluster Downtime" }
    ]
  },
  {
    id: "zenith-design-system",
    title: "Zenith Design System & UI Library",
    category: "UI/UX Implementation",
    shortDesc: "Comprehensive accessible component library with 45+ modular UI tokens, full keyboard support, and documentation.",
    image: "/images/portfolio/zenith.svg",
    client: "Sample Client: Zenith Tech Group (Placeholder)",
    duration: "2.5 Months",
    year: "2024",
    technologies: ["React", "Pure CSS", "Storybook", "Figma Tokens", "Jest"],
    overview: "A unified enterprise design system uniting 4 disparate web portals into a cohesive, brand-consistent user experience.",
    goals: [
      "Establish a single source of truth for engineering and design teams",
      "Ensure 100% WCAG 2.1 AA accessibility compliance across all components",
      "Deliver zero external CSS framework dependencies"
    ],
    challenges: [
      "Inconsistent typography and spacing across multiple legacy applications",
      "Need for seamless light and dark theme switching without style recalculation flashes"
    ],
    solutions: [
      "Authored clean CSS variables for colors, typography, elevations, and states",
      "Implemented full ARIA roles, focus management, and keyboard event handlers",
      "Built live interactive documentation with copyable JSX snippets"
    ],
    outcomes: [
      { metric: "3.5x", label: "Faster Frontend Feature Delivery" },
      { metric: "100%", label: "WCAG AA Compliance" },
      { metric: "0 kB", label: "Bloated CSS Framework Overhead" }
    ]
  },
  {
    id: "pulse-health-portal",
    title: "Pulse Telehealth Patient Portal",
    category: "Web Development",
    shortDesc: "HIPAA-ready patient engagement web platform featuring video consultation scheduling and secure lab records.",
    image: "/images/portfolio/pulse.svg",
    client: "Sample Client: Pulse Digital Care (Placeholder)",
    duration: "4.5 Months",
    year: "2023",
    technologies: ["React", "Node.js", "PostgreSQL", "WebRTC", "AES-256 Encryption"],
    overview: "A safe, intuitive telehealth web portal designed for elderly and mobile users to connect with healthcare providers remotely.",
    goals: [
      "Create an effortless appointment booking interface with zero confusion",
      "Ensure end-to-end encrypted medical record document transmission",
      "Deliver instant response across low-bandwidth cellular connections"
    ],
    challenges: [
      "Strict data protection regulations and HIPAA compliance demands",
      "Ensuring elderly users with low digital literacy can join consultations effortlessly"
    ],
    solutions: [
      "Engineered automated patient SMS links requiring zero app downloads",
      "Implemented AES-256 field-level database encryption and audit logs",
      "Designed large high-contrast touch targets and streamlined form steps"
    ],
    outcomes: [
      { metric: "98.7%", label: "Appointment Attendance Rate" },
      { metric: "< 2s", label: "Document Encryption Time" },
      { metric: "4.9/5", label: "Patient Usability Rating" }
    ]
  },
  {
    id: "velo-fleet-logistics",
    title: "Velo Real-Time Logistics Tracker",
    category: "Web Applications",
    shortDesc: "Fleet dispatch web application offering interactive route recalculation, driver check-ins, and fuel analytics.",
    image: "/images/portfolio/velo.svg",
    client: "Sample Client: Velo Transit Services (Placeholder)",
    duration: "3.5 Months",
    year: "2024",
    technologies: ["React", "Leaflet Maps", "Express", "MongoDB", "CSS Grid"],
    overview: "A mission control dashboard giving fleet dispatchers complete visual awareness over 2,000+ active cross-country delivery vehicles.",
    goals: [
      "Replace manual spreadsheets with an interactive mapping command center",
      "Alert operators instantaneously to traffic delays or mechanical alerts",
      "Provide predictive arrival estimates based on live telemetry"
    ],
    challenges: [
      "Displaying hundreds of moving vehicle markers without map stutter",
      "Handling intermittent driver mobile network dropouts gracefully"
    ],
    solutions: [
      "Implemented marker clustering algorithms and vectorized map styling",
      "Built offline-first local storage caching with auto-resync upon reconnect",
      "Developed responsive tablet views for warehouse floor supervisors"
    ],
    outcomes: [
      { metric: "24%", label: "Fuel Route Efficiency Gain" },
      { metric: "15 min", label: "Reduction in Driver Idle Time" },
      { metric: "100%", label: "Fleet Coverage Visibility" }
    ]
  }
];
