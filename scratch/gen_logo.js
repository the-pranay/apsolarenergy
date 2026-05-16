const fs = require('fs');

function generateLogo() {
  let svg = `import React from 'react';

export function LogoIcon({ className, size = 48 }: { className?: string; size?: number | string }) {
  return (
    <svg 
      className={className}
      width={size}
      height={size}
      viewBox="0 0 100 100" 
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sunGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF3D00" />
          <stop offset="100%" stopColor="#FFC107" />
        </linearGradient>
        <linearGradient id="panelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4FC3F7" />
          <stop offset="100%" stopColor="#0277BD" />
        </linearGradient>
      </defs>

      {/* Sun Background */}
      <path d="M 20 50 A 30 30 0 0 1 80 50 Z" fill="url(#sunGrad)" />
      
      {/* White Ray Cutouts */}
`;

  // Generate white rays
  const numRays = 10;
  for (let i = 1; i < numRays; i++) {
    const angle = (i * Math.PI) / numRays;
    const dx1 = Math.cos(angle - 0.05) * 35;
    const dy1 = Math.sin(angle - 0.05) * 35;
    const dx2 = Math.cos(angle + 0.05) * 35;
    const dy2 = Math.sin(angle + 0.05) * 35;
    // Note: y is down in SVG, but angle 0 to PI is bottom half if we use +sin. We want top half, so -sin.
    // Actually, center is 50,50. We want from x=50, y=50 outwards.
  }

  // A simpler way: just draw the sun as a single path!
  let sunPath = "M 50 50 ";
  for(let i=0; i<=180; i+=15) {
    const isRay = (i % 30 === 0);
    const rOuter = 30;
    const rInner = 20;
    // we can draw alternating... wait, the image has rays that go from center.
    // Let's just draw polygons for rays.
  }

  svg += `
      <polygon points="50,50 15,50 18,46" fill="white" />
      <polygon points="50,50 22,34 27,31" fill="white" />
      <polygon points="50,50 36,21 42,19" fill="white" />
      <polygon points="50,50 53,18 59,20" fill="white" />
      <polygon points="50,50 71,28 76,32" fill="white" />
      <polygon points="50,50 83,46 85,50" fill="white" />
  `;

  // Let's manually tweak rays
  // A solid sun
  // Cutouts from center: (50,50)
  const cutouts = [
    [10, 50, 15, 45],
    [20, 35, 25, 30],
    [35, 20, 40, 15],
    [50, 12, 55, 12],
    [65, 18, 70, 23],
    [80, 32, 85, 37],
    [90, 50, 85, 45]
  ];

  svg += `
      <path d="M 15 50 A 35 35 0 0 1 85 50 Z" fill="url(#sunGrad)" />
      {/* Cutouts */}
      <path d="M 50 50 L 10 50 L 15 45 Z" fill="white" />
      <path d="M 50 50 L 20 32 L 27 28 Z" fill="white" />
      <path d="M 50 50 L 36 18 L 44 16 Z" fill="white" />
      <path d="M 50 50 L 55 14 L 62 16 Z" fill="white" />
      <path d="M 50 50 L 73 25 L 80 30 Z" fill="white" />
      <path d="M 50 50 L 88 45 L 90 50 Z" fill="white" />
  `;

  // Solar Panels
  // A grid of 4x5 diamonds.
  // We'll translate them nicely.
  svg += `
      <g transform="translate(50, 52)">
  `;
  
  const rows = 4;
  const cols = 5;
  const tileW = 12;
  const tileH = 6;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // Perspective transform
      const x = (c - r) * tileW;
      const y = (c + r) * tileH;
      // Diamond points
      const p1 = \`\${x},\${y - tileH + 1}\`;
      const p2 = \`\${x + tileW - 1},\${y}\`;
      const p3 = \`\${x},\${y + tileH - 1}\`;
      const p4 = \`\${x - tileW + 1},\${y}\`;
      svg += \`        <polygon points="\${p1} \${p2} \${p3} \${p4}" fill="url(#panelGrad)" stroke="white" strokeWidth="1" strokeLinejoin="round" />\\n\`;
    }
  }

  svg += `
      </g>
    </svg>
  );
}
`;

  fs.writeFileSync('d:\\apsolarenergy\\components\\Logo.tsx', svg);
}

generateLogo();
