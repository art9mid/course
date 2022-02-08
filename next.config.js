const path = require('path');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const { i18n } = require('./next-i18next.config');
//
// const nextConfiguration = {
//   target: 'serverless',
//   i18n,
// };

module.exports = {
  i18n
}
