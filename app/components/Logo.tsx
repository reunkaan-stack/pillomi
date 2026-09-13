import Image from "next/image";

/**
 * Marka varlıkları kök dizindeki logo.png dosyasından kırpıldı;
 * zemin şeffaf olduğu için hem krem hem mürdüm üzerinde kullanılabilir.
 * Koyu zeminde `light` ile beyaz knockout'a çevrilir.
 */

type MarkProps = {
  className?: string;
  light?: boolean;
  priority?: boolean;
};

export function LogoMark({
  className = "h-10 w-auto",
  light = false,
  priority = false,
}: MarkProps) {
  return (
    <Image
      src="/pillomi-mark.png"
      alt=""
      width={135}
      height={192}
      priority={priority}
      className={`${className} ${light ? "brightness-0 invert" : ""}`}
    />
  );
}

type LogoProps = {
  className?: string;
  markClassName?: string;
  wordClassName?: string;
  tagline?: boolean;
  light?: boolean;
  priority?: boolean;
};

export function Logo({
  className = "",
  markClassName = "h-10 w-auto",
  wordClassName = "h-[1.25rem] w-auto",
  tagline = false,
  light = false,
  priority = false,
}: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark className={markClassName} light={light} priority={priority} />
      <div className="flex flex-col">
        <Image
          src="/pillomi-wordmark.png"
          alt="Pillomi"
          width={380}
          height={112}
          priority={priority}
          className={`${wordClassName} ${light ? "brightness-0 invert" : ""}`}
        />
        {/* Metin doğrudan büyük harfle yazılı: sayfa lang="tr" olduğu için
            CSS `uppercase`, İngilizce "Pillow" kelimesini "PİLLOW" yapıyordu. */}
        {tagline && (
          <span
            className={`mt-1.5 text-[0.55rem] font-medium tracking-[0.3em] ${
              light ? "text-white/70" : "text-ink-soft"
            }`}
            lang="en"
          >
            TRAVEL NECK PILLOW
          </span>
        )}
      </div>
    </div>
  );
}
