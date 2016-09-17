const config = require('../config/app.js');

module.exports = {
  namespace: 'sidebar',
  state: {
    heading: {},
    navigation: [],
    socials: [],
    languages: [],
    activeState: false,
    activeRoute: '/'
  },
  effects: {
    fetch: (data, state, send, done) => {
      const { sidebar } = config;
      send('sidebar:receive', sidebar, done);
    },
  },
  reducers: {
    receive: (data, state) => ({
      navigation: data.navigation,
      socials: data.socials,
      languages: data.languages,
    }),
    setActiveState: (data, state) => ({
      activeState: data,
    }),
    setActiveRoute: (data, state) => ({
      activeRoute: data,
    }),
  },
};
