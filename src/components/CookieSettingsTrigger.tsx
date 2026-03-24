"use client";

const SETTINGS_REQUEST_KEY = "cookie-settings-requested";

export default function CookieSettingsTrigger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(SETTINGS_REQUEST_KEY, "true");
    } catch {
      /* localStorage może rzucać w incognito / Android */
    }
    window.dispatchEvent(new CustomEvent("showCookieBanner"));
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={className}
    >
      {children}
    </button>
  );
}
