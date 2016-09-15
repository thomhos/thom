const html = require('choo/html');
const sf = require('sheetify');
const sidebar = require('../sidebar');
const content = require('../content');

module.exports = (state, prev, send, view) => {
  const style = sf`
    :host {
      background-color: red;
    }
  `;

  return html`
    <main class=${style}>
      ${sidebar(state, prev, send)}
      ${content(state, prev, send, view)}
    </main>
  `;
};
