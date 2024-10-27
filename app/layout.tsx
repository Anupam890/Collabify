import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import {ClerkProvider} from '@clerk/nextjs'

export const metadata: Metadata = {
  title: "Collabify",
  description: "AI powered collaboration platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ClerkProvider>
        <html lang="en">
        <body>{children}</body>
        </html>
      </ClerkProvider>
  );
}
