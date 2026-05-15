import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
