import type { Metadata } from "next";

import { SITE_CONFIG } from "@vvk/shared/constants";

import "./globals.css";

export const metadata: Metadata = {
  title: SITE_CONFIG.website.name,
  description: SITE_CONFIG.website.description,
  keywords: SITE_CONFIG.website.keywords
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
