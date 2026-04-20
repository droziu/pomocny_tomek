import type { Metadata } from "next";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import FeatureCheckList from "@/components/FeatureCheckList";
import { IMG } from "@/lib/imageAssets";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/uslugi/galezie", {
  title: "Rozdrabnianie gałęzi rębakiem po przycince",
  description:
    "Rozdrabnianie gałęzi własnym rębakiem - gałęzie do ok. 12 cm. Usługa w Jastrzębiu-Zdroju, Cieszynie i okolicach. Mniej wywozu, porządek na działce. Tel. 790 302 007.",
  ogImage: "/Przycinanie_galezi_przed-po.webp",
  ogImageWidth: IMG.landscapePo.w,
  ogImageHeight: IMG.landscapePo.h,
});

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
            Po przycince drzew i krzewów bardzo szybko robi się sterta gałęzi, którą trzeba jakoś uprzątnąć. Przyjeżdżam własnym rębakiem, rozdrabniam gałęzie na miejscu i rozwiązuję problem szybko oraz konkretnie.
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

      {/* SEKCJA 1: JAK TO WYGLĄDA + ZDJĘCIE PRZED/PO (jak na glebogryzarce) */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 mb-12 md:mb-16">
          <p className="text-forest text-xs font-semibold uppercase tracking-widest mb-4">
            Jak to wygląda
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-text tracking-tight mb-6">
            Nie musisz nic organizować po swojej stronie
          </h2>
          <p className="text-text-light leading-relaxed mb-6">
            Nie musisz organizować sprzętu, ciąć wszystkiego ręcznie ani zastanawiać się, co zrobić z gałęziami po przycince. Przyjeżdżam, robię swoją robotę i po wszystkim zostaje porządek.
          </p>
          <div className="rounded-2xl border border-cream-dark/50 bg-white p-6">
            <p className="text-sm font-semibold text-text mb-2">
              Co zostaje po rozdrabnianiu?
            </p>
            <p className="text-text-light text-[15px] leading-relaxed">
              Duże sterty gałęzi zamieniają się w niewielką ilość zrębków. Często nie trzeba niczego wywozić. Zrębki można rozplantować na działce (np. pod krzewy) i temat bałaganu znika.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <figure className="rounded-2xl overflow-hidden bg-white shadow-sm border border-cream-dark/30">
            <Image
              src="/Przycinanie_galezi_przed-po.webp"
                alt="Rozdrabnianie gałęzi - porównanie przed i po na działce"
              width={IMG.landscapePo.w}
              height={IMG.landscapePo.h}
              className="w-full h-auto"
              sizes="(max-width: 896px) 100vw, 896px"
            />
            <figcaption className="text-center text-sm text-text-light px-4 py-3 bg-cream/50 border-t border-cream-dark/30">
              Przed i po - gałęzie
            </figcaption>
          </figure>
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

            <figure className="rounded-2xl overflow-hidden bg-white shadow-sm border border-cream-dark/30">
              <Image
                src="/rebak_rozdrabnianie_galezi.webp"
                alt="Rębak do gałęzi przy rozdrabnianiu po przycince"
                width={IMG.rebak.w}
                height={IMG.rebak.h}
                className="w-full h-auto"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* SEKCJA 3: PRZYKŁADOWE REALIZACJE - rytm pionowy: padding sekcji = odstępy między blokami */}
      <section className="bg-cream">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 flex flex-col gap-20 md:gap-28 py-20 md:py-28">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_min(360px,100%)] lg:items-center lg:gap-10">
            <div className="min-w-0 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-text tracking-tight">
                Zobacz przykładowe realizacje
              </h2>
              <div className="mt-3 flex flex-col items-center gap-4 lg:flex-row lg:items-center">
                <p className="text-text-light text-[15px] leading-relaxed">
                  Krótki film z pracy rębaka.
                </p>
                <span
                  className="hidden lg:inline-flex items-center gap-0 text-forest/45"
                  aria-hidden
                >
                  <span className="h-0.5 w-20 rounded-full bg-current sm:w-28" />
                  <svg
                    width="28"
                    height="12"
                    viewBox="0 0 28 12"
                    className="-ml-px shrink-0"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 6h22M18 1l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div className="flex w-full justify-center lg:justify-end">
              <div className="w-full max-w-[360px] shrink-0">
                <div className="rounded-2xl overflow-hidden bg-white shadow-sm border border-cream-dark/30">
                  <div className="relative aspect-[9/16] w-full bg-black">
                    <iframe
                      className="absolute inset-0 h-full w-full border-0"
                      src="https://www.youtube-nocookie.com/embed/QN3taUfc9dc?rel=0&modestbranding=1"
                      title="Rozdrabnianie gałęzi - film z pracy"
                      width={360}
                      height={640}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-cream-dark/30">
              <Image
                src="/galezie_1.webp"
                alt="Rębak do rozdrabniania gałęzi w pracy"
                fill
                className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-cream-dark/30">
              <Image
                src="/galezie_2.webp"
                alt="Zrębki po rozdrabnianiu gałęzi - efekt pracy rębakiem"
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
