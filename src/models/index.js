// import all models here
const sidebarModel = require('./sidebar.js');
const articlesModel = require('./articles.js');
const errorsModel = require('./errors.js');

module.exports = (app) => {

  // mount all models
  app.model(sidebarModel);
  app.model(articlesModel);
  app.model(errorsModel);

};
