import html from 'choo/html';
import main from '../components/main';

export default (state, prev, send, view) => (
  html`
    ${main(state, prev, send, view)}
  `
);
