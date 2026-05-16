const fs = require('fs');
let css = fs.readFileSync('d:\\apsolarenergy\\app\\globals.css', 'utf8');

// The CSS rule for the underline:
// .brand-text::after {
//   content: '';
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   height: 2px;
//   background-color: #5ba136;
// }
// And the padding-bottom in .brand-text.

css = css.replace(/\.brand-text::after\s*\{[\s\S]*?\}/g, '');

css = css.replace(
  /\.brand-text\s*\{[\s\S]*?\}/g,
  `.brand-text {
  display: flex;
  flex-direction: column;
}`
);

fs.writeFileSync('d:\\apsolarenergy\\app\\globals.css', css, 'utf8');
console.log('done');
