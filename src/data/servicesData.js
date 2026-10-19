export const servicesData = [
  {
    id: "full-stack-web-development",
    title: "Full-Stack Web Development",
    shortDesc: "End-to-end development combining responsive React interfaces with robust Node.js server architectures and optimized databases.",
    fullDesc: "Our flagship service covers the complete software lifecycle. We architect and implement unified web solutions where client-side interactivity connects flawlessly to high-performance backend microservices and databases.",
    icon: "FiLayers",
    tags: ["React", "Node.js", "PostgreSQL", "Full-Stack"],
    benefits: [
      "Unified architecture avoiding frontend-backend communication bottlenecks",
      "Consistent TypeScript or modern JavaScript across the entire stack",
      "Production-ready deployment scripts with CI/CD automation",
      "Scalable database models engineered for high concurrency"
    ],
    deliverables: [
      "Complete responsive web application",
      "Production RESTful / GraphQL API service",
      "Database migration scripts & schema documentation",
      "Deployment pipeline & staging environment"
    ]
  },
  {
    id: "custom-web-applications",
    title: "Custom Web Applications",
    shortDesc: "Tailored SaaS platforms, internal business portals, and bespoke customer-facing tools built for high transaction volumes.",
    fullDesc: "When off-the-shelf software falls short, we engineer custom web applications tailored precisely to your operational workflow, compliance standards, and competitive strengths.",
    icon: "FiCpu",
    tags: ["SaaS", "Dashboard", "Auth Systems", "Real-Time"],
    benefits: [
      "Custom role-based permissions (RBAC) and enterprise authentication",
      "Real-time event streaming with WebSockets and Redis",
      "Intuitive administrative control panels and analytical dashboards",
      "Multi-tenant or dedicated database architecture options"
    ],
    deliverables: [
      "Interactive multi-role application suite",
      "Admin telemetry and user management panel",
      "Comprehensive test suites & documentation",
      "Enterprise security audit report"
    ]
  },
  {
    id: "front-end-development",
    title: "Front-End Development",
    shortDesc: "Ultra-fast, accessible, and responsive user interfaces built with React, modern CSS architecture, and smooth interactions.",
    fullDesc: "We translate design visions into pixel-perfect, accessible, and blazingly fast front-end experiences. We prioritize micro-interactions, responsive adaptability, and Core Web Vitals optimization.",
    icon: "FiLayout",
    tags: ["React", "Modern CSS", "Accessibility", "Animations"],
    benefits: [
      "Lighthouse scores consistently exceeding 95+ in Performance & a11y",
      "Smooth 60fps animations with hardware acceleration and reduced-motion support",
      "Cross-browser compatibility verified on modern engines",
      "Reusable component design systems adhering to atomic principles"
    ],
    deliverables: [
      "Modular React component library",
      "Clean CSS design tokens and variables",
      "Interactive states, hover animations, and loading skeletons",
      "Responsive layout suite for mobile, tablet, and desktop"
    ]
  },
  {
    id: "back-end-development",
    title: "Back-End Development",
    shortDesc: "Resilient server-side architectures, business logic execution, data pipelines, and scalable microservices.",
    fullDesc: "The engine beneath every great digital experience. We construct secure, fault-tolerant backend services capable of handling thousands of concurrent requests with low latency.",
    icon: "FiServer",
    tags: ["Node.js", "Express", "Microservices", "Security"],
    benefits: [
      "High-throughput request handling with non-blocking event loops",
      "Robust error handling, logging, and performance telemetry",
      "Rate-limiting, CORS, and strict payload sanitization",
      "Scalable horizontal container orchestration with Docker"
    ],
    deliverables: [
      "Containerized backend API services",
      "Authentication and token management system",
      "Automated unit and integration test suites",
      "Structured error-tracking and logging setup"
    ]
  },
  {
    id: "api-development-integration",
    title: "API Development & Integration",
    shortDesc: "Designing secure RESTful and GraphQL APIs alongside seamless third-party service connections (Stripe, Twilio, CRMs).",
    fullDesc: "We build standardized, well-documented APIs that connect your software ecosystem seamlessly. We also integrate third-party payment gateways, messaging tools, analytics, and external microservices.",
    icon: "FiShare2",
    tags: ["REST", "GraphQL", "Webhooks", "Third-Party"],
    benefits: [
      "OpenAPI / Swagger interactive documentation for easy partner consumption",
      "Idempotent webhook handlers with automated retry logic",
      "Zero-downtime versioning and backward compatibility",
      "Secure OAuth2, JWT, and API key token authentication"
    ],
    deliverables: [
      "Complete OpenAPI 3.0 specification",
      "Webhook receiver & dispatching engine",
      "Custom third-party connector adapters",
      "API rate-limiting and quota monitoring rules"
    ]
  },
  {
    id: "database-design",
    title: "Database Design & Optimization",
    shortDesc: "Normalized relational schemas, NoSQL document stores, high-speed Redis caching, and intelligent query optimization.",
    fullDesc: "Data integrity is paramount. We design resilient relational schemas and NoSQL structures, optimize slow queries with composite indexing, and implement caching layers that reduce database loads.",
    icon: "FiDatabase",
    tags: ["PostgreSQL", "MongoDB", "Redis", "Indexing"],
    benefits: [
      "Drastic reduction in query response times via indexing and caching",
      "ACID compliant transactions preventing data corruption",
      "Automated backup procedures and point-in-time recovery plans",
      "Clear migration pathways for seamless schema versioning"
    ],
    deliverables: [
      "Entity-Relationship diagrams and data dictionaries",
      "Optimized schema migration scripts",
      "Redis caching layer integration",
      "Stress testing and benchmark report"
    ]
  },
  {
    id: "ecommerce-development",
    title: "E-Commerce Development",
    shortDesc: "High-converting online store architectures with frictionless checkout funnels, inventory syncing, and payment integrations.",
    fullDesc: "We build customized e-commerce platforms engineered for conversion and speed. From dynamic product catalogs to secure checkout flows with Stripe, PayPal, and digital wallets.",
    icon: "FiShoppingBag",
    tags: ["E-Commerce", "Stripe", "Cart Logic", "Inventory"],
    benefits: [
      "Sub-second checkout workflows maximizing purchase completion",
      "Automated tax, currency, and shipping rate calculations",
      "Real-time inventory decrementing and stock alerts",
      "PCI-compliant payment processing without customer data leakage"
    ],
    deliverables: [
      "Custom product catalog and filter engine",
      "Persistent cart and guest/account checkout flow",
      "Order management and tracking dashboard",
      "Automated email receipt integration"
    ]
  },
  {
    id: "website-redesign-optimization",
    title: "Website Redesign & Optimization",
    shortDesc: "Modernizing legacy web presences into modern, fast, and SEO-optimized digital platforms with high Core Web Vitals.",
    fullDesc: "Is your legacy website sluggish or hard to maintain? We audit and reconstruct outdated web properties, transforming them into responsive, ultra-fast applications that rank higher on search engines.",
    icon: "FiZap",
    tags: ["Audit", "Refactoring", "Core Web Vitals", "SEO"],
    benefits: [
      "Massive reduction in page weight and JavaScript bundle size",
      "Immediate lift in Google PageSpeed and Core Web Vitals scores",
      "Retained SEO ranking with precision 301 redirect architecture",
      "Modernized visual design aligned with contemporary brand standards"
    ],
    deliverables: [
      "Comprehensive performance and code audit report",
      "Fully re-engineered modern web interface",
      "Structured data (Schema.org) and SEO metadata implementation",
      "Before-and-after performance benchmark comparison"
    ]
  },
  {
    id: "website-maintenance-support",
    title: "Website Maintenance & Support",
    shortDesc: "Continuous security updates, dependency patching, uptime telemetry, bug fixes, and SLA-backed ongoing development.",
    fullDesc: "Software requires constant vigilance. Our ongoing maintenance plans protect your investment through regular security updates, automated backups, performance health checks, and priority feature requests.",
    icon: "FiShield",
    tags: ["24/7 Monitoring", "Security", "Patching", "SLA"],
    benefits: [
      "Guaranteed response times backed by transparent Service Level Agreements",
      "Proactive dependency vulnerability scanning and zero-day patching",
      "Automated off-site database backups with tested restore scripts",
      "Monthly performance and health reporting delivered directly to you"
    ],
    deliverables: [
      "24/7 automated uptime and latency monitoring",
      "Monthly dependency security updates",
      "Dedicated developer hours for ongoing improvements",
      "Priority emergency incident response channel"
    ]
  },
  {
    id: "ui-implementation-responsive-design",
    title: "UI Implementation & Responsive Design",
    shortDesc: "Turning Figma and design system tokens into flawless, accessible HTML and CSS layouts adapted for all viewports.",
    fullDesc: "We obsess over design fidelity. We faithfully transform Figma or Adobe XD wireframes into pixel-perfect React components, ensuring flawless readability across handheld phones, tablets, and ultrawide screens.",
    icon: "FiMonitor",
    tags: ["Figma to Code", "Responsive", "Cross-Device", "Design Tokens"],
    benefits: [
      "100% fidelity to designer wireframes and typography specs",
      "Fluid scaling typography and responsive spacing rules",
      "Keyboard navigable and screen reader tested (WCAG AA)",
      "Dark and light theme support readiness"
    ],
    deliverables: [
      "Complete set of responsive screen views",
      "Interactive UI states (hover, focus, disabled, active)",
      "Styleguide and component documentation",
      "Cross-device QA validation across iOS, Android, and desktop"
    ]
  }
];
