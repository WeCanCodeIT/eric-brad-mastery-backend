const mongoose = require('mongoose');
const GameVariant = require('./GameVariant');


const GameFamily = mongoose.model(
    "GameFamily",
    new mongoose.Schema({
    name: {type: String, required: true},
    games: [ {type: mongoose.Schema.Types.ObjectId, ref:'GameVariant'}]
    })
)

module.exports = GameFamily