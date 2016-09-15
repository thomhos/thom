import config from '../config';

export default {
  namespace: 'sidebar',
  state: {
    heading: {},
    navigation: [],
    socials: [],
    languages: [],
    activeState: false,
  },
  effects: {
    fetchContent: (data, state, send, done) => {
      const { sidebar } = config;
      send('sidebar:receiveContent', sidebar, done);
    },
  },
  reducers: {
    receiveContent: (data, state) => ({
      navigation: data.navigation,
      socials: data.socials,
      languages: data.languages,
    }),
    setActiveState: (data, state) => ({
      activeState: data,
    }),
  },
};
