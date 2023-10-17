import swaggerUI from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

import { TEAM_URL, PORT } from './constants.js';

const options = {
  definition: {
    openapi: '3.1.0',
    info: {
      title: 'API ecommerce-24-7',
      version: '0.1.0',
      description: 'Esta es una API para un ecommerce simple',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
      contact: {
        name: 'LosSalierisDeBetancud',
        url: TEAM_URL,
      },
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
        description: 'Development server',
      },
    ],
    host: `http://localhost:${PORT}`,
    securityDefinitions: {
      Bearer: {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header',
      },
    },
    security: [
      {
        Bearer: []
      }
    ],
  },
  apis: ['./doc/*'],
};

const specs = swaggerJsdoc(options);

export const loadSwagger = (app) => {
  app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs, { explorer: true }));
};
