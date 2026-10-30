import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'auto';
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'auto',
  showSubtitle = true,
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-11',
    lg: 'h-14',
    xl: 'h-20',
  };

  const textClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
  };

  const subClasses = {
    sm: 'text-[9px] tracking-[0.25em]',
    md: 'text-[11px] tracking-[0.3em]',
    lg: 'text-xs tracking-[0.35em]',
    xl: 'text-sm tracking-[0.4em]',
  };

  // Color classes depending on variant
  const isLight = variant === 'light';
  const isDark = variant === 'dark';

  const strokeColor = isLight ? '#F7F3EA' : isDark ? '#263E32' : 'currentColor';
  const textColor = isLight ? 'text-ivory' : isDark ? 'text-forest' : 'text-current';
  const subTextColor = isLight ? 'text-ivory/80' : isDark ? 'text-forest/70' : 'text-current/75';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Authentic Doppio Emblem: Cup with steam spiral & saucer */}
      <svg
        viewBox="0 0 100 100"
        className={`${sizeClasses[size]} w-auto aspect-square flex-shrink-0 transition-transform duration-300 hover:scale-105`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Circular Ring */}
        <circle cx="50" cy="50" r="44" stroke={strokeColor} strokeWidth="2.5" strokeOpacity="0.85" />
        
        {/* Steam Spiral Vapor */}
        <path
          d="M 46 29 C 46 22, 54 22, 54 17 C 54 13, 48 13, 48 16"
          stroke={strokeColor}
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Cup Rim Oval */}
        <ellipse cx="50" cy="35" rx="20" ry="4.5" stroke={strokeColor} strokeWidth="2.2" />

        {/* Cup Body */}
        <path
          d="M 30 35 C 31 52, 35 60, 50 60 C 65 60, 69 52, 70 35"
          stroke={strokeColor}
          strokeWidth="2.2"
        />

        {/* Cup Handle */}
        <path
          d="M 68 40 C 75 41, 75 51, 66 53"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Saucer Line */}
        <path
          d="M 33 66 C 42 70, 58 70, 67 66"
          stroke={strokeColor}
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Inner wordmark */}
        <text
          x="50"
          y="50"
          fill={strokeColor}
          textAnchor="middle"
          fontFamily="'Playfair Display', Georgia, serif"
          fontWeight="700"
          fontSize="9"
          letterSpacing="1.5"
        >
          DOPPIO
        </text>
      </svg>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center">
        <span
          className={`font-serif font-bold tracking-wider uppercase leading-none ${textClasses[size]} ${textColor}`}
        >
          Doppio
        </span>
        {showSubtitle && (
          <span
            className={`font-sans font-medium uppercase mt-1 ${subClasses[size]} ${subTextColor}`}
          >
            Cafe & Studio
          </span>
        )}
      </div>
    </div>
  );
};
