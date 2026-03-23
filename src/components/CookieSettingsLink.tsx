"use client";

const SETTINGS_REQUEST_KEY = "cookie-settings-requested";

export default function CookieSettingsLink({ className }: { className?: string }) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      localStorage.setItem(SETTINGS_REQUEST_KEY, "true");
      window.dispatchEvent(new CustomEvent("showCookieBanner"));
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={className ?? "text-forest font-medium hover:underline"}
    >
      Zmień ustawienia cookies
    </button>
  );
}
