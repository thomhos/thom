const html = require('choo/html');
const main = require('../components/main');

module.exports = (state, prev, send, view) => {
  const { navigation, socials, languages } = state.sidebar;

  // if not present, get content
  if (!navigation.length || !socials.length || !languages.length) {
    send('sidebar:fetch');
  }

  return html`
    ${main(state, prev, send, view)}
  `;
};
