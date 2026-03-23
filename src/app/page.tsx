import Image from "next/image";
import { Axe, Leaf, Tractor, TreeDeciduous, Wrench, Wallet, MapPin, Users, Truck, CheckCircle2 } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import ServiceCard from "@/components/ServiceCard";
import PostalCodeChecker from "@/components/PostalCodeChecker";

export default function Home() {
  return (
    <>
      {/* HERO – klasyczny dwukolumnowy, zdjęcie nachodzi na sekcję poniżej, głowa wychodzi w górę */}
      <section className="relative z-20 bg-forest-dark overflow-visible">
        <div className="absolute inset-0 opacity-[0.06]" aria-hidden>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.15) 0%, transparent 50%)",
            }}
          />
        </div>

        <div className="relative overflow-visible mx-auto max-w-6xl px-4 sm:px-6 pt-24 pb-0 md:pt-28 lg:pb-20">
          <div className="grid overflow-visible lg:grid-cols-2 gap-4 lg:gap-12 items-center">
            {/* Tekst – lewa kolumna */}
            <div className="text-center lg:text-left">
              <p className="text-white/70 text-sm mb-4">
                Jastrzębie-Zdrój, Cieszyn i okolice
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.12] tracking-tight mb-6">
                Pomocny Tomek, fachowa pomoc przy drewnie i na działce
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10">
                Rąbanie drewna, rozdrabnianie gałęzi, koszenie trawy i porządki na działce. Przyjeżdżam, robię co trzeba i uczciwie się rozliczamy. Jak jest robota, z którą samemu ciężko ruszyć, po prostu zadzwoń.
              </p>
              <div className="flex justify-center lg:justify-start">
                <CTAButton large />
              </div>
            </div>

            {/* Zdjęcie – mobile: pełna szerokość, bez kontenera; desktop: kontener z efektem 3D */}
            <div className="relative overflow-visible">
              {/* Mobile – proste zdjęcie na pełną szerokość, flush z dołem hero */}
              <div className="lg:hidden -mx-4 sm:-mx-6 -mb-1">
                <Image
                  src="/Pomocny%20Tomek%20HERO.webp"
                  alt="Pomocny Tomek"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  sizes="100vw"
                  priority
                />
              </div>

              {/* Desktop – kontener z efektem 3D */}
              <div className="hidden lg:flex overflow-visible justify-end">
                <div className="relative overflow-visible w-full max-w-[440px]">
                  <div
                    className="absolute inset-x-0 top-0 h-20 pointer-events-none z-20"
                    style={{
                      background: "linear-gradient(to bottom, #1e3f2b 20%, transparent 100%)",
                    }}
                    aria-hidden
                  />
                  <Image
                    src="/Pomocny%20Tomek%20HERO.webp"
                    alt="Pomocny Tomek"
                    width={440}
                    height={660}
                    className="relative z-10 w-full h-auto rounded-b-3xl shadow-2xl"
                    sizes="45vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block absolute bottom-0 left-0 right-0 w-full -mb-1">
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

      {/* TRUST BADGES */}
      <section className="relative z-10 py-16 md:py-20 bg-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            {[
              { icon: Wrench, text: "Własny mocny sprzęt" },
              { icon: Wallet, text: "Uczciwe i jasne rozliczenie" },
              { icon: MapPin, text: "Jastrzębie-Zdrój, Cieszyn i okolice" },
            ].map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-2xl border border-cream-dark/50 bg-white p-5 flex-1 transition-colors hover:border-forest/20"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-forest/10 text-forest">
                  <badge.icon className="h-6 w-6" />
                </span>
                <span className="font-medium text-text">{badge.text}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 md:mt-10 max-w-4xl mx-auto">
            <PostalCodeChecker variant="featured" />
          </div>
        </div>
      </section>

      {/* O MNIE / MISJA */}
      <section className="pt-14 md:pt-20 pb-20 md:pb-28 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 flex flex-col gap-16 md:gap-20">
          {/* Nagłówek + intro – wyśrodkowane */}
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-text tracking-tight mb-4">
              Brakuje Ci czasu, siły albo sprzętu?
            </h2>
            <p className="text-text text-[17px] md:text-lg leading-relaxed max-w-2xl mx-auto">
              Pomagam osobom, które chcą mieć zrobione porządnie, ale bez przepłacania za wielką firmę. Przyjeżdżam własnym sprzętem, robię co trzeba, sprzątam po sobie i rozliczam się uczciwie. Prosto i konkretnie.
            </p>
          </div>

          {/* Zdjęcia + boxy – równomierna siatka */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/tomek_1.jpeg"
                alt="Pomocny Tomek"
                fill
                className="object-cover object-[center_35%] transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Boxy */}
            <div className="flex flex-col gap-4">
              {[
                { icon: Users, text: "Pomoc dla każdego" },
                { icon: Truck, text: "Przyjeżdżam z własnym sprzętem" },
                { icon: CheckCircle2, text: "Robota zrobiona porządnie i uczciwie" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="group flex items-center gap-4 rounded-xl bg-cream/70 p-5 border border-cream-dark/30 hover:border-forest/20 transition-colors"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-forest/10 text-forest">
                    <item.icon className="h-6 w-6" />
                  </span>
                  <p className="text-text font-medium text-[15px]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA – wyśrodkowane */}
          <div className="flex justify-center">
            <CTAButton />
          </div>
        </div>
      </section>

      {/* USŁUGI */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-text tracking-tight mb-3">
            W czym mogę pomóc?
          </h2>
          <p className="text-text-light mb-10 max-w-xl">
            Kliknij i sprawdź, czym się zajmuję.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            <ServiceCard
              href="/uslugi/drewno"
              icon={Axe}
              title="Rąbanie drewna"
              description="Łuparką szybko przygotuję drewno na opał. Sprawnie, porządnie i bez zbędnego bałaganu."
            />
            <ServiceCard
              href="/uslugi/galezie"
              icon={TreeDeciduous}
              title="Rozdrabnianie gałęzi"
              description="Rozdrabniam gałęzie własnym rębakiem, więc wszystko idzie sprawnie i bez kombinowania ze sprzętem."
            />
            <ServiceCard
              href="/uslugi/sprzatanie"
              icon={Leaf}
              title="Koszenie i sprzątanie"
              description="Koszenie trawy, porządki i ogarnianie zaniedbanych działek. Zrobię porządek tam, gdzie samemu ciężko się za to zabrać."
            />
            <ServiceCard
              href="/uslugi/glebogryzarka"
              icon={Tractor}
              title="Spulchnianie ziemi"
              description="Spulchnię ziemię pod trawnik, ogród albo warzywniak. Szybciej i wygodniej niż ręcznie."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-forest-dark">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
            Potrzebujesz pomocy?
          </h2>
          <p className="text-white/70 text-[15px] leading-relaxed mb-8">
            Zadzwoń, powiedz co trzeba zrobić, a od razu powiem Ci, ile to będzie kosztować.
          </p>
          <CTAButton large />
        </div>
      </section>
    </>
  );
}
