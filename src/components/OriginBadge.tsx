import React from 'react';

type Props = { size?: number; className?: string; title?: string };

export default function OriginBadge({ size = 56, className = '', title = 'Radioactive spider badge' }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 256 256"
      role="img"
      aria-label={title}
      className={className}
    >
      <defs>
        <linearGradient id="miles" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0b0b16" />
          <stop offset="1" stopColor="#111122" />
        </linearGradient>
        <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <circle cx="128" cy="128" r="112" fill="url(#miles)" stroke="#7c3aed" strokeWidth="3" />
      <circle cx="128" cy="128" r="118" fill="none" stroke="#22d3ee" strokeWidth="2" opacity=".35" />

      <g transform="translate(128,128)" fill="none" stroke="#22d3ee" strokeWidth="10" strokeLinecap="round" opacity=".9" filter="url(#glow)">
        <circle r="18" fill="#22d3ee" stroke="none" opacity=".9" />
        <path d="M0 -64 A64 64 0 0 1 55 -32 L35 -16 A38 38 0 0 0 0 -38Z" />
        <path d="M55 32 A64 64 0 0 1 0 64 L0 38 A38 38 0 0 0 34 18Z" />
        <path d="M-55 -32 A64 64 0 0 1 -55 32 L-34 18 A38 38 0 0 0 -34 -18Z" />
      </g>

      <g transform="translate(128,118)">
        <ellipse cx="0" cy="-8" rx="12" ry="10" fill="#111827" />
        <ellipse cx="0" cy="18" rx="14" ry="20" fill="#111827" />
        <ellipse cx="-5" cy="-9" rx="4.2" ry="3" fill="#fff" />
        <ellipse cx="5"  cy="-9" rx="4.2" ry="3" fill="#fff" />
        <g strokeWidth="5" strokeLinecap="round" fill="none">
          <path d="M-14 6 C-34 0,-44 -8,-54 -20" stroke="#ef4444" />
          <path d="M-14 12 C-34 18,-44 22,-56 32" stroke="#ef4444" />
          <path d="M-10 20 C-28 32,-32 42,-40 56" stroke="#22d3ee" />
          <path d="M14 6 C34 0,44 -8,54 -20" stroke="#ef4444" />
          <path d="M14 12 C34 18,44 22,56 32" stroke="#ef4444" />
          <path d="M10 20 C28 32,32 42,40 56" stroke="#22d3ee" />
        </g>
      </g>
    </svg>
  );
}


