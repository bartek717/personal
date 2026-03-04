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
  title: "Bartek Kowalski",
  description: "Technical Product Manager and product engineer building products at the intersection of product, engineering, and user research.",
  openGraph: {
    title: "Bartek Kowalski",
    description: "Technical Product Manager and product engineer building products at the intersection of product, engineering, and user research.",
    url: "https://bartekkowalski.com",
    siteName: "Bartek Kowalski",
    images: [
      {
        url: "/og_img.JPG",
        width: 1200,
        height: 630,
        alt: "Bartek Kowalski - Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bartek Kowalski",
    description: "Technical Product Manager and product engineer building products at the intersection of product, engineering, and user research.",
    images: ["/og_img.JPG"],
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
