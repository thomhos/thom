const html = require('choo/html');
const sf = require('sheetify');

module.exports = (state, prev, send) => {
  // Sidebar menu state
  const style = sf`
    @import '../../../../styles/vars';

    :host {
      display: block;
      height: 50px;
      width: 50px;

      float: right;

      border-left: 1px solid $color-grey;
      background-color: transparent;

      transition: background-color 0.2s ease-out;

      &:hover {
        background-color: $color-grey;
        cursor: pointer;
      }
    }


  `;

  // Return the rendered HTML
  return html`
    <button class=${style}>
      <svg width="15" height="18" viewBox="0 0 15 18" namespace="http://www.w3.org/2000/svg">
        <path d="M14.5 18H.5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h14c.276 0 .5.224.5.5s-.224.5-.5.5zM13.96 14.303l-2.57-5.996v-.004l-3.43-8C7.883.12 7.7 0 7.5 0s-.38.12-.46.303l-3.427 8c0 .002 0 .003-.002.005l-2.57 5.996c-.108.254.01.548.264.657.254.11.548-.008.657-.262L4.404 9H10.6l2.443 5.698c.08.19.266.303.46.303.066 0 .133-.012.197-.04.254-.11.37-.403.263-.657h-.002zM4.83 8L7.5 1.77 10.17 8H4.83z" fill="#000"/>
      </svg>
    </button>
  `;
};
