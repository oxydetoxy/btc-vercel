import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Oswald } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const accent = Oswald({
  subsets: ["latin"],
  variable: "--font-accent",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Be The Change | Life Coach & Empowerment",
  description:
    "Empowerment coaching and Access Consciousness. Transform your reality with body, money, relationships, and business. Create a life of infinite possibilities.",
  // Add icons when you have files in public/brand/: favicon.ico, icon.png
  // icons: { icon: "/brand/favicon.ico", apple: "/brand/icon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${accent.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
