const mongoose = require('mongoose');
const CardGame = require('../models/CardGame');

module.exports = {
    async addCardFamily(cardGameId, newGameFamily) {
        console.log(cardGameId, newGameFamily)
        try {
            const cardGame = await CardGame.findById(cardGameId);
            console.log(cardGame)
            await cardGame.family.push(newGameFamily);
            await cardGame.save();
            return cardGame;
        } catch(error) {
            return error;
        }
    },

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
            return err;

        }
    }
};
// * Class version -- clean up if not needed before pushing to master *
// class CardGameService {
//     static async addCardFamily (cardGameId, newGameFamily) {
//         console.log(cardGameId, newGameFamily)
//         try {
//             const cardGame = await CardGame.findById(cardGameId);
//             console.log(cardGame)
//             await cardGame.family.push(newGameFamily);
//             await cardGame.save();
//             return cardGame;
//         } catch(error) {
//             return error;
//         }
//     }
// }
// module.exports = CardGameService;