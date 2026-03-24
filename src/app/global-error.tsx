"use client";

/**
 * Łapie błędy JS w całej aplikacji (layout, nawigacja).
 * Pokazuje przyjazny komunikat zamiast białego ekranu.
 * Szczególnie ważne na starszych przeglądarkach i Android Chrome.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="pl">
      <body
        style={{
          margin: 0,
          fontFamily: "system-ui, -apple-system, sans-serif",
          background: "#FAF7F2",
          color: "#2C2926",
          minHeight: "100dvh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
          boxSizing: "border-box",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: "400px" }}>
          <h1 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
            Coś poszło nie tak
          </h1>
          <p style={{ fontSize: "0.9rem", color: "#5C5550", marginBottom: "1.5rem" }}>
            Strona nie załadowała się poprawnie. Spróbuj odświeżyć lub wrócić później.
          </p>
          <a
            href="/"
            style={{
              display: "inline-block",
              padding: "0.75rem 1.5rem",
              background: "#2D5A3D",
              color: "white",
              textDecoration: "none",
              borderRadius: "0.5rem",
              fontWeight: 600,
              fontSize: "0.9rem",
            }}
          >
            Odśwież stronę
          </a>
        </div>
      </body>
    </html>
  );
}
