import html from 'choo/html';

export default (state, prev, send) => {
  // Sidebar menu state
  const { activeState } = state.sidebar;

  const setActiveState = (e) => {
    e.preventDefault();
    send('sidebar:setActiveState', !activeState);
  };

  // Return the rendered HTML
  return html`
    <header class="col-s-12 header-mobile">
      <span>Thom Hos</span>
      <span>JavaScript Developer</span>

      <button
        onclick=${setActiveState}
        data-activated="${activeState}">
        ToggleMenu
      </button>
    </section>
  `;
};
