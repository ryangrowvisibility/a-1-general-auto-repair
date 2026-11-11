import type { Metadata } from "next";
import { Zilla_Slab, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const heading = Zilla_Slab({ variable: "--font-heading", subsets: ["latin"], weight: ["600", "700"] });
const body = Hanken_Grotesk({ variable: "--font-body", subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "A-1 General Auto Repair | Auto Repair Shop on Auburn Blvd, Sacramento",
  description:
    "Owner-operated auto repair on Auburn Blvd in Sacramento. Brakes, drums and shoes, engine repair and maintenance for domestic and import cars. 4.5 stars from 53 reviews. Call (916) 973-9677.",
  openGraph: {
    title: "A-1 General Auto Repair | Sacramento Auto Repair",
    description: "Honest, owner-operated auto repair at 4520 Auburn Blvd, Sacramento. Call (916) 973-9677.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
