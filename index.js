const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const { typeDefs, resolvers } = require('./types/schema');

const myGraphQLSchema = makeExecutableSchema({ typeDefs, resolvers });

const PORT = 3000;

const app = express();

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({ schema: myGraphQLSchema })
);
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(PORT);
