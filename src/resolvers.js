import { Cat } from "./models/Cat";

export const resolvers = {
  Query: {
    hello: () => "hello",
    cats: () => Cat.find()
  },
  Mutation: {
    //name is destructured from 'args'
    createCat: async (_parent, { name }) => {
      const kitty = new Cat({ name });
      await kitty.save();
      return kitty;
    }
  }
};
