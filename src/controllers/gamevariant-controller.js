const gameVariantService = require('../services/gamevariant-service');

module.exports = {

    async addNewGameVariant(req, res) {
        try {
            const newGameVariant = await gameVariantService.save({
                name: req.body.name,
                rules: req.body.rules
            })
        } catch(error) {
            res.json({error});
        }
    }

}