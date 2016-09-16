const html = require('choo/html');
const sf = require('sheetify');

module.exports = (state, prev, send) => {
  const style = sf`
    @import '../../../styles/vars';

    :host {
      span {
        display: block;
      }

      .title {
        color: $color-white;
        font-family: $font-stack-primary;
        font-weight: $font-weight-regular;
        font-size: 2.2rem;
        letter-spacing: 1px;
        text-transform: uppercase;
        text-decoration: none;
      }

      .subtitle {
        color: $color-white;
        font-family: $font-stack-primary;
        font-weight: $font-weight-regular;
        font-size: 1.4rem;
      }
    }
  `;

  // Return the rendered HTML
  return html`
    <header class=${style}>
      <span class="title">Thom Hos</span>
      <span class="subtitle">JavaScript Developer</span>
    </header>
  `;
};
