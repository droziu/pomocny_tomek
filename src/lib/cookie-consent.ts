/**
 * Narzędzia do sprawdzania zgody na cookies.
 * Użyj przed załadowaniem Google Analytics 4 lub Meta Pixel.
 *
 * Przykład:
 *   const consent = getCookieConsent();
 *   if (consent?.analytical) { loadGA4(); }
 *   if (consent?.marketing) { loadMetaPixel(); }
 */

export type CookieConsent = {
  essential: boolean;
  analytical: boolean;
  marketing: boolean;
  timestamp: number;
};

const STORAGE_KEY = "cookie-consent";

export function getCookieConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CookieConsent;
    if (parsed.essential === undefined) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function onCookieConsentChange(callback: (consent: CookieConsent) => void): () => void {
  if (typeof window === "undefined") return () => {};
  const handler = (e: Event) => callback((e as CustomEvent).detail);
  window.addEventListener("cookieConsentChanged", handler);
  return () => window.removeEventListener("cookieConsentChanged", handler);
}
