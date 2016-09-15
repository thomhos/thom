const html = require('choo/html');
const header = require('./header');

module.exports = (state, prev, send, view) => (
  // Return the rendered HTML 
  html`
    <section class="col-s-12 col-m-12 col-l-8 col-xl-9 content">
      ${header(state, prev, send)}
      ${view(state, prev, send)}
    </section>
  `
);
