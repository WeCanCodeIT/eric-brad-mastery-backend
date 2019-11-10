const CardGame = require('../models/CardGame');
const gameFamilyService = require("../service/gamefamily-service");

module.exports = {
    async save(cardGame) {
        try {
            const newCardGame = new CardGame(cardGame)
            await newCardGame.save();
            return newCardGame;
        } catch (err) {
            return err;
        }

    },
    async findAll() {
        try {
            const cardGames = await CardGame.find();
            return cardGames;
        } catch (error) {
            return error
        }
    },
    async findById(id) {
        try {
            const cardGame = await CardGame.findById(id);
            return cardGame
        } catch (error) {
            return error
        }
    }, 
    async updateCardGame(cardGameId, cardGameUpdates={}){
        try {
            const updateResponse = await CardGame.findByIdAndUpdate(cardGameId, cardGameUpdates, {new: true});
            return updateResponse;
        } catch (err) {
            return err;
        }
    }, 
    async deleteCardGame(cardGameId){
        try{
            const cardGameToDelete = await CardGame.findById(cardGameId);
            const gameFamilyArray = cardGameToDelete.family;
            await gameFamilyService.removeMany(gameFamilyArray);
            await cardGameToDelete.remove();

            const response = cardGameToDelete.save();
            return response;
        }catch(err){
            console.log(err)

        }
    }
};