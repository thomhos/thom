const html = require('choo/html');
const sf = require('sheetify');
const header = require('./header');

module.exports = (state, prev, send, view) => {
  const style = sf`
    :host {
      height: 100%;
      overflow: hidden;
    }

    section {
      max-height: calc( 100% - 50px );
      min-width: 320px;
      max-width: 1200px;
      margin: 0 auto;
      overflow-y: auto;
    }
  `;

  // Return the rendered HTML
  return html`
    <main class="${style}">
      ${header(state, prev, send)}
      <section>
        ${view(state, prev, send)}
      </section>
    </main>
  `;
};
