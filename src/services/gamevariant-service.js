const GameVariant = require('../models/GameVariant');
const gameFamilyService = require("../services/gamefamily-service");


module.exports = {
    async save(gameVariant) {
        try {
            const newGameVariant = new GameVariant(gameVariant)
            await newGameVariant.save();
            return newGameVariant;
        } catch (err) {
            return err;
        }

    },
    async findAll() {
        try {
            const gameVariants = await GameVariant.find();
            return gameVariants;
        } catch (error) {
            return error
        }
    },
    async findById(id) {
        try {
            const gameVariant = await GameVariant.findById(id);
            return gameVariant
        } catch (error) {
            return error
        }
    }, 
    async updateCardGame(gameVariantId, gameVariantUpdates={}){
        try {
            const updateResponse = await GameVariant.findByIdAndUpdate(gameVariantId, gameVariantUpdates, {new: true});
            return updateResponse;
        } catch (err) {
            return err;
        }
    }, 
    async deleteGameVariant(gameVariantId){
        /*  Needs Completed  */
        // try{
        //     const gameVariantToDelete = await GameVariant.findById(gameVariantId);
        //     const gameFamilyArray = gameVariantToDelete.gameVariant;
        //     await gameFamilyService.removeMany(gameFamilyArray);
        //     await gameVariantToDelete.remove();

        //     const response = gameVariantToDelete.save();
        //     return response;
        // }catch(err){
        //     console.log(err)

        // }
    }
};