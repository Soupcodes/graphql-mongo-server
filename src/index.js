import { ApolloServer, gql } from "apollo-server-express";
import express from "express";

const app = express();

//All info about what graphql schema, what types they return and what operations it supports
const typeDefs = gql`
  type Query {
    hello: String!
  }
`;

const resolvers = {
  Query: {
    hello: () => "hello"
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`Server ready at http:localhost:4000${server.graphqlPath}`)
);

