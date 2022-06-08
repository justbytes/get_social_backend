const { Schema, model } = require("mongoose");
//const reactionSchema = require("./reaction");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      // set default to time stamp
      // user greater method for timestamp on query
    },
    username: {
      type: String,

      required: true,
    },
    // reactions: {
    //   replies: [reactionSchema],
    // },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
