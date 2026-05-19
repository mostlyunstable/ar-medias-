import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", // Prevents FOIT — text visible immediately, improves FCP/LCP
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "AR Medias | Enterprise IT & Automation Solutions",
    template: "%s | AR Medias",
  },
  description:
    "We build scalable digital ecosystems, AI automation, and high-fidelity web applications for modern businesses.",
  keywords: ["AI Automation", "Web Development", "IT Solutions", "Next.js", "Enterprise Software"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://armedias.com",
    title: "AR Medias | Enterprise IT Solutions",
    description: "Scalable digital ecosystems and AI automation for modern businesses.",
    siteName: "AR Medias",
  },
  twitter: {
    card: "summary_large_image",
    title: "AR Medias | Enterprise IT Solutions",
    description: "Scalable digital ecosystems and AI automation for modern businesses.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>
          <Navbar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
