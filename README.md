# Egnisher — Modern Full-Stack Development Agency Website

A complete, production-ready, responsive website for **Egnisher**, a premier software development agency focused on **Full-Stack Web Development**.

Built with **Vite**, **React 18**, **JavaScript (ESNext / JSX)**, and **custom CSS design system** (no Tailwind CSS, no TypeScript).

---

## 🚀 Key Highlights & Architectural Features

- **Strict Navigation Standards**: Main navbar contains **strictly the 4 required links** (`Home`, `About`, `Services`, `Contact`) with active link indicator, sticky glassmorphic scroll effect, and working mobile hamburger drawer.
- **Team Section with Working Pagination**: Configurable members per page, numbered page buttons, previous/next controls with boundary disabling, active page highlighting, and graceful SVG/initials avatar fallback.
- **Centralized Editable Content System**: Every piece of website copy, team profile, service, portfolio project, case study, and blog article is decoupled into `src/data/*.js`. Changing content never requires editing UI components.
- **Interactive Visual Effects (React Bits Inspired)**:
  - `SpotlightCard`: Mouse-tracking radial illumination cards
  - `HeroTerminal`: Interactive code editor mockup with syntax styling and one-click copy
  - Pulsing status badges & animated gradients
- **React Slick Sliders**:
  - Testimonial slider with custom breakpoints, star ratings, and avatars
  - Tech stack ticker with responsive continuous autoplay
- **Working Portfolio & Case Studies**:
  - Filterable by category (`All`, `Web Development`, `E-commerce`, `Web Applications`, `UI/UX Implementation`)
  - Real-time search by keyword and tech stack
  - Dedicated case study detail routes (`/portfolio/:id`) with architecture goals, challenges, solutions, and metric outcomes
- **Engineering Blog**:
  - Filterable by topic with search bar and working pagination
  - Dedicated rich article detail pages (`/blog/:id`) with author bios, reading times, tags, and related articles
- **Validated Contact System**:
  - Real-time field validation (Full name, business email format, subject, service dropdown, budget selector, detailed message)
  - Clear success/error alert feedback and simulated dispatch
  - Dedicated integration note for plugging in EmailJS, Resend, or AWS SES
- **Comprehensive Footer & Legal Suite**:
  - Organized columns: `Company`, `Services`, `Resources`, `Legal & Compliance`, `Contact`
  - Working links to all routes, including 6 dedicated policy pages with sidebar switcher:
    - Privacy Policy (`/privacy-policy`)
    - Terms of Service (`/terms-of-service`)
    - Cookie Policy (`/cookie-policy`)
    - Refund / Cancellation Policy (`/refund-policy`)
    - Disclaimer (`/disclaimer`)
    - Accessibility Statement (`/accessibility`)
- **Accessibility & Web Standards**:
  - Semantic HTML landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
  - WCAG AA contrast compliance, keyboard focus rings (`:focus-visible`), and `prefers-reduced-motion` media queries

---

## 🎨 Design System & Color Palette

The global stylesheet `src/styles/variables.css` implements the required brand identity:

```css
:root {
  --color-primary: #642CD7;      /* Primary Purple */
  --color-purple: #7C4DFF;       /* Bright Purple */
  --color-teal: #14B8A6;         /* Teal */
  --color-light-purple: #B996FF; /* Light Purple */
  --color-gray: #667085;         /* Gray */

  --font-heading: "Poppins", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

Google Fonts are loaded in `index.html` for **Poppins** (weights 400-800) and **Inter** (weights 300-700).

---

## 📁 Project Structure

```text
d:/css/agencii/
├── public/
│   ├── favicon.svg                  # Brand favicon
│   └── images/
│       ├── blog/                    # SVG illustrations for blog articles
│       ├── portfolio/               # SVG mockups for case studies
│       └── team/                    # Team portraits with SVG format
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── BlogCard.jsx             # Article preview card
│   │   ├── Button.jsx               # Reusable button with variants and icons
│   │   ├── DynamicIcon.jsx          # React Icons dynamic mapper
│   │   ├── Footer.jsx               # Multi-column footer & newsletter
│   │   ├── HeroTerminal.jsx         # Interactive code terminal component
│   │   ├── Navbar.jsx               # Responsive navbar with strictly 4 links
│   │   ├── Pagination.jsx           # Reusable numbered pagination
│   │   ├── PortfolioCard.jsx        # Project preview card
│   │   ├── ScrollToTop.jsx          # Route change listener & floating button
│   │   ├── SectionHeading.jsx       # Standard section titles with badges
│   │   ├── ServiceCard.jsx          # Spotlight service card
│   │   ├── SpotlightCard.jsx        # Mouse-tracking radial glow container
│   │   ├── TeamCard.jsx             # Team member card with fallback avatar
│   │   ├── TechStackSlider.jsx      # Continuous tech ticker slider
│   │   └── TestimonialSlider.jsx    # React Slick testimonial slider
│   ├── data/
│   │   ├── aboutData.js             # Agency story, mission, values, tech grid
│   │   ├── blogData.js              # Technical articles and content
│   │   ├── faqData.js               # Categorized FAQ questions & answers
│   │   ├── homeData.js              # Hero headline, trust pillars, process
│   │   ├── legalPagesData.js        # Policy documents (Privacy, Terms, etc.)
│   │   ├── navigationData.js        # Navbar items (4 links) & footer groups
│   │   ├── portfolioData.js         # Case studies and metrics
│   │   ├── servicesData.js          # All 10 full-stack development services
│   │   ├── siteConfig.js            # Agency name, contact info, social links
│   │   └── testimonialsData.js      # Sample client testimonials
│   ├── pages/
│   │   ├── About.jsx                # Story, values, and paginated team
│   │   ├── Blog.jsx                 # Filterable blog with search & pagination
│   │   ├── BlogDetails.jsx          # Full article reader with author bio
│   │   ├── Careers.jsx              # Culture, benefits & open roles
│   │   ├── CaseStudy.jsx            # Case study deep dive with metrics
│   │   ├── Contact.jsx              # Validated contact form & agency details
│   │   ├── FAQ.jsx                  # Accordion FAQ sections
│   │   ├── Home.jsx                 # Engaging full-stack agency landing page
│   │   ├── NotFound.jsx             # Custom 404 recovery page
│   │   ├── PolicyPage.jsx           # Universal legal document viewer
│   │   ├── Process.jsx              # 5-phase development lifecycle
│   │   ├── ServiceDetail.jsx        # Individual service scope & deliverables
│   │   └── Services.jsx             # Catalog of 10 services with live search
│   ├── styles/
│   │   ├── components.css           # Modular component styling
│   │   ├── global.css               # Resets, typography, keyframes
│   │   ├── responsive.css           # Tablet & mobile media queries
│   │   └── variables.css            # Brand CSS variables
│   ├── App.jsx                      # Route definitions
│   └── main.jsx                     # Application bootstrap
├── index.html                       # HTML shell with Google Fonts
├── package.json                     # Dependencies and scripts
└── vite.config.js                   # Vite configuration with chunking
```

---

## 🛠️ Getting Started Locally

### Prerequisites
- Node.js (v18+ or v20+)
- npm (v9+)

### Installation & Run

1. Clone or open the project directory:
   ```bash
   cd d:/css/agencii
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch the development server:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:3000`.

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview the production build locally:
   ```bash
   npm run preview
   ```

---

## ✏️ How to Edit Content & Data

All website content is centralized in `src/data/`:

| What you want to edit | Data File | Notes |
| :--- | :--- | :--- |
| Agency Name, Logo Text, Contacts, Stats | `src/data/siteConfig.js` | Update email, phone, address, and stats |
| Main Navigation (strictly 4 links) & Footer links | `src/data/navigationData.js` | Manage navigation items and footer columns |
| Hero Headline, Process Steps, Trust Pillars | `src/data/homeData.js` | Edit hero copies, code snippet, and workflow |
| Agency Story, Mission, Vision, Values | `src/data/aboutData.js` | Edit origin story, values, and tech stack |
| Full-Stack Services & Deliverables | `src/data/servicesData.js` | Add, update, or disable any of the 10 services |
| Portfolio Projects & Case Studies | `src/data/portfolioData.js` | Update project titles, categories, metrics, and images |
| Team Members & Skills | `src/data/teamData.js` | Add or edit members; pagination recalculates automatically |
| Blog Posts & Articles | `src/data/blogData.js` | Add or update articles, author bios, and content blocks |
| Testimonials | `src/data/testimonialsData.js` | Add or update client quotes and star ratings |
| FAQs | `src/data/faqData.js` | Add or edit questions organized by category |
| Policies & Legal Pages | `src/data/legalPagesData.js` | Customize privacy, terms, cookies, and refund templates |

---

## 🔌 External Services & Integration Points

1. **Contact Form**:
   - Located in `src/pages/Contact.jsx`.
   - In production, replace the `setTimeout` simulation in `handleSubmit` with a request to your API route, or a service like [Resend](https://resend.com), [EmailJS](https://www.emailjs.com), or [Formspree](https://formspree.io).
2. **Newsletter Subscription**:
   - Located in `src/components/Footer.jsx`.
   - Connect `handleSubscribe` to your marketing provider (Mailchimp, ConvertKit, Beehiiv).
3. **Team Photos**:
   - Place team headshots inside `public/images/team/` and update the `image` path in `src/data/teamData.js`. If an image fails to load or is omitted, an initials avatar is displayed automatically.
