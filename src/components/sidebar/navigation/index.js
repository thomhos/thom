const html = require('choo/html');

module.exports = (state, prev, send) => {

  // Set the navigation variables
  const { navigation, activeState } = state.sidebar;

  // navigate to view
  const goToView = (href) => {
    send('sidebar:setActiveState', !activeState);
    send('location:setLocation', { location: href });
  };

  // Return the rendered HTML
  return html`
    <nav>
      ${navigation.map((route) => (html`
        <button onclick=${() => { goToView(route.slug); }}>
          ${route.label}
        </button>
      `))}
    </nav>
  `;

};
