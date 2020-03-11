const prodConfig = require('./webpack.config.prod.js');
const localizeConfig = require('../scripts/localizeConfig');

module.exports = localizeConfig(prodConfig);
