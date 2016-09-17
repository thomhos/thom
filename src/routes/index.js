const views = require('../views');
const config = require('../config/app.js');

/*
 *  Mount all routes and pass their name to the view function
 */
module.exports = (app) => {

  const { routes } = config;

  app.router('/', (route) => [
    route(routes.home, subview(views.home, routes.home)),
    route(routes.articles, subview(views.articles, routes.articles), [
      route('/:id', subview(views.article, routes.articles)),
    ]),
    route(routes.about, subview(views.about, routes.about))
  ]);

  /*
   *  This function will render the view inside the main composition
   *  This is done to prevent the sidebar from re-rendering on route change
   *  It checks the current route and activeRoute to update the menu
   */
  const subview = (view, route) => (state, prev, send) => {

    const { activeRoute, activeState } = state.sidebar;

    if (route !== activeRoute) {
      send('sidebar:setActiveRoute', route);

      if(window.screen && window.screen.width <= 768) {
        send('sidebar:setActiveState', !activeState);
      }
    };

    return views.main(state, prev, send, view)
  };

};
