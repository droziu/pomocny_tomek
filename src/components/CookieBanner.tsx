"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "cookie-consent";
const SETTINGS_REQUEST_KEY = "cookie-settings-requested";

type Consent = {
  essential: boolean;
  analytical: boolean;
  marketing: boolean;
  timestamp: number;
};

function getStoredConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Consent;
    if (parsed.essential === undefined) return null;
    return parsed;
  } catch {
    return null;
  }
}

function storeConsent(consent: Consent) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    window.dispatchEvent(new CustomEvent("cookieConsentChanged", { detail: consent }));
  } catch {
    /* localStorage może rzucać w trybie incognito / Android low-memory */
  }
}

function clearSettingsRequest() {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(SETTINGS_REQUEST_KEY);
  } catch {
    /* localStorage może rzucać w trybie incognito / Android */
  }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytical, setAnalytical] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    let settingsRequested = false;
    try {
      settingsRequested =
        typeof window !== "undefined" && localStorage.getItem(SETTINGS_REQUEST_KEY) === "true";
    } catch {
      /* localStorage może rzucać (incognito, Android) */
    }
    const consent = getStoredConsent();

    if (!consent || settingsRequested) {
      setVisible(true);
      if (consent) {
        setAnalytical(consent.analytical);
        setMarketing(consent.marketing);
      }
      if (settingsRequested) setShowSettings(true);
      clearSettingsRequest();
    }

    const handleShow = () => {
      setVisible(true);
      setShowSettings(true);
      const c = getStoredConsent();
      if (c) {
        setAnalytical(c.analytical);
        setMarketing(c.marketing);
      }
    };

    window.addEventListener("showCookieBanner", handleShow);
    return () => window.removeEventListener("showCookieBanner", handleShow);
  }, []);

  const savePreferences = (essential: boolean, anal: boolean, mark: boolean) => {
    storeConsent({
      essential,
      analytical: anal,
      marketing: mark,
      timestamp: Date.now(),
    });
    setVisible(false);
    setShowSettings(false);
  };

  const handleAcceptAll = () => {
    savePreferences(true, true, true);
  };

  const handleRejectAll = () => {
    savePreferences(true, false, false);
  };

  const handleSaveSettings = () => {
    savePreferences(true, analytical, marketing);
  };

  if (!visible) return null;

  return (
    <div
      id="cookies"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
    >
      <div className="mx-auto max-w-2xl rounded-2xl border border-cream-dark/50 bg-white shadow-2xl p-6 md:p-8">
        {!showSettings ? (
          <>
            <h2 id="cookie-banner-title" className="text-lg font-bold text-text mb-2">
              Pliki cookies
            </h2>
            <p id="cookie-banner-desc" className="text-text-light text-sm leading-relaxed mb-6">
              Ta strona używa plików cookies w celu prawidłowego działania, analityki i – po Twojej zgodzie – marketingu. Niezbędne cookies są zawsze aktywne. Możesz zaakceptować wszystkie, odrzucić opcjonalne lub dostosować ustawienia.{" "}
              <Link href="/polityka-prywatnosci#cookies" className="text-forest font-medium hover:underline">
                Więcej w polityce prywatności
              </Link>
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleAcceptAll}
                className="rounded-xl bg-forest px-5 py-2.5 text-sm font-bold text-white hover:bg-forest-dark transition-colors"
              >
                Akceptuję
              </button>
              <button
                onClick={handleRejectAll}
                className="rounded-xl border border-cream-dark px-5 py-2.5 text-sm font-medium text-text hover:bg-cream/50 transition-colors"
              >
                Odrzucam
              </button>
              <button
                onClick={() => setShowSettings(true)}
                className="rounded-xl border border-cream-dark px-5 py-2.5 text-sm font-medium text-text hover:bg-cream/50 transition-colors"
              >
                Ustawienia cookies
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 id="cookie-banner-title" className="text-lg font-bold text-text mb-2">
              Ustawienia cookies
            </h2>
            <p id="cookie-banner-desc" className="text-text-light text-sm leading-relaxed mb-6">
              Wybierz, które kategorie cookies chcesz akceptować. Niezbędne są zawsze włączone.{" "}
              <Link href="/polityka-prywatnosci#cookies" className="text-forest font-medium hover:underline">
                Polityka prywatności
              </Link>
            </p>
            <div className="space-y-4 mb-6">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={true}
                  disabled
                  className="rounded border-cream-dark"
                />
                <span className="text-sm text-text">Niezbędne – wymagane do działania strony</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={analytical}
                  onChange={(e) => setAnalytical(e.target.checked)}
                  className="rounded border-cream-dark text-forest focus:ring-forest"
                />
                <span className="text-sm text-text">Analityczne – statystyki i analiza ruchu (np. Google Analytics)</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                  className="rounded border-cream-dark text-forest focus:ring-forest"
                />
                <span className="text-sm text-text">Marketingowe – pomiar skuteczności reklam (np. Meta Pixel)</span>
              </label>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleSaveSettings}
                className="rounded-xl bg-forest px-5 py-2.5 text-sm font-bold text-white hover:bg-forest-dark transition-colors"
              >
                Zapisz ustawienia
              </button>
              <button
                onClick={() => setShowSettings(false)}
                className="rounded-xl border border-cream-dark px-5 py-2.5 text-sm font-medium text-text hover:bg-cream/50 transition-colors"
              >
                Wróć
              </button>
              <button
                onClick={handleAcceptAll}
                className="rounded-xl border border-cream-dark px-5 py-2.5 text-sm font-medium text-text hover:bg-cream/50 transition-colors"
              >
                Akceptuję wszystkie
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
