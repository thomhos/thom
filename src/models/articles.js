const config = require('../config/app.js');
const http = require('choo/http');

module.exports = {
  namespace: 'articles',
  state: {
    filter: '',
    counter: 0,
    articles: []
  },
  reducers: {
    receive: (data, state) => ({ articles: data, counter: data.length })
  },
  effects: {
    fetch: (data, state, send, done) => request(config.api.articles, send, done),
  },
};


function request (uri, send, done, state) {
  const articles = [
    {
      img: "http://ipsumimage.appspot.com/250x250",
      title: "Lorem ipsum title 1",
      date: "24 january 2016",
      excerpt: "Lorem ipsum dolor sit amet with some body text to show a short description",
      type: "article",
      id: "123"
    },
    {
      img: "http://ipsumimage.appspot.com/250x250",
      title: "Lorem ipsum title 2",
      date: "24 january 2016",
      excerpt: "Lorem ipsum dolor sit amet with some body text to show a short description",
      type: "project",
      id: "123"
    },
    {
      img: "http://ipsumimage.appspot.com/250x250",
      title: "Lorem ipsum title 3",
      date: "24 january 2016",
      excerpt: "Lorem ipsum dolor sit amet with some body text to show a short description",
      type: "article",
      id: "123"
    }
  ];
  send('articles:receive', articles, done)

  // http(uri, { json: true }, function (err, res, body) {
  //   if (err) return send('app:error', { payload: 'HTTP error' })
  //   if (res.statusCode !== 200) {
  //     const message = (body && body.message)
  //       ? body.message
  //       : 'unknown server error'
  //     return send('app:error', { payload: message })
  //   }
  //   if (!body) {
  //     return send('app:error', { payload: 'fatal: no body received' })
  //   }
  //   send('api:set', { payload: body.message || body.title })
  // })
}
