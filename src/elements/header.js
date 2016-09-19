const html = require('choo/html');
const sf = require('sheetify');
const svg = require('../lib/svg.js');

module.exports = (state, prev, send, data) => {
  const style = sf`
    @import '../styles/vars';

    :host {
      max-width: 960px;
      max-height: 500px;

      margin: 0 20px;
      padding: 20px 0;

      overflow: hidden;
      border-bottom: 1px solid $color-grey;

      transition: max-height 0.2s ease-out;

      &.collapsed {
        max-height: 90px;
      }

      @media screen and (min-width: 1024px) {
        margin: 0 auto;
        padding: 40px 0;

        &.collapsed {
          max-height: 130px;
        }

      }

      .name {
        display: block;
        font-size: 2rem;
        line-height: 1.4;
        font-weight: $font-weight-bold;
      }

      .function {
        display: block;
        font-size: 1.4rem;
      }

      .description {
        margin-top: 40px;
      }

      button {
        position: absolute;
        bottom: 10px;
        right: 0;
      }
    }
  `;

  let toggleText = 'Show';

  function onClick(e) {
    e.target.parentNode.classList.toggle('collapsed');
  }

  return html`
    <header class=${style}>
      <span class="name">Thom Hos</span>
      <span class="function">Javascript developer</span>
      <p class="description">
        description text <br>sadas d<br>as dasda<br> asdasda<br>ads asdasd
      </p>
      <button onclick=${onClick}>
        ${toggleText} description
        ${svg('arrow-right')}
    </header>
  `;
};
