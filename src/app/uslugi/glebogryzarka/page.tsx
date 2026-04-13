import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import { IMG } from "@/lib/imageAssets";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/uslugi/glebogryzarka", {
  title: "Glebogryzarka — spulchnianie ziemi pod ogród i trawnik",
  description:
    "Usługa glebogryzarką: spulchnianie ziemi pod trawnik, warzywnik i ogród. Jastrzębie-Zdrój, Cieszyn i okolice. Własny sprzęt. Tel. 790 302 007.",
  ogImage: "/Glebogryzarka-przed-po.webp",
  ogImageWidth: IMG.landscapePo.w,
  ogImageHeight: IMG.landscapePo.h,
});

export default function GlebogryzarkaPage() {
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.12] tracking-tight mb-4">
            Spulchnianie ziemi glebogryzarką
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mb-6">
            Przygotowanie ziemi pod trawnik, ogród i warzywniak
          </p>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
            Jeśli ziemia jest twarda, zbita albo długo nie była ruszana, ręczne kopanie potrafi zabrać mnóstwo czasu i siły. Przyjeżdżam własną glebogryzarką i przygotowuję teren do dalszych prac, bez zbędnego męczenia się szpadlem.
          </p>
          <div className="mt-10">
            <CTAButton large />
          </div>
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

      {/* SEKCJA 1: DO CZEGO TO SŁUŻY? + ZDJĘCIA */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 mb-12 md:mb-16">
          <p className="text-forest text-xs font-semibold uppercase tracking-widest mb-4">
            Do czego to służy
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-text tracking-tight mb-5">
            Kiedy taka usługa ma sens
          </h2>
          <p className="text-text-light leading-relaxed mb-8 max-w-xl">
            Glebogryzarka przydaje się wtedy, gdy teren trzeba porządnie spulchnić przed dalszą pracą. To dobre rozwiązanie tam, gdzie ziemia jest ciężka, zbita albo po prostu trudna do przekopania ręcznie.
          </p>
          <p className="text-sm font-medium text-text mb-3">Kiedy najczęściej się przydaje:</p>
          <ul className="space-y-3">
            {[
              "przygotowanie terenu pod nowy trawnik",
              "spulchnienie ziemi pod warzywniak albo ogród",
              "ruszenie twardej, zbitej albo gliniastej ziemi",
              "przygotowanie terenu pod dalsze prace ogrodowe",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-forest mt-0.5" />
                <span className="text-text-light text-[15px] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <figure className="rounded-2xl overflow-hidden bg-white shadow-sm border border-cream-dark/30">
            <Image
              src="/Glebogryzarka-przed-po.webp"
              alt="Spulchnianie ziemi glebogryzarką — zdjęcie przed i po"
              width={IMG.landscapePo.w}
              height={IMG.landscapePo.h}
              className="w-full h-auto"
              sizes="(max-width: 896px) 100vw, 896px"
            />
            <figcaption className="text-center text-sm text-text-light px-4 py-3 bg-cream/50 border-t border-cream-dark/30">
              Przed i po - glebogryzarka
            </figcaption>
          </figure>
        </div>
      </section>

      {/* SEKCJA 2: JAK TO WYGLĄDA */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-forest text-xs font-semibold uppercase tracking-widest mb-4">
            Jak to wygląda
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-text tracking-tight mb-6">
            Przyjeżdżam z własnym sprzętem i robię to na miejscu
          </h2>
          <p className="text-text-light leading-relaxed">
            Nie musisz organizować maszyny, paliwa ani zastanawiać się, jak się za to zabrać. Przyjeżdżam przygotowany i wykonuję usługę na miejscu, tak żeby teren był gotowy do dalszych prac.
          </p>
        </div>
      </section>

      {/* SEKCJA 3: DLA KOGO */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-forest text-xs font-semibold uppercase tracking-widest mb-4">
            Dla kogo jest ta usługa
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-text tracking-tight mb-6">
            Gdy ziemia jest ciężka i szkoda czasu na ręczne kopanie
          </h2>
          <p className="text-text-light leading-relaxed">
            Ta usługa sprawdza się wtedy, gdy teren jest zaniedbany, zbity albo przygotowanie go ręcznie zajęłoby za dużo czasu i siły. Korzystają z niej osoby, które chcą szybciej ogarnąć ogród, warzywnik albo teren pod trawnik i wolą zlecić to komuś z odpowiednim sprzętem.
          </p>
        </div>
      </section>

      {/* SEKCJA 4: CTA */}
      <section className="py-20 md:py-24 bg-forest-dark">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
            Masz teren do spulchnienia? Zadzwoń i opowiedz, co trzeba zrobić
          </h2>
          <p className="text-white/70 text-[15px] leading-relaxed mb-6">
            Każdy teren wygląda trochę inaczej, dlatego wyceniam pracę po krótkiej rozmowie. Powiedz, co jest do zrobienia, a od razu powiem Ci, ile to będzie kosztować.
          </p>
          <p className="text-white/50 text-sm mb-8">Działam w okolicach Jastrzębia-Zdroju, Cieszyna i pobliskich miejscowości.</p>
          <CTAButton large />
        </div>
      </section>
    </>
  );
}
