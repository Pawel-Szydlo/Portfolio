export type Technology = { name: string; mark: string; tone: string };

export type Project = {
  slug: string;
  index: string;
  title: string;
  type: string;
  description: string;
  fullDescription: string;
  tags: string[];
  accent: "lime" | "blue" | "peach";
  href?: string;
  linkLabel?: string;
  role: string;
  highlights: string[];
  approach: string[];
  media: { src: string; alt: string; label: string }[];
};

export const services = [
  { number: "01", title: "Product frontends", text: "Interfaces that feel clear, fast and dependable — from first component to production release." },
  { number: "02", title: "Frontend architecture", text: "Pragmatic foundations, design systems and technical direction that help teams move with confidence." },
  { number: "03", title: "Quality by default", text: "Accessible, responsive and resilient experiences with performance and maintainability built in." },
];

export const projects: Project[] = [
  { slug: "nightly-extension", index: "01", title: "Nightly Extension", type: "Browser extension · Wallet UX", description: "A production Chrome and Firefox extension for wallet management, assets, transactions and blockchain integrations.", fullDescription: "A multichain wallet extension where clarity and trust matter at every step. I worked across wallet UX, extension constraints, API integrations and the component system behind the product.", tags: ["React", "TypeScript", "Tailwind", "Storybook", "Playwright"], accent: "lime", href: "https://chromewebstore.google.com/detail/nightly/fiikommddbeccaoicoejoniammnalkfa?hl=en", linkLabel: "View on Chrome Web Store", role: "Senior Frontend Engineer & Team Lead", highlights: ["Browser extension used by approximately 300k users", "Coordinated a team of 6 developers across concurrent workstreams", "Improved responsive UI, accessibility, error states and maintainability"], approach: ["Reworked component structure and shared UI patterns for consistency across wallet flows.", "Partnered with product, design and backend engineers on API behavior, authentication and product decisions.", "Supported Playwright E2E testing, release readiness and secure UX review."], media: [] },
  { slug: "nightly-mobile", index: "02", title: "Nightly Mobile", type: "React Native · Mobile product", description: "A cross-platform cryptocurrency wallet focused on clear account flows, transactions and multichain usage.", fullDescription: "A mobile wallet for managing assets across multiple chains. The work combined product coordination, responsive mobile UI quality, API error handling and release readiness.", tags: ["React Native", "TypeScript", "Redux", "REST APIs"], accent: "blue", href: "https://apps.apple.com/us/app/nightly-multichain-wallet/id6444768157", linkLabel: "View on App Store", role: "Senior Frontend Engineer & Team Lead", highlights: ["Cross-platform wallet for iOS and Android", "Account, transaction and multichain flows", "Developer coordination, testing and release support"], approach: ["Kept complex wallet states understandable through explicit flows and resilient loading and error states.", "Worked with the team on implementation decisions and consistent responsive behavior across mobile screens.", "Improved maintainability through shared patterns, typed data and focused code review."], media: [] },
  { slug: "synthify", index: "03", title: "Synthify", type: "React · DeFi product", description: "Borrowing and leverage flows for synthetic crypto assets, with API-driven data and responsive interaction design.", fullDescription: "A DeFi product focused on borrowing, leverage and synthetic assets. The frontend translated API-driven market data into flows that stayed understandable while the underlying concepts remained complex.", tags: ["React", "TypeScript", "REST APIs", "Data UX"], accent: "peach", role: "Frontend Engineer", highlights: ["API-driven borrowing and leverage flows", "Responsive UI for complex financial interactions", "Validation and performance-focused data handling"], approach: ["Mapped product behavior into clear steps, useful validation and predictable feedback.", "Built responsive UI around changing API data and different viewport constraints.", "Kept the implementation focused on composable React patterns and future iteration."], media: [] },
];

export const technologies: Technology[] = [
  { name: "React", mark: "R", tone: "bg-[#d9f4e6] text-[#147a47]" }, { name: "TypeScript", mark: "TS", tone: "bg-[#d9e9fa] text-[#1763a4]" }, { name: "React Native", mark: "RN", tone: "bg-[#dce9ff] text-[#2563eb]" }, { name: "Next.js", mark: "N", tone: "bg-white text-ink" }, { name: "Tailwind CSS", mark: "TW", tone: "bg-[#d7f5f2] text-[#087f78]" }, { name: "Storybook", mark: "SB", tone: "bg-[#ffe0ed] text-[#b42363]" }, { name: "Playwright", mark: "PW", tone: "bg-[#e4f2d1] text-[#47731c]" }, { name: "Bun", mark: "B", tone: "bg-[#f0e6d9] text-[#79552f]" }, { name: "REST APIs", mark: "API", tone: "bg-[#e8e2f8] text-[#6841a5]" },
];

export const processSteps = [
  { number: "01", title: "Understand", text: "We clarify the product, users, constraints and what success should look like." },
  { number: "02", title: "Shape", text: "We choose a sensible scope, surface risks and align on the frontend approach." },
  { number: "03", title: "Build", text: "I work in small, visible iterations with clean implementation and regular feedback." },
  { number: "04", title: "Improve", text: "We finish with quality checks, accessibility, performance and a clear next step." },
];

export const faqs = [
  { question: "What kind of projects do you take on?", answer: "Product frontends, new features, frontend architecture, design systems, accessibility and modernisation work for startups and scaleups." },
  { question: "Can you work with our existing team?", answer: "Yes. I can join an existing product team as a senior individual contributor, technical lead or a focused delivery partner." },
  { question: "Do you work on existing codebases?", answer: "Absolutely. Understanding the current system, reducing risk and improving the next iteration is often more valuable than starting over." },
  { question: "How do we get started?", answer: "Send a short note about the product, the challenge and your timeline. We can then decide whether a short discovery call or a written proposal makes sense." },
];
