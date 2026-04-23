import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "TrenchersAI — The Terminal That Never Sleeps",
  description:
    "Solana's fastest trading terminal. Snipe new token launches, copy whale wallets, and earn rewards on every trade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full antialiased", manrope.variable)}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
