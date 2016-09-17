const html = require('choo/html');
const sf = require('sheetify');
const closeButton = require('./close');
const headerComponent = require('./header');
const navigationComponent = require('./navigation');
const footerComponent = require('./footer');

module.exports = (state, prev, send) => {
  // Define sidebar content.
  const { navigation, socials, languages } = state.sidebar;

  // Styles
  const style = sf`
    @import '../../styles/vars';

    :host {
      width: 0px;
      height: 100%;
      float: left;
      background-color: $color-grey-dark;
      overflow: hidden;

      transition: width 0.2s ease-out;

      @media screen and (max-width: 768px ) {
        position: absolute;
        z-index: 1;
      }

      &[data-activated="true"] {
        width: 320px;

        @media screen and (max-width: 768px ) {
          width: 100%;
        }
      }
    }

    .sidebar__content {
      height: 100%;
      width: 320px;
      padding: 100px 40px;

      @media screen and (max-width: 768px ) {
        width: 100%;
        min-width: 320px;
      }
    }
  `;

  // Return the rendered HTML
  return html`
    <aside class="${style}" data-activated="${state.sidebar.activeState}">
        <div class="sidebar__content">
          ${closeButton(state, prev, send)}
          ${headerComponent(state, prev, send)}
          ${navigationComponent(state, prev, send)}
          ${footerComponent(state, prev, send)}
        </div>
    </aside>
  `;
};
