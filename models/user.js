const { Schema, model } = require("mongoose");
const thoughtSchema = require("./thought");

const userScema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      //match vaild email
    },
    thoughts: {
      _id: [thoughtSchema],
    },
    friends: {
      _id: [User],
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model("user", userSchema);

module.exports = User;
