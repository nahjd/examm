const router = require("express").Router();

const personControllers = require("../controllers/personControllers");

router.get("/person", personControllers.getAllPerson);
router.get("/person/:id", personControllers.getPersonById);
router.post("/person", personControllers.postPerson);
router.delete("/person/:id", personControllers.deletePerson);

module.exports = router;
