const html = require('choo/html');
const sf = require('sheetify');

module.exports = (state, prev, send) => {
  // Sidebar menu state
  const style = sf`
    :host {
      display: block;
      height: 50px;
      width: 50px;

      float: right;

      border-left: 1px solid #C9C9C9;
      background-color: transparent;

      transition: background-color 0.2s ease-out;
    }

    :host:hover {
      background-color: #C9C9C9;
      cursor: pointer;
    }
  `;

  // Return the rendered HTML
  return html`
    <button class=${style}>
      <svg width="18" height="18" viewBox="0 0 18 18" namespace="http://www.w3.org/2000/svg">
        <path d="M11.633 11.41C12.84 10.15 13.5 8.5 13.5 6.75c0-1.803-.7-3.498-1.976-4.773C10.248.703 8.554 0 6.75 0 4.95 0 3.254.702 1.98 1.977.704 3.253 0 4.947 0 6.75c0 1.803.703 3.498 1.978 4.773C3.253 12.797 4.948 13.5 6.75 13.5c1.554 0 3.027-.52 4.22-1.48l5.35 5.834c.088.097.21.146.33.146.11 0 .22-.04.305-.118.184-.168.195-.453.028-.635l-5.35-5.837zM6.75.9c3.226 0 5.85 2.624 5.85 5.85 0 3.226-2.624 5.85-5.85 5.85C3.524 12.6.9 9.976.9 6.75.9 3.524 3.524.9 6.75.9z" />
      </svg>
    </button>
  `;
};
