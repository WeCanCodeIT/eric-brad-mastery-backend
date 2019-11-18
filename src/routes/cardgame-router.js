const express = require('express');
const router = express.Router();
const cardGameController = require('../controllers/cardgame-controller');


router.get("/all?", cardGameController.getAllCardGames);

router.get("/:id", cardGameController.findCardGameById);

router.post("/", cardGameController.addNewCardGame);

// router.delete("/", cardGameController.removeOneCardGame);

module.exports = router;