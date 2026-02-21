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
    default: "Boston Tech Scene: A Builder's Guide to Boston",
    template: "%s | Boston Tech Scene",
  },
  description: "A builder's guide to Boston's startup ecosystem — communities, capital, programs, and more.",
  openGraph: {
    title: "Boston Tech Scene: A Builder's Guide to Boston",
    description: "A builder's guide to Boston's startup ecosystem — communities, capital, programs, and more.",
    url: "https://bostontechscene.com",
    siteName: "Boston Tech Scene",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://bostontechscene.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "A builder's guide to Boston",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boston Tech Scene: A Builder's Guide to Boston",
    description: "A builder's guide to Boston's startup ecosystem — communities, capital, programs, and more.",
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
