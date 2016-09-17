const html = require('choo/html');
const sf = require('sheetify');
const header = require('./header');

module.exports = (state, prev, send, view) => {
  const style = sf`
    :host {
      height: 100%;
      overflow: hidden;
    }

    > div {
      max-height: calc( 100% - 50px );
      width: 100%;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;

      > section {
        max-width: 960px;
        margin: 0 auto;
        padding: 20px;
      }
    }
  `;

  // Return the rendered HTML
  return html`
    <main class="${style}">
      ${header(state, prev, send)}
      <div>
        ${view(state, prev, send)}
      </div>
    </main>
  `;
};
