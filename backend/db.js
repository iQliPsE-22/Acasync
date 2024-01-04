const mongoose = require("mongoose");

async function connectToDatabase() {
  await mongoose.connect("mongodb://127.0.0.1:27017/admin", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Database connected");
}

module.exports = connectToDatabase;
