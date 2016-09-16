const html = require('choo/html');
const sf = require('sheetify');

module.exports = (state, prev, send) => {
  // Sidebar menu state
  const { activeState } = state.sidebar;
  const style = sf`
    :host {
      display: inline-block;
      height: 50px;
      width: 50px;

      border-right: 1px solid #C9C9C9;
      background-color: transparent;

      transition: background-color 0.2s ease-out;
    }

    :host:hover {
      background-color: #C9C9C9;
      cursor: pointer;
    }

    span {
      position: absolute;
      display: block;
      width: 20px;
      height: 1px;
      left: 15px;
      background-color: #000000;
    }

    span:nth-child(1) {
      top: 20px;
    }

    span:nth-child(2) {
      top: 25px;
    }

    span:nth-child(3) {
      top: 30px;
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
