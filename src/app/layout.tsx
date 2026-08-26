import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Pawel Szydlo — Senior Frontend Engineer", description: "Senior frontend engineering for thoughtful, high-performing digital products.", openGraph: { title: "Pawel Szydlo — Senior Frontend Engineer", description: "React, TypeScript and product-minded frontend engineering.", type: "website" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
