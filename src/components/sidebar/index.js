import html from 'choo/html';
import headerComponent from './header';
import navigationComponent from './navigation';
import footerComponent from './footer';

export default (state, prev, send) => {
  // Define sidebar content.
  const { navigation, socials, languages } = state.sidebar;

  // if not present, get content
  if (!navigation.length || !socials.length || !languages.length) {
    send('sidebar:fetchContent');
  }

  // Return the rendered HTML
  return html`
    <section
      class="col-s-12 col-m-12 col-l-4 col-xl-3 sidebar"
      data-activated="${state.sidebar.activeState}">
        <div class="sidebar__content">
          ${headerComponent(state, prev, send)}
          ${navigationComponent(state, prev, send)}
          ${footerComponent(state, prev, send)}
        </div>
    </section>
  `;
};
