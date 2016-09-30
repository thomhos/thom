const html = require('choo/html');
const sf = require('sheetify');
const navigation = require('../elements/navigation');


module.exports = (view) => (state, prev, send) => {

  const style = sf`
    @import '../styles/vars';

    :host {
      min-height: 100%;
      max-width: 100%;
      overflow: hidden;
      animation: $fadeIn;
      background-color: $color-grey-lightest;

      &.exit {
        animation: $fadeOut;
      }

      &:before {
        content: '';
        position: absolute;
        width: 500px;
        height: 500px;

        top: 100px;
        left: 35%;
        transform: translateX(-50%);

        border-radius: 50%;

        animation: $animating-background;
      }

      > main {
        min-height: calc( 100vh - 51px );
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
