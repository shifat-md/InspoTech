export const blogCategories = [
  "All",
  "Architecture",
  "Performance",
  "Frontend",
  "Backend & API",
  "Best Practices"
];

export const blogData = [
  {
    id: "modern-full-stack-architecture-2025",
    title: "Architecting Resilient Full-Stack Web Applications in 2025",
    category: "Architecture",
    author: "Alex Morgan",
    authorRole: "Principal Architect",
    date: "October 14, 2024",
    readTime: "7 min read",
    image: "/images/blog/architecture.svg",
    excerpt: "How modern development agencies structure decoupled frontends and backends to avoid technical debt and scale painlessly.",
    content: [
      {
        heading: "The Shift Toward Modular Decoupling",
        body: "Over the past several years, web architecture has matured beyond monolithic frameworks and over-engineered microservice sprawl. Today's most resilient full-stack systems embrace clean boundaries: specialized API services with well-defined contracts, paired with lightweight, reactive frontend layers."
      },
      {
        heading: "Why State Synchronization Matters",
        body: "A primary challenge in full-stack applications is keeping client state synchronized with server realities without causing redundant re-renders or stale user interfaces. Utilizing optimistic UI updates backed by idempotent API endpoints ensures your users enjoy an instantaneous feeling application."
      },
      {
        heading: "Database Design First, Code Second",
        body: "Clean schemas dictate clean code. Spending the time during sprint zero to normalize relational data and establish clear indices pays tenfold dividends once production traffic spikes."
      }
    ],
    tags: ["Full-Stack", "Architecture", "System Design", "Node.js"]
  },
  {
    id: "mastering-core-web-vitals-react",
    title: "Mastering Core Web Vitals in Production React Applications",
    category: "Performance",
    author: "Elena Rostova",
    authorRole: "Lead Front-End Engineer",
    date: "September 28, 2024",
    readTime: "5 min read",
    image: "/images/blog/performance.svg",
    excerpt: "Practical strategies to eliminate Cumulative Layout Shift, minimize Interaction to Next Paint, and achieve 95+ Lighthouse scores.",
    content: [
      {
        heading: "Focusing on Interaction to Next Paint (INP)",
        body: "With INP replacing FID as a core metric, developers must measure long tasks that block the main thread. Breaking up complex calculations using requestIdleCallback or web workers keeps interfaces snappy under heavy interaction."
      },
      {
        heading: "Font Loading Without Visual Layout Jitters",
        body: "Cumulative Layout Shift (CLS) is frequently caused by web fonts swapping in after initial text layout. Leveraging font-display: optional or fallback metric matching prevents visible shifts."
      },
      {
        heading: "Asset Optimization at Build Time",
        body: "Modern bundlers like Vite enable targeted code-splitting. Loading non-critical modals and secondary routes on demand slashes initial payload sizes by more than 60%."
      }
    ],
    tags: ["React", "Performance", "INP", "Core Web Vitals"]
  },
  {
    id: "building-secure-scalable-rest-apis",
    title: "Designing Enterprise-Ready RESTful APIs with Node.js",
    category: "Backend & API",
    author: "Marcus Vance",
    authorRole: "Senior Backend Engineer",
    date: "September 12, 2024",
    readTime: "6 min read",
    image: "/images/blog/api.svg",
    excerpt: "Best practices for schema validation, rate-limiting, authentication tokens, and zero-downtime database migrations.",
    content: [
      {
        heading: "Strict Request Payload Validation",
        body: "Never trust client input. Enforcing strict schema validation at the gateway level rejects malformed payloads before they touch your core business services or database layers."
      },
      {
        heading: "Stateless Authentication & Refresh Cycles",
        body: "Employing short-lived JWTs combined with secure HttpOnly refresh cookies provides high security against XSS vulnerabilities while remaining horizontally scalable across multiple server instances."
      },
      {
        heading: "Defensive Rate Limiting",
        body: "Redis-backed sliding-window rate limiters prevent brute force attacks and protect critical endpoints from distributed traffic spikes."
      }
    ],
    tags: ["Node.js", "APIs", "Security", "Backend"]
  },
  {
    id: "css-architecture-without-frameworks",
    title: "Why Pure CSS Architecture Outperforms Utility Framework Bloat",
    category: "Frontend",
    author: "Priya Sharma",
    authorRole: "UI/UX Technologist",
    date: "August 30, 2024",
    readTime: "8 min read",
    image: "/images/blog/css.svg",
    excerpt: "Exploring modern CSS features like CSS custom properties, logical properties, and container queries that make heavy utilities obsolete.",
    content: [
      {
        heading: "The Modern CSS Revolution",
        body: "Modern CSS has evolved remarkably. Features like native CSS variables, clamp() for fluid typography, :has() parent selectors, and subgrid allow developers to construct clean, reusable design systems without thousands of repetitive utility classes."
      },
      {
        heading: "Maintainability in Long-Lived Codebases",
        body: "When team members understand semantic classes like .service-card or .pagination-btn, changes can be rolled out across an entire application with a single variable or rule update, rather than editing hundreds of individual markup elements."
      },
      {
        heading: "Better Runtime Performance",
        body: "Writing lean, authored stylesheets yields smaller HTML payloads and eliminates HTML class clutter, speeding up browser DOM parsing and rendering passes."
      }
    ],
    tags: ["CSS", "Frontend", "Design Systems", "Web Standards"]
  },
  {
    id: "testing-strategies-for-startups",
    title: "Pragmatic Testing Strategies for High-Velocity Startups",
    category: "Best Practices",
    author: "Liam O'Connor",
    authorRole: "QA & Performance Engineer",
    date: "August 15, 2024",
    readTime: "6 min read",
    image: "/images/blog/testing.svg",
    excerpt: "Balancing unit tests, integration suites, and end-to-end smoke tests to deploy with confidence without slowing down feature velocity.",
    content: [
      {
        heading: "The Testing Trophy vs. The Testing Pyramid",
        body: "For web applications, integration tests provide the highest return on investment. Testing how components communicate with API mocks catches real bugs that isolated unit tests frequently miss."
      },
      {
        heading: "Critical Path Smoke Tests",
        body: "Automating 5 to 10 core user journeys (such as checkout, authentication, and contact submission) in Playwright ensures that no critical regression reaches production."
      }
    ],
    tags: ["Testing", "QA", "CI/CD", "Quality"]
  },
  {
    id: "zero-downtime-database-migrations",
    title: "Zero-Downtime Database Migrations at Scale",
    category: "Backend & API",
    author: "Alex Morgan",
    authorRole: "Principal Architect",
    date: "July 22, 2024",
    readTime: "7 min read",
    image: "/images/blog/database.svg",
    excerpt: "How to evolve relational PostgreSQL database schemas in production without locking tables or degrading active user requests.",
    content: [
      {
        heading: "The Expand-and-Contract Pattern",
        body: "Never rename or delete an active column in a single deployment. Always follow the expand, migrate, contract methodology across separate sprint releases."
      },
      {
        heading: "Concurrent Index Creation",
        body: "In PostgreSQL, creating indices on large tables must always use the CONCURRENTLY keyword to avoid long-running exclusive write locks that bring down applications."
      }
    ],
    tags: ["PostgreSQL", "Database", "DevOps", "Reliability"]
  }
];
