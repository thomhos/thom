const html = require('choo/html');
const sf = require('sheetify');

module.exports = (state, prev, send) => {
  // Sidebar menu state
  const { activeState } = state.sidebar;
  
  const style = sf`
    @import '../../../../styles/vars';

    :host {
      display: inline-block;
      height: 50px;
      width: 50px;

      border-right: 1px solid $color-grey;
      background-color: transparent;

      transition: background-color 0.2s ease-out;

      @media screen and (min-width: 1024px) {
        &:hover {
          background-color: $color-grey;
          cursor: pointer;
        }
      }

      &[data-activated="true"] {
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
      background-color: $color-black;
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
