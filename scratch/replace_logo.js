const fs = require('fs');

function replaceHeader() {
  let content = fs.readFileSync('d:\\apsolarenergy\\components\\Header.tsx', 'utf8');
  content = content.replace('import { Menu, SunMedium } from "lucide-react";', 'import { Menu } from "lucide-react";\nimport { Logo } from "./Logo";');
  content = content.replace('<SunMedium size={28} strokeWidth={2.4} />', '<Logo size={46} />');
  fs.writeFileSync('d:\\apsolarenergy\\components\\Header.tsx', content, 'utf8');
}

function replaceFooter() {
  let content = fs.readFileSync('d:\\apsolarenergy\\components\\Footer.tsx', 'utf8');
  content = content.replace('import { SunMedium } from "lucide-react";', 'import { Logo } from "./Logo";');
  content = content.replace('<SunMedium size={28} strokeWidth={2.4} />', '<Logo size={46} />');
  fs.writeFileSync('d:\\apsolarenergy\\components\\Footer.tsx', content, 'utf8');
}

replaceHeader();
replaceFooter();
console.log('done');
