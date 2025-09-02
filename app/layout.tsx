import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "History Mode - Sua Loja de Roupas Online",
  description: "Descubra as melhores tendências em moda. Camisetas, calças, blazers e muito mais com qualidade premium e preços incríveis.",
  keywords: "roupas, moda, camisetas, calças, blazers, tênis, loja online",
  authors: [{ name: "History Mode" }],
  openGraph: {
    title: "History Mode - Sua Loja de Roupas Online",
    description: "Descubra as melhores tendências em moda com qualidade premium",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
