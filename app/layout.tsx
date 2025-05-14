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
  title: "mbdeviant",
  description: "personal website of a full-stack developer",
  keywords: [
    "mbdeviant",
    "full-stack developer",
    "portfolio",
    "web development",
  ],
  authors: [
    {
      name: "mbdeviant",
      url: "https://mbdeviant.com",
    },
  ],
  creator: "mbdeviant",
  openGraph: {
    title: "mbdeviant",
    description: "personal website of a full stack developer",
    url: "https://mbdeviant.com",
    siteName: "mbdeviant",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "mbdeviant logo",
      },
    ],
    type: "website",
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
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
