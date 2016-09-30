const i18n = require('i18next');
const XHR = require('i18next-xhr-backend');

module.exports = () => {

  const i18nOptions = {
    debug: false,
    whitelist: ['en', 'kr'],
    fallbackLng: 'en',
    lng: 'en',
    load: 'all',
    backend: {
      loadPath: '/translations/{{lng}}.json'
    }
  }

  const tr = {
    init: (cb) => {
      i18n.use(XHR).init(i18nOptions, cb);
    },
    changeLanguage: i18n.changeLanguage,
  }

  return tr;
}
