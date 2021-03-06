const choo = require('choo');
const models = require('./models');

// Load base styles
const styles = require('./styles')();

// Load translation plugins
const translation = require('./plugins/translation.js')();

// Define the pages we use in the router
const main = require('./pages/main.js');
const home = require('./pages/sub/home.js');
const work = require('./pages/sub/work.js');

// Define the app instance
const app = choo();

// Mount all the models
models(app);

// Mount all the routes
app.router('/', (route) => [
  route('/', main(home)),
  route('/work', main(work)),
]);

// Middleware only for dev.
// app.use({
//   onAction: (data, state, name, caller, createSend) => {
//     console.groupCollapsed(`Action: ${caller} -> ${name}`);
//     console.log(data);
//     console.groupEnd();
//   },
// });

translation.init(() => {
  // Load translations and start app on callback.
  const tree = app.start();
  document.body.appendChild(tree);
})
