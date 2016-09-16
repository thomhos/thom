const html = require('choo/html');
const sf = require('sheetify');
const headerComponent = require('./header');
const navigationComponent = require('./navigation');
const footerComponent = require('./footer');

module.exports = (state, prev, send) => {
  // Define sidebar content.
  const { navigation, socials, languages } = state.sidebar;

  const style = sf`
    :host {
      width: 0px;
      height: 100%;
      float: left;
      background-color: #242424;
      overflow: hidden;

      transition: width 0.2s ease-out;
    }

    :host[data-activated="true"] {
      width: 270px;
    }

    .sidebar__content {
      width: 270px;
    }
  `;

  // if not present, get content
  if (!navigation.length || !socials.length || !languages.length) {
    send('sidebar:fetchContent');
  }

  // Return the rendered HTML
  return html`
    <aside class="${style}" data-activated="${state.sidebar.activeState}">
        <div class="sidebar__content">
          ${headerComponent(state, prev, send)}
          ${navigationComponent(state, prev, send)}
          ${footerComponent(state, prev, send)}
        </div>
    </aside>
  `;
};
