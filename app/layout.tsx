import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Collabify",
  description: "AI-powered collaboration platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Navbar />
          <div className="layout-container flex min-h-screen">
            <div className="right-bar flex-1 overflow-y-auto">
              {children}
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
