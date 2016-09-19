const html = require('bel');
const assert = require('assert');
const sf = require('sheetify');
const svg = require('./svg.js');

module.exports = (opts, onClick) => {

  const style = sf`
    @import '../styles/vars';

    :host {
      display: inline-block;
      width: 50px;
      height: 50px;

      text-align: center;
      line-height: 50px;

      background-color: transparent;
      border: 1px solid $color-grey;
      cursor: pointer;

      transition: all 0.2s ease-out;

      svg {
        pointer-events: none;
      }

      @media screen and (min-width: 1024px) {
        &:hover {
          background-color: $color-grey-light;
          border: 1px solid $color-grey;
        }
      }
    }
  `;

  opts = opts || {};

  assert.equal(typeof opts, 'object');
  assert.equal(typeof onClick, 'function');

  if (opts.type && opts.type == 'link') {
    return html`
      <a class=${style} href="${opts.href}" onclick=${onClick}>
        ${svg(opts.icon)}
      </a>
    `;
  } else {
    return html`
      <button class=${style} onclick=${onClick}>
        ${svg(opts.icon)}
      </button>
    `;
  }

};
