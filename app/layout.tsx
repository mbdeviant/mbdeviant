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
  description: "mb, full-stack developer",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/data/icons/ios-icon.png",
  },
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
    description: "mb, full-stack developer",
    url: "https://mbdeviant.com",
    siteName: "mbdeviant",
    images: [
      {
        url: "/data/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "mbdeviant logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "mbdeviant",
    description: "full-stack dev building cool stuff",
    images: ["/data/images/og-image.png"],
    creator: "@mbdeviant",
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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/data/icons/ios-icon.png"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
