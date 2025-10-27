import React from 'react';

type Props = {
  className?: string;
  title?: string;
  src?: string; // optional external/public asset to use instead of inline SVG
  width?: number;
  height?: number;
};

/**
 * Tiny Spidey + web line, Miles palette.
 * Uses currentColor for accents so it can inherit.
 */
export default function EasterEggSpidey({ className = '', title = 'Spidey swinging', src, width = 40, height = 52 }: Props) {
  // If a custom asset path is provided, render that image with a small web line above.
  if (src) {
    return (
      <div className={`relative ${className}`} aria-hidden="true" title={title}>
        <div className="absolute left-1/2 -translate-x-1/2 -top-8 h-8 w-[2px] bg-white/90" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} width={width} height={height} alt="" className="block select-none pointer-events-none drop-shadow-[0_0_6px_rgba(255,0,64,0.6)]" />
      </div>
    );
  }

  // Fallback to inline SVG if no asset provided
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 40 60"
      role="img"
      aria-label={title}
    >
      {/* web line - more realistic silk strand */}
      <defs>
        <linearGradient id="webGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e5e7eb" stopOpacity="0.9"/>
          <stop offset="50%" stopColor="#f3f4f6" stopOpacity="1"/>
          <stop offset="100%" stopColor="#e5e7eb" stopOpacity="0.8"/>
        </linearGradient>
      </defs>
      <line x1="20" y1="0" x2="20" y2="18" stroke="url(#webGradient)" strokeWidth="1.8" />
      
      {/* spider body positioned hanging naturally */}
      <g transform="translate(20,18)">
        {/* main body - abdomen (larger, oval) */}
        <ellipse cx="0" cy="8" rx="7" ry="10" fill="#DC2626" stroke="#991B1B" strokeWidth="0.5"/>
        {/* cephalothorax (head/thorax, smaller, circular) */}
        <ellipse cx="0" cy="-2" rx="5" ry="6" fill="#DC2626" stroke="#991B1B" strokeWidth="0.5"/>
        
        {/* spider markings on abdomen */}
        <ellipse cx="0" cy="8" rx="3" ry="4" fill="#991B1B" opacity="0.6"/>
        <circle cx="0" cy="6" r="1.5" fill="#FEF2F2" opacity="0.8"/>
        
        {/* eyes - 8 small eyes like real spiders */}
        <g fill="#fff" opacity="0.9">
          <circle cx="-2" cy="-4" r="0.8"/>
          <circle cx="2" cy="-4" r="0.8"/>
          <circle cx="-3" cy="-2" r="0.6"/>
          <circle cx="3" cy="-2" r="0.6"/>
          <circle cx="-1" cy="-5" r="0.5"/>
          <circle cx="1" cy="-5" r="0.5"/>
          <circle cx="-2.5" cy="-3" r="0.4"/>
          <circle cx="2.5" cy="-3" r="0.4"/>
        </g>
        
        {/* 8 spider legs - 4 on each side, naturally positioned */}
        <g stroke="#991B1B" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.95">
          {/* left side legs */}
          <path d="M-5 0 Q-12 -2 -16 2 Q-18 4 -15 6"/>
          <path d="M-6 2 Q-14 0 -18 6 Q-20 8 -17 10"/>
          <path d="M-6 6 Q-14 8 -18 14 Q-20 16 -17 18"/>
          <path d="M-5 10 Q-12 14 -16 18 Q-18 20 -15 22"/>
          
          {/* right side legs */}
          <path d="M5 0 Q12 -2 16 2 Q18 4 15 6"/>
          <path d="M6 2 Q14 0 18 6 Q20 8 17 10"/>
          <path d="M6 6 Q14 8 18 14 Q20 16 17 18"/>
          <path d="M5 10 Q12 14 16 18 Q18 20 15 22"/>
        </g>
        
        {/* subtle shadow for depth */}
        <ellipse cx="1" cy="9" rx="6" ry="8" fill="#000" opacity="0.1"/>
      </g>
    </svg>
  );
}


