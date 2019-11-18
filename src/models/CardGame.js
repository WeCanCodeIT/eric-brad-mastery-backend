const mongoose = require('mongoose');
const GameFamily = require("./GameFamily");

const CardGame = mongoose.model(
    "CardGame",
    new mongoose.Schema({
        players: { type: String, 
                   enum: ["single", "double", "triple", "four", "many"], 
                   unique: true,
                   required: true
                },
        family: [ {type: mongoose.Schema.Types.ObjectId, ref: 'GameFamily'}]
    })
)

module.exports = CardGame;