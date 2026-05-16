const fs = require('fs');

function replaceFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(
    /<span>\s*<strong>AP Solar<\/strong>\s*<small>Energy<\/small>\s*<\/span>/,
    `<span className="brand-text">
          <strong><span className="text-ap">AP</span> <span className="text-solar">Solar</span></strong>
          <small className="text-energy">Energy</small>
        </span>`
  );
  // Also check if they are inline without spaces just in case
  fs.writeFileSync(filePath, content, 'utf8');
}

replaceFile('d:\\apsolarenergy\\components\\Header.tsx');
replaceFile('d:\\apsolarenergy\\components\\Footer.tsx');

let css = fs.readFileSync('d:\\apsolarenergy\\app\\globals.css', 'utf8');

// remove previous gradient rules
css = css.replace(/\.brand strong \{[\s\S]*?\}/g, '');
css = css.replace(/\.brand small \{[\s\S]*?\}/g, '');

const newRules = `
.brand-text {
  display: flex;
  flex-direction: column;
}

.brand strong {
  font-size: 1.35rem;
  letter-spacing: 0;
  line-height: 0.95;
}

.brand .text-ap {
  color: #0d325b;
}

.brand .text-solar {
  color: #5ba136;
}

.brand small.text-energy {
  margin-top: 3px;
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: 0.02em;
  color: #555555;
  line-height: 0.95;
}

/* Scrolled header state overrides */
.site-header.scrolled .brand .text-ap {
  color: #0d325b;
}
.site-header.scrolled .brand .text-solar {
  color: #5ba136;
}
.site-header.scrolled .brand small.text-energy {
  color: #555555;
}

/* Footer specific overrides */
.footer-brand .brand-text .text-ap {
  color: var(--white);
}
.footer-brand .brand-text .text-energy {
  color: #c9d5ee;
}
`;

css = css.replace('.brand-mark {', newRules + '\n.brand-mark {');
fs.writeFileSync('d:\\apsolarenergy\\app\\globals.css', css, 'utf8');
console.log('done');
