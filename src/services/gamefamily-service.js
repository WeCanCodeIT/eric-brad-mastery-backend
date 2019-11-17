const GameFamily = require('../models/GameFamily');
const cardGameService = require('./cardgame-service');

module.exports = {
    async addCardVariant(cardFamilyId, newGameVariant) {
        try {
            const cardGame = await GameFamily.findById(cardFamilyId);
            await cardGame.games.push(newGameVariant);
            await cardGame.save();
            return cardGame;
        } catch(error) {
            return error;
        }
    },
    async addGameFamily(gameFamily, cardGameId) {
        try {
            const newGameFamily = new GameFamily(gameFamily)
            await newGameFamily.save();
            const updatedGame = await cardGameService.addCardFamily(cardGameId, newGameFamily)
            return {updatedGame: updatedGame, newGameFamily: newGameFamily};
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