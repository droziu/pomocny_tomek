"use client";

import { useState, useMemo } from "react";
import { Search, MapPin } from "lucide-react";
import { SERVED_CITIES } from "@/data/postalCodes";

function normalizeForSearch(str: string): string {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function highlightMatch(text: string, query: string): React.ReactNode {
  if (!query.trim()) return text;
  const normText = normalizeForSearch(text);
  const normQuery = normalizeForSearch(query);
  const idx = normText.indexOf(normQuery);
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="bg-cta/25 text-forest-dark font-semibold rounded px-0.5">
        {text.slice(idx, idx + query.length)}
      </mark>
      {text.slice(idx + query.length)}
    </>
  );
}

export default function CitySearchSection() {
  const [query, setQuery] = useState("");

  const filteredCities = useMemo(() => {
    if (!query.trim()) return SERVED_CITIES;
    const normQuery = normalizeForSearch(query);
    return SERVED_CITIES.filter((city) =>
      normalizeForSearch(city).includes(normQuery)
    );
  }, [query]);

  const hasMatches = filteredCities.length > 0;
  const isEmptySearch = query.trim().length > 0 && !hasMatches;
  const citiesToShow = isEmptySearch ? SERVED_CITIES : filteredCities;

  return (
    <section className="py-16 md:py-24 bg-white border-t border-cream-dark/40">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <p className="text-forest text-xs font-semibold uppercase tracking-widest mb-2">
          Obszar działania
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-text mb-2">
          Miejscowości, do których dojeżdżam
        </h2>
        <p className="text-text-light text-base sm:text-lg mb-8 max-w-2xl">
          Prowadzę usługi ogrodnicze i porządkowe w Jastrzębiu-Zdroju oraz
          okolicznych miejscowościach. Sprawdź, czy Twoja miejscowość jest na
          liście.
        </p>

        {/* Mini-wyszukiwarka */}
        <div className="relative mb-10">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-warm-gray-light" />
          <input
            type="search"
            inputMode="search"
            placeholder="Wpisz swoje miasto..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-2xl border border-cream-dark bg-cream/40 pl-12 pr-4 py-4 text-base text-text placeholder:text-warm-gray-light focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest transition-shadow"
            aria-label="Wyszukaj swoją miejscowość"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-warm-gray-light hover:text-text text-sm"
              aria-label="Wyczyść wyszukiwanie"
            >
              ✕
            </button>
          )}
        </div>

        {/* Wyniki / lista */}
        {isEmptySearch ? (
          <p className="text-text-light mb-6">
            Nie znaleziono miejscowości pasującej do „{query}”. Poniżej pełna
            lista – sprawdź pisownię lub wybierz swoją miejscowość.
          </p>
        ) : null}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
          {citiesToShow.map((city) => (
            <div
              key={city}
              className="flex items-center gap-2 rounded-xl border border-cream-dark/50 bg-cream/30 px-4 py-3 transition-colors hover:border-forest/20 hover:bg-cream/50"
            >
              <MapPin className="h-4 w-4 shrink-0 text-forest/60" />
              <span className="text-text font-medium">
                {highlightMatch(city, query)}
              </span>
            </div>
          ))}
        </div>

        {/* SEO: pełna lista miejscowości jako tekst (ukryta wizualnie ale czytelna dla robotów) */}
        <div className="mt-12 pt-8 border-t border-cream-dark/30">
          <p className="text-sm text-text-light">
            Usługi ogrodnicze Jastrzębie-Zdrój, Żory, Rybnik, Wodzisław Śląski,
            Pszczyna, Radlin, Gorzyce, Pawłowice, Zebrzydowice, Miedźna,
            Studzionka, Rydułtowy, Pszów, Lubomia, Kaczyce, Cieszyn, Skoczów i
            okolice.
          </p>
        </div>
      </div>
    </section>
  );
}
