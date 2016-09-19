const config = require('../config/app.js');
const http = require('choo/http');

module.exports = {
  namespace: 'article',
  state: {
    id: null,
    date: null,
    title: null,
    intro: null,
    img: null,
    content: null
  },
  reducers: {
    receive: (data, state) => ( data )
  },
  effects: {
    fetch: (data, state, send, done) => request(config.api.articles, send, done),
  },
};
