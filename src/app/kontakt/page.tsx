import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import PostalCodeChecker from "@/components/PostalCodeChecker";
import CitySearchSection from "@/components/CitySearchSection";

export const metadata: Metadata = {
  title: "Kontakt – Pomocny Tomek",
  description:
    "Skontaktuj się: 517 363 915. E-mail: pomocnytom@gmail.com. Jastrzębie-Zdrój, Cieszyn i okolice.",
};

export default function KontaktPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-forest-dark overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.15) 0%, transparent 50%)",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 pt-28 pb-20 md:pt-32 md:pb-24">
          <p className="text-white/50 text-sm font-medium tracking-wider uppercase mb-4">
            Kontakt
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.12] tracking-tight mb-6">
            Potrzebujesz pomocy? Zadzwoń albo napisz.
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
            Najłatwiej złapać mnie telefonicznie. Działam w okolicach Jastrzębia-Zdroju, Cieszyna i pobliskich miejscowości.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 w-full -mb-1">
          <svg
            viewBox="0 0 1440 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full block"
            preserveAspectRatio="none"
          >
            <path
              d="M0 48V28C360 44 720 4 1080 24C1260 36 1380 42 1440 36V48H0Z"
              className="fill-cream"
            />
          </svg>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-forest text-xs font-semibold uppercase tracking-widest mb-6">
            Skontaktuj się
          </p>
          <div className="space-y-4 mb-8">
            <a
              href="tel:+48517363915"
              className="flex items-center gap-4 rounded-2xl border border-cream-dark/50 bg-white p-6 transition-colors hover:border-forest/20 group"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cta text-white">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-text-light mb-0.5">Telefon</p>
                <p className="text-xl font-bold text-text">517 363 915</p>
              </div>
            </a>
            <a
              href="mailto:pomocnytom@gmail.com"
              className="flex items-center gap-4 rounded-2xl border border-cream-dark/50 bg-white p-6 transition-colors hover:border-forest/20 group"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forest text-white">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-text-light mb-0.5">E-mail</p>
                <p className="text-xl font-bold text-text">pomocnytom@gmail.com</p>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-2xl border border-cream-dark/50 bg-white p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forest/10 text-forest">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-text-light mb-0.5">Obszar działania</p>
                <p className="text-lg font-bold text-text">Jastrzębie-Zdrój, Cieszyn i okolice</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-cream-dark/50 bg-white p-6 mb-8">
            <p className="text-text-light text-[15px] leading-relaxed">
              Nie odbieram? Możliwe, że akurat pracuję przy maszynie i nie słyszę telefonu. Oddzwonię, jak tylko będę mógł.
            </p>
          </div>

          <PostalCodeChecker />
        </div>
      </section>

      <CitySearchSection />
    </>
  );
}
