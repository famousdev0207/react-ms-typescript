'use strict';

module.exports = function(Person) {
  Person.find = (id, cb) => {
    process.nextTick(() => {
      cb({
        'firstname': 'ms',
      });
    });
  };
};
