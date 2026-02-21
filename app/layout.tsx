import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Boston Tech Scene: The Founder's Guide",
    template: "%s | Boston Tech Scene",
  },
  description:
    "The curated guide to Boston's startup ecosystem: communities, events, accelerators, VCs, and workspaces for founders.",
  openGraph: {
    title: "Boston Tech Scene: The Founder's Guide",
    description:
      "The curated guide to Boston's startup ecosystem: communities, events, accelerators, VCs, and workspaces for founders.",
    url: "https://bostontechscene.com",
    siteName: "Boston Tech Scene",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://bostontechscene.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "A founders guide to Boston",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boston Tech Scene: The Founder's Guide",
    description:
      "The curated guide to Boston's startup ecosystem: communities, events, accelerators, VCs, and workspaces for founders.",
    images: ["https://bostontechscene.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-background text-text-primary antialiased">
        <Nav />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
