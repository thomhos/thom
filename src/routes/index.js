const views = require('../views');

module.exports = (app) => {

  // This will render the view inside the view area outside of the navigation
  const subview = (view) => (state, prev, send) => (
    views.main(state, prev, send, view)
  );

  // Mount all routes
  app.router((route) => [
    route('/', subview(views.home)),
    route('/projects', subview(views.projects), [
      route('/:projectId', subview(views.project)),
    ]),
    route('/articles', subview(views.articles), [
      route('/:articleId', subview(views.article)),
    ]),
  ]);

};
