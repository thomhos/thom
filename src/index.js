const choo = require('choo');
const sf = require('sheetify');
const models = require('./models');
const routes = require('./routes');

// Define the app instance
const app = choo();

// Add the base styles
sf('./styles/normalize.css', { global: true })

// Mount all the models
models(app);

// Mount all the routes
routes(app);

app.use({
  onAction: (data, state, name, caller, createSend) => {
    console.groupCollapsed(`Action: ${caller} -> ${name}`);
    console.log(data);
    console.log(state);
    console.groupEnd();
  },
});

// Run forrest, run
const tree = app.start();

// append the app tree
document.body.appendChild(tree);
