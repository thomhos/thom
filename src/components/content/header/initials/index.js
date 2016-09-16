const html = require('choo/html');
const sf = require('sheetify');

module.exports = (state, prev, send) => {
  // Sidebar menu state
  const { activeState } = state.sidebar;
  const style = sf`
    @import '../../../../styles/vars';

    :host {
      position: absolute;
      display: block;
      height: 50px;
      width: auto;

      top: 0;
      left: 70px;

      font-size: 2.4rem;
      font-family: $font-stack-primary;
      font-weight: $font-weight-bold;
      line-height: 50px;

      @media screen and ( min-width: 768px ) {
        left: 50%;
        transform: translateX(-50%);
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
