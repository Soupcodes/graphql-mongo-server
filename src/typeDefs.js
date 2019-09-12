import { gql } from "apollo-server-express";

//All info about what graphql schema, what types they return and what operations it supports
export const typeDefs = gql`
  type Query {
    hello: String!
  }
  type Cat {
    id: ID!
    name: String!
  }

  type Mutation {
    createCat(name: String!): Cat!
  }
`;
