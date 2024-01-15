const mongoose = require("mongoose");

const PersonSchema = mongoose.Schema(
  {
    id: String,
    name: String,
    about: String,
    image: String,
  },
  { collection: "person", timestamps: true }
);

const Person = mongoose.model("person", PersonSchema);

module.exports = Person;
