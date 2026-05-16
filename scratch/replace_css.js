const fs = require('fs');
let css = fs.readFileSync('d:\\apsolarenergy\\app\\globals.css', 'utf8');

css = css.replace(
  /\.brand-mark \{[\s\S]*?\}/,
  `.brand-mark {
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  color: var(--white);
  background: transparent;
  border-radius: 0;
  box-shadow: none;
}`
);

css = css.replace(
  /\.brand strong \{[\s\S]*?\}/,
  `.brand strong {
  font-size: 1.25rem;
  letter-spacing: 0;
  background: linear-gradient(90deg, #b339c6, #9145ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}`
);

css = css.replace(
  /\.brand small \{[\s\S]*?\}/,
  `.brand small {
  margin-top: 3px;
  font-size: 0.92rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  background: linear-gradient(90deg, #b339c6, #9145ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}`
);

fs.writeFileSync('d:\\apsolarenergy\\app\\globals.css', css, 'utf8');
console.log('done');
