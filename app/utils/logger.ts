/* tslint:disable:no-console */
const logger = {
  debug: (msg) => {
    console.info(msg);
  },

  error: (msg) => {
    console.error(msg);
  },

  info: (msg) => {
    console.info(msg);
  },

  log: (msg) => {
    console.log(msg);
  },
};

export default logger;
