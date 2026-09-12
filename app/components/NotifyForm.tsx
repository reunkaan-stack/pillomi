"use client";

import { useState } from "react";
import { CheckIcon, MailIcon } from "./Icons";

type Status = "idle" | "loading" | "success" | "error";

export function NotifyForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json()) as { message?: string };

      if (res.ok) {
        setStatus("success");
        setMessage(data.message ?? "Kaydınızı aldık, açılışta ilk siz haberdar olacaksınız.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.message ?? "Şu anda kayıt alamıyoruz, biraz sonra tekrar deneyin.");
      }
    } catch {
      setStatus("error");
      setMessage("Bağlantı kurulamadı. Lütfen tekrar deneyin.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 rounded-2xl border border-orange/25 bg-orange-soft/60 px-5 py-4">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange text-white">
          <CheckIcon />
        </span>
        <p className="text-sm font-medium text-ink">{message}</p>
      </div>
    );
  }

  return (
    <div>
      <form
        onSubmit={onSubmit}
        className="flex w-full flex-col gap-3 sm:flex-row sm:items-center"
      >
        <label htmlFor="email" className="sr-only">
          E-posta adresiniz
        </label>
        <div className="relative flex-1">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-soft">
            <MailIcon />
          </span>
          <input
            id="email"
            type="email"
            name="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-posta adresiniz"
            className="w-full rounded-full border border-ink/10 bg-white py-3.5 pl-12 pr-5 text-[0.95rem] text-ink shadow-sm outline-none transition placeholder:text-ink-soft/70 focus:border-orange focus:ring-4 focus:ring-orange/15"
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-full bg-ink px-7 py-3.5 text-[0.95rem] font-semibold text-white transition hover:bg-plum disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Gönderiliyor…" : "Haber ver"}
        </button>
      </form>

      <p
        className={`mt-3 text-xs ${
          status === "error" ? "text-orange" : "text-ink-soft"
        }`}
        aria-live="polite"
      >
        {status === "error"
          ? message
          : "Açılışı duyurduğumuzda tek bir e-posta göndeririz. Spam yok."}
      </p>
    </div>
  );
}
