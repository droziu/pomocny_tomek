import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import { IMG } from "@/lib/imageAssets";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/uslugi/frezowanie-pni", {
  title: "Frezowanie pni i usuwanie pni po wycince",
  description:
    "Frezowanie pni z wyceną indywidualną — grubość pnia, gatunek drzewa i dostęp do miejsca pracy. Jastrzębie-Zdrój, Cieszyn i okolice. Tel. 790 302 007.",
  ogImage: "/Frezarka_do_pni-przed-po.webp",
  ogImageWidth: 1200,
  ogImageHeight: 805,
});

export default function FrezowaniePniPage() {
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
            Frezowanie pni
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mb-10">
            Wycena jest ustalana indywidualnie, bo zależy od wielkości pnia, rodzaju drzewa i warunków
            na miejscu. Najlepiej zadzwonić, krótko opisać sytuację, a od razu powiem, jak to wygląda
            i jaka będzie orientacyjna cena.
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

      {/* JAK WYCENIAM + ZDJĘCIE */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <p className="text-forest text-xs font-semibold uppercase tracking-widest mb-4">
                Jak wyceniam usługę
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-text tracking-tight mb-6">
                Cena zależy przede wszystkim od:
              </h2>
              <ul className="space-y-3 mb-8">
                {[
                  "grubości pnia",
                  "rodzaju drzewa",
                  "dostępu do miejsca pracy",
                  "warunków na miejscu",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-forest mt-0.5" />
                    <span className="text-text-light text-[15px] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-text-light leading-relaxed text-[15px] md:text-base">
                Nie ma tu jednego sztywnego cennika, bo każde zlecenie wygląda trochę inaczej.
              </p>
            </div>

            <figure className="rounded-2xl overflow-hidden bg-white shadow-sm border border-cream-dark/30">
              <Image
                src="/Frezarka_do_pni-przed-po.webp"
                alt="Frezowanie pni — efekt przed i po usunięciu pnia"
                width={IMG.landscapePo.w}
                height={IMG.landscapePo.h}
                className="w-full h-auto"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <figcaption className="px-4 py-3 bg-cream/50 border-t border-cream-dark/30 text-center">
                <span className="block text-sm font-semibold text-text">
                  Frezowanie pni – przed i po
                </span>
                <span className="mt-1 block text-sm text-text-light leading-relaxed">
                  Tutaj możesz zobaczyć, jak wygląda efekt po wykonaniu usługi.
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-forest-dark">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
            Masz pień do usunięcia?
          </h2>
          <p className="text-white/70 text-[15px] leading-relaxed mb-8">
            Zadzwoń i powiedz, gdzie się znajduje oraz jaki ma mniej więcej rozmiar. Na tej podstawie
            powiem Ci, jak to widzę i jakiej wyceny można się spodziewać.
          </p>
          <CTAButton large />
        </div>
      </section>
    </>
  );
}
