"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Placeholder: in production, connect to an API route or email service
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("sent");
      setForm({ name: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-cream-dark/30 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-forest/10 text-forest">
          <Send className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-bold text-text mb-2">Wiadomość wysłana!</h3>
        <p className="text-text-light text-sm">
          Odezwę się najszybciej jak to możliwe.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm text-cta font-semibold hover:underline"
        >
          Wyślij kolejną wiadomość
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-cream-dark/30"
    >
      <h3 className="text-lg font-bold text-text mb-5">Napisz do mnie</h3>

      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text mb-1.5">
            Imię
          </label>
          <input
            type="text"
            id="name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-xl border border-cream-dark bg-cream/50 px-4 py-3 text-base text-text placeholder:text-warm-gray-light focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-colors"
            placeholder="Twoje imię"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-text mb-1.5">
            Numer telefonu
          </label>
          <input
            type="tel"
            id="phone"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full rounded-xl border border-cream-dark bg-cream/50 px-4 py-3 text-base text-text placeholder:text-warm-gray-light focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-colors"
            placeholder="np. 500 123 456"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-text mb-1.5">
            Co jest do zrobienia?
          </label>
          <textarea
            id="message"
            required
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full rounded-xl border border-cream-dark bg-cream/50 px-4 py-3 text-base text-text placeholder:text-warm-gray-light focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-colors resize-none"
            placeholder="Opisz krótko, z czym potrzebujesz pomocy..."
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-cta px-6 py-3.5 text-base font-bold text-white shadow-md hover:bg-cta-hover disabled:opacity-60 transition-all"
        >
          <Send className="h-4 w-4" />
          {status === "sending" ? "Wysyłam..." : "Wyślij wiadomość"}
        </button>

        {status === "error" && (
          <p className="text-sm text-red-600 text-center">
            Coś poszło nie tak. Spróbuj ponownie lub zadzwoń.
          </p>
        )}
      </div>
    </form>
  );
}
