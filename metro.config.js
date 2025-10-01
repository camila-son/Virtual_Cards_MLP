const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Fix Babel runtime resolution issues
config.resolver.alias = {
  '@babel/runtime/helpers/interopRequireDefault': '@babel/runtime/helpers/interopRequireDefault.js',
};

module.exports = config;