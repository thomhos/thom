const html = require('choo/html');
const sf = require('sheetify');
const i18n = require('i18next');
const link = require('../../lib/link.js');

module.exports = (state, prev, send) => {
  const style = sf`
    @import '../../styles/vars';

    :host {
      height: 100%;
      padding: 40px 20px;

      animation: $fadeIn;

      @media screen and (min-width: 768px) {
        padding: 140px 20px 0;
      }

      &.exit {
        animation: $fadeOut;
      }

      article {
        max-width: 480px;
        margin: 0 auto;

        > h1 {
          display: block;
          line-height: 1.2;
        }

        > span {
          display: block;
          font-size: 1.8rem;
          margin-bottom: 20px;
        }

        > p {
          font-size: 2.4rem;
          line-height: 1.5;
          margin-bottom: 40px;
        }

        > a {
          font-size: 2.4rem;
          font-weight: $font-weight-bold;
          text-transform: uppercase;

          > svg {
            margin-top: -5px;
            width: 18px;
            height: 18px;
          }
        }
      }
    }
  `;

  return html`
    <div class=${style}>
      <article>

        <h1>${i18n.t('name')}</h1>
        <span>${i18n.t('function')}</span>
        <p>${i18n.t('description')}</p>

        ${link({ href: '/work', label: 'View work', icon: 'plus', target: '_self'})}

      </article>
    </div>
  `;
};
