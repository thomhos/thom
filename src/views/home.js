const html = require('choo/html');
const article = require('../components/article');

module.exports = (state, prev, send) => {

  const { articles, counter } = state.articles;

  // if not present, get content
  if (!articles.length) {
    send('articles:fetch');
  }

  return html`
    <section>
      ${articles.map(data => article(state, prev, send, data))}
    </section>
  `;
};
