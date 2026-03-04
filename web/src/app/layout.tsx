import type { Metadata } from "next";
import "./globals.css";
import Web3Provider from "@/context";

export const metadata: Metadata = {
  title: "Novitas - AI Agent Web3 Platform",
  description: "Experience the future of Web3 with AI Agents",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <Web3Provider>{children}</Web3Provider>
      </body>
    </html>
  );
}
