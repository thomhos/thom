import html from 'choo/html';

export default (state, prev, send) => (
  // Return the rendered HTML
  html`
    <header class="header">
      <span>Thom Hos</span>
      <span>JavaScript Developer</span>
    </header>
  `
);
