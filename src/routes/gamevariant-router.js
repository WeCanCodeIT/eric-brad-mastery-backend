const express = require('express');
const router = express.Router();
const gameVariantController = require('../controllers/gamevariant-controller');


router.get("/all?", gameVariantController.getAllGameVariants);

router.get("/:id", gameVariantController.findGameVariantById);

router.post("/", gameVariantController.addNewGameVariant);



module.exports = router;