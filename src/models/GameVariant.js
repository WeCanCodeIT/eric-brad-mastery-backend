const mongoose = require('mongoose');

const GameVariant = mongoose.model(
    "GameVariant",
    new mongoose.Schema({
        name: {type: String, require: true},
        rules: {type: String, required: true},
        reviews: [{type: mongoose.Schema.Types.ObjectId, ref: "Review"}]
    })
)

module.exporst = GameVariant;