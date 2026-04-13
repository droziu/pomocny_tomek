import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import CookieSettingsTrigger from "@/components/CookieSettingsTrigger";
import { IMG } from "@/lib/imageAssets";

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-white pb-20 md:pb-0">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Główna zawartość */}
        <div className="py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Logo_Pomocny_Tomek.webp"
                alt="Pomocny Tomek — logo"
                width={IMG.logo.w}
                height={IMG.logo.h}
                decoding="async"
                loading="lazy"
                fetchPriority="low"
                className="h-10 w-auto opacity-95 hover:opacity-100 transition-opacity object-contain object-left brightness-0 invert"
              />
            </Link>

            {/* Linki */}
            <nav className="flex flex-wrap gap-x-8 gap-y-1" aria-label="Skróty do podstron">
              <Link
                href="/"
                title="Strona główna Pomocny Tomek"
                className="text-sm text-white/90 hover:text-white transition-colors py-1"
              >
                Strona Główna
              </Link>
              <Link
                href="/uslugi/drewno"
                title="Rąbanie i łupanie drewna — Jastrzębie-Zdrój, Cieszyn"
                className="text-sm text-white/90 hover:text-white transition-colors py-1"
              >
                Rąbanie drewna
              </Link>
              <Link
                href="/uslugi/galezie"
                title="Rozdrabnianie gałęzi rębakiem — usługa mobilna"
                className="text-sm text-white/90 hover:text-white transition-colors py-1"
              >
                Rozdrabnianie gałęzi
              </Link>
              <Link
                href="/uslugi/sprzatanie"
                title="Oczyszczanie działek i terenu"
                className="text-sm text-white/90 hover:text-white transition-colors py-1"
              >
                Oczyszczanie działek
              </Link>
              <Link
                href="/uslugi/glebogryzarka"
                title="Spulchnianie ziemi glebogryzarką"
                className="text-sm text-white/90 hover:text-white transition-colors py-1"
              >
                Glebogryzarka
              </Link>
              <Link
                href="/uslugi/frezowanie-pni"
                title="Frezowanie i usuwanie pni"
                className="text-sm text-white/90 hover:text-white transition-colors py-1"
              >
                Frezowanie pni
              </Link>
              <Link
                href="/uslugi/wiercenie-otworow"
                title="Wiercenie otworów w ziemi pod ogrodzenie i drzewka"
                className="text-sm text-white/90 hover:text-white transition-colors py-1"
              >
                Wiercenie otworów
              </Link>
              <Link
                href="/uslugi/przycinka-drzew"
                title="Przycinka drzew owocowych i mniejszych drzew"
                className="text-sm text-white/90 hover:text-white transition-colors py-1"
              >
                Przycinka drzew
              </Link>
              <Link
                href="/cennik"
                title="Cennik usług Pomocny Tomek"
                className="text-sm text-white/90 hover:text-white transition-colors py-1"
              >
                Cennik
              </Link>
              <Link
                href="/kontakt"
                title="Kontakt i telefon do Pomocnego Tomka"
                className="text-sm text-white/90 hover:text-white transition-colors py-1"
              >
                Kontakt
              </Link>
            </nav>

            {/* CTA - telefon */}
            <a
              href="tel:+48790302007"
              className="inline-flex items-center gap-3 rounded-2xl bg-cta px-5 py-3 text-white font-bold hover:bg-cta-hover transition-colors shrink-0"
            >
              <Phone className="h-5 w-5" />
              790 302 007
            </a>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-2 text-sm text-white/80">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              Jastrzębie-Zdrój, Cieszyn i okolice
            </span>
          </div>
        </div>

        {/* Dolny pasek */}
        <div className="py-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/70">
          <p suppressHydrationWarning>&copy; {new Date().getFullYear()} Pomocny Tomek</p>
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <Link
              href="/polityka-prywatnosci"
              className="inline-flex min-h-12 min-w-[48px] items-center justify-center rounded-lg px-4 py-3 text-sm text-white/90 hover:text-white underline-offset-2 hover:underline transition-colors text-center sm:text-left"
            >
              Polityka prywatności i plików cookies
            </Link>
            <CookieSettingsTrigger className="inline-flex min-h-12 min-w-[48px] items-center justify-center rounded-lg px-4 py-3 text-sm text-white/90 hover:text-white underline-offset-2 hover:underline transition-colors text-center sm:text-left">
              Zmień ustawienia cookies
            </CookieSettingsTrigger>
          </div>
        </div>
      </div>
    </footer>
  );
}
