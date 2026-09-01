import type { Project } from "@/features/portfolio/data";

/**
 * Portfolio content that is safe to change without touching UI components.
 * Add local images to public/images/projects and put their paths in `media`.
 */
export const SITE_CONSTANTS = {
  name: "Pawel Szydlo",
  role: "Senior Frontend Engineer",
  email: "pawel.szydlo.99@gmail.com",
  linkedin: "https://www.linkedin.com/in/pawelszydlo",
  github: "https://github.com/Pawel-Szydlo",
  calendly: "https://calendly.com/your-link",
  cvPath: "/Pawel_Szydlo_CV_Senior_Frontend_Engineer.pdf",
} as const;

export const PROJECT_MEDIA: Record<Project["slug"], { src: string; alt: string; label: string }[]> = {
  "nightly-extension": [
    { src: "/images/projects/nightly-extension-unlock.png", alt: "Nightly Extension unlock screen", label: "Secure unlock" },
    { src: "/images/projects/nightly-extension-dashboard.png", alt: "Nightly Extension wallet dashboard", label: "Wallet dashboard" },
    { src: "/images/projects/nightly-extension-swap.png", alt: "Nightly Extension token swap screen", label: "Swap integration" },
    { src: "/images/projects/nightly-extension-wallets.png", alt: "Nightly Extension wallet management screen", label: "Wallet management" },
  ],
  "nightly-mobile": [
    { src: "/images/projects/nightly-mobile-onboarding.png", alt: "Nightly Mobile onboarding screen", label: "Onboarding" },
    { src: "/images/projects/nightly-mobile-dashboard.png", alt: "Nightly Mobile wallet dashboard", label: "Wallet dashboard" },
    { src: "/images/projects/nightly-mobile-swap.png", alt: "Nightly Mobile token swap screen", label: "Swap flow" },
    { src: "/images/projects/nightly-mobile-wallets.png", alt: "Nightly Mobile wallet selection screen", label: "Wallet selection" },
  ],
  synthify: [
    { src: "/images/projects/synthify-staking.png", alt: "Synthify staking dashboard", label: "Staking" },
    { src: "/images/projects/synthify-exchange.png", alt: "Synthify exchange interface", label: "Exchange" },
    { src: "/images/projects/synthify-vaults.png", alt: "Synthify vaults interface", label: "Vaults" },
    { src: "/images/projects/synthify-statistics.png", alt: "Synthify statistics dashboard", label: "Statistics" },
  ],
};

export const TECHNOLOGY_CONSTANTS = [
  { name: "React", mark: "R", icon: "/icons/technology/react.svg", tone: "bg-[#d9f4e6] text-[#147a47]" },
  { name: "TypeScript", mark: "TS", icon: "/icons/technology/typescript.svg", tone: "bg-[#d9e9fa] text-[#1763a4]" },
  { name: "React Native", mark: "RN", icon: "/icons/technology/react.svg", tone: "bg-[#dce9ff] text-[#2563eb]" },
  { name: "Next.js", mark: "N", icon: "/icons/technology/nextdotjs.svg", tone: "bg-white text-ink" },
  { name: "Tailwind CSS", mark: "TW", icon: "/icons/technology/tailwindcss.svg", tone: "bg-[#d7f5f2] text-[#087f78]" },
  { name: "Storybook", mark: "SB", icon: "/icons/technology/storybook.svg", tone: "bg-[#ffe0ed] text-[#b42363]" },
  { name: "Playwright", mark: "PW", icon: "/icons/technology/playwright.svg", tone: "bg-[#e4f2d1] text-[#47731c]" },
  { name: "Bun", mark: "B", icon: "/icons/technology/bun.svg", tone: "bg-[#f0e6d9] text-[#79552f]" },
  { name: "REST APIs", mark: "API", icon: "", tone: "bg-[#e8e2f8] text-[#6841a5]" },
  { name: "Redux", mark: "RX", icon: "/icons/technology/redux.svg", tone: "bg-[#e8e2f8] text-[#6841a5]" },
  { name: "Vite", mark: "V", icon: "/icons/technology/vite.svg", tone: "bg-[#eee7ff] text-[#7049d8]" },
  { name: "Webpack", mark: "W", icon: "/icons/technology/webpack.svg", tone: "bg-[#d9eff8] text-[#236b8e]" },
] as const;
