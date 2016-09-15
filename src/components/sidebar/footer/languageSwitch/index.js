import html from 'choo/html';

export default (state, prev, send) => {

  // Set the social variables
  const { languages } = state.sidebar;

  // Return the rendered HTML
  return html`
    <nav>
      ${languages.map((language) => (html`
        <button>${language.label}</button>
      `))}
    </nav>
  `;

};
