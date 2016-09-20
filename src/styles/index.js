const sf = require('sheetify');

module.exports = () => {
  sf('./normalize.scss', { global: true })
  sf('./font-face.scss', { global: true })
  sf('./typography.scss', { global: true })
  sf('./html.scss', { global: true })
  sf('./animations.scss', { global: true })
};
