// import all models here
const appModel = require('./app.js');
const errorsModel = require('./errors.js');
module.exports = (app) => {

  // mount all models
  app.model(appModel);
  app.model(errorsModel);
  
};
