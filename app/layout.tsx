import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import "./globals.css";
import {Poppins} from 'next/font/google'; 
import { ClerkProvider } from "@clerk/nextjs";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Collabify",
  description: "AI-powered collaboration platform",
};
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  variable: "--font-poppins",
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={poppins.variable}>
        <body>
          <Navbar />
          <div className="layout-container flex min-h-screen bg-gray-100">
          <Sidebar/>
            <div className="right-bar flex-1 overflow-y-auto">
              {children}
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
