const html = require('choo/html');

module.exports = (state, prev, send) => {

  const articleId = state.params;

  const fetchArticle = () => {
    console.log('loaded')
  }

  return html`
    <section onload=${fetchArticle}>
      <p>${() => { console.log('init') }}</p>
    </section>
  `;

};
