import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/uslugi/wiercenie-otworow", {
  title: "Wiercenie otworów w ziemi pod ogrodzenie i drzewka",
  description:
    "Wiercenie otworów w ziemi pod ogrodzenie, sadzenie drzewek i inne prace - średnice 10, 20 i 30 cm. Jastrzębie-Zdrój, Cieszyn i okolice. Tel. 790 302 007.",
});

const zakres = [
  "wiercenie pod ogrodzenia",
  "wiercenie pod drzewka",
  "różnego rodzaju wiercenia w ziemi",
  "średnice: 10 cm, 20 cm, 30 cm",
];

export default function WiercenieOtworowPage() {
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
            Wiercenie otworów w ziemi
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mb-10">
            Wiercę otwory w ziemi pod ogrodzenia, drzewka i różnego rodzaju prace w terenie. To
            wygodne rozwiązanie tam, gdzie ręczne kopanie byłoby męczące, czasochłonne albo po
            prostu niepraktyczne.
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
            Przyjeżdżam z własnym sprzętem i wykonuję takie prace sprawnie oraz dokładnie. Usługa
            sprawdza się zarówno przy przygotowaniu pod ogrodzenie, jak i przy sadzeniu drzewek czy
            innych pracach, gdzie potrzebne są konkretne otwory w ziemi.
          </p>

          <p className="text-forest text-xs font-semibold uppercase tracking-widest mb-4">
            Zakres
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-text tracking-tight mb-8">
            Co wchodzi w grę
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
            Jeśli nie masz pewności, czy dana praca wchodzi w zakres usługi, najlepiej po prostu
            zadzwonić i opisać, co jest do zrobienia.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-forest-dark">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
            Potrzebujesz otworów w ziemi? Zadzwoń
          </h2>
          <p className="text-white/70 text-[15px] leading-relaxed mb-8">
            Opowiedz, co jest do zrobienia, a powiem Ci, czy to wchodzi w zakres i jaka będzie
            wycena.
          </p>
          <CTAButton large />
        </div>
      </section>
    </>
  );
}
