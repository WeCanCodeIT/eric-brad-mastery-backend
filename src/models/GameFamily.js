const mongoose = require('mongoose');
const Game = require('./Game');


const GameFamily = mongoose.model(
    "GameFamily",
    new mongoose.Schema({
    name: {type: String, required: true},
    games: [ {type: mongoose.Schema.Types.ObjectId, ref:'Game'}]
    })
)

module.exports = GameFamily