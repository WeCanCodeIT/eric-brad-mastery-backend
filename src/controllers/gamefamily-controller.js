const gameFamilyService = require('../services/gamefamily-service');

module.exports = {

    async addNewGameFamily(req, res) {
        try {
            const {familyName, cardGameId} = req.body;
            console.log(familyName, cardGameId);
            const newGameFamily = await gameFamilyService.addGameFamily({
                name: familyName
            }, cardGameId)
            console.log(newGameFamily);
            res.json({newGameFamily});

        } catch(error) {
            res.json({error: error});
        }
    },

    async getAllGameFamilies(req, res) {
        try {
            const gameFamilies = await gameFamilyService.findAll();
            res.json({gameFamilies})

        } catch (error) {
            res.json({error: error});
        }
    },

    async findGameFamilyById(req, res) {
        const id = (req.query.id) ? req.query.id : req.params.id
        try {
            const gameFamily = await gameFamilyService.findById(id);
            res.json({gameFamily})

        } catch (error) {
            res.json({error: error});
        }
    }

}