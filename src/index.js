import { ApolloServer } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";


const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  server.applyMiddleware({ app });

  //suffix 'work' defines the name of the schema that is created in MongoDB
  await mongoose.connect("mongodb://localhost:27017/work", {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });

  app.listen({ port: 4000 }, () =>
    console.log(`Server ready at http:localhost:4000${server.graphqlPath}`)
  );
};

startServer();
