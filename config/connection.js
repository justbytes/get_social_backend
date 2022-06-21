const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/getSocial", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;

//connect("mongodb://localhost/developersApplications"
