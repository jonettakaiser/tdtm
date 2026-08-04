import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pawn Shop × Talk Dodgers To Me — Partnership Pitch",
  description:
    "Interactive pitch for a live podcast residency and ticketed Dodgers watch parties at Pawn Shop, Melrose.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-full bg-paper text-ink font-body">{children}</body>
    </html>
  );
}
