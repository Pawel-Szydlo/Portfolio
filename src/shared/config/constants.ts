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
    { src: "", alt: "Nightly Extension wallet overview", label: "Wallet overview" },
    { src: "", alt: "Nightly Extension transaction flow", label: "Transaction flow" },
    { src: "", alt: "Nightly Extension asset management", label: "Asset management" },
  ],
  "nightly-mobile": [
    { src: "", alt: "Nightly Mobile wallet overview", label: "Mobile overview" },
    { src: "", alt: "Nightly Mobile account flow", label: "Account flow" },
    { src: "", alt: "Nightly Mobile transaction screen", label: "Transactions" },
  ],
  synthify: [
    { src: "", alt: "Synthify product overview", label: "Product overview" },
    { src: "", alt: "Synthify borrowing flow", label: "Borrowing flow" },
    { src: "", alt: "Synthify leverage interaction", label: "Leverage interaction" },
  ],
};
