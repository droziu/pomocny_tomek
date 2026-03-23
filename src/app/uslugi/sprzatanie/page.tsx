import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import FeatureCheckList from "@/components/FeatureCheckList";

export const metadata: Metadata = {
  title: "Koszenie i sprzątanie działek – Pomocny Tomek",
  description:
    "Koszenie trawy, wykaszanie zarośli, porządki na działkach. Własny sprzęt. Jastrzębie-Zdrój, Cieszyn i okolice. Zadzwoń: 517 363 915.",
};

export default function SprzataniePage() {
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
            Koszenie i sprzątanie działek
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
            Koszę trawę, wykaszam zarośla i pomagam ogarnąć działki, które zarosły albo po prostu wymknęły się spod kontroli. Przyjeżdżam własnym sprzętem i robię porządek tam, gdzie samemu ciężko się za to zabrać.
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

      {/* SEKCJA 1: JAK TO WYGLĄDA */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-forest text-xs font-semibold uppercase tracking-widest mb-4">
            Jak to wygląda
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-text tracking-tight mb-6">
            Przyjeżdżam z własnym sprzętem i ogarniam teren od początku do końca
          </h2>
          <p className="text-text-light leading-relaxed">
            Nie musisz organizować sprzętu ani zastanawiać się, od czego zacząć. Koszę, wykaszam i sprzątam teren tak, żeby działka znowu nadawała się do normalnego użytku. Jeśli trzeba ogarnąć zaniedbany kawałek terenu, po prostu biorę się do roboty.
          </p>
        </div>
      </section>

      {/* SEKCJA 2: ZAKRES PRAC */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-forest text-xs font-semibold uppercase tracking-widest mb-4">
            Zakres prac
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-text tracking-tight mb-5">
            Co mogę zrobić na działce
          </h2>
          <p className="text-text-light leading-relaxed mb-8">
            Pomagam tam, gdzie trzeba po prostu wejść, wykosić, wyciąć i doprowadzić teren do porządku. To usługa dla osób, które nie mają czasu, siły albo sprzętu, żeby zrobić to samemu.
          </p>
          <ul className="space-y-4 mb-10">
            {[
              "koszenie większych terenów",
              "wykaszanie trudnych i zaniedbanych miejsc",
              "cięcie żywopłotów i gęstszych zarośli",
              "sprzątanie działek i ogólne porządki w terenie",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-forest mt-0.5" />
                <span className="text-text-light text-[15px] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SEKCJA 3: DLA KOGO */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-forest text-xs font-semibold uppercase tracking-widest mb-4">
            Dla kogo jest ta usługa
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-text tracking-tight mb-6">
            Gdy działka zarosła albo po prostu nie ma kiedy się za nią zabrać
          </h2>
          <p className="text-text-light leading-relaxed mb-6">
            Ta usługa sprawdza się wtedy, gdy działka jest zaniedbana, trawa urosła za wysoko, pojawiły się zarośla albo teren trzeba po prostu ogarnąć po dłuższym czasie. Często korzystają z niej osoby starsze, zapracowane albo takie, które nie mają odpowiedniego sprzętu.
          </p>
          <FeatureCheckList
            items={[
              "Własny sprzęt",
              "Zaniedbane tereny też wchodzą w grę",
              "Po pracy zostaje porządek",
            ]}
            variant="white"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-forest-dark">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
            Działka do ogarnięcia? Zadzwoń i opowiedz, co trzeba zrobić
          </h2>
          <p className="text-white/70 text-[15px] leading-relaxed mb-8">
            Każda działka wygląda trochę inaczej, dlatego wyceniam pracę po krótkiej rozmowie. Powiedz, jaki jest zakres roboty, a od razu powiem Ci, ile to będzie kosztować.
          </p>
          <CTAButton large />
        </div>
      </section>
    </>
  );
}
