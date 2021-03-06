const html = require('choo/html');
const sf = require('sheetify');
const button = require('../lib/button.js');
const contactButton = require('./contactButton.js');
const languageSwitch = require('./languageSwitch.js');

module.exports = (state, prev, send, data) => {
  const style = sf`
    @import '../styles/vars';

    :host {
      z-index: 1;
      font-size: 0;
      border-bottom: 1px solid $color-grey;
      background-color: $color-white;

      > div {
        display: inline-block;
        width: calc( 100% - 50px );
        text-align: right;
      }

      > a {
        border-top: none !important;
        border-bottom: none !important;
      }
    }
  `;

  return html`
    <nav class=${style}>
      ${button({ type: 'link', href: '/', icon: 'thom'}, () => {} )}
      <div>
        ${contactButton(state, prev, send)}
        ${languageSwitch(state, prev, send)}
      </div>
    </nav>
  `;
};
