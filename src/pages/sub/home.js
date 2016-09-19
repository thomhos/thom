const html = require('choo/html');
const sf = require('sheetify');
const header = require('../../elements/header.js');
const articleBlock = require('../../elements/articleBlock.js');

module.exports = (state, prev, send) => {
  const style = sf`
    @import '../../styles/vars';

    :host {
      max-width: 960px;
      max-height: 500px;

      margin: 0 20px;
      padding: 20px 0;

      @media screen and (min-width: 1024px) {
        margin: 0 auto;
        padding: 40px 0;
      }
    }
  `;

  const { articles, counter, filter } = state.articles;

  return html`
    <section class=${style} onload=${() => send('articles:fetch')}>
      ${header(state, prev, send)}
      filter
      ${articles.map(data => articleBlock(state, prev, send, data))}
    </section>
  `;
};
