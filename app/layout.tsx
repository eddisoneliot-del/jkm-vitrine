import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./header"; // ✅ on importe le Header client

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JKM Congo Supply and Services",
  description: "Site vitrine officiel de JKM CSS Sarl",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* ✅ Barre de navigation gérée dans Header (client component) */}
        <Header />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
