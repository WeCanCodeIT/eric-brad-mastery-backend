const CardGame = require('../models/CardGame');
const gameFamilyService = require("../service/gamefamily-service");

module.exports = {
    async save(artist) {
        try {
            const newCardGame = new CardGame(artist)
            await newCardGame.save();
            return newCardGame;
        } catch (err) {
            return err;
        }

    },
    async findAll() {
        try {
            const artists = await CardGame.find();
            return artists
        } catch (error) {
            return error
        }
    },
    async findById(id) {
        try {
            const artist = await CardGame.findById(id);
            return artist
        } catch (error) {
            return error
        }
    }, 
    async updateArtist(artistId, artistUpdates={}){
        try {
            const updateArtist = await CardGame.findByIdAndUpdate(artistId, artistUpdates, {new: true});
            return updateArtist;
        } catch (err) {
            return err;
        }
    }, 
    async deleteArtist(artistId){
        try{
            const artistToDelete = await CardGame.findById(artistId);
            // await artistToDelete.songs.pullAll();
            const albumArray = artistToDelete.albums;
            await gameFamilyService.removeMany(albumArray);
            await artistToDelete.remove();

            const response = artistToDelete.save();
            return response;
            // const artistToDelete = await Artist.findByIdAndRemove(artistId);
            // return artistToDelete;
        }catch(err){
            console.log(err)

        }
    }
};