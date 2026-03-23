import type { Metadata } from "next";
import Image from "next/image";
import { Zap, CloudRain } from "lucide-react";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Rąbanie drewna na opał – Pomocny Tomek",
  description:
    "Szybkie rąbanie drewna łuparką kinetyczną 15t. Około 3 m³ na godzinę. Spalinowa, bez prądu. Namiot roboczy – pracuję w każdą pogodę. Jastrzębie-Zdrój, Cieszyn i okolice. Zadzwoń: 517 363 915.",
};

export default function DrewnoPage() {
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.12] tracking-tight mb-6">
            Szybkie rąbanie drewna na opał
            <br />
            Nie musisz męczyć się z tym samemu
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mb-10">
            Przygotowanie drewna na opał to ciężka robota i strata czasu, jeśli nie ma się odpowiedniego sprzętu. Przyjeżdżam własną łuparką i robię to sprawnie, porządnie i bez niepotrzebnego zamieszania.
          </p>
          <CTAButton large />
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

      {/* SEKCJA 1: JAK PRACUJĘ I DLACZEGO TAK SZYBKO? */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-forest text-xs font-semibold uppercase tracking-widest mb-4">
                Sprzęt
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-text tracking-tight mb-6">
                Dobry sprzęt to krótsza robota i mniejszy koszt
              </h2>
              <p className="text-text-light leading-relaxed mb-5">
                Nie pracuję siekierą ani wolnym sprzętem, przy którym wszystko ciągnie się godzinami. Używam szybkiej łuparki kinetycznej o nacisku 15 ton, dzięki czemu robota idzie sprawnie i bez zbędnego czekania.
              </p>
              <p className="text-text-light leading-relaxed mb-8">
                W praktyce oznacza to tyle, że w godzinę mogę przygotować nawet około 3 metrów sześciennych drewna. Im szybciej to zrobię, tym mniej płacisz za moją pracę.
              </p>
              <div className="rounded-xl bg-white p-5 border border-cream-dark/40">
                <p className="text-sm font-semibold text-text mb-3">Jakie drewno mogę porąbać?</p>
                <p className="text-text-light text-[15px] leading-relaxed mb-2">
                  Maszyna dobrze radzi sobie także z większymi kawałkami drewna:
                </p>
                <ul className="space-y-1 text-text-light text-[15px]">
                  <li>• długość polan: do 50–55 cm</li>
                  <li>• szerokość: około 35–45 cm</li>
                </ul>
              </div>
            </div>
            <div className="group relative aspect-square lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/drewno_1.jpeg"
                alt="Rąbanie drewna – łuparka w akcji"
                fill
                className="object-cover object-[center_55%] transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEKCJA 2: MOJE ATUTY */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-forest text-xs font-semibold uppercase tracking-widest mb-3">
              Przyjeżdżam i robię swoje
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-text tracking-tight">
              Ty pokazujesz, co trzeba zrobić, ja zajmuję się resztą
            </h2>
          </div>
          <p className="text-text-light text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Fachowiec ma ułatwiać sprawę, a nie ją komplikować. Dlatego przyjeżdżam przygotowany i ogarniam wszystko po swojej stronie.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-cream-dark/50 bg-cream/30 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest/10 text-forest mb-5">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-text mb-3">Nie potrzebuję Twojego prądu</h3>
              <p className="text-text-light text-[15px] leading-relaxed">
                Łuparka działa na silniku spalinowym, więc nie trzeba ciągnąć kabli, szukać gniazdka ani kombinować z przedłużaczami. Mogę pracować tam, gdzie leży drewno, nawet jeśli to dalsza część działki.
              </p>
            </div>
            <div className="rounded-2xl border border-cream-dark/50 bg-cream/30 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest/10 text-forest mb-5">
                <CloudRain className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-text mb-3">Mogę pracować także przy gorszej pogodzie</h3>
              <p className="text-text-light text-[15px] leading-relaxed">
                Jeśli trzeba zrobić drewno mimo deszczu albo śniegu, też da się to ogarnąć. Mam własny namiot roboczy, więc warunki nie muszą od razu zatrzymywać całej pracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCJA 3: ZDJĘCIA Z PRACY */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-text tracking-tight">
              Zobacz, jak wygląda moja praca w praktyce
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/drewno_1.jpeg"
                alt="Tomek przy rąbaniu drewna"
                fill
                className="object-cover object-[center_55%] transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/drewno_2.jpeg"
                alt="Porąbane drewno – efekt pracy"
                fill
                className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEKCJA 4: CTA / KONTAKT */}
      <section className="py-20 md:py-24 bg-forest-dark">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
            Masz drewno do porąbania?
          </h2>
          <p className="text-white/70 text-[15px] leading-relaxed mb-8">
            Zadzwoń, powiedz ile drewna jest do zrobienia, a od razu powiem Ci, jaki to będzie koszt i kiedy mogę podjechać.
          </p>
          <CTAButton large />
        </div>
      </section>
    </>
  );
}
