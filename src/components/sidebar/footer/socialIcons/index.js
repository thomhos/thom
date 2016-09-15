const html = require('choo/html');

module.exports = (state, prev, send) => {

  // Set the social variables
  const { socials } = state.sidebar;

  // Return the rendered HTML
  return html`
    <nav>
      ${socials.map((social) => (html`
        <a href=${social.url}>
          svg icon ${social.icon}
        </a>
      `))}
    </nav>
  `;

};
