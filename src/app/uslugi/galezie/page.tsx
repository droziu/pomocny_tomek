import type { Metadata } from "next";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import FeatureCheckList from "@/components/FeatureCheckList";

export const metadata: Metadata = {
  title: "Rozdrabnianie gałęzi po przycince – Pomocny Tomek",
  description:
    "Rozdrabnianie gałęzi własnym rębakiem. Do 12 cm grubości. Jastrzębie-Zdrój, Cieszyn i okolice. Zadzwoń: 517 363 915.",
};

export default function GaleziePage() {
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
            Rozdrabnianie gałęzi po przycince
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mb-10">
            Po przycince drzew i krzewów bardzo szybko robi się sterta gałęzi, którą trzeba jakoś uprzątnąć. Przyjeżdżam własnym rębakiem, rozdrabniam gałęzie na miejscu i ogarniam temat bez zbędnego kombinowania.
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

      {/* SEKCJA 1: JAK TO WYGLĄDA */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-forest text-xs font-semibold uppercase tracking-widest mb-4">
            Jak to wygląda
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-text tracking-tight mb-6">
            Nie musisz nic organizować po swojej stronie
          </h2>
          <p className="text-text-light leading-relaxed">
            Nie musisz organizować sprzętu, ciąć wszystkiego ręcznie ani zastanawiać się, co zrobić z gałęziami po przycince. Przyjeżdżam, robię swoją robotę i po wszystkim zostaje porządek.
          </p>
        </div>
      </section>

      {/* SEKCJA 2: SPRZĘT */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-forest text-xs font-semibold uppercase tracking-widest mb-4">
                Sprzęt
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-text tracking-tight mb-6">
                Własny sprzęt i sprawna robota
              </h2>
              <p className="text-text-light leading-relaxed mb-5">
                Pracuję własnym rębakiem, który radzi sobie z gałęziami do 12 cm grubości, więc spokojnie ogarnia typowe porządki po przycince drzew i krzewów.
              </p>
              <p className="text-text-light leading-relaxed mb-6">
                Na miejsce przyjeżdżam przygotowany, z potrzebnym sprzętem i paliwem, więc nie musisz nic organizować po swojej stronie.
              </p>
              <FeatureCheckList
                items={["Własny sprzęt", "Gałęzie do 12 cm", "Po pracy zostaje porządek"]}
                variant="cream"
              />
            </div>
            <div className="group relative aspect-square lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/galezie_1.jpeg"
                alt="Rębak Cedrus w pracy"
                fill
                className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEKCJA 3: ZDJĘCIA Z PRACY */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-text tracking-tight">
              Zobacz przykładowe realizacje
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/galezie_1.jpeg"
                alt="Rozdrabnianie gałęzi – rębak w akcji"
                fill
                className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/galezie_2.jpeg"
                alt="Gotowe zrębki – efekt pracy"
                fill
                className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEKCJA 4: KONTAKT */}
      <section className="py-20 md:py-24 bg-forest-dark">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
            Zadzwoń i powiedz, co jest do zrobienia
          </h2>
          <p className="text-white/70 text-[15px] leading-relaxed mb-8">
            Każda działka i każda ilość gałęzi wygląda trochę inaczej, dlatego wyceniam pracę po krótkiej rozmowie. Opowiedz, jaki jest zakres roboty, a od razu powiem Ci, ile to będzie kosztować.
          </p>
          <CTAButton large />
        </div>
      </section>
    </>
  );
}
