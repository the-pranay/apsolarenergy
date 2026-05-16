const fs = require('fs');
let css = fs.readFileSync('d:\\apsolarenergy\\app\\globals.css', 'utf8');

// I'll just restore from the original text if I messed up, or I'll just write it correctly.
css = css.replace(/\.brand-mark \{[\s\S]*?\}/g, '');
css = css.replace(/\.brand strong,[\s\S]*?\}/g, '');
css = css.replace(/\.brand strong \{[\s\S]*?\}/g, '');
css = css.replace(/\.brand small \{[\s\S]*?\}/g, '');

const newRules = `
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

.brand strong,
.brand small {
  display: block;
  line-height: 0.95;
}

.brand strong {
  font-size: 1.35rem;
  letter-spacing: 0;
  background: linear-gradient(90deg, #b339c6, #9145ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

.brand small {
  margin-top: 3px;
  font-size: 0.92rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  background: linear-gradient(90deg, #b339c6, #9145ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}
`;

css = css.replace('.brand {', newRules + '\n.brand {');
fs.writeFileSync('d:\\apsolarenergy\\app\\globals.css', css, 'utf8');
