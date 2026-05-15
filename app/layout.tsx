import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import "./premium.css";

const outfit = Outfit({ 
  subsets: ["latin"], 
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "AP Solar Energy | Solar Installation in Nagpur",
  description:
    "AP Solar Energy provides rooftop solar installation, subsidy support and maintenance for homes, housing societies and businesses across Nagpur and Maharashtra.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body>{children}</body>
    </html>
  );
}
