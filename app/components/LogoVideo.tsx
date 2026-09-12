"use client";

import { useEffect, useRef } from "react";

/**
 * Logonun yastığa dönüştüğü marka animasyonu. Kesintisiz döner;
 * kullanıcı sistemde "hareketi azalt" seçtiyse ilk kare sabit kalır.
 */
export function LogoVideo({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const query = window.matchMedia("(prefers-reduced-motion: reduce)");

    const sync = () => {
      if (query.matches) {
        video.pause();
        video.currentTime = 0;
      } else {
        void video.play().catch(() => {
          /* tarayıcı otomatik oynatmayı engellerse poster görünür kalır */
        });
      }
    };

    sync();

    // Bazı tarayıcılar sekme arka plandayken veya video hazır olmadan
    // oynatmayı reddediyor; bu olaylarda yeniden deneriz.
    query.addEventListener("change", sync);
    video.addEventListener("canplay", sync);
    document.addEventListener("visibilitychange", sync);

    return () => {
      query.removeEventListener("change", sync);
      video.removeEventListener("canplay", sync);
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      poster="/logo-animasyon-poster.jpg"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      aria-label="Pillomi logosunun boyun yastığına dönüştüğü marka animasyonu"
    >
      <source src="/logo-animasyon.mp4" type="video/mp4" />
    </video>
  );
}
