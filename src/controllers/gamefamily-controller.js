const gameFamilyService = require('../services/gamefamily-service');

module.exports = {

    async addNewGameFamily(req, res) {
        try {
            console.log(req.body.cardGameId);
            const newGameFamily = await gameFamilyService.addGameFamily({
                name: req.body.name
            }, req.body.cardGameId)
            res.json({newGameFamily});

        } catch(error) {
            res.json({error});
        }
    }

}