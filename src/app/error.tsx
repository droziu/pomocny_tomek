"use client";

/**
 * Łapie błędy JS na poziomie strony.
 * Działa razem z global-error.tsx (który łapie błędy w layout).
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center px-4 py-16">
      <h2 className="text-xl font-bold text-text mb-2">Coś poszło nie tak</h2>
      <p className="text-text-light text-sm text-center mb-6 max-w-md">
        Ta strona nie załadowała się poprawnie. Spróbuj odświeżyć.
      </p>
      <button
        onClick={reset}
        className="rounded-full bg-forest px-6 py-3 text-white font-semibold hover:bg-forest-dark transition-colors"
      >
        Spróbuj ponownie
      </button>
    </div>
  );
}
