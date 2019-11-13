const express = require('express');
const router = express.Router();
const gameFamilyController = require('../controllers/gamefamily-controller');


router.get("/all", gameFamilyController.getAllGameFamilies);

// Pass 'id' as route param or in body.id
router.get("/:id?", gameFamilyController.findGameFamilyById);

router.post("/", gameFamilyController.addNewGameFamily);



module.exports = router;