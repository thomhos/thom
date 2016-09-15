import { main, home, projects, project, articles, article } from '../views';

export default (app) => {

  // This will render the view inside the view area outside of the navigation
  const subview = (view) => (state, prev, send) => (
    main(state, prev, send, view)
  );

  // Mount all routes
  app.router((route) => [
    route('/', subview(home)),
    route('/projects', subview(projects), [
      route('/:projectId', subview(project)),
    ]),
    route('/articles', subview(articles), [
      route('/:articleId', subview(article)),
    ]),
  ]);

};
