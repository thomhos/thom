const html = require('choo/html');
const sf = require('sheetify');
const svg = require('../lib/svg.js');
const i18n = require('i18next');

module.exports = (state, prev, send) => {
  const style = sf`
    @import '../styles/vars';

    :host {
      display: inline-block;
      height: 50px;

      padding: 10px;

      text-decoration: none;
      color: $color-black;
      vertical-align: top;

      .label {
        position: relative;
        display: inline-block;
        vertical-align: middle;
        font-size: 1.1rem;
        margin-right: 10px;

        &:after {
          content: '';
          position: absolute;
          display: block;
          top: 100%;
          left: 0;
          height: 1px;
          width: 0;
          background-color: $color-black;

          transition: width 0.2s ease-out;
        }
      }

      .button {
        display: inline-block;
        width: 30px;
        height: 30px;

        text-align: center;
        line-height: 30px;
        border-radius: 50%;
        animation: $animating-background;

        svg {
          pointer-events: none;
          width: 15px;
          height: 30px;
        }

        &:after {
          content: '';
          position: absolute;
          display: block;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;

          border-radius: 50%;
          border: 1px solid;
          cursor: pointer;

          animation: $animating-border;
          transform: scale(0.9);
        }
      }

      @media screen and (min-width: 1024px) {
        &:hover {

          .label:after {
            width: 100%;
          }

          .button:after {
            animation: $animating-border, $pulsing;
          }
        }
      }
    }
  `;

  return html`
    <a href="mailto:thom.hos@gmail.com" class=${style}>
      <span class="label">
        ${i18n.t('contact')}
      </span>

      <span class="button">
        ${svg('email')}
      </span>
    </a>
  `;

};
