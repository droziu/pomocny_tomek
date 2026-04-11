import { BUSINESS, SITE_URL } from "@/lib/site";

const services = [
  {
    path: "/uslugi/drewno",
    name: "Rąbanie i łupanie drewna na opał",
    description:
      "Mobilna łuparka kinetyczna — szybkie rąbanie drewna na opał w Jastrzębiu-Zdroju, Cieszynie i okolicach.",
  },
  {
    path: "/uslugi/galezie",
    name: "Rozdrabnianie gałęzi",
    description:
      "Rozdrabnianie gałęzi po przycince własnym rębakiem — porządek na działce bez wywozu.",
  },
  {
    path: "/uslugi/sprzatanie",
    name: "Oczyszczanie działek i terenu",
    description:
      "Oczyszczanie działek z krzaków i samosiejek, wycinka krzewów, porządkowanie terenu.",
  },
  {
    path: "/uslugi/glebogryzarka",
    name: "Spulchnianie ziemi glebogryzarką",
    description:
      "Usługa glebogryzarką — spulchnianie ziemi pod trawnik, ogród i warzywniak.",
  },
  {
    path: "/uslugi/frezowanie-pni",
    name: "Frezowanie pni",
    description: "Usuwanie pni po wycince — wycena indywidualna pod rodzaj pnia i dostęp.",
  },
  {
    path: "/uslugi/wiercenie-otworow",
    name: "Wiercenie otworów w ziemi",
    description:
      "Wiercenie otworów pod ogrodzenie, drzewka i inne prace w ziemi — średnice 10–30 cm.",
  },
  {
    path: "/uslugi/przycinka-drzew",
    name: "Przycinka drzew",
    description:
      "Przycinka mniejszych drzew i drzew owocowych oraz pomoc przy prostszych pracach ze ścinką.",
  },
] as const;

export default function StructuredData() {
  const businessId = `${SITE_URL}/#localbusiness`;

  const graph: Record<string, unknown>[] = [
    {
      "@type": "LocalBusiness",
      "@id": businessId,
      name: BUSINESS.name,
      url: SITE_URL,
      email: BUSINESS.email,
      telephone: BUSINESS.phones,
      description:
        "Usługi przy drewnie i na działce: rąbanie drewna, rozdrabnianie gałęzi, oczyszczanie działek, glebogryzarka, frezowanie pni, wiercenie w ziemi, przycinka drzew. Obszar: Jastrzębie-Zdrój, Cieszyn i okolice.",
      image: `${SITE_URL}/Logo_Pomocny_Tomek.webp`,
      priceRange: "$$",
      areaServed: [
        { "@type": "City", name: "Jastrzębie-Zdrój" },
        { "@type": "City", name: "Cieszyn" },
        {
          "@type": "AdministrativeArea",
          name: "Śląsk i okolice Jastrzębia-Zdroju oraz Cieszyna",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Usługi",
        itemListElement: services.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: s.name,
          url: `${SITE_URL}${s.path}`,
        })),
      },
    },
    ...services.map((s) => ({
      "@type": "Service",
      "@id": `${SITE_URL}${s.path}#service`,
      name: s.name,
      description: s.description,
      url: `${SITE_URL}${s.path}`,
      provider: { "@id": businessId },
      areaServed: [
        { "@type": "City", name: "Jastrzębie-Zdrój" },
        { "@type": "City", name: "Cieszyn" },
      ],
    })),
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
