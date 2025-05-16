import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "mbdeviant",
  description:
    "mb, full-stack developer building web applications focused on clarity, usability and modern design",
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
    description:
      "mb, full-stack developer building web applications focused on clarity, usability and modern design",
    url: "https://mbdeviant.com",
    siteName: "mbdeviant",
    images: [
      {
        url: "https://mbdeviant.com/data/images/og-image.png",
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
    images: ["https://mbdeviant.com/data/images/og-image.png"],
    creator: "@mbdeviant",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} antialiased`}>{children}</body>
    </html>
  );
}
