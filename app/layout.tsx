import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, DM_Sans } from "next/font/google";
import "./globals.css";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap"
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const uiFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ui",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Cleo - Small-Batch Soap",
  description: "A single-page experience for Cleo's handcrafted soap bar."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} ${uiFont.variable} bg-cleo-bone text-cleo-charcoal`}
      >
        {children}
      </body>
    </html>
  );
}
