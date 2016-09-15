import html from 'choo/html';

export default (state, prev, send, view) => (
  // Return the rendered HTML
  html`
    <section
      class="col-s-12 col-m-12 col-l-8 col-xl-9 content">
      ${view(state, prev, send)}
    </section>
  `
);
