import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: site.author }],
  robots: { index: true, follow: true },
  openGraph: {
    title: site.title,
    description: site.description,
    locale: site.locale,
    type: "website",
    url: site.url,
  },
  twitter: {
    card: "summary",
    title: site.title,
    description: site.description,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
