// import all models here
const sidebarModel = require('./sidebar.js');

module.exports = (app) => {

  // mount all models
  app.model(sidebarModel);

};
