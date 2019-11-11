const express = require('express');
const router = express.Router();
const gameFamilyController = require('../controllers/gamefamily-controller');


router.get("/all", );

router.get("/:id", );

router.post("/", gameFamilyController.addNewGameFamily);



module.exports = router;