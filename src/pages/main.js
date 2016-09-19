const html = require('choo/html');
const navigation = require('../elements/navigation');

module.exports = (view) => (state, prev, send) => {
  return html`
    <main>
      ${navigation(state, prev, send)}
      ${view(state, prev, send)}
    </main>
  `;
};
