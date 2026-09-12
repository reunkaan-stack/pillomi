type LogoProps = {
  className?: string;
  markClassName?: string;
  wordClassName?: string;
  tagline?: boolean;
  taglineClassName?: string;
};

/** Turuncu "P" markasi - ambalaj ve gorsellerdeki isaret. */
export function LogoMark({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 92"
      fill="none"
      className={className}
      role="img"
      aria-label="Pillomi"
    >
      <path
        d="M15 85V19C15 11.8 20.8 6 28 6h8a19 19 0 0 1 0 38H15"
        stroke="currentColor"
        strokeWidth="12.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({
  className = "",
  markClassName = "h-9 w-auto text-orange",
  wordClassName = "text-[1.75rem] leading-none",
  tagline = false,
  taglineClassName = "",
}: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark className={markClassName} />
      <div className="flex flex-col">
        <span
          className={`font-sans font-bold tracking-[-0.03em] text-ink ${wordClassName}`}
        >
          pillomi
        </span>
        {tagline && (
          <span
            className={`mt-1 text-[0.55rem] font-medium uppercase tracking-[0.42em] text-ink-soft ${taglineClassName}`}
          >
            Travel Neck Pillow
          </span>
        )}
      </div>
    </div>
  );
}
