'use strict';

require('babel-polyfill');
const pkginfo = require('../package');
const app = require('./app');
const port = app.get('port');
const server = app.listen(port);

server.on('listening', () =>
  console.log(`${pkginfo.name} application started on ${app.get('host')}:${port}`)
);
