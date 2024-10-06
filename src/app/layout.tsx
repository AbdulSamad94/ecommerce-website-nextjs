import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "E-Commerce Website by AS",
  description:
    "A Modern E-Commerce Website using Next.js & tailwindCSS of figma desin. ",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-[4000px]">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
