const html = require('choo/html');
const article = require('../components/article');

module.exports = (state, prev, send) => {

  const { articles, counter } = state.articles;

  // if not present, get content
  const fetch = () => {
    if (!articles.length) {
      send('articles:fetch');
    }
  }

  return html`
    <section onload=${fetch}>
      ${articles.filter(article => article.type == 'article').map(data => article(state, prev, send, data))}
    </section>
  `;
};
