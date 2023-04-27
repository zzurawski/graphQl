const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
const {ApolloServer} = require('apollo-server-express');
const { authMiddleware } = require('./utils/auth');

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
})
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {res.sendFile(path.join(__dirname, '../client/build/index.html'))})

app.use(routes);

const serverInit = async (typeDefs, resolvers) => {
  await apolloServer.start();
  apolloServer.applyMiddleware({app});
  db.once('open', () => {
    app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
                          console.log(`GraphQl at http://localhost:${PORT}${server.graphqlPath}`);
  });

};

serverInit(typeDefs, resolvers);

