const html = require('choo/html');
const sf = require('sheetify');
const contactBlock = require('../../elements/contactBlock');
const i18n = require('i18next');

module.exports = (state, prev, send) => {
  const style = sf`
    @import '../../styles/vars';

    :host {
      max-width: 480px;
      margin: 0 auto;

      @media screen and (min-width: 768px) {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      &:before {
        content: '';
        position: absolute;
        width: 350px;
        height: 350px;

        top: 30%;
        left: -180px;
        transform: translateY(-50%);

        border-radius: 50%;
        background-color: $color-active;
      }

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
      }

      > ul {
        margin-top: 40px;
      }
    }
  `;

  return html`

    <article class=${style}>

      <h1>${i18n.t('name')}</h1>
      <span>${i18n.t('function')}</span>
      <p>${i18n.t('description')}</p>

      ${contactBlock(state, prev, send)}
    </article>

  `;
};
