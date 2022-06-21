const { Thought } = require("../models");

const minuteMs = 60000;
const hourMs = 60 * minuteMs;
const dayMs = 24 * hourMs;
const weekMs = dayMs * 7;

class DateGenerator {
  lastDate = null;

  // default stepMs is one day
  next(stepMs = 24 * 60 * 60 * 1000) {
    if (!this.lastDate) {
      // init lastDate to one week ago
      this.lastDate = Date.now() - weekMs;
    }
    this.lastDate += stepMs;
    if (this.lastDate > Date.now()) {
      throw new Error("Next date must not exceed the current time.");
    }
    return this.lastDate;
  }
}

const dateGen = new DateGenerator();

const thoughtData = [
  {
    username: "codingCoder",
    thoughtText: "Lets code!",
    createdAt: dateGen.next(0),
    reactions: [
      {
        username: "BackendBaxter",
        reactionBody: "Life is like coding.",
        createdAt: dateGen.next(30 * minuteMs),
      },
    ],
  },
  {
    username: "Scott",
    thoughtText: "New machine and now I can code even more.",
    createdAt: dateGen.next(2 * hourMs),
    reactions: [],
  },
];

function seedThoughts() {
  return Thought.insertMany(thoughtData);
}

module.exports = { seedThoughts };
