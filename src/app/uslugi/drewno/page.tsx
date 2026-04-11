import type { Metadata } from "next";
import Image from "next/image";
import { Zap, CloudRain } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import { IMG } from "@/lib/imageAssets";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/uslugi/drewno", {
  title: "Rąbanie i łupanie drewna na opał",
  description:
    "Łupanie i rąbanie drewna łuparką kinetyczną 15 t — mobilna usługa w Jastrzębiu-Zdroju, Cieszynie i okolicach. Spalinowa, bez prądu, możliwość pracy przy gorszej pogodzie. Tel. 517 363 915.",
  ogImage: "/luparka-przed-po.webp",
  ogImageWidth: IMG.landscapePo.w,
  ogImageHeight: IMG.landscapePo.h,
});

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
                W praktyce oznacza to tyle, że robota idzie sprawniej, a Ty nie płacisz za „ciągnięcie” tematu godzinami.
              </p>
              <div className="rounded-xl bg-white p-5 border border-cream-dark/40">
                <p className="text-sm font-semibold text-text mb-3">Jakie drewno mogę porąbać?</p>
                <p className="text-text-light text-[15px] leading-relaxed mb-2">
                  Większe kawałki drewna nie są problemem.
                </p>
                <ul className="space-y-1.5 text-text-light text-[15px]">
                  <li>• Nie ograniczam się sztywno do „książkowych” parametrów.</li>
                  <li>• W trudniejszych przypadkach też da się to ogarnąć – dobieram sposób pracy do tego, co jest na miejscu.</li>
                  <li>• Jak masz wątpliwości, po prostu zadzwoń i opowiedz, co to za drewno.</li>
                </ul>
              </div>
            </div>
            <div className="group relative aspect-square lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/drewno_1.webp"
                alt="Łuparka kinetyczna przy rąbaniu drewna na opał — usługa w Jastrzębiu-Zdroju i okolicach"
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

      {/* SEKCJA 3: ZDJĘCIA Z PRACY — rytm pionowy: padding sekcji = odstępy między blokami */}
      <section className="bg-cream">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 flex flex-col gap-20 md:gap-28 py-20 md:py-28">
          {/* lg+: tekst | film; poniżej lg: stack — stała szerokość kolumny z filmem (auto + w-full zawalało siatkę) */}
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_min(360px,100%)] lg:items-center lg:gap-10">
            <div className="min-w-0 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-text tracking-tight">
                Zobacz, jak wygląda moja praca w praktyce
              </h2>
              <div className="mt-3 flex flex-col items-center gap-4 lg:flex-row lg:items-center">
                <p className="text-text-light text-[15px] leading-relaxed">
                  Krótki film z pracy łuparki.
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
                      src="https://www.youtube-nocookie.com/embed/XNEtqJimVZs?rel=0&modestbranding=1"
                      title="Rąbanie drewna łuparką - film z pracy"
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
            <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/drewno_1.webp"
                alt="Praca przy rąbaniu drewna na działce — porąbane polana"
                fill
                className="object-cover object-[center_55%] transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/drewno_2.webp"
                alt="Porąbane drewno na opał — efekt pracy łuparką"
                fill
                className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="mx-auto w-full max-w-4xl">
            <figure className="rounded-2xl overflow-hidden bg-white shadow-sm border border-cream-dark/30">
              <Image
                src="/luparka-przed-po.webp"
                alt="Łupanie drewna — zdjęcie przed i po z pracy łuparką"
                width={IMG.landscapePo.w}
                height={IMG.landscapePo.h}
                className="w-full h-auto"
                sizes="(max-width: 896px) 100vw, 896px"
              />
              <figcaption className="text-center text-sm text-text-light px-4 py-3 bg-cream/50 border-t border-cream-dark/30">
                Przed i po - łuparka
              </figcaption>
            </figure>
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
