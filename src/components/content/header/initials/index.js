const html = require('choo/html');
const sf = require('sheetify');

module.exports = (state, prev, send) => {
  // Sidebar menu state
  const { activeState } = state.sidebar;
  const style = sf`
    :host {
      position: absolute;
      display: block;
      height: 20px;
      width: auto;

      top: 50%;
      left: 70px;
      transform: translateY(-50%);

      font-size: 20px;
    }

    @media screen and ( min-width: 768px ) {
      :host {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  `;

  // Return the rendered HTML
  return html`
    <span class=${style}>
      TH
    </span>
  `;
};
