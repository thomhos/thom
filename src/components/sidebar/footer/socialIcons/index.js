const html = require('choo/html');
const sf = require('sheetify');
const svg = require('../../../svgIcon');

module.exports = (state, prev, send) => {
  const style = sf`
    @import '../../../../styles/vars';

    :host {
      a {
        display: inline-block;
        width: 30px;
        height: 30px;
        margin-right: 10px;
        background-color: $color-white;
        border-radius: 50%;
        text-align: center;

        transition: background-color 0.3s ease-out;

        @media screen and (min-width: 1024px) {
          &:hover {
            background-color: $color-grey;
          }
        }
      }
    }
  `;
  // Set the social variables
  const { socials } = state.sidebar;

  // Return the rendered HTML
  return html`
    <nav class=${style}>
      ${socials.map((social) => (html`
        <a href=${social.url} target="_blank">
          ${svg(social.icon)}
        </a>
      `))}
    </nav>
  `;

};
