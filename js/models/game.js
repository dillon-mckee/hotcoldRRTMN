var mongoose = require('mongoose');

var GameSchema = new mongoose.Schema ({
    gameId: {
        type: Number,
        required: true
    },
    guesses: {
        type: Array,
        required: true
    }
});
var SavedGame = mongoose.model('SavedGame', GameSchema);
module.exports = SavedGame;
