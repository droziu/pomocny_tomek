import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBottomBar from "@/components/StickyBottomBar";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Pomocny Tomek – Rąbanie drewna, koszenie, sprzątanie działek | Jastrzębie-Zdrój",
  description:
    "Uczciwa pomoc przy drewnie i na działce. Rąbanie drewna, koszenie trawy, sprzątanie zarośniętych działek. Jastrzębie-Zdrój, Cieszyn i okolice. Zadzwoń: 517 363 915.",
  keywords: [
    "rąbanie drewna",
    "rozdrabnianie gałęzi",
    "koszenie trawy",
    "sprzątanie działek",
    "glebogryzarka",
    "Jastrzębie-Zdrój",
    "łuparka spalinowa",
    "rębak do gałęzi",
    "usługi ogrodnicze",
  ],
  openGraph: {
    title: "Pomocny Tomek – Uczciwa pomoc przy drewnie i na działce",
    description:
      "Rąbanie drewna, koszenie trawy, sprzątanie działek. Jastrzębie-Zdrój, Cieszyn i okolice. Szybko, solidnie i bez zdzierania pieniędzy.",
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-[200%] px-4 py-3 bg-forest text-white rounded-xl font-medium shadow-lg transition-transform duration-200 focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-forest"
        >
          Przejdź do treści
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <StickyBottomBar />
        <CookieBanner />
      </body>
    </html>
  );
}
