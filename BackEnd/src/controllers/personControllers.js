const Person = require("./../models/personModel");

const getAllPerson = async (req, res) => {
  let found = await Person.find({});
  res.send(found);
};
const getPersonById = async (req, res) => {
  console.log(req.params.id);
  const found = await Person.findOne({ _id: req.params.id });
  console.log(found);
  res.send(found);
};

const deletePerson = async (req, res) => {
  const deleted = await Person.findByIdAndDelete({ _id: req.params.id });
};

const postPerson = async (req, res) => {
  const newArtist = new Person(req.body);
  newArtist.save();
};

module.exports = {
  getAllPerson,
  getPersonById,
  deletePerson,
  postPerson,
};
