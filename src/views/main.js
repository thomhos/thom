const html = require('choo/html');
const main = require('../components/main');

module.exports = (state, prev, send, view) => (
  html`
    ${main(state, prev, send, view)}
  `
);
