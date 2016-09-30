const express       = require('express');
const path          = require('path');
const body          = require('body-parser');

const app           = express();

app.use(body.urlencoded({ extended: true }));
app.use(body.json());

app.use(express.static('./build'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/index.html'));
});

app.listen('3000', () => {
  console.log('app listening on port 3000');
});
