const cardGameService = require('../services/cardgame-service');
const gameVariantService = require("../services/gamevariant-service");

module.exports = {

    async addNewCardGame(req, res) {
        try {
            const newCardGame = await cardGameService.save({players: req.body.players})
            res.json({newCardGame});
        } catch (error) {
            res.json({error});
        }
    },

    async getAllCardGames(req, res) {
        try {
            const cardGames = await cardGameService.findAll();
            res.json({cardGames});
        } catch (error) {
            res.json({error});
        }
    },

    async findCardGameById(req, res) {
        try {
            const cardGame = await cardGameService.findById(req.params.id);
            res.json({cardGame})
        } catch (error) {
            res.json({error});
        }
    }

}