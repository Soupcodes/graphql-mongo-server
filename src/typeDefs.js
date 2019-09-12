import { gql } from "apollo-server-express";

//All info about what graphql schema, what types they return and what operations it supports
//Define what queries can be used and what the expected type output is
//the query type 'cats' seems to generate a collection which stores all the cat documents created by the createCat mutation
//Define mutations can be methods for posting into the db (createCat is essentially a POST method)
export const typeDefs = gql`
  type Query {
    hello: String!
    cats: [Cat!]!
  }

  type Cat {
    id: ID!
    name: String!
  }

  type Mutation {
    createCat(name: String!): Cat!
  }
`;
