'use strict';
const logger = require('../../server/utils/logger');

module.exports = function(Language) {
  Language.translate = (language, cb) => {
    logger.debug(`source: ${language.source}, target: ${language.target}, text: ${language.text}`);
    process.nextTick(() => {
      cb(null, 'Hello');
    });
  };
};
