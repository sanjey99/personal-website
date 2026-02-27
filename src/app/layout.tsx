import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sanjey | Computer Engineering @ NTU",
  description:
    "Portfolio of Sanjey — NTU Computer Engineering student building quant-ready systems, automation tools, and full-stack products.",
  openGraph: {
    title: "Sanjey | Computer Engineering @ NTU",
    description:
      "Quant-ready systems, hackathon builds, and production-minded software projects.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanjey | Computer Engineering @ NTU",
    description:
      "Quant-ready systems, hackathon builds, and production-minded software projects.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
