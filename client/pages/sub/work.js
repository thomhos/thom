const html = require('choo/html');
const sf = require('sheetify');
const i18n = require('i18next');

module.exports = (state, prev, send) => {
  const style = sf`
    @import '../../styles/vars';

    :host {
      max-width: 480px;
      margin: 40px auto 0;
      animation: $fadeIn;

      @media screen and (min-width: 768px) {
        margin: 100px auto 0;
      }

      &.exit {
        animation: $fadeOut;
      }

      > p {
        font-size: 2.4rem;
        line-height: 1.5;
      }
    }
  `;

  return html`
    <section class=${style}>

      <p>WORK, WORK, WORK, WORK, WORK, WORK.</p>

    </section>
  `;
};
