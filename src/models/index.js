// import all models here
const appModel = require('./app.js');
const errorsModel = require('./errors.js');
const articlesModel = require('./articles.js');
const articleModel = require('./article.js');

module.exports = (app) => {

  // mount all models
  app.model(appModel);
  app.model(articlesModel);
  app.model(articleModel);

};
