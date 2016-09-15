import html from 'choo/html';
import headerMobile from '../header-mobile';
import sidebar from '../sidebar';
import content from '../content';

export default (state, prev, send, view) => (
  html`
    <main class="main container--main">
      ${headerMobile(state, prev, send)}
      ${sidebar(state, prev, send)}
      ${content(state, prev, send, view)}
    </main>
  `
);
