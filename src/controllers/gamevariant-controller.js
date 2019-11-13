const gameVariantService = require('../services/gamevariant-service');

module.exports = {

    async addNewGameVariant(req, res) {
        try {
            const newGameVariant = await gameVariantService.save({
                name: req.body.name,
                rules: req.body.rules
            });
            
        } catch(error) {
            res.json({error});
        }
    },
    async getAllGameVariants(req, res) {
        try {
            const gameVariants = await gameVariantService.findAll();
            res.json({gameVariants});
        } catch (error) {
            res.json({error});
        }
    },

    async findGameVariantById(req, res) {
        const id = (req.body.id) ? req.body.id : req.params.id
        try {
            const gameVariant = await gameVariantService.findById(id);
            res.json({gameVariant})
        } catch (error) {
            res.json({error});
        }
    }

}