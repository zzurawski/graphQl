const { AuthenticationError } = require("apollo-server-express");
const { User, Book } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("savedBooks");
      }
      throw new AuthenticationError("you must be logged in");
    },
  },
  Mutation: {
    createUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      if (!user) {
        throw new AuthenticationError("Error while creating user");
      }
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {throw new AuthenticationError("please enter a different email!")}
      
      const passwordOK = await user.isCorrectPassword(password);

      if (!passwordOK) {throw new AuthenticationError("Wrong password")}

      const token = signToken(user);
      return { token, user };
    },
    saveBook: async (parent, { input }, context) => {
      console.log("Saved book");
      if (context.user) {
        const userInfo = await User.findByIdAndUpdate(
          context.user._id,
          { $push: { savedBooks: input } },
          { new: true }
        ).populate("savedBooks");
        return userInfo;
      }
      throw new AuthenticationError("Need to be logged in to save!");
    },
    deleteBook: async (parent, { bookId }, context) => {
      if (context.user) {
        const userInfo = await User.findByIdAndUpdate(
          context.user._id,
          { $pull: { savedBooks: { bookId } } },
          { new: true }
        );
        return userInfo;
      }
      throw new AuthenticationError("Need to be logged in to delete!");
    },
  },
};

module.exports = resolvers;