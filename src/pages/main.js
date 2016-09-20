const html = require('choo/html');
const sf = require('sheetify');
const navigation = require('../elements/navigation');


module.exports = (view) => (state, prev, send) => {

  const style = sf`
    @import '../styles/vars';

    :host {
      min-height: 100%;
      animation: $fadeIn;

      &.exit {
        animation: $fadeOut;
      }

      > main {
        min-height: calc( 100vh - 51px );
        padding: 20px;
        background-color: $color-grey-lightest;
      }
    }
  `;

  return html`
    <div class="${style}">
      ${navigation(state, prev, send)}
      <main>
        ${view(state, prev, send)}
      </main>
    </div>
  `;


};
