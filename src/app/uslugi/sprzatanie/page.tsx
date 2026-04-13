import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import { IMG } from "@/lib/imageAssets";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/uslugi/sprzatanie", {
  title: "Oczyszczanie działek, usuwanie krzaków i samosiejek",
  description:
    "Oczyszczanie działek i terenu: usuwanie krzaków i samosiejek, wycinka krzewów, porządkowanie zaniedbanego terenu. Jastrzębie-Zdrój, Cieszyn i okolice. Tel. 790 302 007.",
  ogImage: "/gleba1.webp",
  ogImageWidth: IMG.gleba.w,
  ogImageHeight: IMG.gleba.h,
});

const zakres = [
  "oczyszczanie z krzaków",
  "usuwanie samosiejek",
  "wycinka krzewów",
  "porządkowanie zaniedbanego terenu",
];

export default function OczyszczanieDzialekPage() {
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
            Oczyszczanie działek i terenu
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mb-10">
            Jeśli działka albo teren są zarośnięte krzakami, samosiejkami albo po prostu wymagają
            uporządkowania, przyjeżdżam z własnym sprzętem i pomagam doprowadzić wszystko do porządku.
            To dobra opcja wtedy, gdy trzeba oczyścić teren bez zamawiania dużej ekipy i bez
            niepotrzebnych kosztów.
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

      {/* ZAKRES PRAC */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-forest text-xs font-semibold uppercase tracking-widest mb-4">
            Zakres prac
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-text tracking-tight mb-8">
            Co mogę zrobić
          </h2>
          <ul className="space-y-4">
            {zakres.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-forest mt-0.5" />
                <span className="text-text-light text-[15px] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* DOPRECYZOWANIE */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-text-light leading-relaxed text-[15px] md:text-base">
            Zajmuję się między innymi oczyszczaniem z krzaków, usuwaniem samosiejek i wycinką
            krzewów. Zakres prac można ustalić indywidualnie w zależności od tego, co dokładnie jest
            do zrobienia.
          </p>
        </div>
      </section>

      {/* REALIZACJE */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-text tracking-tight">
              Zobacz jak pracuję
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden bg-white shadow-sm">
              <Image
                src="/gleba1.webp"
                alt="Oczyszczanie działki — przykład prac w terenie"
                width={IMG.gleba.w}
                height={IMG.gleba.h}
                className="w-full aspect-[4/3] object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="rounded-2xl overflow-hidden bg-white shadow-sm">
              <Image
                src="/gleba2.webp"
                alt="Oczyszczanie terenu — efekt po pracach"
                width={IMG.gleba.w}
                height={IMG.gleba.h}
                className="w-full aspect-[4/3] object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-forest-dark">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
            Teren do uporządkowania? Zadzwoń i opowiedz, co trzeba zrobić
          </h2>
          <p className="text-white/70 text-[15px] leading-relaxed mb-8">
            Każda działka wygląda trochę inaczej, dlatego wyceniam pracę po krótkiej rozmowie.
            Powiedz, jaki jest zakres roboty, a od razu powiem Ci, ile to będzie kosztować.
          </p>
          <CTAButton large />
        </div>
      </section>
    </>
  );
}
