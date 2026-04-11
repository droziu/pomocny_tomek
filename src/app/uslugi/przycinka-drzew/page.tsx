import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/uslugi/przycinka-drzew", {
  title: "Przycinka drzew owocowych i mniejszych drzew",
  description:
    "Przycinka drzew owocowych i mniejszych drzew oraz pomoc przy prostszych pracach ze ścinką. Jastrzębie-Zdrój, Cieszyn i okolice. Tel. 517 363 915.",
});

const zakres = [
  "przycinka drzew",
  "przycinka drzew owocowych",
  "przycinka mniejszych drzew",
  "możliwość pomocy przy ścince drzew",
  "prace wykonywane sprzętem własnym",
];

export default function PrzycinkaDrzewPage() {
  return (
    <>
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
            Przycinka drzew
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mb-10">
            Zajmuję się przycinką mniejszych drzew oraz drzew owocowych. Jeśli drzewo wymaga
            uporządkowania, ograniczenia rozrostu albo po prostu przycięcia, przyjeżdżam z własnym
            sprzętem i pomagam wykonać taką pracę bez zbędnego zamieszania.
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

      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-text-light leading-relaxed text-[15px] md:text-base mb-10">
            To usługa przede wszystkim do mniejszych zleceń. Mogę pomóc przy przycince drzew
            owocowych, mniejszych drzew oraz przy prostszych pracach związanych ze ścinką. Nie
            chodzi tutaj o bardzo duże i skomplikowane realizacje specjalistyczne, tylko o konkretną
            pomoc tam, gdzie taka praca jest realnie potrzebna.
          </p>

          <p className="text-forest text-xs font-semibold uppercase tracking-widest mb-4">
            Zakres
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-text tracking-tight mb-8">
            Co mogę zrobić
          </h2>
          <ul className="space-y-4 mb-10">
            {zakres.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-forest mt-0.5" />
                <span className="text-text-light text-[15px] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-text-light leading-relaxed text-[15px] md:text-base rounded-2xl border border-cream-dark/40 bg-white p-6">
            Jeśli nie wiesz, czy chodzi jeszcze o przycinkę, czy już o większą pracę, najlepiej
            zadzwonić i krótko opisać sytuację.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-forest-dark">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
            Drzewo do przycięcia? Zadzwoń
          </h2>
          <p className="text-white/70 text-[15px] leading-relaxed mb-8">
            Krótko opisz sytuację, a powiem Ci, czy to wchodzi w zakres i jak to widzę kosztowo.
          </p>
          <CTAButton large />
        </div>
      </section>
    </>
  );
}
