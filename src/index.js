'use strict';

import pkginfo from '../package';
import app from './app';

const port = app.get('port');
const server = app.listen(port);

server.on('listening', () =>
  console.log(`${pkginfo.name} application started on ${app.get('host')}:${port}`)
);
