const i18n = require('i18next');
const translation = require('../plugins/translation.js');

module.exports = {
  namespace: 'app',
  state: {
    loading: true,
    translations: false,
    listening: false,
    language: 'en',
  },
  reducers: {
    loading: (data, state) => ({ loading: data }),
    listen: (data, state) => ({ listening: data }),
    setLanguage: (data, state) => ({ language: data }),
    setTranslations: (data, state) => ({ translations: data })
  },
  effects: {
    loadTranslations: (data, state, send, done) => {
      translation().init(() => {
        send('app:setTranslations', !state.translations, done);
      })
    },
    toggleLanguage: (data, state, send, done) => {
      i18n.changeLanguage(data, () => {
        send('app:setLanguage', data, done)
      })
    }
  }
}
