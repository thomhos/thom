const choo = require('choo');
const styles = require('./styles');
const models = require('./models');
const speech = require('./speech.js');

// Define the pages we use in the router
const main = require('./pages/main.js');
const home = require('./pages/sub/home.js');
const article = require('./pages/sub/article.js');

// Define the app instance
const app = choo();

// Add the base styles
styles();

// Mount all the models
models(app);

// Mount all the routes
app.router('/', (route) => [
  route('/', main(home)),
  route('/:article', main(article)),
]);


// Add the speech lib
speech();

// Middleware only for dev.
app.use({
  onAction: (data, state, name, caller, createSend) => {
    console.groupCollapsed(`Action: ${caller} -> ${name}`);
    console.log(data);
    console.groupEnd();
  },
});

// Run forrest, run
const tree = app.start();

// append the app tree
document.body.appendChild(tree);
document.body.classList.remove('is--loading')
