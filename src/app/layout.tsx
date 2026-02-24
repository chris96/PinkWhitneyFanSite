import type { Metadata } from "next";
import Link from "next/link";
import { Bangers, Saira } from "next/font/google";
import "./globals.css";
import SiteFooter from "@/components/SiteFooter";

const heading = Bangers({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading"
});

const body = Saira({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "Pink Whitney Fan Site",
  description: "Fort Lauderdale spring-break inspired fan site for Pink Whitney."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable}`}>
        <div className="site-shell">
          <header className="top-nav">
            <Link href="/" className="brand-mark">
              Pink Whitney Fan Site
            </Link>
            <nav>
              <Link href="/">Home</Link>
              <Link href="/gallery">Gallery</Link>
            </nav>
          </header>
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}