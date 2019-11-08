const GameFamily = require('../models/GameFamily');
const gameVariantService = require("../service/game-service");

module.exports = {
    async save(gameFamily) {
        try {
            const newGameFamily = new GameFamily(gameFamily)
            await newGameFamily.save();
            return newGameFamily;
        } catch (err) {
            return err;
        }

    },
    async findAll() {
        try {
            const gameFamilies = await GameFamily.find();
            return gameFamilies;
        } catch (error) {
            return error
        }
    },
    async findById(id) {
        try {
            const gameFamily = await GameFamily.findById(id);
            return gameFamily
        } catch (error) {
            return error
        }
    }, 
    async updateCardGame(gameFamilyId, gameFamilyUpdates={}){
        try {
            const updateResponse = await GameFamily.findByIdAndUpdate(gameFamilyId, gameFamilyUpdates, {new: true});
            return updateResponse;
        } catch (err) {
            return err;
        }
    }
};