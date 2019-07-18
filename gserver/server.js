const { graphqlExpress, graphiqlExpress } = require('graphql-server-express');
const bodyParser = require('body-parser');
const { mySchema } = require('\./schema');
const express = require('express');
const cors = require('cors');

const PORT = 4000;
const server = express();

server.use('*', cors({ origin: 'http://localhost:8080' }));

server.use('/graphql', bodyParser.json(), graphqlExpress({
  schema: mySchema
}));

server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

server.listen(PORT, () => console.log('GraphQL server is running!'));
