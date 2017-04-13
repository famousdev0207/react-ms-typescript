'use strict';

const chalk = require('chalk');

/**
 * Logger middleware, you can customize it to make messages more personal
 */
var logger = {

  debug: (msg) => {
    console.debug(chalk.yellow(msg));
  },

  error: (msg) => {
    console.error(chalk.red(msg));
  },

  info: (msg) => {
    console.info(chalk.blue(msg));
  },

  log: (msg) => {
    console.log(msg);
  },
};

module.exports = {
  logger,
};
