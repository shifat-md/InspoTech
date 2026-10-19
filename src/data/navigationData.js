/**
 * Navigation Data
 * NOTE: The main navbar strictly contains only: Home, About, Services, Contact.
 * All other routes (Portfolio, Blog, FAQ, Careers, Process, Policies) are linked in the footer.
 */

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" }
];

export const footerGroups = {
  company: {
    title: "Company",
    links: [
      { name: "Home", path: "/" },
      { name: "About Agency", path: "/about" },
      { name: "Our Team", path: "/about#team" },
      { name: "Careers", path: "/careers" }
    ]
  },
  services: {
    title: "Services",
    links: [
      { name: "All Services", path: "/services" },
      { name: "Full-Stack Web Dev", path: "/services/full-stack-web-development" },
      { name: "Custom Web Applications", path: "/services/custom-web-applications" },
      { name: "API & Backend Systems", path: "/services/api-development-integration" },
      { name: "Website Optimization", path: "/services/website-redesign-optimization" }
    ]
  },
  resources: {
    title: "Resources",
    links: [
      { name: "Portfolio / Case Studies", path: "/portfolio" },
      { name: "Engineering Blog", path: "/blog" },
      { name: "Development Process", path: "/process" },
      { name: "Frequently Asked Questions", path: "/faq" }
    ]
  },
  legal: {
    title: "Legal & Compliance",
    links: [
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Terms of Service", path: "/terms-of-service" },
      { name: "Cookie Policy", path: "/cookie-policy" },
      { name: "Refund / Cancellation", path: "/refund-policy" },
      { name: "Disclaimer", path: "/disclaimer" },
      { name: "Accessibility Statement", path: "/accessibility" }
    ]
  }
};
