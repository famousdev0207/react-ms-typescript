'use strict';

module.exports = function(Language) {
  Language.translate = (id, cb) => {
    process.nextTick(() => {
      cb('Hello');
    });
  };
};
