import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "キラキラタイピング学園",
  description: "着せ替えやアイテム集めを楽しみながら、はじめてのタイピングを練習できる学園ゲームです。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
