const html = require('bel');
const assert = require('assert');
const sf = require('sheetify');
const svg = require('./svg.js');

module.exports = (opts) => {

  const style = sf`
    @import '../styles/vars';

    :host {
      display: inline-block;
      font-size: 2.4rem;
      color: $color-black;
      text-decoration: none;

      &:after {
        content: '';
        display: block;
        top: 100%;
        left: 0;
        width: 0;
        height: 1px;

        background-color: $color-black;

        transition: width 0.2s ease-out;
      }

      svg {
        margin-right: 10px;
      }

      @media screen and (min-width: 1024px) {
        &:hover {
          &:after {
            width: 100%;
          }
        }
      }
    }
  `;

  opts = opts || {};

  assert.equal(typeof opts, 'object');

  return html`
    <a class=${style} href="${opts.href}" target="${opts.target}">
      ${(opts.icon) ? svg(opts.icon) : ''}
      ${opts.label}
    </a>
  `;

};
