const { User } = require("../models");
const { Types } = require("mongoose");

const userData = {
  socrates: {
    username: "codingCoder",
    email: "codingCoder@email.com",
    friends: ["BackendBaxter", "Scott"],
  },
  aristotle: {
    username: "BackendBaxter",
    email: "BackendBaxter@email.com",
    friends: ["codingCoder"],
  },
  plato: {
    username: "Scott",
    email: "Scott@email.com",
    friends: ["BackendBaxter"],
  },
};

for (const username in userData) {
  userData[username]._id = Types.ObjectId();
}

for (const username in userData) {
  const user = userData[username];
  user.friends = user.friends.map((friend) => userData[friend]._id);
}

async function seedUsers() {
  return User.insertMany(Object.values(userData));
}

module.exports = { seedUsers };
