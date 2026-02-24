import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "MoveScout - Automated SMS Marketing for Moving Companies & Roofers",
  description: "Automatically text homeowners the moment they list. Reach motivated sellers instantly with automated SMS outreach. Perfect for moving companies and roofing contractors.",
  keywords: "SMS marketing, moving companies, roofers, roofing contractors, lead generation, automated marketing, home listings",
  openGraph: {
    title: "MoveScout - Automated SMS Marketing",
    description: "Reach homeowners instantly with automated SMS outreach to fresh listings.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
