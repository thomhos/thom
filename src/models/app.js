const i18n = require('i18next');

module.exports = {
  namespace: 'app',
  state: {
    listening: false,
    language: 'en',
  },
  reducers: {
    listen: (data, state) => ({ listening: data }),
    language: (data, state) => ({ language: data })
  },
  effects: {
    toggleLanguage: (data, state, send, done) => {
      i18n.changeLanguage(data, () => {
        send('app:language', data, done)
      })
    }
  }
}
