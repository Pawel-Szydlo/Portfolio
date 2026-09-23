import { PROJECT_MEDIA, TECHNOLOGY_CONSTANTS } from "@/shared/config/constants"

export type Technology = { name: string; mark: string; icon: string; tone: string }

export type Project = {
  slug: string
  index: string
  title: string
  type: string
  description: string
  fullDescription: string
  tags: string[]
  accent: "lime" | "blue" | "peach"
  href?: string
  linkLabel?: string
  role: string
  impact: string
  teamContext: string
  metrics: string[]
  leadership: string
  highlights: string[]
  approach: string[]
  media: { src: string; alt: string; label: string }[]
}

export const services = [
  {
    number: "01",
    title: "Product frontends",
    text: "Interfaces that feel clear, fast and dependable — from first component to production release.",
  },
  {
    number: "02",
    title: "Frontend architecture",
    text: "Pragmatic foundations, design systems and technical direction that help teams move with confidence.",
  },
  {
    number: "03",
    title: "Quality by default",
    text: "Accessible, responsive and resilient experiences with performance and maintainability built in.",
  },
]

export const impactPillars = [
  {
    number: "01",
    title: "Product impact",
    text: "I turn complex product requirements into interfaces people can understand, trust and use every day.",
    accent: "lime",
  },
  {
    number: "02",
    title: "Technical direction",
    text: "I create pragmatic frontend foundations that keep teams fast: clear architecture, resilient states and quality built in.",
    accent: "blue",
  },
  {
    number: "03",
    title: "Team leadership",
    text: "I help teams make better decisions, share context and ship with confidence through mentoring and collaboration.",
    accent: "peach",
  },
] as const

export const engineeringPrinciples = [
  "Systems over one-off screens",
  "Accessible by default",
  "Small, visible iterations",
  "Calm ownership in complex moments",
]

export const projects: Project[] = [
  {
    slug: "nightly-extension",
    index: "01",
    title: "Nightly Extension",
    type: "Browser extension · Wallet UX",
    description:
      "A production Chrome and Firefox extension for wallet management, assets, transactions and blockchain integrations.",
    fullDescription:
      "A multichain wallet extension where clarity and trust matter at every step. I worked across wallet UX, extension constraints, API integrations and the component system behind the product.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Storybook", "Playwright"],
    accent: "lime",
    href: "https://chromewebstore.google.com/detail/nightly/fiikommddbeccaoicoejoniammnalkfa?hl=en",
    linkLabel: "View on Chrome Web Store",
    role: "Senior Frontend Engineer & Team Lead",
    impact: "Helped shape a trusted wallet experience used by approximately 300k people.",
    teamContext: "Coordinated a team of 6 developers across concurrent product workstreams.",
    metrics: ["~300k users", "6 developers", "Chrome + Firefox"],
    leadership:
      "Aligned product, design and engineering around secure, understandable wallet flows.",
    highlights: [
      "Browser extension used by approximately 300k users",
      "Coordinated a team of 6 developers across concurrent workstreams",
      "Improved responsive UI, accessibility, error states and maintainability",
    ],
    approach: [
      "Reworked component structure and shared UI patterns for consistency across wallet flows.",
      "Partnered with product, design and backend engineers on API behavior, authentication and product decisions.",
      "Supported Playwright E2E testing, release readiness and secure UX review.",
    ],
    media: PROJECT_MEDIA["nightly-extension"],
  },
  {
    slug: "nightly-mobile",
    index: "02",
    title: "Nightly Mobile",
    type: "React Native · Mobile product",
    description:
      "A cross-platform cryptocurrency wallet focused on clear account flows, transactions and multichain usage.",
    fullDescription:
      "A mobile wallet for managing assets across multiple chains. The work combined product coordination, responsive mobile UI quality, API error handling and release readiness.",
    tags: ["React Native", "TypeScript", "Redux", "REST APIs"],
    accent: "blue",
    href: "https://apps.apple.com/us/app/nightly-multichain-wallet/id6444768157",
    linkLabel: "View on App Store",
    role: "Senior Frontend Engineer & Team Lead",
    impact:
      "Turned complex multichain account and transaction flows into a clear cross-platform product.",
    teamContext:
      "Partnered with mobile, backend and product contributors through implementation and release.",
    metrics: ["iOS + Android", "Multichain", "React Native"],
    leadership:
      "Supported implementation decisions, code quality and release readiness across the mobile team.",
    highlights: [
      "Cross-platform wallet for iOS and Android",
      "Account, transaction and multichain flows",
      "Developer coordination, testing and release support",
    ],
    approach: [
      "Kept complex wallet states understandable through explicit flows and resilient loading and error states.",
      "Worked with the team on implementation decisions and consistent responsive behavior across mobile screens.",
      "Improved maintainability through shared patterns, typed data and focused code review.",
    ],
    media: PROJECT_MEDIA["nightly-mobile"],
  },
  {
    slug: "synthify",
    index: "03",
    title: "Synthify",
    type: "React · DeFi product",
    description:
      "A DeFi interface I built for staking, exchange, vaults and statistics, powered by external API and blockchain data.",
    fullDescription:
      "I built the frontend experience for a DeFi product covering staking, exchange, vaults and statistics. Beyond the UI, I implemented the product logic that connected user actions with external APIs and changing blockchain data.",
    tags: ["React", "TypeScript", "REST APIs", "Data UX"],
    accent: "peach",
    role: "Frontend Engineer",
    impact:
      "Made staking, exchange, vault and statistics workflows understandable on top of changing blockchain data.",
    teamContext:
      "Owned the frontend experience from responsive UI through API integration and transaction feedback.",
    metrics: ["4 core flows", "REST APIs", "Data UX"],
    leadership:
      "Created shared patterns and clear interaction states that made a technically complex product easier to evolve.",
    highlights: [
      "Built core frontend flows for staking, exchange, vaults and statistics",
      "Implemented product logic for balances, rates, validation and transaction states",
      "Integrated external APIs and blockchain data into responsive interfaces",
    ],
    approach: [
      "Translated complex DeFi concepts into clear flows with useful validation and predictable feedback.",
      "Connected exchange, staking and vault views to external data while handling loading, error and empty states.",
      "Built responsive dashboard layouts and data visualisations around changing market and account information.",
    ],
    media: PROJECT_MEDIA.synthify,
  },
]

export const technologies: Technology[] = [...TECHNOLOGY_CONSTANTS]

export const processSteps = [
  {
    number: "01",
    title: "Understand",
    text: "We clarify the product, users, constraints and what success should look like.",
  },
  {
    number: "02",
    title: "Shape",
    text: "We choose a sensible scope, surface risks and align on the frontend approach.",
  },
  {
    number: "03",
    title: "Build",
    text: "I work in small, visible iterations with clean implementation and regular feedback.",
  },
  {
    number: "04",
    title: "Improve",
    text: "We finish with quality checks, accessibility, performance and a clear next step.",
  },
]

export const faqs = [
  {
    question: "What kind of projects do you take on?",
    answer:
      "Product frontends, new features, frontend architecture, design systems, accessibility and modernisation work for startups and scaleups.",
  },
  {
    question: "Can you work with our existing team?",
    answer:
      "Yes. I can join an existing product team as a senior individual contributor, technical lead or a focused delivery partner.",
  },
  {
    question: "Do you work on existing codebases?",
    answer:
      "Absolutely. Understanding the current system, reducing risk and improving the next iteration is often more valuable than starting over.",
  },
  {
    question: "How do we get started?",
    answer:
      "Send a short note about the product, the challenge and your timeline. We can then decide whether a short discovery call or a written proposal makes sense.",
  },
]
