const html = require('choo/html');
const sf = require('sheetify');

module.exports = (state, prev, send) => {
  const style = sf`
    @import '../../../styles/vars';

    :host {
      padding: 40px 0;

      button {
        position: relative;
        display: block;

        margin-bottom: 10px;

        color: $color-white;
        font-family: $font-stack-primary;
        font-weight: $font-weight-regular;
        letter-spacing: 1px;
        font-size: 2.4rem;
        text-transform: uppercase;

        &:before {
          content: '';
          position: absolute;
          display: block;
          width: 10px;
          height: 10px;
          top: 15px;
          left: -20px;

          border-radius: 50%;
          background-color: #FF4C4C;

          opacity: 0;
          transform: scale(0.3);
          transition: opacity 0.2s ease-out, transform 0.2s ease-out;
        }

        &.is-active {
          &:before {
            opacity: 1;
            transform: scale(1);
          }
        }
      }
    }
  `;

  // Set the navigation variables
  const { navigation, activeState, activeRoute } = state.sidebar;

  // navigate to view
  const goToView = (href) => {
    send('sidebar:setActiveRoute', href);
    send('location:setLocation', { location: href });

    if(window.screen && window.screen.width <= 768) {
      send('sidebar:setActiveState', !activeState);
    }
  };


  const checkActiveState = (route) => {
    if(activeRoute == route) {
      return 'is-active';
    } else if(!activeRoute && route == '/') {
      return 'is-active';
    } else {
      return '';
    }
  };

  // Return the rendered HTML
  return html`
    <nav class=${style}>
      ${navigation.map((route) => (html`
        <button
          class="${checkActiveState(route.slug)}"
          onclick=${() => { goToView(route.slug); }}>
            ${route.label}
        </button>
      `))}
    </nav>
  `;

};
