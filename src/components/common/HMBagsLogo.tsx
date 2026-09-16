import React from 'react';

interface HMBagsLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  showTagline?: boolean;
  showBadge?: boolean;
  className?: string;
  isLightMode?: boolean;
}

export const HMBagsLogo: React.FC<HMBagsLogoProps> = ({
  size = 'md',
  showTagline = false,
  showBadge = false,
  className = '',
  isLightMode = false,
}) => {
  // Dimension mappings
  const dimensions = {
    sm: { width: 140, height: 48, scale: 0.7 },
    md: { width: 190, height: 64, scale: 0.95 },
    lg: { width: 250, height: 86, scale: 1.25 },
    xl: { width: 320, height: 110, scale: 1.6 },
    hero: { width: 380, height: 130, scale: 1.9 },
  }[size];

  return (
    <div className={`inline-flex flex-col items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 320 110"
        width={dimensions.width}
        height={dimensions.height}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <defs>
          {/* Vibrant High-Luster Metallic Gold Gradient */}
          <linearGradient id="hmGoldPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFBEB" />
            <stop offset="20%" stopColor="#FDE68A" />
            <stop offset="45%" stopColor="#F59E0B" />
            <stop offset="70%" stopColor="#D97706" />
            <stop offset="90%" stopColor="#B45309" />
            <stop offset="100%" stopColor="#FEF3C7" />
          </linearGradient>

          {/* Glowing Top Arch Highlight */}
          <linearGradient id="hmGoldArch" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#B45309" />
            <stop offset="35%" stopColor="#F59E0B" />
            <stop offset="70%" stopColor="#FDE68A" />
            <stop offset="100%" stopColor="#FFFBEB" />
          </linearGradient>

          {/* Horizontal Banner Gradient */}
          <linearGradient id="hmGoldBar" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#78350F" stopOpacity="0.1" />
            <stop offset="30%" stopColor="#F59E0B" />
            <stop offset="50%" stopColor="#FFFBEB" />
            <stop offset="70%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#78350F" stopOpacity="0.1" />
          </linearGradient>

          {/* Drop shadow for 3D metallic presence */}
          <filter id="hmMetallicGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#F59E0B" floodOpacity="0.35" />
          </filter>
        </defs>

        {/* --- BAG ARCH HANDLE (As seen in the card) --- */}
        {/* Outer Handle Arch */}
        <path
          d="M 125 42 C 125 15, 140 6, 160 6 C 180 6, 195 15, 195 42"
          stroke="url(#hmGoldArch)"
          strokeWidth="4.5"
          strokeLinecap="round"
          fill="none"
          filter="url(#hmMetallicGlow)"
        />
        {/* Inner Handle Accent Line */}
        <path
          d="M 133 42 C 133 22, 144 14, 160 14 C 176 14, 187 22, 187 42"
          stroke="url(#hmGoldPrimary)"
          strokeWidth="1.75"
          strokeLinecap="round"
          fill="none"
        />

        {/* Top Bag Shoulder Trim / Rim */}
        <path
          d="M 110 44 L 126 44 L 132 40 L 188 40 L 194 44 L 210 44"
          stroke="url(#hmGoldPrimary)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Bag Side Flare Contours */}
        <path
          d="M 108 44 L 98 84"
          stroke="url(#hmGoldPrimary)"
          strokeWidth="1.5"
          strokeOpacity="0.5"
          strokeLinecap="round"
        />
        <path
          d="M 212 44 L 222 84"
          stroke="url(#hmGoldPrimary)"
          strokeWidth="1.5"
          strokeOpacity="0.5"
          strokeLinecap="round"
        />

        {/* --- CENTERPIECE HM MONOGRAM (Bold Chiseled Serif Font) --- */}
        <g filter="url(#hmMetallicGlow)">
          <text
            x="160"
            y="72"
            textAnchor="middle"
            fontFamily="'Cinzel', 'Playfair Display', Georgia, serif"
            fontSize="46"
            fontWeight="900"
            letterSpacing="-0.5"
            fill="url(#hmGoldPrimary)"
            stroke="#5B2100"
            strokeWidth="0.8"
            style={{ fontFeatureSettings: '"c2sc", "smcp"' }}
          >
            HM
          </text>
        </g>

        {/* --- SUB-BANNER: "— BAGS —" --- */}
        {/* Left Gold Accent Bar */}
        <line
          x1="86"
          y1="89"
          x2="128"
          y2="89"
          stroke="url(#hmGoldBar)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="84" cy="89" r="1.5" fill="#F59E0B" />

        {/* "BAGS" Center Text */}
        <text
          x="160"
          y="93"
          textAnchor="middle"
          fontFamily="'Plus Jakarta Sans', 'Inter', sans-serif"
          fontSize="13"
          fontWeight="800"
          letterSpacing="4"
          fill="url(#hmGoldPrimary)"
        >
          BAGS
        </text>

        {/* Right Gold Accent Bar */}
        <line
          x1="192"
          y1="89"
          x2="234"
          y2="89"
          stroke="url(#hmGoldBar)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="236" cy="89" r="1.5" fill="#F59E0B" />

        {/* Subtle Bottom Dot Anchor */}
        <circle cx="160" cy="102" r="1.5" fill="#F59E0B" fillOpacity="0.7" />
      </svg>

      {/* Optional Tagline from card */}
      {showTagline && (
        <div className="mt-1 flex items-center gap-1.5 text-center">
          <span className="text-[#F59E0B] text-[8px]">◆</span>
          <span
            className={`text-[9px] md:text-[11px] font-bold tracking-[0.2em] uppercase ${
              isLightMode ? 'text-gray-800' : 'text-gray-200'
            }`}
          >
            Manufacturers of Non Woven & Shopping Bags
          </span>
          <span className="text-[#F59E0B] text-[8px]">◆</span>
        </div>
      )}

      {/* Optional Quality Seal Badge */}
      {showBadge && (
        <div className="mt-2 inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#171B22] border border-[#F59E0B]/30 shadow-sm">
          <span className="text-[#F59E0B] text-xs">★ ★ ★</span>
          <span className="text-[10px] font-semibold tracking-wider text-amber-200/90 uppercase">
            Quality Bags • Trusted By All
          </span>
        </div>
      )}
    </div>
  );
};
