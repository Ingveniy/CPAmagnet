const hapi = require('hapi');
const mongoose = require('mongoose');
const { graphqlHapi, graphiqlHapi } = require('apollo-server-hapi');
const graphqlShema = require('./graphql/schema');

// TODO: Добавить автованическое подсасывание моделей как в деке
const Painting = require('./models/Painting');

const server = hapi.server({
  port: 4000,
  host: '0.0.0.0'
});

const init = async () => {
  await server.register({
    plugin: graphiqlHapi,
    options: {
      path: '/graphiql',
      graphiqlOptions: {
        endpointURL: '/graphql'
      },
      route: {
        cors: true
      }
    }
  });
  await server.register({
    plugin: graphqlHapi,
    options: {
      path: '/graphql',
      graphiqlOptions: {
        schema: graphqlShema
      },
      route: {
        cors: true
      }
    }
  });

  server.route([
    {
      method: 'GET',
      path: '/',
      handler: (req, reply) => {
        return `<h1>my modern api</h1>`;
      }
    },
    {
      method: 'GET',
      path: '/api/v1/paintings',
      handler: (req, reply) => {
        return Painting.find();
      }
    },
    {
      method: 'POST',
      path: '/api/v1/paintings',
      handler: (req, reply) => {
        const { name, url, techniques } = req.payload;
        const painting = new Painting({
          name,
          url,
          techniques
        });
        return painting.save();
      }
    }
  ]);

  try {
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
    // Connecting mongoDB
    try {
      mongoose.set('debug', true);
      mongoose.connect('mongodb://mongo/CPAmagnet', { useNewUrlParser: true });
      mongoose.connection.once('open', () => {
        console.log('connected to database');
      });
    } catch (err) {
      console.error(err, 'mongoose connect');
    }
  } catch (err) {
    console.error(err, 'server.start');
  }
};

init();
