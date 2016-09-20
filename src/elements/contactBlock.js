const html = require('choo/html');
const sf = require('sheetify');
const link = require('../lib/link.js');
const svg = require('../lib/svg.js');

module.exports = (state, prev, send, data) => {
  const style = sf`
    @import '../styles/vars';

    :host {

      li {
        list-style: none;
      }

    }
  `;

  return html`
    <ul class=${style}>
      <li>
        ${link({ href: 'http://github.com/thomhos', icon: 'plus', label: 'github', target: '_blank' })}
      </li>
      <li>
        ${link({ href: 'http://nl.linkedin.com/thomhos', icon: 'plus', label: 'linkedin', target: '_blank' })}
      </li>
      <li>
        ${link({ href: 'mailto:thom.hos@gmail.com', icon: 'plus', label: 'email', target: '_blank' })}
      </li>
    </ul>
  `;
};
