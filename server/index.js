'use strict';

const argv = require('minimist')(process.argv.slice(2));
const chalk = require('chalk');
const ip = require('ip');
const isDev = process.env.NODE_ENV !== 'production';
const loopback = require('loopback');
const boot = require('loopback-boot');
const ngrok = (isDev && process.env.ENABLE_TUNNEL) ? require('ngrok') : false;
const resolve = require('path').resolve;
const logger = require('../common/utils/logging').logger;
const setup = require('./middlewares/frontendMiddleware');

const app = module.exports = loopback();
const port = argv.port || process.env.PORT || 3000;
const openTunnel = function(port) {
  return new Promise((resolve, reject) => {
    if (ngrok) {
      ngrok.connect(port, (innerErr, url) => {
        if (innerErr) {
          reject(innerErr);
          return logger.error(innerErr);
        }
        resolve(url);
      });
    } else {
      resolve();
    }
  });
};

app.start = function() {
  // start the web server
  return app.listen(port, (err) => {
    if (err) {
      return logger.error(err.message);
    }

    openTunnel(port).then((url) => {
      const divider = chalk.gray('\n-----------------------------------');
      app.emit('started');

      logger.log(`${chalk.bold('Access URLs:')}${divider}`);
      logger.log(`Localhost: ${chalk.magenta(`http://localhost:${port}`)}`);
      logger.log(`      LAN: ${chalk.magenta(`http://${ip.address()}:${port}`)}`);

      if (app.get('loopback-component-explorer')) {
        var explorerPath = app.get('loopback-component-explorer').mountPath;
        logger.log(` REST API: ${chalk.magenta(`http://${ip.address()}${explorerPath}`)}`);
      }

      logger.log((url ? `\n    Proxy: ${chalk.magenta(url)}` : '') + `${divider}`);
      logger.log(`${chalk.blue(`Press ${chalk.italic('CTRL-C')} to stop`)}`);
    }).catch((innerErr) => {
      logger.error(innerErr);
    });
  });
};

setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
