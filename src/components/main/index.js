const html = require('choo/html');
const sf = require('sheetify');
const sidebar = require('../sidebar');
const content = require('../content');

module.exports = (state, prev, send, view) => {
  const style = sf`
    :host {
      height: 100%;
      overflow: hidden;
    }
  `;

  return html`
    <div class=${style}>
      ${sidebar(state, prev, send)}
      ${content(state, prev, send, view)}
    </div>
  `;
};
