const hapi = require('hapi');
const mongoose = require('mongoose');
const graphqlSchema = require('./graphql/schema');
const { ApolloServer } = require('apollo-server-hapi');
const executableSchema = makeExecutableSchema({
    typeDefs: [graphqlSchema],
    resolvers: createResolvers(),
  });


const server = new ApolloServer({
    schema:executableSchema
  });

  
// TODO: Добавить автованическое подсасывание моделей как в деке
const Painting = require('./models/Painting');

// TODO: Добавить подтягивание из .env
const host = '0.0.0.0';
const port = 4000;

const server = hapi.server({
  port,
  host
});

const init = async () => {
  try {

    server.route([
      {
        method: 'GET',
        path: '/api/v1/paintings',
        config: {
          description: 'Get all the paintings',
          tags: ['api', 'v1', 'painting']
        },
        handler: (req, reply) => {
          return Painting.find();
        }
      },
      {
        method: 'POST',
        path: '/api/v1/paintings',
        config: {
          description: 'Get a specific painting by ID.',
          tags: ['api', 'v1', 'painting']
        },
        handler: (req, reply) => {
          const { name, url, technique } = req.payload;
          const painting = new Painting({
            name,
            url,
            technique
          });

          return painting.save();
        }
      }
    ]);

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
