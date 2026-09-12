type IconProps = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function FeatherIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M19.5 4.5c1.2 4.6-.6 9.1-4.2 11.4-2.6 1.7-5.6 1.8-7.6 1.6-.4-2 .1-5 1.9-7.5C12 6.3 15.4 4.4 19.5 4.5Z" />
      <path d="M17.2 6.8 5.5 18.5" />
      <path d="M12.8 11.2h-3.6M15 8.6h-3.3" />
    </svg>
  );
}

export function HandWashIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M4 15.5c1.3-1 2.4-1 3.6 0 1.3 1 2.4 1 3.7 0 1.3-1 2.4-1 3.7 0 1.2 1 2.4 1 3.6 0" />
      <path d="M4 19c1.3-1 2.4-1 3.6 0 1.3 1 2.4 1 3.7 0 1.3-1 2.4-1 3.7 0 1.2 1 2.4 1 3.6 0" />
      <path d="M7.5 12V7.2a1.3 1.3 0 0 1 2.6 0V11" />
      <path d="M10.1 10.4V5.8a1.3 1.3 0 0 1 2.6 0v4.6" />
      <path d="M12.7 10.6V7.4a1.3 1.3 0 0 1 2.6 0v4.9" />
    </svg>
  );
}

export function WashingMachineIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="4" y="3" width="16" height="18" rx="2.6" />
      <path d="M4 7.2h16" />
      <circle cx="12" cy="14.2" r="4.2" />
      <path d="M9.6 13.6c1-1 1.8-1 2.8 0s1.8 1 2.8 0" />
      <path d="M16.6 5.1h.9" />
    </svg>
  );
}

export function PlaneIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M20.4 4.1c.8.8.6 1.9-.5 3l-2.6 2.6 1.4 8-1.8 1.4-3.4-7-2.9 2.9.4 2.7-1.4 1.1-1.6-3-3-1.6 1.1-1.4 2.7.4 2.9-2.9-7-3.4L5.5 5.3l8 1.4 2.6-2.6c1.1-1.1 2.2-1.3 3-1.1Z" />
    </svg>
  );
}

export function ShieldIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 3.2 19 5.8v5.3c0 4.2-2.8 7.6-7 9.7-4.2-2.1-7-5.5-7-9.7V5.8Z" />
      <path d="m9.2 12 2 2 3.6-3.9" />
    </svg>
  );
}

export function MailIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="3" y="5" width="18" height="14" rx="2.4" />
      <path d="m3.8 6.7 7.1 5.4c.7.5 1.6.5 2.2 0l7.1-5.4" />
    </svg>
  );
}

export function InstagramIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function CheckIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} strokeWidth={2.4}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}
