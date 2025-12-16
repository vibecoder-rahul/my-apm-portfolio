import type { Metadata } from "next";
import { Manrope, Geist_Mono, Caveat } from "next/font/google";
import "./globals.css";
import LuminousCursor from "../components/LuminousCursor";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rahul Patil | Associate Product Manager Portfolio",
  description:
    "Portfolio of Rahul Patil, Associate PM driving hiring, assessment, AI, and automation products.",
  openGraph: {
    title: "Rahul Patil | Associate Product Manager",
    description:
      "2M+ applications, 50+ enterprise partners, 0→1 execution with AI and automation.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${geistMono.variable} ${caveat.variable} antialiased`}>
        <LuminousCursor />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}


