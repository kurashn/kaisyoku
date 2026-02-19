import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA } from "@/components/layout/StickyCTA";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif_JP({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Kaisyoku | 失敗しないビジネス会食のためのリスク管理メディア",
  description: "会食の失敗を恐れる幹事様へ。接待・会食に特化した静かな個室、アレルギー対応の店選びをサポート。アプリで予約とリスク管理を完璧に。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSerif.variable} antialiased min-h-screen flex flex-col font-sans text-navy-900 dark:text-white bg-white dark:bg-navy-950`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}

