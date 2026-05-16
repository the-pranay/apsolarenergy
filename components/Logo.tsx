import React from 'react';

export function Logo({ className, size = 48 }: { className?: string; size?: number | string }) {
  return (
    <svg 
      className={className}
      width={size}
      height={size}
      viewBox="0 0 100 100" 
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Sun Rays */}
      <g stroke="#fbbc05" strokeWidth="2.5" strokeLinecap="round">
        <line x1="42" y1="20" x2="42" y2="12" />
        <line x1="30" y1="23" x2="24" y2="16" />
        <line x1="54" y1="23" x2="60" y2="16" />
        <line x1="22" y1="35" x2="14" y2="33" />
        <line x1="62" y1="35" x2="70" y2="33" />
      </g>

      {/* Sun Circle (partial) */}
      <path d="M 28 45 A 15 15 0 0 1 56 45" fill="none" stroke="#fbbc05" strokeWidth="3" />

      {/* House Roof (A shape) */}
      <polygon points="18,85 30,85 45,58 60,85 72,85 45,35" fill="#0d325b" />

      {/* Window */}
      <rect x="39" y="66" width="5" height="5" fill="#555555" />
      <rect x="46" y="66" width="5" height="5" fill="#555555" />
      <rect x="39" y="73" width="5" height="5" fill="#555555" />
      <rect x="46" y="73" width="5" height="5" fill="#555555" />

      {/* Green P Bowl */}
      {/* The P attaches to the right leg of the A. */}
      {/* We use a path to draw the bowl. */}
      <path d="M 52 48 L 76 48 C 90 48, 90 70, 76 70 L 62 70" fill="none" stroke="#5ba136" strokeWidth="9" />

      {/* Solar Panel Array on the left slope */}
      {/* Let's position it to overlap the left leg nicely */}
      <g transform="translate(18, 42)">
        <polygon points="12,0 32,0 22,15 2,15" fill="#154c79" />
        <line x1="18" y1="0" x2="8" y2="15" stroke="#ffffff" strokeWidth="1" />
        <line x1="25" y1="0" x2="15" y2="15" stroke="#ffffff" strokeWidth="1" />
        <line x1="7" y1="7.5" x2="27" y2="7.5" stroke="#ffffff" strokeWidth="1" />
      </g>
    </svg>
  );
}
