export const homeData = {
  hero: {
    badge: "Next-Gen Full-Stack Web Development",
    headlinePart1: "We Architect & Build",
    headlineHighlight: "Modern Web Solutions",
    headlinePart2: "That Scale Effortlessly",
    description: "Egnisher is a senior-led engineering agency delivering resilient front-ends, high-throughput backends, and cloud-native digital platforms for innovative businesses worldwide.",
    primaryCta: { label: "Start Your Project", path: "/contact" },
    secondaryCta: { label: "Explore Our Work", path: "/portfolio" },
    terminalSnippet: {
      filename: "Architecture.config.ts",
      lines: [
        { code: "const agency = new FullStackAgency('Egnisher');", comment: "// Production-ready" },
        { code: "await agency.deploy({", comment: "" },
        { code: "  frontend: 'React + Modern CSS + SSR',", comment: "" },
        { code: "  backend: 'Node.js + REST/GraphQL APIs',", comment: "" },
        { code: "  database: 'PostgreSQL + Redis Cache',", comment: "" },
        { code: "  performance: 'Lighthouse 99/100',", comment: "" },
        { code: "  uptime: '99.99% guaranteed SLA'", comment: "" },
        { code: "});", comment: "// Deployed in 420ms" }
      ]
    }
  },

  trust: {
    badge: "Why Global Brands Partner With Us",
    title: "Engineering Excellence Rooted in Integrity & Speed",
    description: "We don't just write code; we design resilient systems that grow with your user base, safeguard your data, and turn technical debt into competitive advantages.",
    pillars: [
      {
        id: "architecture",
        title: "Clean Architecture",
        description: "Maintainable, decoupled codebases built to scale smoothly as your team and feature sets expand.",
        iconName: "FiLayers"
      },
      {
        id: "speed",
        title: "High Performance",
        description: "Sub-second load times, optimized Core Web Vitals, and responsive layouts across every device screen.",
        iconName: "FiZap"
      },
      {
        id: "security",
        title: "Enterprise Security",
        description: "Industry-standard data protection, secure API gateways, and rigorous code reviews prior to release.",
        iconName: "FiShield"
      },
      {
        id: "delivery",
        title: "Transparent Sprints",
        description: "Direct access to lead engineers, continuous integration staging links, and weekly demo updates.",
        iconName: "FiCheckCircle"
      }
    ]
  },

  process: {
    badge: "Our Proven Workflow",
    title: "From Initial Blueprint to High-Scale Deployment",
    subtitle: "A battle-tested methodology designed for predictability, zero downtime, and exceptional software quality.",
    steps: [
      {
        step: "01",
        title: "Discovery & Blueprint",
        description: "We evaluate your product goals, technical constraints, user stories, and outline system architecture blueprints."
      },
      {
        step: "02",
        title: "Architecture & UI Specs",
        description: "Designing database schemas, API contracts, interactive component prototypes, and responsive design systems."
      },
      {
        step: "03",
        title: "Agile Full-Stack Sprints",
        description: "Rapid, test-driven development using modern React, clean APIs, database migrations, and CI/CD automation."
      },
      {
        step: "04",
        title: "Quality Assurance & QA",
        description: "Rigorous cross-browser testing, accessibility (a11y) audits, load testing, and end-to-end user testing."
      },
      {
        step: "05",
        title: "Cloud Release & Evolution",
        description: "Seamless zero-downtime deployment, continuous monitoring, performance tuning, and 24/7 technical support."
      }
    ]
  },

  ctaBanner: {
    badge: "Ready to Accelerate?",
    title: "Let's Build Your Next High-Impact Digital Platform",
    description: "Whether you need a ground-up web application, a full-stack platform modernization, or an API overhaul, our senior engineers are ready to make it happen.",
    buttonText: "Schedule a Discovery Call",
    buttonPath: "/contact"
  }
};
