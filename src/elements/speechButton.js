const html = require('bel');
const sf = require('sheetify');
const svg = require('../lib/svg.js');

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
        font-size: 1rem;
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

  function onClick(e) {
    e.target.classList.toggle('listening');
  };

  return html`
    <div class=${style}>
      <span>
        Talk to me!
      </span>

      <button onclick=${onClick}>
        ${svg('microphone')}
      </button>
    </div>
  `;

};
