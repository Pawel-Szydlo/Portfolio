"use client";

import Script from "next/script";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/shared/config/site";

declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget: (options: {
        url: string;
        text: string;
        color: string;
        textColor: string;
        branding: boolean;
      }) => void;
    };
  }
}

export function CalendlyWidget() {
  const initCalendly = () => {
    window.Calendly?.initBadgeWidget({
      url: siteConfig.calendly,
      text: "Schedule time with me",
      color: "#385c95",
      textColor: "#ffffff",
      branding: true,
    });
  };

  return (
    <>
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" onLoad={initCalendly} />
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2 max-[520px]:bottom-[4.5rem]" aria-label="Contact links">
        <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="group flex h-9 w-9 items-center justify-center gap-0 overflow-hidden rounded-full border border-line bg-white/90 p-0 text-muted shadow-[0_8px_24px_rgba(16,21,43,.12)] backdrop-blur transition-[width,padding,gap,background-color,color,box-shadow] duration-300 hover:w-[7.25rem] hover:justify-start hover:gap-2 hover:bg-white hover:p-3 hover:text-ink hover:shadow-[0_10px_28px_rgba(16,21,43,.18)]"><Linkedin size={15} className="shrink-0 transition-transform duration-300 group-hover:scale-110" /><span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-semibold opacity-0 transition-[max-width,opacity] duration-300 group-hover:max-w-[4rem] group-hover:opacity-100">LinkedIn</span></a>
        <a href={`mailto:${siteConfig.email}`} aria-label="Email" className="group flex h-9 w-9 items-center justify-center gap-0 overflow-hidden rounded-full border border-line bg-white/90 p-0 text-muted shadow-[0_8px_24px_rgba(16,21,43,.12)] backdrop-blur transition-[width,padding,gap,background-color,color,box-shadow] duration-300 hover:w-[5.75rem] hover:justify-start hover:gap-2 hover:bg-white hover:p-3 hover:text-ink hover:shadow-[0_10px_28px_rgba(16,21,43,.18)]"><Mail size={15} className="shrink-0 transition-transform duration-300 group-hover:scale-110" /><span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-semibold opacity-0 transition-[max-width,opacity] duration-300 group-hover:max-w-[3rem] group-hover:opacity-100">Email</span></a>
        <a href={siteConfig.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white/90 text-muted shadow-[0_8px_24px_rgba(16,21,43,.12)] backdrop-blur transition-colors hover:bg-white hover:text-ink"><Github size={15} /></a>
      </div>
    </>
  );
}
