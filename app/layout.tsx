import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
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
    <html
      lang="en"
      className={cn("h-full antialiased", spaceGrotesk.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
