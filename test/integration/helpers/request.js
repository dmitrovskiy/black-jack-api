'use strict';

import supertest from 'supertest-promised';
import app from '../../../src/app';

export default supertest(app);
