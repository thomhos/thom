const html = require('choo/html');
const socialIcons = require('./socialIcons');

module.exports = (state, prev, send) => (
  // Return the rendered HTML
  html`
    <footer>
      ${socialIcons(state, prev, send)}
    </footer>
  `

);
