/** Pillomi boyun yastiginin U formunu yeniden ciziyoruz (urun fotografi eklenene kadar). */
export function NeckPillow({ className = "" }: { className?: string }) {
  const arc = "M90.9 210.5a92 92 0 1 1 118.2 0";

  return (
    <svg
      viewBox="0 0 300 280"
      className={className}
      role="img"
      aria-label="Pillomi seyahat boyun yastığı"
    >
      <defs>
        <linearGradient id="plumBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8a3670" />
          <stop offset="45%" stopColor="#61234e" />
          <stop offset="100%" stopColor="#3d1430" />
        </linearGradient>
        <linearGradient id="plumSheen" x1="0.1" y1="0" x2="0.9" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
          <stop offset="55%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <filter id="fleece" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="3"
            result="noise"
          />
          <feColorMatrix
            in="noise"
            type="matrix"
            values="0 0 0 0 0.35 0 0 0 0 0.12 0 0 0 0 0.28 0 0 0 0.55 0"
          />
        </filter>
        <filter id="drop" x="-40%" y="-40%" width="180%" height="200%">
          <feDropShadow
            dx="0"
            dy="16"
            stdDeviation="16"
            floodColor="#3d1430"
            floodOpacity="0.22"
          />
        </filter>
        <mask id="bodyMask">
          <path
            d={arc}
            stroke="#fff"
            strokeWidth="58"
            strokeLinecap="round"
            fill="none"
          />
        </mask>
      </defs>

      {/* Govde */}
      <g filter="url(#drop)">
        <path
          d={arc}
          stroke="url(#plumBody)"
          strokeWidth="58"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* Polar doku */}
      <g mask="url(#bodyMask)" opacity="0.5">
        <rect width="300" height="280" filter="url(#fleece)" />
      </g>

      {/* Isik */}
      <path
        d={arc}
        stroke="url(#plumSheen)"
        strokeWidth="58"
        strokeLinecap="round"
        fill="none"
      />

      {/* Dikis izi */}
      <path
        d={arc}
        stroke="#2c0e23"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="5 8"
        fill="none"
        opacity="0.22"
      />

      {/* Kayis ve klips */}
      <path
        d="M104 230h92"
        stroke="#17161a"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <rect x="131" y="218" width="38" height="25" rx="6" fill="#17161a" />
      <rect x="138" y="224" width="8" height="13" rx="3" fill="#413f47" />
      <rect x="153" y="224" width="8" height="13" rx="3" fill="#413f47" />
    </svg>
  );
}
