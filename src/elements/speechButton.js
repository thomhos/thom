const html = require('bel');
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

      vertical-align: top;

      span {
        vertical-align: middle;
        font-size: 1.1rem;
        margin-right: 10px;
      }

      button {
        display: inline-block;
        width: 30px;
        height: 30px;

        text-align: center;
        line-height: 30px;

        svg {
          pointer-events: none;
        }

        &:before {
          content: '';
          position: absolute;
          display: block;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;

          border-radius: 50%;
          background-color: $color-grey;
          cursor: pointer;
          transform: scale(0);

          transition: all 0.2s ease-out;
        }


        &.listening:before {
          background-color: $color-active;
          transform: scale(1);
        }

        @media screen and (min-width: 1024px) {
          &:hover {
            &:before {
              transform: scale(1);
            }
          }
        }
      }

    }
  `;

  const { listening } = state.app;

  function onClick(e) {
    send('app:listen', !listening);
  };

  return html`
    <div class=${style}>
      <span>
        ${i18n.t('voice')}
      </span>

      <button class="${ (listening) ? 'listening' : ''}" onclick=${onClick}>
        ${svg('microphone')}
      </button>
    </div>
  `;

};
