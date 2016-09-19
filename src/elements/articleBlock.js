const html = require('choo/html');
const sf = require('sheetify');
const svg = require('../lib/svg.js');

module.exports = (state, prev, send, data) => {
  const style = sf`
    @import '../styles/vars';

    :host {
      display: block;
      padding: 20px;
      margin-bottom: 20px;
      border: 1px solid $color-grey;
      font-size: 0;

      transition: background-color 0.3s ease-out;

      @media screen and (min-width: 768px ) {
        padding: 0 0 20px 0;
        margin: 80px 0;

        &:hover {
          background-color: $color-grey-light;

          .article__cta {
            background-color: $color-grey;
          }
        }
      }

      .article__image {
        width: 100%;
        height: 200px;

        overflow: hidden;

        @media screen and (min-width: 768px ) {
          display: inline-block;
          width: 250px;
          height: 250px;

          margin-top: -20px;
          margin-left: -20px;
        }

        img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          max-width: 100%;
          max-height: none;
        }
      }

      .article__body {
        display: inline-block;
        padding: 10px 0;
        vertical-align: top;

        @media screen and (min-width: 768px ) {
          padding: 20px;
        }

      }

      .article__title {
        display: block;
        color: $color-text;
        font-size: $font-size-h2;
      }

      .article__date {
        display: block;
        margin-bottom: 10px;
        color: $color-grey;
        font-size: 1.2rem;
      }

      .article__excerpt {
        margin-bottom: 20px;
        color: $color-text;
        font-size: $font-size-body;
      }

      .article__cta {
        position: absolute;
        display: block;
        width: 50px;
        height: 50px;
        bottom: -1px;
        right: -1px;
        border: 1px solid $color-grey;
        text-align: center;
        line-height: 45px;
        background-color: transparent;

        transition: background-color 0.2s ease-out;
      }
    }
  `;

  return html`
    <a href="/${data.id}" class=${style}>
      <figure class="article__image">
        <img src="${data.img}" />
      </figure>
      <div class="article__body">
        <h2 class="article__title">${data.title}</h2>
        <span class="article__date">${data.date}</span>
        <p class="article__excerpt">${data.excerpt}</p>
      </div>
      <span class="article__cta">
        ${svg('arrow-right')}
      </span>
    </a>
  `;
};
