const html = require('choo/html');
const sf = require('sheetify');
const button = require('../lib/button.js');
const svg = require('../lib/svg.js');
const i18n = require('i18next');

module.exports = (state, prev, send) => {

  const style = sf`
    @import '../styles/vars';

    :host {
      display: inline-block;

      > button {
        border-top: none !important;
        border-bottom: none !important;
      }

      > div {
        position: absolute;
        top: 100%;
        right: 0;

        height: auto;
        max-height: 0;

        overflow: hidden;

        transition: all 0.2s ease-out;

        button:first-child {
          border-bottom: none !important;
        }
      }

      .is-active + div {
        max-height: 200px;
      }
    }
  `;

  function onClick(e) {
    e.target.classList.toggle('is-active');
  };

  function switchLanguage(e, lang) {
    send('app:toggleLanguage', lang);
  };

  return html`
    <div class=${style}>
      ${button({ icon: 'language' }, onClick )}
      <div>
        ${button({ icon: 'lang-en' }, (e) => { switchLanguage(e, 'en') } )}
        ${button({ icon: 'lang-kr' }, (e) => { switchLanguage(e, 'kr') } )}
      </div>
    </div>
  `;

};
