const html = require('choo/html');
const sf = require('sheetify');

module.exports = (state, prev, send) => {
  // Sidebar menu state
  const { activeState } = state.sidebar;

  const style = sf`
    @import '../../../styles/vars';

    :host {
      position: absolute;
      display: block;
      top: 0;
      right: 0;

      height: 50px;
      width: 50px;

      visibility: hidden;

      @media screen and (min-width: 769px ) {
        display: none;
      }

      &[data-activated="true"] {
        visibility: visible;

        span {
          &:nth-child(1) {
            top: 25px;
            transform: rotate(45deg);
          }

          &:nth-child(2) {
            opacity: 0;
          }

          &:nth-child(3) {
            top: 25px;
            transform: rotate(-45deg);
          }
        }
      }
    }

    span {
      position: absolute;
      display: block;
      width: 20px;
      height: 1px;
      left: 15px;
      background-color: $color-white;
      transform: rotate(0);
      opacity: 1;

      transition: all 0.3s ease-out;

      &:nth-child(1) {
        top: 20px;
      }

      &:nth-child(2) {
        top: 25px;
      }

      &:nth-child(3) {
        top: 30px;
      }
    }


  `;

  // Return the rendered HTML
  return html`
    <button
      class=${style}
      onclick=${() => { send('sidebar:setActiveState', !activeState); }}
      data-activated="${activeState}">
      <span></span>
      <span></span>
      <span></span>
    </button>
  `;
};
