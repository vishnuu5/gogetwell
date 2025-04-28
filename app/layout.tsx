import "@/app/globals.css";
import type React from "react";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Toaster } from "@/components/toaster";

const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Optimize font loading
});

export const metadata = {
  title: "GoGetWell.ai - AI-Powered Healthcare Solutions",
  description:
    "Empower your healthcare practice with intelligent tools that streamline workflows, enhance patient care, and improve clinical outcomes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Navbar />
          <main>{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
