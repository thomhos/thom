const html = require('choo/html');
const sf = require('sheetify');
const socialIcons = require('./socialIcons');

module.exports = (state, prev, send) => {
  const style = sf`
    @import '../../../styles/vars';

    :host {
      position: absolute;
      bottom: 0;
      left: 20px;
      width: calc( 100% - 40px );
      padding: 10px 0;
      border-top: 1px solid $color-white;
    }
  `;

  // Return the rendered HTML
  return html`
    <footer class=${style}>
      ${socialIcons(state, prev, send)}
    </footer>
  `;
};
