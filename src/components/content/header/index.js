const html = require('choo/html');
const sf = require('sheetify');
const burger = require('./burger');
const initials = require('./initials');
const search = require('./search');
const language = require('./language');

module.exports = (state, prev, send) => {
  const style = sf`
    :host {
      min-width: 320px;
      font-size: 0;
      border-bottom: 1px solid #C9C9C9;
    }
  `;
  // Return the rendered HTML
  return html`
    <header class=${style}>
      ${burger(state, prev, send)}
      ${initials(state, prev, send)}
      ${search(state, prev, send)}
      ${language(state, prev, send)}
    </section>
  `;
};
