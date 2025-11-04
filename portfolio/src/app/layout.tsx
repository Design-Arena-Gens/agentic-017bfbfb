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
  title: "Nova Vega — Immersive Visual Designer",
  description:
    "Discover the multidimensional portfolio of Nova Vega, a visual designer crafting immersive brand narratives, experiential interfaces, and 3D worlds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} noise-overlay antialiased bg-transparent text-slate-100`}
      >
        <div className="relative min-h-screen overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.1),transparent_60%),radial-gradient(circle_at_80%_0%,rgba(147,51,234,0.12),transparent_55%),radial-gradient(circle_at_50%_100%,rgba(244,63,94,0.15),transparent_45%)]" />
          <main className="relative z-10">{children}</main>
        </div>
      </body>
    </html>
  );
}
