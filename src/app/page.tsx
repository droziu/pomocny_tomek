import type { Metadata } from "next";
import Image from "next/image";
import {
  Axe,
  Tractor,
  TreeDeciduous,
  Wrench,
  Wallet,
  MapPin,
  Users,
  Truck,
  CheckCircle2,
  Trees,
  Drill,
  Scissors,
} from "lucide-react";
import CTAButton from "@/components/CTAButton";
import ServiceCard from "@/components/ServiceCard";
import PostalCodeChecker from "@/components/PostalCodeChecker";
import { IMG } from "@/lib/imageAssets";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/", {
  absoluteTitle: true,
  title:
    "Pomocny Tomek - rąbanie drewna, frezowanie pni, karczowanie i prace w terenie | Jastrzębie-Zdrój, Cieszyn",
  description:
    "Pomocny Tomek: rąbanie i łupanie drewna na opał, rozdrabnianie gałęzi rębakiem, frezowanie pni, karczowanie i oczyszczanie terenu, glebogryzarka, wiercenie w ziemi, przycinka drzew. Jastrzębie-Zdrój, Cieszyn i okolice. Tel. 790 302 007.",
});

export default function Home() {
  return (
    <>
      {/* HERO – czysty, „premium local business”: typografia + wąska karta z portretem w kole i logo */}
      <section className="relative z-20 overflow-visible bg-forest-dark">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/[0.12] via-transparent to-black/[0.18]" aria-hidden />
        <div className="pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 80% 50% at 75% 20%, rgba(255,255,255,0.2) 0%, transparent 55%)",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-6xl overflow-visible px-4 sm:px-6 pb-12 pt-24 md:pb-16 md:pt-28 lg:pb-20 lg:pt-32">
          <div className="mx-auto grid max-w-5xl items-center gap-12 lg:mx-0 lg:max-w-none lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16 xl:gap-20">
            <div className="text-center lg:text-left">
              <p className="mb-5 inline-flex items-center rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-medium tracking-wide text-white/75">
                Jastrzębie-Zdrój, Cieszyn i okolice
              </p>
              <h1 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-6xl">
                <span className="block sm:whitespace-nowrap">Pomocny Tomek</span>
                <span className="mt-2 block text-[0.92em] font-bold text-white/95 md:mt-3">
                  fachowa pomoc przy domu i na działce
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/75 md:text-lg lg:mx-0 lg:max-w-lg">
                Rąbanie drewna, rozdrabnianie gałęzi, frezowanie pni, karczowanie oraz inne prace w terenie. Przyjeżdżam, robię co trzeba i uczciwie się rozliczamy. Jak jest robota, z którą samemu ciężko ruszyć, po prostu zadzwoń.
              </p>
              <div className="mt-9 flex justify-center lg:justify-start">
                <CTAButton large />
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="flex w-full max-w-[300px] flex-col items-stretch rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:max-w-[320px] sm:p-9">
                <div className="relative mx-auto flex aspect-square w-[200px] shrink-0 items-center justify-center sm:w-[220px]">
                  <div
                    className="pointer-events-none absolute inset-[8%] rounded-full bg-cta/12 blur-2xl"
                    aria-hidden
                  />
                  <Image
                    src="/Pomocny%20Tomek%20HERO.webp"
                      alt="Pomocny Tomek - zdjęcie profilowe przy pracy terenowej"
                    width={220}
                    height={220}
                    className="relative z-10 h-[200px] w-[200px] rounded-full object-cover object-[center_22%] shadow-[0_12px_40px_rgba(0,0,0,0.35)] ring-[1.5px] ring-white/25 sm:h-[220px] sm:w-[220px]"
                    sizes="(max-width: 640px) 200px, 220px"
                    priority
                  />
                </div>
                <div className="mt-8 flex flex-col items-center border-t border-white/10 pt-8">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/Logo_Pomocny_Tomek.webp"
                    alt="Pomocny Tomek - logo"
                    width={IMG.logo.w}
                    height={IMG.logo.h}
                    decoding="async"
                    className="h-[4.25rem] w-auto max-w-[240px] object-contain opacity-95 brightness-0 invert sm:h-[4.75rem]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block absolute bottom-0 left-0 right-0 w-full -mb-1">
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

      {/* TRUST BADGES */}
      <section className="relative z-10 py-16 md:py-20 bg-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            {[
              { icon: Wrench, text: "Własny mocny sprzęt" },
              { icon: Wallet, text: "Uczciwe i jasne rozliczenie" },
              { icon: MapPin, text: "Jastrzębie-Zdrój, Cieszyn i okolice" },
            ].map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-2xl border border-cream-dark/50 bg-white p-5 flex-1 transition-colors hover:border-forest/20"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-forest/10 text-forest">
                  <badge.icon className="h-6 w-6" />
                </span>
                <span className="font-medium text-text">{badge.text}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 md:mt-10 max-w-4xl mx-auto">
            <PostalCodeChecker variant="featured" />
          </div>
        </div>
      </section>

      {/* O MNIE / MISJA */}
      <section className="pt-14 md:pt-20 pb-20 md:pb-28 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 flex flex-col gap-16 md:gap-20">
          {/* Nagłówek + intro – wyśrodkowane */}
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-text tracking-tight mb-4">
              Brakuje Ci czasu, siły albo sprzętu?
            </h2>
            <p className="text-text text-[17px] md:text-lg leading-relaxed max-w-2xl mx-auto">
              Pomagam osobom, które chcą mieć zrobione porządnie, ale bez przepłacania za wielką firmę. Przyjeżdżam z własnym sprzętem, robię co trzeba, sprzątam po sobie i rozliczam się uczciwie. Prosto i konkretnie.
            </p>
          </div>

          {/* Zdjęcia + boxy – równomierna siatka */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/tomek_1.webp"
                alt="Pomocny Tomek przy pracy z drewnem i działką"
                fill
                className="object-cover object-[center_35%] transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>

            {/* Boxy */}
            <div className="flex flex-col gap-4">
              {[
                { icon: Users, text: "Pomoc dla każdego" },
                { icon: Truck, text: "Przyjeżdżam z własnym sprzętem" },
                { icon: CheckCircle2, text: "Robota zrobiona porządnie i uczciwie" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="group flex items-center gap-4 rounded-xl bg-cream/70 p-5 border border-cream-dark/30 hover:border-forest/20 transition-colors"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-forest/10 text-forest">
                    <item.icon className="h-6 w-6" />
                  </span>
                  <p className="text-text font-medium text-[15px]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA – wyśrodkowane */}
          <div className="flex justify-center">
            <CTAButton />
          </div>
        </div>
      </section>

      {/* USŁUGI */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-text tracking-tight mb-3">
            W czym mogę pomóc?
          </h2>
          <p className="text-text-light mb-10 max-w-xl">
            Kliknij i sprawdź, czym się zajmuję.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              href="/uslugi/drewno"
              icon={Axe}
              title="Rąbanie drewna"
              description="Łuparką szybko przygotuję drewno na opał. Sprawnie, porządnie i bez zbędnego bałaganu."
            />
            <ServiceCard
              href="/uslugi/galezie"
              icon={TreeDeciduous}
              title="Rozdrabnianie gałęzi"
              description="Rozdrabniam gałęzie własnym rębakiem, więc wszystko idzie sprawnie i bez kombinowania ze sprzętem."
            />
            <ServiceCard
              href="/uslugi/glebogryzarka"
              icon={Tractor}
              title="Spulchnianie ziemi"
              description="Spulchnię ziemię pod trawnik, ogród albo warzywniak. Szybciej i wygodniej niż ręcznie."
            />
            <ServiceCard
              href="/uslugi/frezowanie-pni"
              icon={Trees}
              title="Frezowanie pni i usuwanie korzeni"
              description="Usuwanie pni po wycince oraz korzeni. Wycena indywidualna - zależy od pnia i warunków na miejscu."
            />
            <ServiceCard
              href="/uslugi/wiercenie-otworow"
              icon={Drill}
              title="Wiercenie otworów w ziemi"
              description="Wiercenie otworów pod ogrodzenia, drzewka i inne prace w ziemi. Szybko, wygodnie, z własnym sprzętem."
            />
            <ServiceCard
              href="/uslugi/przycinka-drzew"
              icon={Scissors}
              title="Przycinka drzew"
              description="Przycinka mniejszych drzew i drzew owocowych oraz pomoc przy prostszych pracach związanych ze ścinką."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-forest-dark">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
            Potrzebujesz pomocy?
          </h2>
          <p className="text-white/70 text-[15px] leading-relaxed mb-8">
            Zadzwoń, powiedz co trzeba zrobić, a od razu powiem Ci, ile to będzie kosztować.
          </p>
          <CTAButton large />
        </div>
      </section>
    </>
  );
}
