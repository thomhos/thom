const choo = require('choo');
const styles = require('./styles');
const models = require('./models');
const speech = require('./plugins/speech.js');
const translation = require('./plugins/translation.js');

// Define the pages we use in the router
const main = require('./pages/main.js');
const home = require('./pages/sub/home.js');

// Define the app instance
const app = choo();

// Add the speech lib
speech();

// Add the base styles
styles();

// Mount all the models
models(app);

// Mount all the routes
app.router('/', (route) => [
  route('/', main(home)),
]);

// Middleware only for dev.
app.use({
  onAction: (data, state, name, caller, createSend) => {
    console.groupCollapsed(`Action: ${caller} -> ${name}`);
    console.log(data);
    console.groupEnd();
  },
});

translation().init(() => {
  // Run forrest, run
  const tree = app.start();

  // append the app tree
  document.body.appendChild(tree);
})
