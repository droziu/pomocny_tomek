import type { Metadata } from "next";
import { Wrench, TrendingDown, Phone as PhoneIcon } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/cennik", {
  title: "Cennik usług — rąbanie drewna, glebogryzarka, działka",
  description:
    "Orientacyjny cennik Pomocnego Tomka: prace z łuparką, rębakiem, glebogryzarką i innym sprzętem. Od 350 zł za pierwsze 2 h z dojazdem. Jastrzębie-Zdrój, Cieszyn i okolice. Tel. 790 302 007.",
});

const pricingBlocks = [
  {
    icon: Wrench,
    label: "Prace z użyciem większego sprzętu",
    sublabel: "łuparka, rębak, glebogryzarka, traktorek",
    items: [
      {
        price: "350 zł",
        desc: "standardowy punkt wyjścia (minimum) za pierwsze 2 godziny razem z dojazdem i przygotowaniem sprzętu",
      },
      { price: "około 100 zł", desc: "za każdą kolejną rozpoczętą godzinę" },
      {
        price: null,
        desc: "Przy większych, nietypowych albo innych pracach wycena może być ustalana indywidualnie, więc zawsze warto zadzwonić i dogadać szczegóły.",
      },
    ],
  },
  {
    icon: TrendingDown,
    label: "Duże zlecenia",
    sublabel: null,
    items: [
      {
        price: null,
        desc: "Masz dużą działkę, sporo drewna albo większy zakres pracy? W takich przypadkach wyceniam wszystko indywidualnie. Przy większym zleceniu mogę zaproponować lepszą cenę.",
      },
    ],
  },
  {
    icon: PhoneIcon,
    label: "Drobne prace",
    sublabel: null,
    items: [
      {
        price: null,
        desc: "Koszenie, przycięcie żywopłotu albo inne mniejsze prace wyceniam indywidualnie. Zadzwoń i opowiedz, co jest do zrobienia.",
      },
    ],
  },
  {
    icon: Wrench,
    label: "Frezowanie pni",
    sublabel: null,
    items: [
      {
        price: null,
        desc: "Bez sztywnego cennika, tylko wycena indywidualna. Cena zależy m.in. od grubości pnia, rodzaju drzewa i dostępności miejsca. Zadzwoń, a od razu powiem Ci, jak to wygląda kosztowo.",
      },
    ],
  },
];

export default function CennikPage() {
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
            Cennik
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.12] tracking-tight mb-6">
            Proste i uczciwe zasady. Ile to kosztuje?
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
            Ceny ustalam jasno, bez kombinowania i bez ukrytych kosztów. Od początku wiesz, za co płacisz.
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

      {/* PRICING */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-forest text-xs font-semibold uppercase tracking-widest mb-8">
            Jak się rozliczamy
          </p>
          <div className="space-y-6">
            {pricingBlocks.map((block, i) => (
              <div
                key={i}
                className="rounded-2xl border border-cream-dark/50 bg-white p-6 md:p-8 transition-colors hover:border-cream-dark/80"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forest text-white">
                    <block.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-text">{block.label}</h2>
                    {block.sublabel && (
                      <p className="text-sm text-text-light mt-0.5">{block.sublabel}</p>
                    )}
                  </div>
                </div>
                <div className="space-y-3">
                  {block.items.map((item, j) => (
                    <div key={j} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      {item.price && (
                        <span className="shrink-0 inline-flex w-fit items-center rounded-lg bg-cta/10 px-3 py-1.5 text-base font-bold text-cta">
                          {item.price}
                        </span>
                      )}
                      <p className="text-text-light text-[15px] leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-forest-dark">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
            Wycena przez telefon nic nie kosztuje
          </h2>
          <p className="text-white/70 text-[15px] leading-relaxed mb-8">
            Zadzwoń, powiedz co jest do zrobienia, a od razu powiem Ci, ile to mniej więcej będzie kosztować.
          </p>
          <CTAButton large />
        </div>
      </section>
    </>
  );
}
