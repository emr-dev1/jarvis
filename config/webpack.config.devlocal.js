const devConfig = require('./webpack.config.dev.js');
const localizeConfig = require('../scripts/localizeConfig');

module.exports = localizeConfig(devConfig);
