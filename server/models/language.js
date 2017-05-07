'use strict';

module.exports = function(Language) {
  Language.translate = (language, cb) => {
    console.log(`source: ${language.source}, target: ${language.target}, text: ${language.text}`);
    process.nextTick(() => {
      cb('Hello');
    });
  };
};
