"use client";

import { useState } from "react";
import { MapPin, CheckCircle2, XCircle, Map } from "lucide-react";
import { SERVED_CODES } from "@/data/postalCodes";

type Variant = "default" | "featured";

function normalizePostalCode(value: string): string {
  return value.replace(/\s/g, "").toLowerCase();
}

function isValidFormat(code: string): boolean {
  const digits = normalizePostalCode(code).replace(/\D/g, "");
  return digits.length === 5;
}

function toStandardFormat(code: string): string {
  const digits = normalizePostalCode(code).replace(/\D/g, "").slice(0, 5);
  if (digits.length < 5) return code;
  return `${digits.slice(0, 2)}-${digits.slice(2)}`;
}

function isServed(postalCode: string): boolean {
  const normalized = toStandardFormat(postalCode);
  return (SERVED_CODES as readonly string[]).includes(normalized);
}

export default function PostalCodeChecker({ variant = "default" }: { variant?: Variant }) {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<"yes" | "no" | null>(null);
  const [formatted, setFormatted] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) {
      setResult(null);
      return;
    }

    const standard = toStandardFormat(trimmed);
    if (!isValidFormat(trimmed)) {
      setResult("no");
      setFormatted(null);
      return;
    }

    setFormatted(standard);
    setResult(isServed(trimmed) ? "yes" : "no");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value.replace(/\D/g, "");
    if (v.length > 5) v = v.slice(0, 5);
    if (v.length > 2) {
      setValue(`${v.slice(0, 2)}-${v.slice(2)}`);
    } else {
      setValue(v);
    }
    setResult(null);
  };

  if (variant === "featured") {
    return (
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-[0_4px_20px_-4px_rgba(45,90,61,0.08)] border border-cream-dark/40">
        {/* Delikatny wzór w tle */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-forest/5" />
        </div>
        <div className="relative px-5 py-4 sm:px-6 sm:py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Ikona + tekst - wyśrodkowane */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-forest/10 text-forest">
                <Map className="h-6 w-6" strokeWidth={1.8} />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-bold text-text leading-tight">
                  Sprawdź, czy do Ciebie dojadę
                </h2>
                <p className="text-sm text-text-light mt-0.5">
                  Wpisz kod pocztowy – od razu się dowiesz
                </p>
              </div>
            </div>

            {/* Formularz - kompaktowy */}
            <form onSubmit={handleSubmit} className="flex gap-2 sm:min-w-[280px]">
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-warm-gray-light" />
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="np. 44-335"
                  value={value}
                  onChange={handleChange}
                  maxLength={6}
                  className="w-full rounded-xl border border-cream-dark bg-cream/50 pl-9 pr-3 py-2.5 text-sm text-text placeholder:text-warm-gray-light focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest"
                />
              </div>
              <button
                type="submit"
                className="rounded-xl bg-cta px-4 py-2.5 text-sm font-bold text-white hover:bg-cta-hover transition-colors shrink-0"
              >
                Sprawdź
              </button>
            </form>
          </div>

          {/* Wynik - bez nadmiarowego marginesu */}
          {result === "yes" && (
            <div className="mt-4 flex items-start gap-3 rounded-xl bg-forest/5 border border-forest/20 p-3 animate-in fade-in slide-in-from-top-2 duration-300">
              <CheckCircle2 className="h-6 w-6 shrink-0 text-forest mt-0.5" />
              <div>
                <p className="font-semibold text-forest">Tak, do Ciebie dojadę!</p>
                <p className="text-sm text-text-light mt-0.5">
                  Kod {formatted} jest w moim obszarze działania. Zadzwoń, umówimy się.
                </p>
              </div>
            </div>
          )}
          {result === "no" && (
            <div className="mt-4 flex items-start gap-3 rounded-xl bg-red-50 border border-red-200 p-3 animate-in fade-in slide-in-from-top-2 duration-300">
              <XCircle className="h-6 w-6 shrink-0 text-red-600 mt-0.5" />
              <div>
                <p className="font-semibold text-red-800">Niestety, to poza moim zasięgiem</p>
                <p className="text-sm text-red-700/90 mt-0.5">
                  {formatted
                    ? `Kod ${formatted} jest zbyt daleko. Działam w Jastrzębiu-Zdroju i okolicznych miejscowościach.`
                    : "Wprowadź poprawny kod pocztowy (XX-XXX)."}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm border border-cream-dark/30">
      <h2 className="flex items-center gap-2 text-lg font-bold text-text mb-1">
        <MapPin className="h-5 w-5 text-forest" aria-hidden />
        Sprawdź, czy do Ciebie dojadę
      </h2>
      <p className="text-sm text-text-light mb-4">
        Wpisz swój kod pocztowy – od razu dowiesz się, czy świadczę usługi w Twojej okolicy.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          inputMode="numeric"
          placeholder="np. 44-335"
          value={value}
          onChange={handleChange}
          maxLength={6}
          className="flex-1 rounded-xl border border-cream-dark bg-cream/50 px-4 py-3 text-base text-text placeholder:text-warm-gray-light focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-colors"
        />
        <button
          type="submit"
          className="rounded-xl bg-forest px-5 py-3 text-base font-semibold text-white hover:bg-forest-dark transition-colors shrink-0"
        >
          Sprawdź
        </button>
      </form>

      {result === "yes" && (
        <div className="mt-4 flex items-start gap-3 rounded-xl bg-forest/5 border border-forest/20 p-4 animate-in fade-in slide-in-from-top-2 duration-300">
          <CheckCircle2 className="h-6 w-6 shrink-0 text-forest mt-0.5" />
          <div>
            <p className="font-semibold text-forest">Tak, do Ciebie dojadę!</p>
            <p className="text-sm text-text-light mt-0.5">
              Kod {formatted} jest w moim obszarze działania. Zadzwoń, umówimy się.
            </p>
          </div>
        </div>
      )}

      {result === "no" && (
        <div className="mt-4 flex items-start gap-3 rounded-xl bg-red-50 border border-red-200 p-4 animate-in fade-in slide-in-from-top-2 duration-300">
          <XCircle className="h-6 w-6 shrink-0 text-red-600 mt-0.5" />
          <div>
            <p className="font-semibold text-red-800">Niestety, to poza moim zasięgiem</p>
            <p className="text-sm text-red-700/90 mt-0.5">
              {formatted
                ? `Kod ${formatted} jest zbyt daleko. Działam w Jastrzębiu-Zdroju i okolicznych miejscowościach.`
                : "Wprowadź poprawny kod pocztowy (XX-XXX)."}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
