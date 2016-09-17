const choo = require('choo');
const sf = require('sheetify');
const models = require('./models');
const routes = require('./routes');

// Define the app instance
const app = choo();

// Add the base styles
sf('./styles/normalize.scss', { global: true })
sf('./styles/typography.scss', { global: true })
sf('./styles/html.scss', { global: true })

// Mount all the models
models(app);

// Mount all the routes
routes(app);

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
