import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdulmaleek Kazeem | Business Technology, Analytics, & AI Automation Builder",
  description: "Professional portfolio showcasing interactive analytics dashboards, cognitive workflow automations, and Next.js applications engineered to optimize organizational efficiency.",
  keywords: [
    "Business Technology",
    "Data Analytics",
    "AI Automation Swarms",
    "LangChain",
    "Next.js",
    "TypeScript",
    "Python NLP Scrapy",
    "Curriculum Audit Compliance",
    "Workflow Optimization"
  ],
  authors: [{ name: "Abdulmaleek Kazeem" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased flex flex-col selection:bg-teal-800/10 selection:text-teal-900">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
