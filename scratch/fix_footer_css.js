const fs = require('fs');
let css = fs.readFileSync('d:\\apsolarenergy\\app\\globals.css', 'utf8');

// Replace old brand styles completely
css = css.replace(/\.brand strong,\s*\n\.brand small \{[\s\S]*?\}/, '');
css = css.replace(/\.brand strong \{[\s\S]*?\}/, '');
css = css.replace(/\.brand small \{[\s\S]*?\}/, '');
css = css.replace(/\.brand-mark \{[\s\S]*?\}/, '');

// The brand styles I want
const brandStyles = `
.brand-mark {
  display: grid;
  place-items: center;
  width: auto;
  height: auto;
  color: var(--white);
  background: transparent;
  border-radius: 0;
  box-shadow: none;
}

.brand-text {
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: 3px;
}
.brand-text::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #5ba136;
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

css = css.replace('.brand {', brandStyles + '\n.brand {');

// Fix the footer padding
css = css.replace(
  /\.footer \{[\s\S]*?\}/,
  `.footer {
  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr;
  gap: 42px;
  padding: 48px 6.2vw 32px;
  color: #dbe5f8;
  background: #091026;
}`
);

// Add footer-bottom
const footerBottomStyles = `
.footer-bottom {
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
}
`;

// Insert footerBottomStyles after the .footer a block
css = css.replace(/\.footer a \{[\s\S]*?\}/, match => match + '\n' + footerBottomStyles);

fs.writeFileSync('d:\\apsolarenergy\\app\\globals.css', css, 'utf8');
console.log('done');
