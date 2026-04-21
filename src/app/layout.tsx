import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBottomBar from "@/components/StickyBottomBar";
import CookieBanner from "@/components/CookieBanner";
import StructuredData from "@/components/StructuredData";
import { IMG } from "@/lib/imageAssets";
import { DEFAULT_LOCALE, SITE_NAME, SITE_URL } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF7F2" },
    { media: "(prefers-color-scheme: dark)", color: "#1E3F2B" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} - usługi przy domu i na działce | Jastrzębie-Zdrój, Cieszyn`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Pomocny Tomek - pomoc przy domu i na działce. Rąbanie drewna, rozdrabnianie gałęzi, frezowanie pni, karczowanie i oczyszczanie terenu, glebogryzarka. Jastrzębie-Zdrój, Cieszyn i okolice. Tel. 790 302 007.",
  applicationName: SITE_NAME,
  referrer: "strict-origin-when-cross-origin",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: DEFAULT_LOCALE,
    siteName: SITE_NAME,
    url: SITE_URL,
    title: `${SITE_NAME} - usługi przy domu i na działce`,
    description:
      "Rąbanie drewna, rozdrabnianie gałęzi, frezowanie pni, karczowanie i inne prace w terenie. Jastrzębie-Zdrój, Cieszyn i okolice.",
    images: [
      {
        url: "/Pomocny%20Tomek%20HERO.webp",
        width: IMG.heroPortrait.w,
        height: IMG.heroPortrait.h,
        alt: `${SITE_NAME} - usługi przy domu i na działce`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} - usługi przy domu i na działce`,
    description:
      "Rąbanie drewna, rozdrabnianie gałęzi, frezowanie pni, karczowanie. Jastrzębie-Zdrój, Cieszyn i okolice.",
    images: ["/Pomocny%20Tomek%20HERO.webp"],
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: false,
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
        <link rel="dns-prefetch" href="https://www.youtube-nocookie.com" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <StructuredData />
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
