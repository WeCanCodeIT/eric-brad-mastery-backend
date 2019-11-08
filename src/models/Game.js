const mongoose = require('mongoose');

const Game = mongoose.model(
    "Game",
    new mongoose.Schema({
        name: {type: String, require: true},
        rules: {type: String, required: true},
        reviews: [{type: mongoose.Schema.Types.ObjectId, ref: "Review"}]
    })
)

module.exporst = Game;